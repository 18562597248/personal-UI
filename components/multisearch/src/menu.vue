<template>
    <div>
        <div v-for="(item,index) in optiondata">
            <hd-datepicker  type="date"   v-show="optiondata[index].show" v-if="item.type==='date'" :value="item.value" @change="handleDateChange($event,index)" ref="date" readonly></hd-datepicker>
            <hd-datepicker  type="daterange"   v-show="optiondata[index].show" v-if="item.type==='daterange'" :value="item.value" @change="handlechange($event,index)" ref="daterange" readonly></hd-datepicker>
            <h-select  v-model="item.realVal"   v-show="optiondata[index].show" v-if="item.type==='selected'" filterable   remote   :multiple="item.option.multiple===true?true:false"  labelInValue :item="item"
                       :remote-method="remoteMethod" :loading="loading"   @change="change($event,item)" ref="selected" readonly
            >
            <h-option v-for="(item,index) in item.list" :value="item.value" :key="index">{{ item.text }}</h-option>
            </h-select>
            <div   v-if="item.type==='tree'"
                   v-show="optiondata[index].show"
                   style="overflow: auto;height: auto;max-height: 460px"
            >
                <hd-tree  ref="hdTree"
                          :data="treeList"
                          show-checkbox
                          :multiple="item.option.multiple===false?false:true"
                          @checkChange="hdTreeCheck($event,index)"
                ></hd-tree>
            </div>
        </div>
    </div>
