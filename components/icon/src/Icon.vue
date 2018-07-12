<template>
  <i :class="classes" @click="iconClick"></i>
</template>
<script>
  const prefixCls = 'bg';
  const prefix = 'circular';
  import { isOneOf } from 'src/utils/validator.js'
  export default {
    name:'hd-icon',
    props: {
      type:{
        type: String,
        required: true
      },
      color:{
        validator(value){
          return isOneOf(value,['blue','sky','azure','palegreen','yellow','darkorange','magenta','purple','maroon','darkpink','lightcarbon','red','info','success','warning','danger'])
        }
      },
      'bg-color':{
        validator(value){
          return isOneOf(value,['darkcarbon','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','white','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        }
      },
      circular: Boolean
    },
    computed: {
      classes () {
        if(this.circular){
          return [
            `${prefix}`,
            {
              [`${this.type}`]: this.type,
              [`${this.color}`]: this.color,
              [`${prefixCls}-${this.bgColor} `]: this.bgColor
            }
          ];
          //return `${this.type} ${this.color} circular ${prefixCls}-${this.bgColor}`;
        }else{
          return [
            {
              [`${this.type}`]: this.type,
              [`${this.color}`]: this.color,
              [`${prefixCls}-${this.bgColor} `]: this.bgColor
            }
          ];
        // return `${this.type} ${this.color} ${prefixCls}-${this.bgColor}`;
        }
      }
    },
    methods: {
      iconClick(event) {
        this.$emit('click',event)
      }
    }
  };
</script>
