<template>
  <div class="hd-tree-node">
    <hd-tree-content :co_data="data_"
                       :co_index="index_"
                       :co_showCheckbox="showCheckbox_"
                       :co_multiple="multiple_"
                       :co_checkStrictly="checkStrictly_"
                       :co_accordion="accordion_"
                       :co_defaultExpandAll="defaultExpandAll_"
                       :co_childAutoDisabled="childAutoDisabled_"
                       :co_indent="indent_"
                       :co_cssVforCount="cssVforCount_"
                       @tree_content_click="tree_node_handle_click" @content_checked_click="tree_node_checkbox_click">
    </hd-tree-content>
    <!--<div class="hd-tree-loader">-->
      <!--<div class="hd-tree-loading">-->
        <!--<i class="fa fa-rotate-right fa-spin blue"></i>-->
      <!--</div>-->
    <!--</div>-->
    <hd-tree-children :ch_data="data_.children"
                        :ch_showCheckbox="showCheckbox_"
                        :ch_multiple="multiple_"
                        :ch_checkStrictly="checkStrictly_"
                        :ch_accordion="accordion_"
                        :ch_defaultExpandAll="defaultExpandAll_"
                        :ch_childAutoDisabled="childAutoDisabled_"
                        :ch_indent="indent_"
                        :ch_cssVforCount="cssVforCount_+1" v-if="data_.children!=undefined" v-show="treeChildrenVshow">
    </hd-tree-children>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import emitter from 'src/utils/emitter';
  import hdTreeChildren from './TreeChildren.vue';
  import hdTreeContent from './TreeContent.vue';
  export default {
    name:'hd-tree-node',
    mixins: [emitter],
    componentName:'hd-tree-node',
    components:{
      hdTreeChildren,
      hdTreeContent
    },
    props:{
      showCheckbox_:[Boolean],
      multiple_:[Boolean],
      checkStrictly_:[Boolean],
      accordion_:[Boolean],
      defaultExpandAll_:[Boolean],
      childAutoDisabled_:[Boolean],
      indent_:[Number],
      cssVforCount_:[Number],
      data_:[Object],
      index_:[Number]
    },
    data(){
      return {
        is_content_click:this.defaultExpandAll_?true:(this.data_.expand?true:false),
        selected_:[Array],
        checked:[Array]
      }
    },
    computed: {
      tree_(){
        var parent = this.$parent;
        while (parent.$options.componentName !== 'hd-tree') {
          if(parent.$options.componentName == 'hd-tree-node'){
            this.selected_.push(parent.index_);
          }
          parent = parent.$parent;
        }
        return parent;
      },
      treeChildrenVshow(){
        if(this.accordion_){
          if(this.$parent.expandForAccordion==this.index_){
            this.is_content_click = true;
          }else{
            this.is_content_click = false;
          }
        }
        return this.is_content_click
      }
    },
//    beforeCreate:{},
//    created:{},
//    beforeMount:{},
    mounted(){
      this.selected_.push(this.index_);
//        this.$watch(
//            'data_',
//            function (newVal, oldVal) {
//                if(this.newVal.children){
//                    this.$children[0].show_content_icon_span = true;
//                }else{
//                    this.$children[0].show_content_icon_span = false;
//                }
//            },
//            {
//                deep: true
//            }
//        )
    },
    methods:{
      tree_node_handle_click(event){
        var old_selected=(this.tree_.selectedForData.length==1?null:this.tree_.selectedForData);
        if(this.accordion_){
          if(this.$parent.expandForAccordion==this.index_){
            this.$parent.expandForAccordion=-1;
          }
          else{
            this.$parent.expandForAccordion=this.index_;
          }
        }else{
          this.is_content_click=!this.is_content_click;
        }
        this.tree_.removeCls(this.tree_);
        this.tree_.selectedForData=this.selected_;
        this.tree_.addCls(this.selected_);
        if(old_selected!=null){
          var oldValue = this.tree_.getTreeContent(old_selected).data_;
        }else{
          var oldValue = [];
        }
        var newValue = this.tree_.getTreeContent(this.selected_).data_;
        this.tree_.$emit('selectChange',newValue,oldValue);
          {//通过发布了parentNode事件，参数给出了父节点的数据
              var parentNodeDate = {};
              if(this.tree_.getTreeContent(this.selected_) && this.tree_.getTreeContent(this.selected_).$parent.$options.componentName === "hd-tree"){
                  parentNodeDate.children  = this.tree_.getTreeContent(this.selected_).$parent.data;
                  parentNodeDate.text  = '...';
              } else if(this.tree_.getTreeContent(this.selected_) && this.tree_.getTreeContent(this.selected_).$parent.$options.componentName === "hd-tree-children") {
                  parentNodeDate = this.tree_.getTreeContent(this.selected_).$parent.$parent.data_;
              }
              this.tree_.$emit('parentNode',parentNodeDate);
          }
      },
      tree_node_checkbox_click(){
        if(!(this.multiple_)){
          this.tree_.removeClsForCheck(this.tree_);
          this.tree_.checkedForData=this.selected_;
          this.tree_.addClsForCheck(this.selected_);
        }
      },
      hasClass(elem, cls) {
        var str = " " + elem.className + " ";
        var testCls = " " + cls + " ";
        return (str.indexOf(testCls) != -1);
      }
    },
    watch:{
      defaultExpandAll_(val){
        this.is_content_click=val?true:(this.data_.expand?true:false);
      }
    }
  }
</script>
