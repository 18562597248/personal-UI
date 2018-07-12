<template>
  <div :class="pullClass">
    <span :id="id" :class="bgClass">
      <div :style="alignStyle" v-if="align">
        <span v-html="text">
        </span>
        <slot></slot>
       </div>
      <div v-if="pointalign">
        <span class="Chinese-align" v-html="text">
        </span>
        <slot></slot>
      </div>
      <div v-if="justify">
        <span style="display: block;" class="Chinese-align"  :class="justifyClass" v-html="text"></span>
        <slot></slot>
    </div>
    </span>
  </div>
</template>
<script>
  const cssPreFix = 'label label-';
  const graded = 'graded label label-';
  import { isOneOf } from 'src/utils/validator.js'
  export default{
    name:'hd-label',
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      text: {
        type: String,
        default: ''
      },
      'text-align':{
        validator(value){
          return isOneOf(value, ['left','right','justify'])
        },
        default:'right'
      },
      'pull-right':{
        type:Boolean,
        default:true
      },
      'text-color':{
        type:String,
        default:'black'
      },
      'bg-graded':{
        type:Boolean,
        default:false
      },
      'bg-color':{
        validator(value){
          return isOneOf(value, ['white','default','blue','info','sky','primary','azure','blueberry','palegreen','success',
            'green','lightyellow','yellow','warning','gold','orange','lightred','red','darkorange','darkpink','pink','snow',
            'danger','magenta','purple','maroon'])
        },
        default:'snow'
      }
    },
    data:function(){
      return{
        justify:false,
        pointalign:false,
        align:false
      }
    },
    mounted:function(){
      if(this.textAlign=='justify'&&this.text.length<=4){
        this.justify=true
      }else{
        if(this.text.match(/[/\\,，.。*|、；;'‘’“”"^&%$#@!~`·！￥（）()-_=+—-？《》<>]/)){
          this.pointalign=true
        }else{
          this.align=true
        }
      }
    },
    computed:{
      pullClass(){
        return this.pullRight ? 'no-padding-right pull-right':'no-padding-right'
      },
      bgClass(){
        if(this.bgGraded==false){
          return [
            this.bgColor ? cssPreFix + this.bgColor:cssPreFix +'white',
            this.textColor
          ]
        }else{
          return [
            graded + this.bgColor,
            this.textColor
          ]
        }
      },
      alignStyle(){
        if(this.text.length<=4){
          return {
            'width':'5em',
            'flot':this.textAlign,
            'text-align':this.textAlign
          }
        }else{
          return {
            'width':(this.text.length+1)+'em',
            'flot':this.textAlign,
            'text-align':this.textAlign
          }
        }
      },
      justifyClass(){
        if(this.text.length<=4){
          if(this.text.length==1){
            return 'one-em'
          }
          else if(this.text.length==2){
            return 'two-em'
          }
          else if(this.text.length==3){
            return  'three-em'
          }
        }
      }


    }
  }
</script>

