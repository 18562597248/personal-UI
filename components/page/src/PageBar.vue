<template>
    <div class="row DTTTFooter" :class="DTTTFooterCls">
        <div class="dataTables_paginate">
            <ul class="pagination hd-DTTFooter-dataTables_paginate-ul">
                <li :class="{ 'disabled': cur === 1}">
                    <a @click="previous()">
                        <i class="fa fa-chevron-left"></i>
                    </a>
                </li>
                <li  :class="{ active: cur === 1 }"
                     v-if="totalPage > 0">
                    <a @click="firstPage()">1</a>
                </li>
                <li v-if="showPrevious"  @mouseenter="quickPrevious  = 'fa fa-angle-double-left'"
                    @mouseleave="quickPrevious  = 'fa fa-ellipsis-h'">
                    <a  @click="previous_five()">
                        <i  :class="[quickPrevious]"></i>
                    </a>
                </li>
                <li v-for="per in pages" :class="{ 'active': cur === per }">
                    <a @click="page(per)">{{ per }}</a>
                </li>
                <li v-if="showNext"  @mouseenter="quickNext = 'fa fa-angle-double-right'"
                    @mouseleave="quickNext = 'fa fa-ellipsis-h'">
                    <a  @click="next_five()">
                        <i  :class="[quickNext]"></i>
                    </a>
                </li>
                <li :class="{ 'active': cur === totalPage}"  v-if="totalPage > 1">
                    <a @click="lastPage()">{{totalPage}}</a>
                </li>
                <li :class="{ 'disabled': cur === totalPage}">
                    <a @click="next()">
                        <i class="fa fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
            <div class="dataTables_paginate hd-DTTFooter-dataTables_paginate-div-hasinput" v-if="!noJump">
                第 <input type="text"  v-model="input" class="hd-DTTFooter-dataTables_paginate-input"/> 页
                <button class="btn btn-default hd-DTTFooter-dataTables_paginate-button" type="button" @click="jump">前往</button>
            </div>
        </div>
        <div class="dataTables_paginate" v-if="!noMenu">
            <select @change="menuChange()" v-model="limit" class="hd-DTTFooter-dataTables_paginate-select">
                <option v-for="item in menu" :value="item"> {{item}}条/ 每页</option>
            </select> 共 {{totalSize}} 条
        </div>
    </div>
