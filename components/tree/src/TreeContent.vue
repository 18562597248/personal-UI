<template>
  <div class="hd-tree-content" :class="treeContentCls"
       :style="{'padding-left': (co_cssVforCount==undefined ? '0' : this.css_count_indent) + 'px'}"
       @click.stop="tree_content_handle_click">
    <span class="hd-tree-content-icon-span" v-if="!co_data.isleaf">
      <span class="fa fa-caret-down" v-if="treeChildrenVshow"></span>
      <span class="fa fa-caret-right" v-else></span>
    </span>
    <div class="hd-tree-content-icon-speace" v-else></div>
    <hd-checkbox class="hd-tree-content-checkbox" name="hd-tree-checkbox" :disabled="checkboxType" v-show="co_showCheckbox"
                 @change="content_checkbox_click"></hd-checkbox>
    <span class="hd-tree-content-icon-user-defined fa" :class="co_data.icon" v-if="co_data.icon"></span>
    <span class="hd-tree-content-text-span" v-if="co_data.text!=undefined">{{co_data.text}}</span>
  </div>
</template>
<script>
  import hdCheckbox from 'components/checkbox';
  import { isOneOf } from 'src/utils/validator.js';
  import emitter from 'src/utils/emitter';
  export default {
    name:'hd-tree-content',
    mixins: [emitter],
    componentName:'hd-tree-content',
    components:{
      hdCheckbox
    },
    props:{
      co_showCheckbox:[Boolean],
      co_multiple:[Boolean],
      co_checkStrictly:[Boolean],
      co_accordion:[Boolean],
      co_defaultExpandAll:[Boolean],
      co_childAutoDisabled:[Boolean],
      co_indent:[Number],
      co_cssVforCount:[Number],
      co_data:[Object],
      co_index:[Number]
    },
    data(){
      return {
        is_content_click:this.co_defaultExpandAll?true:(this.co_data.expand?true:false),
        content_checkbox_checked:[Boolean],
        css_count_indent:Number(this.co_indent)*Number(this.co_cssVforCount)
//        show_content_icon_span:true
      }
    },
    computed: {
      treeChildrenVshow(){
        if(this.co_accordion){
          if(this.$parent.$parent.expandForAccordion==this.co_index){
            this.is_content_click = true;
          }else{
            this.is_content_click = false;
          }
        }
        return this.is_content_click
      },
      treeContentCls(){
        return[
          (this.co_data.disabled) ? 'content-is-disabled' : ''
//          (this.co_data.checked) ? 'is-checked' :'is-empty'
        ]
      },
      checkboxType(){
        if(this.co_data.disableCheckbox){return true;}else{return false;}
      },
      co_tree(){
        var parent = this.$parent;
        while (parent.$options.componentName !== 'hd-tree') {
          parent = parent.$parent;
        }
        return parent;
      }
    },
//    beforeCreate:{},
//    created:{},
//    beforeMount:{},
    mounted(){
      this.selected_update(this);
      this.checked_update(this.$parent);
      this.letChildrenDisabled(this.$parent);
    },
    methods:{
      selected_update(ele){
        if((this.co_data.selected)){
          if(this.co_tree.oldEleForUpdateSelected!=null){
            this.co_tree.removeCls(this.co_tree);
            this.addClass(this.$el,'content-is-selected');
          }
          this.co_tree.oldEleForUpdateSelected=this;
          this.co_tree.selectedForData=this.$parent.selected_;
        }
      },
      checked_update(ele){
        if(this.co_data.checked){this.addClass(this.$el,'is-checked');}else {this.addClass(this.$el,'is-empty');}
        if((!this.co_checkStrictly)&&this.hasClass(ele.$children[0].$el,'is-checked')){
          if(this.co_multiple){
            this.this_check_add_children(ele);
            this.this_check_add_parent(ele);
            this.this_isAll_checked_parent_check(ele);
          } else {
            this.this_check_add_parent(ele);
            if((this.co_tree.oldEleForUpdateChecked!=null)){
              this.removeClass(this.co_tree.oldEleForUpdateChecked.$el,'is-checked');
              this.addClass(this.co_tree.oldEleForUpdateChecked.$el,'is-empty');
              this.this_isAll_emptyed_parent_empty(this.co_tree.oldEleForUpdateChecked.$parent);
            }
            this.co_tree.oldEleForUpdateChecked=this;
            this.co_tree.checkedForData=this.$parent.selected_;
          }
        }
      },
      this_check_add_children(ele){
        if(ele.$children[1]){
          for(let i= 0,j=ele.$children[1].$children.length;i<j;i++){
            if(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'is-checked')){
            }
            else if(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'is-indeterminate')){
              this.removeClass(ele.$children[1].$children[i].$children[0].$el,'is-indeterminate');
              this.addClass(ele.$children[1].$children[i].$children[0].$el,'is-checked');
              this.this_check_add_children(ele.$children[1].$children[i])
            }
            else if(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'is-empty')){
              this.removeClass(ele.$children[1].$children[i].$children[0].$el,'is-empty');
              this.addClass(ele.$children[1].$children[i].$children[0].$el,'is-checked');
              this.this_check_add_children(ele.$children[1].$children[i])
            }
          }
        }
      },
      this_check_add_parent(ele){
        if(ele.$parent.$options.componentName=='hd-tree-children'){
          if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-checked')){
            //若parent本就是checked，那么children不可能有从empty -> checked的转变。《《《 这里应当抛出异常》》》
          }
          else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate')){
          }
          else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-empty')){
            this.removeClass(ele.$parent.$parent.$children[0].$el,'is-empty');
            this.addClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate');
            this.this_check_add_parent(ele.$parent.$parent);
          }
        }
      },
      this_isAll_checked_parent_check(ele){
        if(ele.$parent.$options.componentName=='hd-tree-children'){
          let childAllChecked = true;
          for(let i= 0,j=ele.$parent.$children;i<j.length;i++){
            if(!(this.hasClass(ele.$parent.$children[i].$children[0].$el,'is-checked'))){
              childAllChecked = false;
              break;
            }
          }
          if(childAllChecked){
            if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-checked')){
            }
            else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate')){
              this.removeClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate');
              this.addClass(ele.$parent.$parent.$children[0].$el,'is-checked');
              this.this_check_add_parent(ele.$parent.$parent);
              this.this_isAll_checked_parent_check(ele.$parent.$parent);
            }
            else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-empty')){
              this.removeClass(ele.$parent.$parent.$children[0].$el,'is-empty');
              this.addClass(ele.$parent.$parent.$children[0].$el,'is-checked');
              this.this_check_add_parent(ele.$parent.$parent);
              this.this_isAll_checked_parent_check(ele.$parent.$parent);
            }
          }
        }
      },
      this_empty_add_children(ele){
        if(ele.$children[1]){
          for(let i= 0,j=ele.$children[1].$children.length;i<j;i++){
            if(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'is-checked')){
              this.removeClass(ele.$children[1].$children[i].$children[0].$el,'is-checked');
              this.addClass(ele.$children[1].$children[i].$children[0].$el,'is-empty');
            }
            else if(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'is-indeterminate')){
              this.removeClass(ele.$children[1].$children[i].$children[0].$el,'is-indeterminate');
              this.addClass(ele.$children[1].$children[i].$children[0].$el,'is-empty');
            }
            else if(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'is-empty')){
            }
            this.this_empty_add_children(ele.$children[1].$children[i])
          }
        }
      },
      this_empty_add_parent(ele){
        if(ele.$parent.$options.componentName=='hd-tree-children'){
          if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-checked')){
            this.removeClass(ele.$parent.$parent.$children[0].$el,'is-checked');
            this.addClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate');
          }
          else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate')){
          }
          else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-empty')){
