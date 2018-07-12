<template>
  <li ref="hd_dropdown_item_li" :id="id" class="hd-dropdown-item" :class="liCls">
    <a :class="aCls" style="padding-right: 41px;" v-if="!this.li_data.divider" @click="handlerclick">
      <hd-icon :type="this.li_data.icon.type" :color="this.li_data.icon.color" :bg-color="this.li_data.icon.bgColor" :circular="this.li_data.icon.circular" v-if="this.li_data.icon"></hd-icon>
      {{this.li_data.text}}
      <hd-badge :text="this.li_data.badge.text" :bg-color="this.li_data.badge.bgColor" :limit="this.li_data.badge.limit" :shape="this.li_data.badge.shape" :size="this.li_data.badge.size" :pullRight="this.li_data.badge.pullRight" style="position: absolute; right:10px; " v-if="this.li_data.badge"></hd-badge>
      <hd-icon type="fa fa-angle-right" style="position: absolute; top: 5px;right: 5px; font-size: 13px; " v-if="this.li_data.children"></hd-icon>
    </a>
    <hd-dropdown-menu :data_="this.li_data.children" :parentChoiced_="li_parentChoiced" v-if="this.li_data.children"></hd-dropdown-menu>
  </li>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js';
  import emitter from 'src/utils/emitter';
  const cssPreFix = 'dropdown-';
  export default {
    name:'hd-dropdown-item',
    mixins: [emitter],
    componentName:'hd-dropdown-item',
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      li_data: {
        type: Object
      },
      li_index:{
        type: Number
      },
      li_parentChoiced:{
        type:Boolean
      },
      fontColor:{
        type:String
      },
      divider:Boolean
    },
    computed:{
      dropdown_(){
        var parent = this.$parent;
        while (parent.$options.componentName !== 'hd-dropdown') {
          parent = parent.$parent;
        }
        return parent;
      },
      liCls(){
        return [
          this.li_data.divider ? 'divider' : '',
          (this.li_data.children&&!this.li_data.divider) ? 'dropdown-hover' : '',
          this.li_data.children===undefined||this.li_parentChoiced ? '' : 'hd-dropdownitem-default',
          this.li_data.disabled ? 'hd-dropdownitem-disabled' : ''
        ]
      },
      aCls(){
        return[
          this.li_data.disabled ? 'gray' : this.fontColor,
          (this.li_data.children&&!this.li_data.divider) ? 'clearfix' : ''
        ]
      }
    },
    mounted(){},
    methods: {
      handlerclick(event){
        if(this.li_data.disabled){return;}
        if(this.li_data.children!==undefined&&!this.li_parentChoiced){return;}
        this.dropdown_.$emit('click-item',event,this.li_index,this.li_data,this.$el);
        this.dropdown_.dropdown_menu_hide();
      }
    }
  }
</script>
