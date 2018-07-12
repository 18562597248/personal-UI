<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <div :id="id" :class="[this.titleColor,'bg-'+this.titleBgColor,{'accordion-toggle':isAccordion}]" @click="isAccordion&&toggle()">
          <slot name="title"></slot> {{ title }}
        </div>
      </h4>
    </div>
    <transition name="collapse" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
      <div class="panel-collapse" v-if="open">
        <div class="panel-body" :class="['bordered-'+this.titleBgColor,'bg-'+bodyBgColor]">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Emitter from 'src/utils/emitter';
  export default {
    name:'hd-collapse-item',
    componentName:'hd-collapse-item',
    mixins: [Emitter],
    props: {
      id:{
        type: [String, Number],
        default:''
      },
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      title: {
        type: String,
        default:''
      },
      'title-color':{
        type:String,
        default:''
      },
      'title-bg-color':{
        type:String,
        default:'defult'
      },
      'body-bg-color':{
        type:String,
        default:'defult'
      }
//      expanded: {
//        type: Boolean,
//        default: null
//      }
    },
//    data() {
//      return {
//        open: this.expanded
//      }
//    },
//    watch: {
//      expanded( val ) {
//        this.open = val
//      }
//    },
    computed: {
      isAccordion () {
        return this.$parent._isAccordion
      },
      open(){
        if(this.$parent.activeNames.indexOf(this.name) > -1){
          return true
        }else{
          return false
        }
      }
    },
    methods: {
        /**
         * open切换方法
         *发布点击事件
         * 判断isAccordion（手风琴模式）
         * 对父组件传递参数（当前点击的对象)
         * */
        toggle () {
            this.open = !this.open
            this.dispatch('hd-collapse', 'item-click', this);
            if (this.isAccordion) {
                this.$parent.openChild(this)
            }
        },
        /**
         * JavaScript 钩子 进入过渡的开始状态
         *{object} el 点击的元素
         * */
        enter (el) {
            el.style.height = 'auto'
            var endWidth = getComputedStyle(el).height
            el.style.height = '0px'
            el.offsetHeight
            el.style.height = endWidth;
        },
        /**
         * JavaScript 钩子 进入过渡的开始后状态
         *{object} el 点击的元素
         * */
        afterEnter (el) {
            el.style.height = 'auto'
        },
        /**
         * JavaScript 钩子 离开过渡的开始状态
         *{object} el 点击的元素
         * */
        beforeLeave (el) {
            el.style.height = getComputedStyle(el).height
            el.offsetHeight
            el.style.height = '0px'
        }
    }
//    created () {
//      if (this.expanded === null) {
//        this.open = !this.isAccordion
//      }
//    }
  }
</script>

<style>
  .accordion-toggle {
    cursor: pointer;
  }
  .collapse-enter-active,
  .collapse-leave-active {
    transition: all .5s ease;
    overflow: hidden;
  }
  .collapse-enter,
  .collapse-leave-active {

  }
</style>


