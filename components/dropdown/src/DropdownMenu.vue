<template>
  <ul :id="id" class="hd-dropdown-menu" :class="ulCls" @mousemove="move" @mouseout="out" @mousedown="down">
    <!-- ul`s style style="display: block; margin-bottom: 5px;"-->
    <hd-dropdown-item :li_data="item" :li_index="index" :li_parentChoiced="parentChoiced_" :font-color="textColor_" v-for="(item, index) in this.data_"></hd-dropdown-item>
  </ul>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import emitter from 'src/utils/emitter';
  const cssPreFix = 'dropdown-';
  export default {
    name:'hd-dropdown-menu',
    mixins: [emitter],
    componentName:'hd-dropdown-menu',
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      itemColor_:{
        validator(value){
          return isOneOf(value,['gray','info','primary','success','warning','danger','inverse','blue','blueberry','palegreen','orange','darkorange','magenta','purple','maroon'])
        },
        default:'gray'
      },
      bgColor_:{
        validator(value){
          return isOneOf(value,['white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
      textColor_:{
        validator(value){
          return isOneOf(value,['black','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'black'
      },
      data_: {
        type: Array
      },
      parentChoiced_:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      ulCls(){
        return[
          this.data_ ? 'dropdown-menu' : '',
          this.itemColor_==='gray' ? '': cssPreFix+this.itemColor_,
          this.bgColor_==='white' ? '' : 'bg-'+this.bgColor_
        ]
      }
    },
    mounted() {},
    methods: {
      move(event){
        this.$emit('mousemove',event);
      },
      out(event){
        this.$emit('mouseout',event);
      },
      down(event){
        this.$emit('mousedown',event);
      }
    }
  }
</script>
