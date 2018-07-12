<template>
  <div class="page-breadcrumbs-search col-sm-12 col-lg-12 col-md-12" style=" padding-top: 3px;"  v-show="show_search" v-clickoutside="inputoutside_click">
    <div class="bootstrap-tagsinput" style="border-radius: 5px !important;"  >
      <div class="tags-input"  ref="tagsinput" @click.stop="input_click">
        <hd-tag
                ref="tag"
                v-for="tag in newoption"
                bg-color="azure"
                :closable="true"
                @close.stop="handleClose(tag)"
                style="margin-left: 6px;"
        >{{tag.tag}}
        </hd-tag>
        <input size="8" type="text"  id="search" ref="input" style="margin-left: 8px;margin-top: 5px;"
               v-model="inputData"
               :style="inputStyle"
               autocomplete="off"
               @keydown.down.prevent="handelOption(40)"
               @keydown.up.prevent="handelOption(38)"
               @keydown.right.prevent="handelright"
               @keydown.13.stop="selectOption($event)"
               @keydown.delete ="delete_tag"
        >
        <i class="glyphicon glyphicon-search mulinput-icon-left" @click.stop="icon_click"></i>
        <i class="glyphicon glyphicon-star-empty mulinput-icon"  @click.stop="favorite()"></i>
      </div>
    </div>
    <div  ref="hd_ui_multisearch_leftitem" class="leftitem"  v-show="show">
      <ul  v-for="(item,index) in optiondata" @click="clickOption(index)"     @mouseenter="handleMouseMove(event,index)">
        <li :class="{ onfocus: index === selectedIndex }" class="hd-multisearch-leftitem-li"><span><em>{{item.label}}</em> : <strong>{{item.value===''?inputData:item.value}}</strong></span></li>
      </ul>
    </div>
    <div class="rightitem"  v-show="show_right" ref="hd_ui_multisearch_rightitem" >
      <Searchmenu   :optiondata="copyoption" @change="menuChange" ref="menu"></Searchmenu>
    </div>
    <div ref="hd_ui_multisearch_dropdownmenu" class="pull-right dropdown-menu" v-show="show_favorite" style="display:block;width:50%;position: relative;top: auto;"   v-clickoutside="click">
      <hd-collapse v-model="active" accordion>
        <hd-collapse-item title="保存当前搜索"   name="save">
          <hd-form type="default">
            <hd-form-item>
              <hd-input v-model="favorite_label" placeholder="请输入查询标题"  @keyup.13.native="save" id="save_input"></hd-input>
              <input type="text" style="display:none" />
            </hd-form-item>
            <hd-form-item>
              <hd-checkbox  v-model="isChecked"    :disabled="checkedShow? false:true">默认查询</hd-checkbox>
              <hd-button  type="hdprimary"  @click="save()" style="float: right">保存</hd-button>
            </hd-form-item>
          </hd-form>
        </hd-collapse-item>
        <hd-collapse-item title="收藏夹" name="star">
          <table class="table table-hover table-striped  table-condensed">
            <tbody>
            <tr v-for="(item,index) in favoritedata"  @click="search_favorite(index)" style="cursor:pointer">
              <td style="width:33px">
                <hd-icon  type="typcn typcn-tick pull-left"  style="padding-right: 5px;" v-if="item.show"></hd-icon>
              </td>
              <td style="width:330px;padding-left: 0px;padding-right: 0px;" v-if="item.show">
                <hd-input v-model="item.label" @keyup.enter.native="save_enter(item)"> </hd-input>
              </td>
              <td style="width:330px;padding-left: 0px;padding-right: 0px;height: 41px" v-else>
                {{item.label}}
              </td>
              <td style="width:10px">
                <span>
                    <hd-icon  type="glyphicon glyphicon-trash pull-right" style=" padding-top: 2px;"
                              onmouseover="this.style.color='#ed4e2a'"
                              onmouseout="this.style.color='#262626'"
                              @click.stop="del(item)"
                    >
                    </hd-icon>
                </span>
              </td>
            </tr>
            </tbody>
          </table>
        </hd-collapse-item>
      </hd-collapse>
    </div>
  </div>
