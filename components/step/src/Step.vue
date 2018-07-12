<template>
<div :class="bodyCss">
  <!--<p>{{this.content}}</p>-->
  <slot></slot>
</div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  const cssPreFix = 'step-pane'
  export default{
    name:'hd-step',
    props:{
      title:String,
//      content:String,
      id:[String,Number],
      stepstyle: {
        type:String,
        default: 'disabled'
      }
    },
   computed:{
      bodyCss(){
        for (var i = 0; i < this.$parent.headers.length; i++) {
          if (this.$parent.headers[i].stepstyle === "active") {
            let id= parseInt(this.id)//为组件添加唯一的id，而且此处要将id转换成整型
            id--
            if(id===this.$parent.cur){
               return  `${cssPreFix} active`
            }
            else{
              return `${cssPreFix}`
            }
          }
        }
      }
    },
    mounted(){
        /*将子组件中的props属性以及样式push到父组件*/
      let _this = {title:this.title,style:this.stepstyle};
      this.$parent.headers.push(_this)
    }
  }
</script>
