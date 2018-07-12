<template>
  <div class="hd-tree-chldren">  <!--style="-webkit-animation: treeTran1 linear .5s;"-->
    <hd-tree-node :data_="item"
                    :index_="index"
                    :indent_="ch_indent"
                    :cssVforCount_="ch_cssVforCount"
                    :showCheckbox_="ch_showCheckbox"
                    :multiple_="ch_multiple"
                    :checkStrictly_="ch_checkStrictly"
                    :accordion_="ch_accordion"
                    :defaultExpandAll_="ch_defaultExpandAll"
                    :childAutoDisabled_="ch_childAutoDisabled"
                    v-for="(item, index) in this.ch_data">
    </hd-tree-node>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import emitter from 'src/utils/emitter';
  export default {
    name:'hd-tree-children',
    mixins: [emitter],
    componentName:'hd-tree-children',
    props:{
      ch_showCheckbox:[Boolean],
      ch_multiple:[Boolean],
      ch_checkStrictly:[Boolean],
      ch_accordion:[Boolean],
      ch_defaultExpandAll:[Boolean],
      ch_childAutoDisabled:[Boolean],
      ch_indent:[Number],
      ch_cssVforCount:[Number],
      ch_data:[Array]
    },
    data(){
      return {
        value_:this.value,
        is_content_click:false,
        content_checkbox_checked:true,
        expandForAccordion:-1
      }
    },
//    computed: {},
//    beforeCreate:{},
//    created:{},
//    beforeMount:{},
    mounted(){
      if(this.ch_accordion){
        if(this.ch_defaultExpandAll){this.expandForAccordion=this.ch_data.length-1;}
        else{
          for(var i=this.ch_data.length-1;i>=0;i--){
            if(this.ch_data[i].expand){this.expandForAccordion=i;break;}
          }
        }
      }
    },
    methods:{
    },
    watch:{
      ch_accordion(val){
        if(val){
          if(this.ch_defaultExpandAll){this.expandForAccordion=this.ch_data.length-1;}
          else{
            for(var i=this.ch_data.length-1;i>=0;i--){
              if(this.ch_data[i].expand){this.expandForAccordion=i;break;}
            }
          }
        }
      },
      ch_defaultExpandAll(val){
        if(this.ch_accordion){
          if(val){this.expandForAccordion=this.ch_data.length-1;}
          else{
            for(var i=this.ch_data.length-1;i>=0;i--){
              if(this.ch_data[i].expand){this.expandForAccordion=i;break;}
            }
          }
        }
      }
    }
  }
</script>
<!--<style>-->
  <!--@keyframes treeTran1 {-->
    <!--from {top: -30px;opacity: 0;}-->
    <!--to {top: 0;opacity: 1;}-->
  <!--}-->
<!--</style>-->
