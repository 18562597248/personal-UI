<template>
  <span>
    <div class="progress" :class="progressClass" v-if="pronormal">
      <div :id="id" class="progress-bar" :class="'progress-bar-' + this.color" role="progressbar"
           :aria-valuenow="this.value" aria-valuemin="0" aria-valuemax="100" :style="progressStyle">
        <span :class="this.textColor" v-if="text">{{text}}</span>
      </div>
    </div>
    <div class="progress-bar" :class="'progress-bar-' + this.color" :style="progressStyle" v-if="prostacked">
      <span :class="this.textColor" v-if="text">{{text}}</span>
    </div>
  </span>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import Emitter from 'src/utils/emitter';
  export default {
    name:'hd-progress',
    mixins: [Emitter],
    componentName: 'hd-progress',
    props: {
      id:{
        type: [String, Number],
        default:''
      },
      value:{
        type:[String, Number],
        default:'0'
      },
      text:{
        type:String
      },
      'text-color':{
        type:String,
        default:'white'
      },
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
      shadowed:Boolean,
      vertical:Boolean,
      bottom:Boolean,
      color:{
        validator(value){
          return isOneOf(value, ['', 'danger', 'success', 'info','warning','silver','blue','inverse','sky','azure','blueberry','palegreen',
            'orange','darkorange','magenta','purple','maroon'])
        },
        default: ''
      }
    },

    data(){
      return{
        pronormal:false,
        prostacked:false
      }
    },
    mounted:function(){
      if (this.$parent.$options.componentName == 'hd-progress-stacked') {
          this.prostacked=true;
      }else {
          this.pronormal = true
      }
    },
    computed:{
      progressClass(){
        return [
          this.size!='' ?'progress-'+this.size:'',
          this.noRadius ?'progress-no-radius':'',
          this.stripped ?'progress-striped':'',
          this.animated ?'active':'',
          this.bordered ?'progress-bordered':'',
          this.right ? 'progress-right':'',
          this.shadowed ? 'progress-shadowed':'',
          this.vertical ? 'progress-vertical':'',
          this.bottom ? 'progress-bottom':''
        ]
      },
      progressStyle(){
        if(this.vertical){
          return {height:this.value +'%'}
        }else{
          return {width:this.value +'%'}
        }
      }
    }
  }
</script>
