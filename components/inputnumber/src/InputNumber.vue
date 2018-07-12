<template>
  <div class="input-group">
    <input :id="id" type="text" class="form-control" :value="value_" :disabled="disabled" :readonly="readonly || !editable"  @input="handleInput" @blur="handleBlur" @focus="handleFocus">
    <span class="input-group-addon" style="padding: 0px; border: 0;">
      <div class="btn-group-vertical" style="margin: 0; position: static;">
        <a class="btn btn-noRadius btn-default" :disabled="disabled || readonly" style="height: 17px;padding: 0px 10px;border-left: 0;" @click="add">
          <span class="fa fa-angle-up" style="margin: 0 2px;font-size: 17.9px;"></span>
        </a>
        <a class="btn btn-noRadius btn-default" :disabled="disabled || readonly" style="height: 17px;padding: 0px 10px;border-left: 0;" @click="mins">
          <span class="fa fa-angle-down" style="margin: 0 2px;font-size: 17.9px;"></span>
        </a>
      </div>
    </span>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import emitter from 'src/utils/emitter';
  export default {
    name:'hd-input-number',
    mixins: [emitter],
    componentName:'hd-input-number',
    props: {
      id:{
        type: [String,Number],
        default:''
      },
      value:{
        type: [Number],
        default:0
      },
      max:{
        type: [Number],
        default:Number.POSITIVE_INFINITY
      },
      min:{
        type: [Number],
        default:Number.NEGATIVE_INFINITY
      },
      step:{
        type: [Number],
        default:1
      },
      readonly:{
        type: [Boolean],
        default:false
      },
        editable:{
            type:Boolean,
            default:true
        },
      disabled:{
        type: [Boolean],
        default:false
      }
    },
    data(){
      return{
        value_ : this.value,
        add_end:{
          type: [Number],
          default:0
        },
        mins_end:{
          type: [Number],
          default:0
        },
        point:0
      }
    },
    computed:{},
    mounted(){
      this.isInLimti(this.value);
      this.pointCount();
    },
    methods:{
      add(){
        if(this.disabled){return;}
        this.add_end = Number((Number(this.value_)*Math.pow(10,this.point)+this.step*Math.pow(10,this.point))/(Math.pow(10,this.point))).toFixed(this.point);
        this.isInLimti(this.add_end);
      },
      mins(){
        if(this.disabled){return;}
        this.mins_end = Number((Number(this.value_)*Math.pow(10,this.point)-this.step*Math.pow(10,this.point))/(Math.pow(10,this.point))).toFixed(this.point);
        this.isInLimti(this.mins_end);
      },
      handleBlur(event) {
        this.isInLimti(event.target.value,event);
        this.$emit('blur', event);
        this.dispatch('hd-formitem', 'form.blur',[this.value_]);
      },
      handleFocus(event){
        this.isInLimti(event.target.value,event);
        this.$emit('focus', event);
      },
      handleInput(event) {
        var oldVal = event.target.value;
        this.isInLimti(event.target.value,event);
        this.pointCount(event.target.value);
        this.$emit('input',this.value_);
        this.$emit('change',this.value_,oldVal);
        this.dispatch('hd-formitem', 'form.change', [this.value_]);
      },
      isInLimti(num,event){
        if(this.min<=Number(num)&&Number(num)<=this.max){this.value_=num;}
        else if(this.min>Number(num)){this.value_=this.min;}
        else if(Number(num)>this.max){this.value_=this.max;}
        if(event!=undefined){event.target.value=this.value_;}
      },
      pointCount(keyDownVal){
        var stepCount = ((this.step.toString().split(".")[1])!=undefined)?this.step.toString().split(".")[1].length:0;
        var keyDownCount = 0;
        if(keyDownVal!=undefined){keyDownCount = ((keyDownVal.toString().split(".")[1])!=undefined)?keyDownVal.toString().split(".")[1].length:0;}
        this.point = Math.max(stepCount,keyDownCount);
      }
    },
    watch:{
      value(val){
        this.isInLimti(val);
      },
      step(){
        this.pointCount();
      }
    }
  }
</script>