</template>
<script>
    /**
     * @fileOverview 分页组件
     * @author 刘聪
     * @date 2016.11.07 10:00:00
     *
     * @edit 高春明
     * @date 2016.11.10 14:00:00
     * @description 增加注释，删除原data中事件监听enum对象eventList的getData事件，修改data中事件监听enum对象eventList名称为eventOn，增加事件发布enum对象eventEmit
     */

    /**
     * 验证是否是正整数数组、字符串数组
     * @import isIntegerArray，isStringArray
     */
    import { isIntegerArray, isStringArray } from 'src/utils/validator'
    import  handleUnsuccessfulAjax  from 'src/utils/handleUnsuccessfulAjax'


    /**
     * @export default 导出本组件
     */
    export default{
        /**
         * @props page-params 组件参数
         * 必选参数:
         *     url {String} 业务流
         *     param {JSON} 查询参数
         * 可选参数：
         *     limit {Number} 每页显示记录数
         *     perSize {Number} 显示分页数
         *     menu {Array[Number]} 每页显示记录数下拉配置
         *     pageParamName {Array[String]} 后台所需分页参数【start，limit】
         */
        name:'hd-page-bar',
        props: {
            url: {
                type: String,
                default: ''
            },
            param: {
                type: Object
            },
            pageParam: {
                type: Object
            },
            action: {
                type: String,
                default: ''
            },
            perSize: {
                type: Number,
                default: 7
            },

            pageLimit: {
                type: Number,
                default: 20
            },
            fixed:{
                type: Boolean,
                default:true
            },
            menu: {
                validator (value) {
                    if(isIntegerArray(value)){    // value 必须是正整数数组
                        return true
                    }else {
                        return false
                    }
                },
                default(){
                    return [10, 20, 50,100]
                }
            },
            pageParamName: {
                validator (value) {
                    if(isStringArray(value)){    // value 必须是字符串数组
                        return true
                    }else {
                        return false
                    }
                },
                default(){
                    return ['start','limit']
                }
            },
            noJump:{
                type: Boolean,
                default: false
            },
            noMenu:{
                type: Boolean,
                default: false
            }
        },
        /**
         * @data 数据
         */
        data () {
            return {
                /**
                 * cur {Number} 初始页
                 * @default 1
                 */
                cur: 1,
                /**
                 * limit {Number}  每页显示数量 默认每页显示20条
                 * @default 10
                 */
                limit: 20,
                /**
                 * start {Number} 后台分页从start条开始
                 * @default 0
                 */
                start: 0,
                /**
                 * end {Number} 后台分页到end条结束
                 * @default 0
                 */
                end: 0,
                /**
                 * totalPage {Number} 查询记录总页数
                 * @default 0
                 */
                totalPage: 0,
                /**
                 * totalSize {Number} 查询记录总条数
                 * @default 0
                 */
                totalSize: 0,
                input:'',
                /**
                 * tableList {[Object]} 分页请求返回的数据
                 * @default []
                 */
                tableList: [],
                quickNext: 'fa fa-ellipsis-h',
                quickPrevious: 'fa fa-ellipsis-h',
                showPrevious: false,
                showNext: false
            }
        },
        /**
         * 根据默认条件获取数据
         * 监听previous、next事件
         * @event mounted
         */
      /*  mounted() {
            this.getData(this.cur,this.limit)
        },*/
        /**
         * @methods
         */
        methods: {
            /**
             * 定位到第一页
             */
            firstPage: function () {
                if (this.cur > 1) {
                    this.cur = 1;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            /**
             * 定位到最后一页
             */
            lastPage: function () {
                if (this.cur < this.totalPage) {
                    this.cur = this.totalPage;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            /**
             * 上一页
             */
            previous: function () {
                if (this.cur > 1) {
                    this.cur--;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            /**
             * 下一页
             */
            next: function () {
                if (this.cur < this.totalPage) {
                    this.cur++;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            /**
             * 前进5页
             */
            previous_five: function () {
                if (this.cur > 1) {
                    this.cur=this.cur-5;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            /**
             * 后退5页
             */
            next_five: function () {
                if (this.cur < this.totalPage) {
                    if(this.cur+5>this.totalPage){
                        this.cur=this.totalPage
                        this.currentPage()
                        this.getData(this.cur,this.limit)
                    }else{
                        this.cur=this.cur+5;
                        this.currentPage()
                        this.getData(this.cur,this.limit)
                    }
                }
            },
            /**
             * 定位到具体某一页
             * @param {Number} jump
             */
            jump: function () {
                if(this.input==='') return
                if (Math.floor(this.input) != this.cur) {
                    this.cur = Math.floor(this.input);
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
                if(Math.floor(this.input) > this.totalPage){
                    this.cur = this.totalPage;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            /**
             * 定位到具体某一页
             * @param {Number} page
             */
            page: function (page) {
                if (page != this.cur) {
                    this.cur = page;
                    this.currentPage()
                    this.getData(this.cur,this.limit)
                }
            },
            currentPage(){
                this.$emit('currentpage', this.cur,this.limit)
            },
            /**
             * 刷新显示记录数
             */
            refresh: function () {
                this.start = (this.cur - 1) * this.limit+1;
                if (this.totalSize >= this.limit * this.cur) {
                    this.end = this.limit * this.cur
                } else {
                    this.end = this.totalSize
                }
            },
            /**
             * 根据分页请求查询数据，成功后发布getData事件
             */
            getData (cur,limit) {
                let _this = this;
                var cur=cur
                var limit=limit
                this.start = (cur - 1) * limit;
                this.param[this.pageParamName[0]] = this.start;
                this.param[this.pageParamName[1]] = limit;
                $.ajax({
                    url:  _this.url,
                    type: 'post',
                    cache: false,
                    dataType: 'json',
                    data: _this.param,
                    traditional: true,
                    success: function (data) {
                        var json=data;
                        var success = json.success;
                        var meg = json.meg;
                        if (success) {
                            _this.tableList = json.items;
                            _this.totalSize = json.totalCount;// 返回总数
                            _this.totalPage = Math.ceil(_this.totalSize / limit);
                            _this.refresh();
                            _this.action_dispatch(_this.action, _this.tableList);
                        } else {
                            handleUnsuccessfulAjax(data)
                        }
                    },
                    error:function (xhr,status,error) {
                        alert("网络错误")
                    }
                });
            },
            /**
             * 发布事件
             * @param {String} name 事件名
             * @param {*} data 根据分页请求返回的数据
             */
            action_dispatch(name,data){
                this.$store.dispatch(name,data)
            },
            /**
             * 改变下拉框每页显示条数
             */
            menuChange: function () {
                this.cur = 1;
                this.currentPage()
                this.getData(this.cur,this.limit)
            },
            /**
             * 具体某页显示条数
             * @param {Number} curPage 当前页
             * @param {Number} totalPage 总共多少页
             * @param {Number} pageNum pagebar中展示的页数，总页数大于pageNum时，其它页数不显示
             */
            getPage: function (curPage, totalPage,pageNum) {
                const currentPage = Math.floor(curPage);
                const pageCount = Math.floor(totalPage);
                let showPrevious = false;
                let showNext = false;
                if (pageCount > pageNum) {
                    if (currentPage > pageNum - 2) {
                        showPrevious = true;
                    }
                    if (currentPage < pageCount - 2) {
                        showNext = true;
                    }
                }
                const array = [];
                if (showPrevious && !showNext) {
                    const startPage = pageCount - (pageNum - 2);
                    for (let i = startPage; i < pageCount; i++) {
                        array.push(i);
                    }
                } else if (!showPrevious && showNext) {
                    for (let i = 2; i < pageNum; i++) {
                        array.push(i);
                    }
                } else if (showPrevious && showNext) {
                    const offset = Math.floor(pageNum / 2) - 1;
                    for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
                        array.push(i);
                    }
                } else {
                    for (let i = 2; i < pageCount; i++) {
                        array.push(i);
                    }
                }
                this.showPrevious = showPrevious;
                this.showNext = showNext;
                return array;
            }
        },
        /**
         * @computed
         */
        computed: {
            /**
             * pages {Number[]} 当前页数集合
             * @example [1,2,3,4,5,6,7]
             */

            pages: function () {
                return this.getPage(this.cur, this.totalPage, this.perSize)
            },
            DTTTFooterCls(){
                return[
                    this.fixed ? 'DTTTFooter-position-fixed' : ''
                ]
            }
        },
        watch: {
            showPrevMore(val) {
                if (!val) this.quickPrevious = 'fa fa-ellipsis-h';
            },
            showNextMore(val) {
                if (!val) this.quickNext = 'fa fa-ellipsis-h';
            },
            param: {
                handler (val) {
                    this.param=val
                    if(this.param.autosearch===false) {
                        this.action_dispatch(this.action, []);
                        return
                    }
                    this.getData(this.cur,this.limit)
                },
                deep: true  //深度观察
            },
            pageParam: {
                handler: function handler(val) {
                    this.cur = val.pageCurrent;
                    this.limit = val.pageLimit;
                    if(this.param.autosearch===false) {
                        this.action_dispatch(this.action, []);
                        return
                    }
                    this.getData(this.cur,this.limit)
                },
                deep: true
            }
        }
    }
</script>
