<template>
  <div class="hd-radio-group control-group pull-left">
    <slot></slot>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator'
  import Emitter from 'src/utils/emitter';
  export default {
    name: 'hd-radio-group',
    mixins: [Emitter],
    componentName: 'hd-radio-group',
    props: {
      id:{
        type:[String,Number],
        default:''
      },
      color: {
        validator(value){
            return isOneOf(value,['black','white','blue','primary','danger','success','warning','silver','blueberry','palegreen','orange','darkorange','magenta','purple','maroon'])
        }
      },
      disabled:{
        type:[Boolean],
       default:false
      },
      inline:true,
      value: {}
    },
      /*钩子函数
      * 挂接数据，如果this.disabled==true,就需要把hd-radio-group中的值传递给子组件，通过父组件来改变子组件的值。
      * */
    mounted(){
      if(this.disabled){
      for (var i=0;i<this.$children.length;i++){
          this.$children[i].$data.disabled=true;
      }
  }
    },
      //通过watch监听值的变化
    watch: {
      value(value) {
        this.$emit('change', value);
        this.dispatch('hd-formitem', 'form.change', [this.value]);
      },
      disabled(val){
        for (var i = 0; i < this.$children.length; i++) {
          if(this.disabled){
            this.$children[i].$data.disabled = true;
          } else {
            this.$children[i].$data.disabled = false;
          }
        }
      }
    }
  }
</script>
<style>
  .radio-inline+.radio-inline {
    margin-top: 0;
    margin-left: 0px;
  }
</style>