//          《《《 这里应当抛出异常》》》
          }
          this.this_empty_add_parent(ele.$parent.$parent);
        }
      },
      this_isAll_emptyed_parent_empty(ele){
        if(ele.$parent.$options.componentName=='hd-tree-children'){
          let childAllEmptyed = true;
          for(let i= 0,j=ele.$parent.$children;i<j.length;i++){
            if(!(this.hasClass(ele.$parent.$children[i].$children[0].$el,'is-empty'))){
              childAllEmptyed = false;
              break;
            }
          }
          if(childAllEmptyed){
            if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-checked')){
              this.removeClass(ele.$parent.$parent.$children[0].$el,'is-checked');
              this.addClass(ele.$parent.$parent.$children[0].$el,'is-empty');
              this.this_empty_add_parent(ele.$parent.$parent);
              this.this_isAll_emptyed_parent_empty(ele.$parent.$parent);
            }
            else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate')){
              this.removeClass(ele.$parent.$parent.$children[0].$el,'is-indeterminate');
              this.addClass(ele.$parent.$parent.$children[0].$el,'is-empty');
              this.this_empty_add_parent(ele.$parent.$parent);
              this.this_isAll_emptyed_parent_empty(ele.$parent.$parent);
            }
            else if(this.hasClass(ele.$parent.$parent.$children[0].$el,'is-empty')){
            }
          }
        }
      },
      tree_content_handle_click(event){
        if(this.hasClass(this.$el,'content-is-disabled')){return;}
        if(event.target.className){
          if(!(event.target.name=='hd-tree-checkbox'||event.target.className=='text')){
            this.$emit('tree_content_click',event);
            if(!this.co_accordion){this.is_content_click=!this.is_content_click;}
          }
        }
      },
      content_checkbox_click(event){
        if(this.hasClass(this.$el,'content-is-disabled')){return;}
        let old_checked_data = this.co_tree.getCheckedNodes();
        if(this.hasClass(this.$el,'is-empty')){
          this.content_checkbox_checked = true;
          this.removeClass(this.$el,'is-empty');
          this.addClass(this.$el,'is-checked');
          if((!this.co_checkStrictly)){
            this.this_check_add_children(this.$parent);
            this.this_check_add_parent(this.$parent);
            this.this_isAll_checked_parent_check(this.$parent);
          }
        }else if(this.hasClass(this.$el,'is-indeterminate')){
          this.content_checkbox_checked = false;
          this.removeClass(this.$el,'is-indeterminate');
          this.addClass(this.$el,'is-checked');
          if((!this.co_checkStrictly)){
            this.this_check_add_children(this.$parent);
            this.this_check_add_parent(this.$parent);
            this.this_isAll_checked_parent_check(this.$parent);
          }
        }else if(this.hasClass(this.$el,'is-checked')){
          this.content_checkbox_checked = false;
          this.removeClass(this.$el,'is-checked');
          this.addClass(this.$el,'is-empty');
          if((!this.co_checkStrictly)){
            this.this_empty_add_children(this.$parent);
            this.this_empty_add_parent(this.$parent);
            this.this_isAll_emptyed_parent_empty(this.$parent);
          }
        }
        if(!(this.co_multiple)){//单选
          if(this.hasClass(this.$el,'is-checked')){
            this.$emit('content_checked_click',event);
            this.this_check_add_parent(this.$parent);
          } else {
            this.co_tree.checkedForData=[];
          }
        }
        let new_checked_data = this.co_tree.getCheckedNodes();
        this.co_tree.$emit('checkChange',new_checked_data,old_checked_data);
      },
      letChildrenDisabled(ele){
        if((this.co_childAutoDisabled)&&this.hasClass(ele.$children[0].$el,'content-is-disabled')){
          this.thisContetnDisabled(ele);
        }
      },
      thisContetnDisabled(ele){
        if(ele.$children[1]!=undefined){
          for(let i= 0,j=ele.$children[1].$children.length;i<j;i++){
            if(!(this.hasClass(ele.$children[1].$children[i].$children[0].$el,'content-is-disabled'))){
              this.addClass(ele.$children[1].$children[i].$children[0].$el,'content-is-disabled')
            }
            this.thisContetnDisabled(ele.$children[1].$children[i]);
          }
        }
      },
      addClass(elem, cls) { //Add Classes Function
        let oldCls = elem.className;
        if (oldCls) {
          oldCls += " ";
        }
        elem.className = oldCls + cls;
      },
      removeClass(elem, cls) { //Remove Classes Function
        let str = " " + elem.className + " ";
        elem.className = str.replace(" " + cls, "").replace(/^\s+/g, "").replace(/\s+$/g, "");
      },
      hasClass(elem, cls) {
        var str = " " + elem.className + " ";
        var testCls = " " + cls + " ";
        return (str.indexOf(testCls) != -1);
      }
    },
    watch:{
      co_indent(val){
        this.css_count_indent=Number(val)*Number(this.co_cssVforCount);
      },
      co_cssVforCount(val){
        this.css_count_indent=Number(this.co_indent)*Number(val)   ;
      },
      co_childAutoDisabled(val){
        this.letChildrenDisabled(this.$parent);
      }
    }
  }
</script>