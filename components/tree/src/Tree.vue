<template>
  <div ref="hd_tree_ref" :id="id" class="hd-tree" style="border: 1px solid #d1dbe5;" :class="treeCls" :style="(data==undefined)?'{height: 150px;line-height: 150px;text-align: center;}':''">
    <span v-if="data==undefined||data==null || data.length===0">{{placeholder}}</span>
    <hd-tree-node :data_="item"
                    :index_="index"
                    :showCheckbox_="showCheckbox"
                    :multiple_="multiple"
                    :checkStrictly_="checkStrictly"
                    :accordion_="accordion"
                    :defaultExpandAll_="defaultExpandAll"
                    :childAutoDisabled_="childAutoDisabled"
                    :indent_="indent"
                    :cssVforCount_="0"
                    ref="firstNode" v-for="(item, index) in this.data" v-else>
    </hd-tree-node>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js';
  import emitter from 'src/utils/emitter';
  export default {
    name: 'hd-tree',
    mixins: [emitter],
    componentName:'hd-tree',
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      showCheckbox:{
        type: [Boolean],
        default:false
      },
      multiple:{ //支持多选
        type: [Boolean],
        default:true
      },
      checkStrictly:{ //严格的遵循父子不互相关联
        type: [Boolean],
        default:false
      },
      accordion:{ //手风琴模式
        type: [Boolean],
        default:false
      },
      defaultExpandAll:{ //展开所有
        type: [Boolean],
        default:false
      },
      childAutoDisabled:{//子节点跟随disabled
        type:[Boolean],
        default:false
      },
      indent:{ //邻级节点间缩进
        type: [Number],
        default:20
      },
      placeholder:{
        type: [String],
        default:'暂无数据'  //edit by liuc
      },
      data:{
        type:[Array],
        default:null
      },
      bgColor:{
        validator(value){
          return isOneOf(value,['white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
    },
    data(){
      return {
        selectedForData:[Array],
        checkedForData:[Array],
        expandForAccordion:-1,
        oldEleForUpdateSelected:null,
        oldEleForUpdateChecked:null,
        dataForCheck:[Array],
        dataBeenChecked:[Array]
      }
    },
    computed: {
        treeCls(){
            return[
                this.bgColor ? 'bg-'+this.bgColor:''
            ]
        }
    },
//    beforeCreate:{},
//    created:{},
//    beforeMount:{},
    mounted(){
      if(this.accordion&&this.data!=undefined){
        if(this.defaultExpandAll){this.expandForAccordion=this.data.length-1;}
        else{
          for(var i=this.data.length-1;i>=0;i--){
            if(this.data[i].expand){this.expandForAccordion=i;break;}
          }
        }
      }
    },
    methods:{
      getCheckedNodes(){
        this.dataForCheck=this.data;
        this.dataBeenChecked =[];
        this.dataForCheck=this.letDataCheck(this,this.dataForCheck);
        return this.dataBeenChecked;
      },
      letDataCheck(ele,array){
        for(let i = 0,j=array.length;i<j;i++){
          if(this.hasClass(ele.$children[i].$children[0].$el,'is-checked')){
            array[i].checked=true;
            this.dataBeenChecked.push(array[i]);
          } else {
            array[i].checked=false;
          }
          if(array[i].children!=undefined){
            array[i].children=this.letDataCheck(ele.$children[i].$children[1],array[i].children);
          }
        }
        return array;
      },
      getSelectedNodes(){
        return this.getTreeContent(this.selectedForData).$children[0];
      },
      removeCls(ele){
        for(var i=0;i<ele.$children.length;i++){
          this.removeClass(ele.$children[i].$children[0].$el,'content-is-selected');
          if(ele.$children[i].$children.length==2){
            this.removeCls(ele.$children[i].$children[1])
          }
        }
      },
      removeClsForCheck(ele){
        if(this.multiple){return;}
        for(var i=0;i<ele.$children.length;i++){
          this.removeClass(ele.$children[i].$children[0].$el,'is-empty');
          this.removeClass(ele.$children[i].$children[0].$el,'is-checked');
          this.removeClass(ele.$children[i].$children[0].$el,'is-indeterminate');
          this.addClass(ele.$children[i].$children[0].$el,'is-empty');
          if(ele.$children[i].$children.length==2){
            this.removeClsForCheck(ele.$children[i].$children[1])
          }
        }
      },
      getTreeContent(array){
        if(isNaN(Number(array[0]))){
          var treeContent = this.$children[(array[(array.length-1)])];
          for(var i=array.length-2;i>0;i--){
            treeContent=treeContent.$children[1].$children[(array[i])];
          }
        }else{
          var treeContent = this.$children[(array[0])];
          for(var i=1;i<array.length;i++){
            treeContent=treeContent.$children[1].$children[(array[i])];
          }
        }
        return treeContent ;
      },
      addCls(array){
        var contentEle = this.getTreeContent(array);
        this.addClass(contentEle.$children[0].$el,'content-is-selected');
      },
      addClsForCheck(array){
        var contentEle = this.getTreeContent(array);
        this.removeClass(contentEle.$children[0].$el,'is-empty');
        this.addClass(contentEle.$children[0].$el,'is-checked');
      },
      addClass(elem, cls) { //Add Classes Function
        var oldCls = elem.className;
        if (oldCls) {
          oldCls += " ";
        }
        elem.className = oldCls + cls;
      },
      removeClass(elem, cls) { //Remove Classes Function
        var str = " " + elem.className + " ";
        elem.className = str.replace(" " + cls, "").replace(/^\s+/g, "").replace(/\s+$/g, "");
      },
      hasClass(elem, cls) {
        var str = " " + elem.className + " ";
        var testCls = " " + cls + " ";
        return (str.indexOf(testCls) != -1);
      }
    },
    watch:{
      accordion(val){
        if(val){
          if(this.defaultExpandAll){this.expandForAccordion=this.data.length-1;}
          else{
            for(var i=this.data.length-1;i>=0;i--){
              if(this.data[i].expand){this.expandForAccordion=i;break;}
            }
          }
        }
      },
      defaultExpandAll(val){
        if(this.accordion){
          if(val){this.expandForAccordion=this.data.length-1;}
          else{
            for(var i=this.data.length-1;i>=0;i--){
              if(this.data[i].expand){this.expandForAccordion=i;break;}
            }
          }
        }
      }
    }
  }
</script>
