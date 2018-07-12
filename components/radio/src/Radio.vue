<template>
  <div :class="cls" style="padding-left: 0px;padding-top: 0px;">
    <div class="radio">
    <label>
      <input :name="name" type="radio" :disabled="this.disabled" :class="radCls"
             :value="initvalue"
             v-model="model"
             @focus="focus = true"
             @blur="focus = false"
      >
      <span class="text">
        <slot></slot>
        </span>
    </label>
    </div>
  </div>
</template>
<script>
  const prefixCls = 'colored-';
  const fixCls = 'radio';
  const Cls = 'radio-inline';
  import { isOneOf } from 'src/utils/validator.js'
  import Emitter from 'src/utils/emitter';
  export default {
    name: 'hd-radio',
    mixins: [Emitter],
    componentName: 'hd-radio',
    props: {
      id:{
        type:[String,Number],
        default:''
      },
      type:{
        type: String,
        validator(value){
          return isOneOf(value,['basic','inverted','disabled'])
        },default:'basic'
      },
     'selected-color':{
        validator(value){
          return isOneOf(value,['black','white','blue','primary','danger','success','warning','silver','blueberry','palegreen','orange','darkorange','magenta','purple','maroon'])
        },default:'black'
      },
      label:{},
      initvalue: {
        type:[String,Number]
      },
      value:{},
      name:String
    },
    data:function(){
      return{
        focus: false,
        disabled:false
      }
    },
    computed: {
      radCls(){
        return[
           this.type ? this.type : '' ,
//          this.$parent.type ? this.$parent.type:(this.type ? this.type : ''),
           this.$parent.color? prefixCls+this.$parent.color :(this.selectedColor!='black' ? prefixCls+this.selectedColor:'')
          ]
        },
        /*
        遍历hd-radio组件的父组件,如果父组件是hd-radio-group就返回true，如果没有找到父组件,就传递本组件的值。
        * */
      inGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'hd-radio-group') {
            parent = parent.$parent;
          } else {
            this.radioGroup = parent;
            return true;
          }
        }
        return false;
      },
        /*
        * 1、get方法作用：如果this.inGroup==true说明子组件在父组件hd-radio-group中，就使用hd-radio-group 传递给子组件hd-radio的值；如果this.inGroup==false，就是用当前组件本身的值。
        * 2、在set方法里实现数据双向绑定
        *
        * */
      model: {
        get() {
          return this.inGroup ? this.radioGroup.value : this.value;
        },
        set(val) {
          if (this.inGroup) {
            this.dispatch('hd-radio-group', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },

      cls () {
        if (!this.$parent.inline) {
          return `${Cls}`
        } else {
          return `${fixCls}`
        }
      }
    },
    mounted(){
      if(this.type==='disabled'){this.disabled=true;}else{this.disabled=false;}
    },
    watch:{
      type(val){
        if(val==='disabled'){this.disabled=true;}else{this.disabled=false;}
      }
    }
  }
</script>