</template>
<script>
  import hdCollapse from 'components/collapse'
  import hdCollapseItem from 'components/collapseitem'
  import hdForm from 'components/form'
  import hdFormItem from 'components/formitem'
  import hdIcon from 'components/icon'
  import hdInput from 'components/input'
  import hdTag from 'components/tag'
  import hdButton from 'components/button'
  import hdCheckbox from 'components/checkbox'
  import  getdate  from 'src/utils/datetimeformatter/index.js';
  import clickoutside from 'src/utils/clickoutside';
  import Searchmenu from './menu.vue';
  import popup from 'src/utils/popup/popupManager.js'     //z-index管理
  import  handleUnsuccessfulAjax  from 'src/utils/handleUnsuccessfulAjax'
  const typeOf = function(obj) {
    const toString = Object.prototype.toString;
    const map = {
      '[object Array]'    : 'array',
      '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
  };
  const deepCopy = function(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
      o = [];
    } else if ( t === 'object') {
      o = {};
    } else {
      return data;
    }

    if (t === 'array') {
      for (let i = 0; i < data.length; i++) {
        o.push(deepCopy(data[i]));
      }
    } else if ( t === 'object') {
      for (let i in data) {
        o[i] = deepCopy(data[i]);
      }
    }
    return o;
  };
  const getTagValue = function(object) {
    var str=object.split(":");
    var  val= str[1];
    return val;
  };
  export default {
    name:'hd-multisearch',
    mixins: [getdate],
    directives: { clickoutside },
    props: {
      optiondata:Array,
      favoritedata:Array,
      show_search:Boolean,
      tagdata:{
        type:[Array,String]
      },
        TreeChild: {
            type: Function,
            default () {
                return '';
            }
        }
    },
    data() {
      return {
        active:['save'],
        show:false,
        show_right:false,
        show_favorite:false,
        show_save:false,
        dropdownwidth:'',
        show_rash:false,
        favorite_label:'',
        inputData:'',
        selectedIndex:-1,
        Index:0,
        newoption:[],
        copyoption:[],
        inputLength: 0,
        tag:'',
        isChecked:false,
        checkedShow:true,
        copytreedata:[]
      }
    },
    computed: {
      inputStyle () {
          let style = {};
          style.width = `${this.inputLength}px`;
          return style;
      }
    },
    mounted () {
        var _this = this;
        var selectedindex = 0;
        var dateindex = 0;
        var daterangeindex = 0;
        this.$nextTick(function () {
            if(_this.$refs.tagsinput){
                _this.inputLength = _this.$refs.tagsinput.offsetWidth - 100;
            }
            _this.optiondata.forEach(function (val) {
                if (val.type === 'selected') {
                    val.select_index = selectedindex++;
                }
                if (val.type === 'daterange') {
                    val.daterange_index = daterangeindex++;
                }
                if (val.type === 'date') {
                    val.date_index = dateindex++;
                }
                if (val.type === 'tree') {
                    _this.getRoot(val);
                }
            })
             if(!_this.tagdata) return
             _this.tagdata.forEach(function (val,index) {
             if(val.value){
             if (val.type === 'daterange') {
                val.tag = val.label + ':' + val.value;
                 _this.optiondata.forEach(function (value) {
                     if(val.filed===value.filed){
                         val.daterange_index =   value.daterange_index ;
                     }
                 });
             }  else  if (val.type === 'date') {
                     val.tag = val.label + ':' + val.value;
                     _this.optiondata.forEach(function (value) {
                         if(val.filed===value.filed){
                             val.date_index =   value.date_index ;
                         }
                     });
                 }else if (val.type === 'selected') {
                 _this.optiondata.forEach(function (value) {
                     if(val.filed===value.filed){
                         val.select_index =   value.select_index ;
                     }
                 });
                 val.tag = val.label + ':' + val.value.text;
                 if (val.value.key) {
                     val.flag=false
                     val.key=val.value.value
                 } else {
                     val.flag=true
                     val.key=false
                 }
             _this.loadData(val)
             } else if (val.type === 'tree') {
             val.tag = val.label + ':' + val.value.text;
             var  obj=val.value
             var prop;
             for(prop in obj){
             val[prop]=obj[prop]
             }
             } else {
             val.tag = val.label + ':' + val.value;
             }
             _this.newoption.push(val)
             }
             })
            _this.addInputLength()
        });
    },
     beforeUpdate(){
       var _this= this;
       this.$nextTick(function () {
         _this.$parent.searchheight=_this.$refs.tagsinput.offsetHeight+12;
       })
     },
    components: {
      Searchmenu
    },
    methods:{
        loadData: function (val){
            var _this = this;
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
                            val.states = data.items
                            _this.remoteMethod(val);
                        } else {
                            handleUnsuccessfulAjax(data)
                        }
                    },
                    error: requestError
                });
            } else {
                val.states = val.option.data;
                _this.remoteMethod(val);
            }
        },
        remoteMethod: function(value) {
            var _this=this

            var query = value.value.text.trim();
            if (query !== '') {
                value.list = value.states.filter(function (item) {
                    return item.text.indexOf(query) > -1;
                });
                _this.search()
            }
        },
        getRoot: function (val) {
            var self = this;
            $.ajax({
                url: val.option.url,
                type: 'post',
                cache: false,
                dataType: 'json',
                data: val.option.param,
                traditional: true,
                success: function (data) {
                    if(data.success){
                        val.newValue=data.items
                        val.newValue.forEach(function (value) {
                            if(val.value.code===value.code){
                                self.$set(value,'checked',true)
                            }else{
                                self.$set(value,'checked',false)
                            }
                            if (value.children) {
                                value.children.forEach(function (child) {
                                    if(val.value.code===child.code){
                                        self.$set(child,'checked',true)
                                    }else{
                                        self.$set(child,'checked',false)
                                    }
                                });
                            }
                        })
                        self.search()
                    }else{
                        handleUnsuccessfulAjax(data)
                    }
                }
            });
        },
      click(){
        this.show_favorite=false
      },
      getTreeChild(newVal){
           return this.TreeChild(newVal)
        },
      focus: function focus(){
         document.getElementById('search').focus();
      },
     inputoutside_click(){
        this.show=false;
        this.show_right = false;
        this.selectedIndex = -1;
      },
      input_click(){
          let _this=this
          document.getElementById('search').focus()
          this.show_favorite=false
          var x = document.getElementById("search").value;
          if(x){
              _this.show = true;
              _this.copyoption = _this.optiondata;
          }else{
              this.$nextTick(function () {
                  _this.optiondata.forEach(function (val) {
                      if (val.type === 'daterange') {
                          var reg = /^(([0-9]{2}(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30))))|(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30))))$/;
                          if (reg.test(x)) {
                              val.value = _this.parse(x);
                              val.value = [_this.stringify(val.value), _this.stringify(val.value)];
                          } else {
                              val.value = new Date();
                              val.value = [_this.stringify(val.value), _this.stringify(val.value)];
                          }
                      }else if (val.type === 'date') {
                          var reg = /^(([0-9]{2}(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30))))|(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30))))$/;
                          if (reg.test(x)) {
                              val.value = _this.parse(x);
                              val.value = _this.stringify(val.value);
                          } else {
                              val.value = new Date();
                              val.value = _this.stringify(val.value);
                          }
                      }
                      else if(val.type === 'tree'){
                          val.context=''
                          val.value = '';
                      }else{
                          val.value = '';
                      }
                  });
                  _this.show = true;
                  _this.copyoption = _this.optiondata;
              });
          }
      },
      resetInput() {
        var length=0
        this.inputLength=this.$refs.tagsinput.offsetWidth-100
        let  _this=this
        this.$nextTick(() => {
            if(_this.$refs.tag){
              for(var i=0;i<_this.$refs.tag.length;i++){
                  length+=_this.$refs.tag[i].$el.offsetWidth
              }
          }
        _this.inputLength =  _this.inputLength-length
      });
      },
      addInputLength() {
        var length=0
        let  _this=this
        this.$nextTick(() => {
            if(_this.$refs.tag){
              for(var i=0;i<_this.$refs.tag.length;i++){
                  length+=_this.$refs.tag[i].$el.offsetWidth
              }
          }
        _this.inputLength =  _this.inputLength-length
      });
      },
      getValue(val) {
        var newarry=[]
        var _this=this
        var x = document.getElementById("search").value;
        val = Object.assign({}, val,val)
        if(val.type==='daterange'){
          val.value=this.parse(this.inputData) || new Date();
          val.value=[this.stringify(val.value),this.stringify(val.value)]
          val.tag=val.label+':'+ val.value
        }else if(val.type==='date'){
            val.value=this.parse(this.inputData) || new Date();
            val.value=this.stringify(val.value)
            val.tag=val.label+':'+ val.value
        } else if (val.type === 'selected') {
            val.flag=true
            val.key=false
            val.tag = val.label + ':' + x;
            _this.$refs.menu.list.forEach((item)=>{
                val.list.push(item.value)
        })
        } else if (val.type === 'tree') {
            val.tag = val.label + ':' + x;
        }
        else {
            val.value = x;
            val.tag = val.label + ':' + x;
        }
        this.newoption.push(val);
        newarry= this.deleteTag(this.newoption)
        return newarry;
      },
      deleteTag(result){
        var newArr = result;
        for (var i=newArr.length-1; i>=0; i--)
        {
          var targetNode = newArr[i];
          for (var j=0; j<i; j++)
          {
            if(targetNode.filed == newArr[j].filed){
              if(newArr[j].type==='daterange'){
                newArr[j].tag=newArr[i].label+':'+newArr[i].value
                newArr[j].value=newArr[i].value
                newArr.splice(i,1)
                break;
              }else if(newArr[j].type==='date'){
                  newArr[j].tag=newArr[i].label+':'+newArr[i].value
                  newArr[j].value=newArr[i].value
                  newArr.splice(i,1)
                  break;
              }
              else if (newArr[j].type === 'selected') {
                  newArr[j].flag = true
                  newArr[j].key = false;
                  newArr[j].tag = newArr[j].tag + ';' + newArr[i].value;
                  if(targetNode.list){
                      newArr[j].list=newArr[i].list
                      newArr[j].tag = newArr[i].tag;
                  }
                  newArr[j].value = getTagValue(newArr[j].tag);
                  newArr.splice(i, 1);
                  break;
              } else if (newArr[j].type === 'tree') {
                  newArr[j].tag = newArr[j].tag + ';' + newArr[i].value;
                  newArr.splice(i, 1);
                  break;
              }else{
                  newArr[j].tag = newArr[j].tag + ';' + newArr[i].value;
                  newArr[j].value = getTagValue(newArr[j].tag);
                  newArr.splice(i, 1);
                  break;
              }
            }
          }
        }
        return newArr;
      },//剔除重复的tag
      delete_tag(){
        let _this=this
        if(this.inputData !=''){
          const tag = this.inputData.split();
          if (!tag) return;
        }else{
          if (!this.tagdata) return;
          const tag = this.tagdata.slice();//获得所有
          var test=tag.pop();  //删除最后
          this.handerChange(tag)
            this.newoption.forEach(function (value, index) {
                if (test.filed === value.filed) {
                    if (test.type === 'tree') {
                        _this.copytreedata = [];
                        _this.newoption.splice(index, 1);
                        _this.search();
                        _this.resetInput();
                    } else if (test.type === 'selected') {
                        if(_this.$refs.menu.$refs.selected){
                            if (value.option.multiple) {
                                _this.$refs.menu.$refs.selected[value.select_index].clearMultipleSelect();
                            } else {
                                _this.$refs.menu.$refs.selected[value.select_index].clearSingleSelect();
                            }
                            _this.newoption.splice(index, 1);
                            _this.resetInput();
                            _this.search();
                        }else{
                            _this.newoption.splice(index, 1);
                            _this.resetInput();
                            _this.search();
                        }
                    } else {
                        _this.newoption.splice(index, 1);
                        _this.search();
                        _this.resetInput();
                    }
                }
            });
        }
      },//回车键删除
      del(item){
          if (item.favorite) {
              this.checkedShow = true;
              this.isChecked = false;
           }
        this.favoritedata.splice(this.favoritedata.indexOf(item), 1);
      },//删除单个收藏夹
      selectOption() {
        if(!this.inputData || this.selectedIndex===-1) return
        if( this.optiondata[this.selectedIndex].type ==='tree') return
        var _child=[]
        this.$emit('changeTag',this.getValue( this.optiondata[this.selectedIndex]))
        this.inputData=''
        this.search()
        this.addInputLength()
      },
        icon_click() {
            this.search()
           this.$emit('icon_click')
      },

      clickOption: function clickOption() {
          if(!this.inputData || this.selectedIndex===-1) return
          if( this.optiondata[this.selectedIndex].type ==='tree') return
          var _child=[]
          this.$emit('changeTag',this.getValue( this.optiondata[this.selectedIndex]))
          this.inputData=''
          this.search()
          this.addInputLength()
        },
      search(){
          var _this = this;
          var newdata = {};
          var obj=[]
          if(this.newoption[0]!==undefined) {
              this.newoption.forEach(function (val) {
                  if (val.type === 'selected') {
                      if (val.list && val.flag) {
                          var array = [];
                          val.list.forEach(function (item) {
                              array.push(item.value)
                          })
                          _this.$set(newdata, val.filed, array);
                      } else {
                          if (val.key.toString().indexOf(';')<0) {
                              _this.$set(newdata, val.filed, [val.key]);
                          } else {
                              var arr = val.key.split(';');
                              var copyarr=[]
                              arr.forEach(function (item) {
                                  copyarr.push(parseInt(item))
                              })
                              _this.$set(newdata, val.filed, copyarr);
                          }
                      }
                  } else if (val.type === 'tree') {
                      _this.optiondata.forEach(function (value) {
                          if (val.filed === value.filed && value.newValue) {
                              value.newValue.forEach(function (item) {
                                  if (item.checked) {
                                      obj.push(item)
                                  } else {
                                      if (item.children) {
                                          item.children.forEach(function (child) {
                                              if (child.checked) {
                                                  obj.push(child)
                                              }
                                          })
                                      }
                                  }
                              })
                          }
                      });
                      _this.copytreedata = obj
                      _this.$set(newdata, val.filed, obj);
                  } else {
                      _this.$set(newdata, val.filed, val.value);
                  }
              });
          }
          Object.keys(newdata).forEach(function (item) {
              if(isNaN(newdata[item][0]) && typeof newdata[item][0] ==='number'){
                  delete newdata[item]
              }
          });
          this.$emit('change', newdata);
      },//查询
      save(){
          let _this=this
        if(!this.tagdata) return;
        var someObject={}
        var obj={}
        var data=[]
        for(var i=0; i< this.tagdata.length;i++){
          someObject = Object.assign({}, someObject,this.tagdata[i])
          data.push(someObject)
        }
        obj={label:this.favorite_label,data:data,favorite:this.isChecked}
        this.$emit('changefavorite',obj)
        this.favoritedata.push(obj)
        this.favorite_label=''
      }, //保存收藏夹
      search_favorite(index){
        let _this=this
        this.favoritedata.forEach((val) => {
          _this.$set(val,'show',false);
      });
        this.$emit('changeTag',this.favoritedata[index].data)
        this.$set(this.favoritedata[index],'show',true);
        this.newoption = deepCopy(this.favoritedata[index].data);
        this.search()
      },//点击单个收藏夹
      handelOption (direction) {
        if(!this.show ||!this.inputData) return
        let _this=this
        if (direction === 40) {
          const next = this.selectedIndex + 1;
          this.selectedIndex = (this.selectedIndex ===  this.optiondata.length-1) ? 0 : next;
        } else if (direction === 38) {
          const prev = this.selectedIndex - 1;
          this.selectedIndex = (this.selectedIndex <= 0) ?  this.optiondata.length-1 : prev;
        }
        if(this.selectedIndex>  this.optiondata.length) {
          this.selectedIndex=-1
        }
        this.handel(this.optiondata)
      },
       handelright() {
            if (!this.show) return;
            var _this=this
            this.optiondata.forEach(function (val) {
                if(val.type==='selected'){
                    if(val.show){
                        _this.$refs.menu.toggleMenu(val.select_index);
                    }
                }else if(val.type==='daterange'){
                    if(val.show){
                        _this.$refs.menu.handleFocus(val.daterange_index);
                    }
                }else if(val.type==='date'){
                    if(val.show){
                        _this.$refs.menu.handleDateFocus(val.date_index);
                    }
                }

            });
        },
       handel(arr){
          var index=0
          var daterangeindex=0
          var dateindex=0
          let _this=this
          this.optiondata.forEach(function (val) {
              if(val.type=== 'selected'){
                  val.select_index=index++
              }
              if(val.type==='daterange'){
                  val.daterange_index=daterangeindex++
              }
              if(val.type==='date'){
                  val.date_index=dateindex++
              }
              val.show = false;
          });
          if (arr[this.selectedIndex].type === 'daterange') {
              this.show_right = true;
              arr[this.selectedIndex].show = true;
              this.$nextTick(function () {
                  _this.$refs.menu.handleFocus(arr[this.selectedIndex].daterange_index);
              })
          }  else if (arr[this.selectedIndex].type === 'date') {
               this.show_right = true;
               arr[this.selectedIndex].show = true;
               this.$nextTick(function () {
                   _this.$refs.menu.handleDateFocus(arr[this.selectedIndex].date_index);
               })
           } else if (arr[this.selectedIndex].type === 'selected') {
              arr[this.selectedIndex].show = true;
              this.show_right = true;
              this.$nextTick(function () {
                  var x = document.getElementById("search").value;
                  _this.$refs.menu.load(arr[_this.selectedIndex].select_index, arr[_this.selectedIndex], x);
              })
          }  else if (arr[this.selectedIndex].type === 'tree') {
              arr[this.selectedIndex].show = true;
              this.show_right = true;
              this.tag=arr[this.selectedIndex].filed
              var x = document.getElementById("search").value;
              var obj={context:x}
              this.getTreeChild(obj)
              this.$refs.menu.getRoot(arr[this.selectedIndex]);
          }else {
              this.show_right = false;
          }
      },
      handleClose(tag) {
        let _this=this
        this.newoption.forEach(function (value, index) {
              if (tag.filed === value.filed) {
                  if (tag.type === 'tree') {
                      _this.copytreedata = [];
                      _this.newoption.splice(index, 1);
                      _this.search();
                      _this.resetInput();
                  } else if (tag.type === 'selected') {
                      if(_this.$refs.menu.$refs.selected){
                          if (value.option.multiple) {
                              _this.$refs.menu.$refs.selected[value.select_index].clearMultipleSelect();
                          } else {
                              _this.$refs.menu.$refs.selected[value.select_index].clearSingleSelect();
                          }
                          _this.newoption.splice(index, 1);
                          _this.resetInput();
                          _this.search();
                      }else{
                          _this.newoption.splice(index, 1);
                          _this.resetInput();
                          _this.search();
                      }
                  } else {
                      _this.newoption.splice(index, 1);
                      _this.search();
                      _this.resetInput();
                  }
              }
          });
      }, //点击tag关闭按钮
      handerChange(val){
        this.$emit('changeTag',val)
      },
      handleMouseMove: function handleMouseMove(event,index) {
            this.selectedIndex=index;
            this.show_right = true;
            var _this = this;
            var selectedindex = 0;
            var dateindex = 0;
            var daterangeindex = 0;
            this.optiondata.forEach(function (val) {
                if (val.type === 'selected') {
                    val.select_index = selectedindex++;
                }
                if (val.type === 'daterange') {
                    val.daterange_index = daterangeindex++;
                }
                if (val.type === 'date') {
                    val.date_index = dateindex++;
                }
                val.show = false;
            });
            if (this.optiondata[index].type === 'daterange') {
                this.optiondata[this.selectedIndex].show = true;
                this.$nextTick(function () {
                    _this.$refs.menu.handleFocus(_this.optiondata[index].daterange_index);
                });
            }else if(this.optiondata[index].type === 'date') {
              this.optiondata[this.selectedIndex].show = true;
              this.$nextTick(function () {
                  _this.$refs.menu.handleDateFocus(_this.optiondata[index].date_index);
              });
          } else if (this.optiondata[index].type === 'selected') {
                this.optiondata[this.selectedIndex].show = true;
                this.$nextTick(function () {
                    var x = document.getElementById("search").value;
                    _this.$refs.menu.load(_this.optiondata[index].select_index,_this.optiondata[index], x);
                });
            } else if (this.optiondata[index].type === 'tree') {
                this.optiondata[this.selectedIndex].show = true;
                this.tag = this.optiondata[index].filed;
                var x = document.getElementById("search").value;
                var obj={context:x}
                this.getTreeChild(obj)
                _this.$refs.menu.getRoot(this.optiondata[this.selectedIndex]);
            }else{
                this.show_right = false
            }
        },
      favorite(){
          var _this=this
        this.active=['save']
        this.show = false;
        this.show_favorite=true
          this.favoritedata.forEach((item)=>{
              if(item.favorite){
              _this.checkedShow=false
              _this.isChecked=false
          }
      })
      },
      menuChange(val){
       if(val.value==='') return
        let _this=this
        if(this.newoption.length===0){
            this.newoption.push(val)
        }else{
            this.newoption.forEach((value,index) => {
            if(val.filed===value.filed){
                _this.newoption.splice(index,1)
          }
        })
            _this.newoption.push(val)
        }
        this.handerChange(_this.newoption)
        this.search()
      }
    },
    watch:{
      inputData(val){
        let _this=this
        if(!val){
          this.show = false;
          this.show_right = false;
          this.show_favorite=false;
          this.selectedIndex=-1
        }else{
          var reg = /^(([0-9]{2}(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30))))|(((0[13578]|(10|12))(0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|((0[469]|11)(0[1-9]|[1-2][0-9]|30))))$/;
          if (reg.test(val)) {
            this.optiondata.forEach((value)=>{
              if(value.type==='daterange'){
                value.value=_this.parse(val);
                value.value=[_this.stringify(value.value),_this.stringify(value.value)]
            }else if(value.type==='date'){
                  value.value=_this.parse(val);
                  value.value=_this.stringify(value.value)
              } else{
                value.value=val
              }
          })
          }else{
            this.optiondata.forEach((value)=>{
              if(value.type==='daterange'){
                value.value = new Date();
                value.value = [_this.stringify(value.value), _this.stringify(value.value)];
            } else if(value.type==='date'){
                  value.value = new Date();
                  value.value = _this.stringify(value.value)
              } else if(value.type === 'tree'){
                  value.value = val;
              } else {
                  value.value = val;
              }
          })
          }
          this.show = true;
        }
        this.copyoption= this.optiondata
      },
      tagdata:{
        handler (vals) {
          if(this.tagdata.length===0){
            this.show = false;
            this.show_right = false;
            this.$emit('change',[])
            this.newoption=[]
            this.favoritedata.forEach((val) => {
              val.show=false
          });
          }
          if(vals[0]===undefined){
             this.newoption = [];
            }
          this.tagdata=vals
        },
        deep: true
      },
      show(val){
        if(val){
          if(this.$refs.hd_ui_multisearch_leftitem){this.$refs.hd_ui_multisearch_leftitem.style.zIndex = popup.nextZIndex();}
        }
      },     //z-index管理
      show_right(val){
        if(val){
          if(this.$refs.hd_ui_multisearch_rightitem){this.$refs.hd_ui_multisearch_rightitem.style.zIndex = popup.nextZIndex();}
        }
      },     //z-index管理
      show_favorite(val){
        if(val){
          if(this.$refs.hd_ui_multisearch_dropdownmenu){this.$refs.hd_ui_multisearch_dropdownmenu.style.zIndex = popup.nextZIndex();}
        }
      }     //z-index管理
    }
  }
