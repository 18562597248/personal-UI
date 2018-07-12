<template>
  <div>
  <div v-if="this.type!='wired'">
    <div class="wizard" :class="stepCss" >
      <ul class="steps">
        <li v-for="(header,index) in headers" :class="header.style" @click="_isClick(header,index)">
          <span class="step">{{index+1}}</span>
          {{header.title}}
          <span class="chevron"></span>
        </li>
      </ul>
    </div>
    <div class="step-content">
      <slot></slot>
    </div>
    <div class="actions actions-footer">
      <slot name="footer"></slot>
    </div>
  </div>
  <div v-else>
    <div class="wizard wizard-wired">
      <ul class="steps">
        <li v-for="(header,index) in headers" :class="header.style"  @click="_isClick(header,index)">
          <span class="step">{{index+1}}</span>
          <span class="title">{{header.title}}</span>
          <span class="chevron"></span>
        </li>
      </ul>
    </div>
    <div class="step-content">
      <slot></slot>
    </div>
    <div class="actions actions-footer">
      <slot name="footer"></slot>
    </div>
  </div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  const cssPreFix = 'wizard-'
  export default{
    name: 'hd-steps',
    props: {
      active: {
        type: [Number,String],
        default:''
      },
      type: {
        validator(value){
          return isOneOf(value, ['simple', 'tabbed', 'wired'])
        }, default: 'simple'
      }
    },
    data(){
      return {
        headers: [],
        cur:''
      }
    },
    computed: {
      stepCss(){
        return [
          this.type ? cssPreFix + this.type : cssPreFix
        ]
      }
    },
    mounted(){
      this.cur=this.active
      this.cur--
      if(this.active){
        this.headers[this.cur].style = "active"
          /*迭代，将active之前的都设置为complete*/
        for (var i = 0; i < this.cur; i++) {
          this.headers[i].stycompletele = "complete"
        }
      }
    },
    methods: {
   /*
    *  可以鼠标点击当前步骤之前的步骤
    * header数组元素，index数组元素索引，event点击事件
    * */
      _isClick(header,index,event){
        if(header.style==="disabled") return
        this.cur=index
          for (var i = 0; i < this.cur; i++) {
            this.headers[i].style = "complete"
          } // 当前步前面所有的设为完成
        header.style = "active" //当前步为激活状态
        for(i=this.cur+1;i<this.headers.length;i++){
         this.headers[i].style="disabled"
       }    //当前步后面的所有步骤设为未完成
        this.$emit('click',event)
      },
     /*previous和next两个方法是对外暴露的方法，方便通过插槽添加两个事件对step组件进行操作 */
      previous() {
        if(this.cur>0) {
          this.headers[this.cur].style = "disabled"
          this.cur--
          this.headers[this.cur].style="active"
        }
      },
      next() {
      if(this.cur<this.headers.length-1){
        this.headers[this.cur].style="complete"
        this.cur++
        this.headers[this.cur].style="active"
      }
      }
    }
  }
</script>
<style>
  .wizard ul li {
    line-height: 46px;
    font-size: 14px;
  }
</style>
