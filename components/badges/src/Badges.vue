<template>
  <span :id="id" class="hd-badge" :class="spanCls">
    {{this.show_text}}
  </span>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js';
  const cssPreFix='badge-';
  export default {
    name:'hd-badge',
    props:{
      id:{
        type:[String, Number],
        default:''
      },
      text:{
        type:[Number],
        default:1
      },
      limit:{
        type:[Number],
        default:9
      },
      bgColor:{
        validator(value){
          return isOneOf(value,['default','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'default'
      },
      textColor:{
        validator(value){
          return isOneOf(value,['black','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
      size:{
        validator(value){
          return isOneOf(value,['normal','sm'])
        },
        default:'normal'
      },
      shape:{
        validator(value){
          return isOneOf(value,['circle','square'])
        },
        default:'circle'
      },
      bgGraded:Boolean
    },
    data:function(){
      return{
        show_text:''
      }
    },
    computed:{
      spanCls(){
        if(this.text>this.limit){
          this.show_text=this.limit+'+';
        }else{
          this.show_text=this.text;
        }
        return[
          this.text ? 'badge' : '',
          this.textColor ? this.textColor : '',
          this.bgColor ? 'badge-'+this.bgColor : '',
          this.shape==='circle' ? '' : 'badge-'+'square',
          this.bgGraded ? 'graded' : '',
          this.size==='normal' ? '' : 'badge-'+'empty'
        ]
      }
    },
    methods:{}
  }
</script>