</script>
<style type="text/css">
  .search-menuitem {
    line-height: 30px;
    padding-left: 5px;
    cursor: pointer;
  }
  .search-menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    padding: 0;
    z-index: 100;
    overflow: hidden;
    background: #f8f8f8;
    cursor: default;
    border-left: 1px solid #ebebeb;
  }
  .dropdown-menu .panel-group {
    margin-bottom: 0px;
  }
  .star {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    white-space: nowrap;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
  }
  .leftitem {
    position: relative;
    line-height: 20px;
    background-color: white;
    width:250px;
    border: 1px solid #afafb6;
    margin-top: 2px;
    cursor: default;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    float: left;
  }
  .rightitem {
    position: relative;
    background-color: white;
    width: 430px;
    border: 1px solid #afafb6;
    border-collapse: collapse;
    margin-top: 2px;
    cursor: default;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    float: left;
  }
  /*.rightitem .hd-select-dropdown {
    top:38px;
  }*/
  .leftitem ul li.onfocus {
    background-color: #2dc3e8;
    color: white;
  }
  .leftitem ul li {
    padding-left: 2px;
    text-shadow: 0 0 0 white;
  }
  .leftitem ul {
    list-style-type: none;
    padding-left: 0;
    margin: 5px 0px;
  }
  .footer {
    margin: 0;
    overflow: hidden;
    background-color: #f2f2f2;
  }
  .bootstrap-tagsinput .tag {
    padding: 2px 4px 2px 4px;
  }
  .tags-input {
    position: relative;
    padding-right: 12px;
    padding-left:12px
  }
  .tags-input input[type=text]{
    margin: 5px 0 5px 5px;
  }
  .tags-input>.mulinput-icon ,
  .tags-input>.mulinput-icon-left {
    top: 28%;
    cursor: pointer;
  }
  .mulinput-icon{
    position: absolute;
    right: 0.5%;
    text-align: center;
  }
  .mulinput-icon-left{
    position: absolute;
    left:  0.5%;
    text-align: center;
  }
</style>　