</template>
<script>
    import hdTree from 'components/tree'
    import hdDatepicker from 'components/date'
    import hOption from 'components/combox/src/option.vue';
    import hSelect from 'components/combox/src/select.vue';
    import  handleUnsuccessfulAjax  from 'src/utils/handleUnsuccessfulAjax'
    const getTagValue = function(object) {
        var str=object.split(":");
        var  val= str[1];
        return val;
    };
    export default {
        name: 'menu',
        props: {
            optiondata:Array
        },
        data () {
            return {
                result:[],
                list: [],
                treeList:[],
                selectValue:'',
                label:'',
                loading: false,
                index:0
            };
        },
        components: {
            hdDatepicker,hSelect,hOption,hdTree
        },
        mounted() {
            let _this=this
            this.$nextTick(() => {
              _this.$parent.optiondata.forEach((value)=>{
                if(value.type==='selected'){
                    value.list=[]
                  if(value.option.multiple){
                      value.realVal = [];
                  }else{
                      value.realVal=""
                  }
                    _this.loadData(value,'');
                }  if(value.type==='tree'){
                    _this.getRoot(value);
                }
           })
         })
        },
        methods: {
            change: function change(inde,val) {
                this.selectValue = inde;
                var _this = this;
                if (val.option.multiple) {
                    this.states.forEach(function (item) {
                        if (item.value === inde) {
                            _this.label = item.text;
                            val.value = item.text;
                            val.key = inde;
                            _this.$parent.addInputLength();
                            _this.getValue(val);
                            _this.$parent.inputData = '';
                            _this.$parent.focus();
                            _this.$parent.show_right = false;
                            _this.$parent.show = false;
                        }
                    })
                }else {
                    _this.label = inde.label;
                    val.value = inde.label;
                    val.key = inde.value;
                    _this.$parent.addInputLength();
                    _this.getSingleValue(val);
                    _this.$parent.inputData = '';
                    _this.$parent.focus();
                    _this.$parent.show_right = false;
                    _this.$parent.show = false;
                }
            },
            handlechange (val,inde) {
                if(!val[0]) return
                let _this=this
                this.$parent.optiondata.forEach((value,index)=>{
                    if(inde==index){
                    value.value=val
                    _this.$parent.addInputLength()
                    _this.getdateValue(value)
                }
            })
                this.$parent.inputData=''
                _this.$parent.focus()
                this.$parent.show_right=false
                this.$parent.show=false
            },
            handleDateChange (val,inde) {
                if(!val) return
                let _this=this
                this.$parent.optiondata.forEach((value,index)=>{
                    if(inde==index){
                    value.value=val
                    _this.$parent.addInputLength()
                    _this.getdateValue(value)
                }
            })
                this.$parent.inputData=''
                _this.$parent.focus()
                this.$parent.show_right=false
                this.$parent.show=false
            },
            hdTreeCheck(newVal,inde){
                var _this=this
                var result=[]
                var newArr = newVal;
                for (var i = newArr.length - 1; i >= 0; i--) {
                    var targetNode = newArr[i];
                    for (var j = 0; j < i; j++) {
                        if (targetNode.parentcode == newArr[j].code) {
                            newArr.splice(i, 1);
                            break;
                        }
                    }
                }
                newVal.forEach(function (value,inx) {
                    _this.$parent.optiondata.forEach(function (val, index) {
                        if (inde == index) {
                            value.tag = val.label + ':' + value.text;
                            value.filed=val.filed;
                            value.type=val.type
                            value.show=val.show
                            result.push(value)
                        }
                    });
                });
                _this.gettreeValue(result)
                _this.$parent.addInputLength();
                this.$parent.inputData = '';
                _this.$parent.focus()
            },
            toggleMenu(val) {
                let _this=this
                this.$nextTick(() => {
                    _this.$refs.selected[val].toggleMenu()
                })
            },
            load: function load(index,val,query) {
                var _this = this;
                this.index=index
                this.$nextTick(function () {
                    _this.loadData(val,query);
                });
            },
            handleFocus(val) {
                let _this=this
                this.$nextTick(() => {
                    _this.$refs.daterange[val].handleFocus()
                    _this.$refs.daterange[val].showPicker();
            })
            },
            handleDateFocus(val) {
                let _this=this
                this.$nextTick(() => {
                    _this.$refs.date[val].handleFocus()
                _this.$refs.date[val].showPicker();
            })
            },
            gettreeValue(val) {
                var _this = this;
                if(val.length===0){
                    _this.$parent.newoption.forEach(function (item, index) {
                        if (item.filed === _this.$parent.tag) {
                            _this.$parent.newoption.splice(index, 1);
                        }
                    });
                    if(_this.$parent.newoption.length===0){
                        _this.$parent.copytreedata=[]
                        _this.$parent.handerChange([])
                    }
                }else{
                    _this.$parent.newoption.forEach(function (item, index) {
                        if (item.filed == val[0].filed) {
                            _this.$parent.newoption.splice(index, 1);
                        }
                    });
                    val.forEach(function (value) {
                        _this.$parent.newoption.push(value);
                    });
                    this.result = this.deleteTreeTag(this.$parent.newoption);
                    var index = this.findindex(this.result, val[0]);
                    this.$emit('change', this.result[index]);
                }
            },
            getdateValue(val) {
                val.tag = val.label + ':' + val.value;
                this.$parent.newoption.push(val);
                this.result = this.deletedateTag(this.$parent.newoption);
                var index=this.findindex(this.result,val)
                this.$emit('change', this.result[index]);
            },
            getValue(val) {
                val = Object.assign({}, val,val)
                val.tag = val.label + ':' + val.value;
                val.flag = false;
                var _this=this;
                var index=-1
                for (var j = 0; j < _this.$parent.newoption.length; j++) {
                    if(_this.$parent.newoption[j].key){
                        if(typeof  _this.$parent.newoption[j].key ==='number'){
                            if (_this.$parent.newoption[j].key === val.key) {
                                index = j
                                break;
                            }
                        }else{
                            var arr= _this.$parent.newoption[j].key.split(';')
                            arr.forEach(function (value) {
                                if (parseInt(value) === val.key) {
                                    index = 0
                                }
                            });
                        }

                    }
                }
                if(index>=0){
                    this.result = this.deleteSelect(this.$parent.newoption,val.filed);
                    var inde = this.findindex(this.result, val);
                    this.$emit('change', this.result[inde]);
                }else{
                    _this.$parent.newoption.push(val)
                    this.result = this.deleteTag(this.$parent.newoption);
                    var inde = this.findindex(this.result, val);
                    this.$emit('change', this.result[inde]);
                }
            },
            getSingleValue: function getSingleValue(val) {
                if(val.value==='') return
                val = Object.assign({}, val,val)
                val.tag = val.label + ':' + val.value;
                val.flag = false;
                var _this = this;
                _this.$parent.newoption.forEach(function (item, index) {
                    if (item.filed == val.filed) {
                        _this.$parent.newoption.splice(index, 1);
                    }
                })
                _this.$parent.newoption.push(val);
                this.result = this.deleteTag(this.$parent.newoption);
                var inde = this.findindex(this.result, val);
                this.$emit('change', this.result[inde]);
            },
            deleteSelect(result,filed) {
                var newArr = result;
                for (var j = 0; j < newArr.length; j++) {
                    if(newArr[j].filed===filed){
                        if(typeof  newArr[j].key ==='number'){
                            newArr.splice(j,1)
                        }else{
                            var arr= newArr[j].key.split(';')
                            if(!arr[arr.length-1]) arr.length=arr.length-1
                            if (arr.length > 1) {
                                var label=this.label+';'
                                if(newArr[j].tag.search(label)>=0){
                                    newArr[j].key=newArr[j].key.replace(new RegExp(this.selectValue+';','g'), "")
                                    newArr[j].tag=newArr[j].tag.replace(new RegExp(this.label+';','g'), "")
                                    newArr[j].value=newArr[j].value.replace(new RegExp(this.label+';','g'), "")
                                }else{
                                    newArr[j].key=newArr[j].key.replace(new RegExp(this.selectValue,'g'), "")
                                    newArr[j].tag = newArr[j].tag.replace(new RegExp(this.label,'g'), "")
                                    newArr[j].value = newArr[j].value.replace(new RegExp(this.label,'g'), "")
                                }
                            }
                            if(arr.length===1){
                                newArr.splice(j,1)
                            }
                        }
                    }
                }
                return newArr;
            },
             findindex(a,x){
                var results=0
                for (var j = 0; j < a.length; j++) {
                    if (a[j].filed ===x.filed && x.show) {
                        results=j
                        break;
                    }
                }
                return results;
            },
            deleteTreeTag(result) {
                var newArr = result;
                for (var i = newArr.length - 1; i >= 0; i--) {
                    var targetNode = newArr[i];
                    for (var j = 0; j < i; j++) {
                        if (targetNode.filed == newArr[j].filed) {
                            newArr[j].tag = newArr[j].tag + ';' + newArr[i].text;
                            newArr.splice(i, 1);
                            break;
                        }
                    }
                }
                return newArr;
            },
            deleteTag(result){
                var newArr = result;
                for (var i=newArr.length-1; i>=0; i--)
                {
                    var targetNode = newArr[i];
                    for (var j=0; j<i; j++)
                    {
                        if(targetNode.filed == newArr[j].filed){
                            newArr[j].flag = false
                            if(!newArr[j].key){
                                newArr[j].key =  newArr[i].key;
                                newArr[j].tag = newArr[i].tag;
                            }else{
                                if(newArr[j].tag.substr(newArr[j].tag.length-1)===';'){
                                    newArr[j].key = newArr[j].key  + newArr[i].key;
                                    newArr[j].tag = newArr[j].tag  + newArr[i].value;
                                }else{
                                    newArr[j].key = newArr[j].key + ';' + newArr[i].key;
                                    newArr[j].tag = newArr[j].tag + ';' + newArr[i].value;
                                }
                            }
                            newArr[j].value=getTagValue(newArr[j].tag)
                            newArr.splice(i,1)
                            break;
                        }
                    }
                }
                return newArr;
            },//剔除重复的tag
            deletedateTag(result){
                var newArr = result;
                for (var i=newArr.length-1; i>=0; i--)
                {
                    var targetNode = newArr[i];
                    for (var j=0; j<i; j++)
                    {
                        if(targetNode.filed == newArr[j].filed){
                            newArr[j].tag=newArr[j].label+':'+newArr[i].value
                            newArr[j].value=newArr[i].value
                            newArr.splice(i,1)
                            break;
                        }
                    }
                }
                return newArr;
            },
            getRoot: function (val) {
                var that_=this;
                $.ajax({
                    url: val.option.url,
                    type: 'post',
                    cache: false,
                    dataType: 'json',
                    data: val.option.param,
                    traditional: true,
                    success: function (data) {
                        if (data.success) {
                            data.items.forEach(function (value) {
                                if (value.children) {
                                    if(val.option.multiple===false){
                                        that_.$set(value, 'disableCheckbox', true);
                                    }
                                }
                            });
                            if(data.items){
                                if(that_.$parent.copytreedata.length!==0){
                                    data.items.forEach(function (value) {
                                        that_.$parent.copytreedata.forEach(function (item) {
                                            if(item.code===value.code){
                                                that_.$set(value,'checked',true)
                                            }
                                            if (value.children) {
                                                value.children.forEach(function (child) {
                                                    if(value.checked){
                                                        that_.$set(child,'checked',true)
                                                    }else{
                                                        if(item.code===child.code){
                                                            that_.$set(child,'checked',true)
                                                        }
                                                    }
                                                });
                                            }
                                        });

                                    })
                                }
                                that_.$parent.optiondata.forEach(function (item) {
                                    if (item.filed == val.filed) {
                                        item.newValue = data.items;
                                    }
                                });
                                that_.treeList = data.items;
                            }else{
                                that_.treeList=[]
                            }
                        }else{
                            handleUnsuccessfulAjax(data)
                        }
                    }

                });
            },
            //加载下拉选项
            loadData(val,param){
                var _this = this;
                var temp=this.$parent.inputData
                if (val.list.length === 0 && !temp) {
                    if (val.option.url) {
                        $.ajax({
                            url: val.option.url,
                            type: 'post',
                            cache: false,
                            dataType: 'json',
                            data: val.option.param,
                            traditional: true,
                            success: function success(data) {
                                if (data.success) {
                                    _this.states = data.items;
                                    val.states = _this.states;
                                    _this.remoteMethod(param, val);
                                } else {
                                    handleUnsuccessfulAjax(data)
                                }
                            },
                            error: requestError
                        });
                    } else {
                        val.states = val.option.data;
                        _this.states= val.states
                        _this.remoteMethod(param, val);
                    }
                } else {
                    _this.states = val.states;
                    _this.remoteMethod(param, val);
                }
            },
            remoteMethod(query,value) {
                if(!value) return
                let _this=this
                        this.loading = true;
                        setTimeout(function () {
                            _this.loading = false;
                            value.list = value.states.filter(function (item) {
                                return item.text.indexOf(query) > -1;
                            });
                        }, 0);
                 }
             },
    watch:{
            optiondata: {
                handler: function handler(vals) {
                    var that_=this
                    vals.forEach((item)=>{
                        if(item.type==='tree'){
                        that_.treeList = []
                    }

                })
                },
                deep: true
            },
        }
         };

</script>
