<template>
  <div class="progress" :class="proClass">
   <slot></slot>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import Emitter from 'src/utils/emitter';
  export default {
    name: 'hd-progress-stacked',
    mixins: [Emitter],
    componentName:'hd-progress-stacked',
    props: {
      size:{
        validator(value){
          return isOneOf(value, ['', 'xxs', 'xs', 'sm','lg','xlg'])
        },
        default: ''
      },
      'no-radius':Boolean,
      stripped:Boolean,
      animated:Boolean,
      bordered:Boolean,
      right:Boolean,
      shadowed:Boolean
    },
    computed:{
      proClass(){
        return [
          this.size!='' ?'progress-'+this.size:'',
          this.noRadius ?'progress-no-radius':'',
          this.stripped ?'progress-striped':'',
          this.animated ?'active':'',
          this.bordered ?'progress-bordered':'',
          this.right ? 'progress-right':'',
          this.shadowed ? 'progress-shadowed':''
        ]
      }
    }
  };
</script>
