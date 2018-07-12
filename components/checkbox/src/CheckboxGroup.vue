<template>
  <div class="hd-checkbox-group" :class="this.textColor">
    <div  style="padding-left: 0px;padding-top: 0px;">
      <div class="checkbox">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import Emitter from 'src/utils/emitter';
  export default {
    name: 'hd-checkbox-group',
    mixins: [Emitter],
    componentName:'hd-checkbox-group',
    props: {
      inlined:true,
      value: {},
      'text-color':{
        type:String,
        default:'black'
      }
    },
    watch: {
      value(value) {
        this.dispatch('hd-formitem', 'form.change', [value]);
      }
    }
  };
</script>
