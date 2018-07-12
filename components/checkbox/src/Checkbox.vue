<template>
  <label style="cursor:pointer;text-align: center; ">
    <input :id="id" type="checkbox" :class="checkboxCss" :disabled="disabled" :checked="checked" @change="handleChange" @focus="focus = true"
           @blur="focus = false" :value="initvalue" :name="name" v-model="model">
    <span class="text" :class="this.textColor"><slot></slot></span>
  </label>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import Emitter from 'src/utils/emitter';
  const cssPreFix = 'colored-';
  const Cls = 'checkbox-inline';
  const fixCls = 'checkbox';
  export default {
    name: 'hd-checkbox',
    mixins: [Emitter],
    componentName: 'hd-checkbox',
    props: {
      id:{
        type: [String, Number],
        default:''
      },
      name: String,
      initvalue:{},
      value:{},
      checked:{
        type:Boolean,
        default:false
      },
      disabled:{
        type:Boolean,
        default:false
      },
      type: {
        validator(value){
          return isOneOf(value, ['inverted'])
        }
      },
      'text-color':{
        type:String,
        default:''
      },
      'selected-color': {
        validator(value){
          return isOneOf(value, ['black','blue','primary','silver','inverse','blueberry',
            'palegreen','orange','darkorange','magenta','purple','maroon','warning','success','danger'])
        },
        default:'black'
      }
    },
    data:function(){
      return{
        diasbled:false,
        selfModel: false,
        focus: false
      }
    },
    computed:{
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'hd-checkbox-group') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },
      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },
      model: {
        get() {
          return this.isGroup
            ? this.store : this.value !== undefined
            ? this.value : this.selfModel;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('hd-checkbox-group', 'input', [val]);
          } else if (this.value !== undefined) {
            this.$emit('input', val);
          } else {
            this.selfModel = val;
          }
        }
      },
      checkboxCss(){
        if(this.type=='inverted'){
          return 'inverted colored-'+ this.selectedColor
        }
        else if(this.type=='disabled'){
          return this.diasbled=true
        }
        else{
          return [
            cssPreFix + this.selectedColor
          ]
        }
      },
   /*   cls () {
        if(!this.$parent.inlined){
          return [
            `${Cls}`,
            this.textColor
          ]
        }else{
          return [
            `${fixCls}`,
            this.textColor
          ]
        }
      }*/
    },
    methods:{
          /**
           *根据checked这一prop来决定是否调用addToStore方法
           *如果 model 是数组，且不包含 initvalue，就加入initvalue
           * 否则 model 设置为true
           * */
          addToStore() {
              if (
                  Array.isArray(this.model) &&
                  this.model.indexOf(this.initvalue) === -1
              ) {
                  this.model.push(this.initvalue);
              } else {
                  this.model = true;
              }
          },
          /**
           * change触发方法
           *{object} ev 点击触发的事件
           *获取目标的checked，发布change事件
           * 判断是否是一组
           * 在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM,发布group的change事件
           * */
          handleChange(ev) {
              const checked = ev.target.checked;
              this.$emit('change', ev,checked);
              if (this.isGroup) {
                  this.$nextTick(_ => {
                      this.dispatch('hd-checkbox-group', 'change', [this._checkboxGroup.value]);
              });
              }
          }
      },
    created() {
      this.checked && this.addToStore();
    }
  }
</script>
<style>
  .colored-black{
    color:black
  }
  input[type=checkbox].colored-blue.inverted:checked ~ .text:before{
    background-color: #5db2ff;
    border-color: #5db2ff;
    color: #ffffff;
  }
  input[type=checkbox].colored-primary.inverted:checked ~ .text:before{
    background-color: #4374e0;
    border-color: #4374e0;
    color: #ffffff;
  }
  input[type=checkbox].colored-white.inverted:checked ~ .text:before{
    background-color: #333333;
    border-color: #333333;
    color: #ffffff;
  }
  input[type=checkbox].colored-danger.inverted:checked ~ .text:before{
    background-color: #d73d32;
    border-color: #d73d32;
    color: #ffffff;
  }
  input[type=checkbox].colored-success.inverted:checked ~ .text:before{
       background-color: #53a93f;
       border-color: #53a93f;
       color: #ffffff;
     }
  input[type=checkbox].colored-warning.inverted:checked ~ .text:before{
    background-color: #f4b400;
    border-color: #f4b400;
    color: #ffffff;
  }
  input[type=checkbox].colored-silver.inverted:checked ~ .text:before{
    background-color: #777777;
    border-color: #777777;
    color: #ffffff;
  }
  input[type=checkbox].colored-blueberry.inverted:checked ~ .text:before{
    background-color: #6f85bf;
    border-color: #6f85bf;
    color: #ffffff;
  }
  input[type=checkbox].colored-palegreen.inverted:checked ~ .text:before{
    background-color: #a0d468;
    border-color: #a0d468;
    color: #ffffff;
  }
  input[type=checkbox].colored-orange.inverted:checked ~ .text:before{
    background-color: #fb6e52;
    border-color: #fb6e52;
    color: #ffffff;
  }
  input[type=checkbox].colored-darkorange.inverted:checked ~ .text:before{
    background-color: #ed4e2a;
    border-color: #ed4e2a;
    color: #ffffff;
  }
  input[type=checkbox].colored-magenta.inverted:checked ~ .text:before{
    background-color: #bc5679;
    border-color: #bc5679;
    color: #ffffff;
  }
  input[type=checkbox].colored-purple.inverted:checked ~ .text:before{
    background-color: #7e3794;
    border-color: #7e3794;
    color: #ffffff;
  }
  input[type=checkbox].colored-maroon.inverted:checked ~ .text:before{
    background-color: #981b48;
    border-color: #981b48;
    color: #ffffff;
  }
</style>
