<template>
 <div>
    <label>
      <input :id="id" class="checkbox-slider" :class="swiCls" type="checkbox" :disabled="disable"
             v-model="_value"
             @change="handleChange"
      >
         <span class="text">
        <slot></slot>
        </span>
    </label>
  </div>
</template>
<script>
  const SwCls = 'colored-';
  import { isOneOf } from 'src/utils/validator.js'
  import Emitter from 'src/utils/emitter';
  export default{
    name: 'hd-switch',
    props:{
        id:{
        type:[String,Number],
        default:''
      },
      'on-text':{
        type:String,
        default:''
      },
      'off-text':{
        type:String,
        default:''
      },
      type:{
        validator(value){
          return isOneOf(value,['default','slider-icon','toggle'])
        },default:'default'
      },
      disabled:Boolean,
      value: {
        type: Boolean,
        default: false
      },
      color:{
        validator(value){
          return isOneOf(value,['blue','danger','palegreen','black','primary','success','purple','warning','magenta','darkorange'])
        },default:'primary'
      },
      id:{}
    },
    methods:{
      handleChange(event) {
        this.$emit('change', event.currentTarget.checked);
      }
    },
    data:function(){
      return{
        focus: false,
        disable:false,
      }
    },
    mounted(){
      if(this.disabled){
        this.disable=true;
      }else{
        this.disable=false;
      };
    },
    watch:{
      disabled(val){
        this.disable=val;
      }
    },
    computed:{
      swiCls(){
        return [
          this.onText && this.offText ? this.onText + this.offText : '',
          this.type ? this.type : '',
          this.disable ? this.color=='black' : (this.color != 'black' ? SwCls + this.color : '')
        ]
      },
        /*v-modal绑定的对象*/
      _value: {
        get() {
//          console.log(this.value)
          return this.value;
        },
          /*数值变化后发布一个input事件*/
        set(val) {
          this.$emit('input', val);
        }
      }
    }
  }
</script>

