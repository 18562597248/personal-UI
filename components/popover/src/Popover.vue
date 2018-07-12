<template>
  <span ref="trigger">
    <slot></slot>
    <transition :name="effect">
      <div ref="popover" v-if="show" :class="popoverClass">
        <div class="arrow"></div>
        <h4 class="popover-title" :class="[this.titleTextColor,'bordered-'+this.separateColor]" v-if="title"><slot name="title">{{title}}</slot></h4>
        <div :id="id" class="popover-content"><slot name="popover-content"></slot></div>
      </div>
    </transition>
  </span>
</template>

<script>
  import PopoverMixin from 'src/utils/tooltip/popoverMixins.js'
  import { isOneOf } from 'src/utils/validator.js'
  export default {
    name:'hd-popover',
    mixins: [PopoverMixin],
    props: {
      id:{
        type: [String, Number],
        default:''
      },
      title: {
        type: String,
        default: ''
      },
      'title-text-color':{
        type: String,
        default: ''
      },
      trigger: {
        validator(value){
          return isOneOf(value, ['hover', 'click', 'focus', 'contextmenu'])
        },
        default: 'hover'
      },
      'bg-color':{
        type:String,
        default:''
      },
      'separate-color':{
        type:String,
        default:'themeprimary'
      },
      type: {
        validator(value){
          return isOneOf(value, ['','dark', 'inverted'])
        },
        default:''
      },
      placement: {
        validator(value){
          return isOneOf(value, ['top', 'left', 'right', 'bottom'])
        },
        default:'top'
      }
    },
    computed:{
      popoverClass(){
        if(this.type!=''){
          return ['popover '+this.type,this.placement]
        }else{
          return ['popover '+this.bgColor,this.placement]
        }
      }
    }
  }
</script>

<style>
  .popover.top,
  .popover.left,
  .popover.right,
  .popover.bottom {
    display: table;
  }
  .scale-enter {
    animation:scale-in 0.15s ease-in;
  }
  .scale-leave-active {
    animation:scale-out 0.15s ease-out;
  }
  @keyframes scale-in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-out {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  .popover.themeprimary {
    background-color: #2dc3e8 !important;
  }
  .popover.themeprimary .popover-title {
    background-color: #2dc3e8 !important;
  }
  .popover.themeprimary.top .arrow:after {
    border-top-color: #2dc3e8 !important;
  }
  .popover.themeprimary.bottom .arrow:after {
    border-bottom-color: #2dc3e8 !important;
  }
  .popover.themeprimary.left .arrow:after {
    border-left-color: #2dc3e8 !important;
  }
  .popover.themeprimary.right .arrow:after {
    border-right-color: #2dc3e8 !important;
  }
  .popover.themesecondary {
    background-color: #fb6e52 !important;
  }
  .popover.themesecondary .popover-title {
    background-color: #fb6e52 !important;
  }
  .popover.themesecondary.top .arrow:after {
    border-top-color: #fb6e52 !important;
  }
  .popover.themesecondary.bottom .arrow:after {
    border-bottom-color: #fb6e52 !important;
  }
  .popover.themesecondary.left .arrow:after {
    border-left-color: #fb6e52 !important;
  }
  .popover.themesecondary.right .arrow:after {
    border-right-color: #fb6e52 !important;
  }
  .popover.themethirdcolor {
    background-color: #ffce55 !important;
  }
  .popover.themethirdcolor .popover-title {
    background-color: #ffce55 !important;
  }
  .popover.themethirdcolor.top .arrow:after {
    border-top-color: #ffce55 !important;
  }
  .popover.themethirdcolor.bottom .arrow:after {
    border-bottom-color: #ffce55 !important;
  }
  .popover.themethirdcolor.left .arrow:after {
    border-left-color: #ffce55 !important;
  }
  .popover.themethirdcolor.right .arrow:after {
    border-right-color: #ffce55 !important;
  }
  .popover.themefourthcolor {
    background-color: #a0d468 !important;
  }
  .popover.themefourthcolor .popover-title {
    background-color: #a0d468 !important;
  }
  .popover.themefourthcolor.top .arrow:after {
    border-top-color: #a0d468 !important;
  }
  .popover.themefourthcolor.bottom .arrow:after {
    border-bottom-color: #a0d468 !important;
  }
  .popover.themefourthcolor.left .arrow:after {
    border-left-color: #a0d468 !important;
  }
  .popover.themefourthcolor.right .arrow:after {
    border-right-color: #a0d468 !important;
  }
  .popover.themefifthcolor {
    background-color: #e75b8d !important;
  }
  .popover.themefifthcolor .popover-title {
    background-color: #e75b8d !important;
  }
  .popover.themefifthcolor.top .arrow:after {
    border-top-color: #e75b8d !important;
  }
  .popover.themefifthcolor.bottom .arrow:after {
    border-bottom-color: #e75b8d !important;
  }
  .popover.themefifthcolor.left .arrow:after {
    border-left-color: #e75b8d !important;
  }
  .popover.themefifthcolor.right .arrow:after {
    border-right-color: #e75b8d !important;
  }
  .popover.white {
    background-color: #ffffff;
  }
  .popover.white .popover-title {
    background-color: #ffffff;
  }
  .popover.white.top .arrow:after {
    border-top-color: #ffffff;
  }
  .popover.white.bottom .arrow:after {
    border-bottom-color: #ffffff;
  }
  .popover.white.left .arrow:after {
    border-left-color: #ffffff;
  }
  .popover.white.right .arrow:after {
    border-right-color: #ffffff;
  }
  .popover.snow {
    background-color: #fbfbfb !important;
  }
  .popover.snow .popover-title {
    background-color: #fbfbfb !important;
  }
  .popover.snow.top .arrow:after {
    border-top-color: #fbfbfb !important;
  }
  .popover.snow.bottom .arrow:after {
    border-bottom-color: #fbfbfb !important;
  }
  .popover.snow.left .arrow:after {
    border-left-color: #fbfbfb !important;
  }
  .popover.snow.right .arrow:after {
    border-right-color: #fbfbfb !important;
  }
  .popover.whitesmoke {
    background-color: #f5f5f5 !important;
  }
  .popover.whitesmoke .popover-title {
    background-color: #f5f5f5 !important;
  }
  .popover.whitesmoke.top .arrow:after {
    border-top-color: #f5f5f5 !important;
  }
  .popover.whitesmoke.bottom .arrow:after {
    border-bottom-color: #f5f5f5 !important;
  }
  .popover.whitesmoke.left .arrow:after {
    border-left-color: #f5f5f5 !important;
  }
  .popover.whitesmoke.right .arrow:after {
    border-right-color: #f5f5f5 !important;
  }
  .popover.seashell {
    background-color: #f3f3f3 !important;
  }
  .popover.seashell .popover-title {
    background-color: #f3f3f3 !important;
  }
  .popover.seashell.top .arrow:after {
    border-top-color: #f3f3f3 !important;
  }
  .popover.seashell.bottom .arrow:after {
    border-bottom-color: #f3f3f3 !important;
  }
  .popover.seashell.left .arrow:after {
    border-left-color: #f3f3f3 !important;
  }
  .popover.seashell.right .arrow:after {
    border-right-color: #f3f3f3 !important;
  }
  .popover.ivory {
    background-color: #eeeeee !important;
  }
  .popover.ivory .popover-title {
    background-color: #eeeeee !important;
  }
  .popover.ivory.top .arrow:after {
    border-top-color: #eeeeee !important;
  }
  .popover.ivory.bottom .arrow:after {
    border-bottom-color: #eeeeee !important;
  }
  .popover.ivory.left .arrow:after {
    border-left-color: #eeeeee !important;
  }
  .popover.ivory.right .arrow:after {
    border-right-color: #eeeeee !important;
  }
  .popover.platinum {
    background-color: #e5e5e5 !important;
  }
  .popover.platinum .popover-title {
    background-color: #e5e5e5 !important;
  }
  .popover.platinum.top .arrow:after {
    border-top-color: #e5e5e5 !important;
  }
  .popover.platinum.bottom .arrow:after {
    border-bottom-color: #e5e5e5 !important;
  }
  .popover.platinum.left .arrow:after {
    border-left-color: #e5e5e5 !important;
  }
  .popover.platinum.right .arrow:after {
    border-right-color: #e5e5e5 !important;
  }
  .popover.lightgray {
    background-color: #d0d0d0 !important;
  }
  .popover.lightgray .popover-title {
    background-color: #d0d0d0 !important;
  }
  .popover.lightgray.top .arrow:after {
    border-top-color: #d0d0d0 !important;
  }
  .popover.lightgray.bottom .arrow:after {
    border-bottom-color: #d0d0d0 !important;
  }
  .popover.lightgray.left .arrow:after {
    border-left-color: #d0d0d0 !important;
  }
  .popover.lightgray.right .arrow:after {
    border-right-color: #d0d0d0 !important;
  }
  .popover.gray {
    background-color: #cccccc !important;
  }
  .popover.gray .popover-title {
    background-color: #cccccc !important;
  }
  .popover.gray.top .arrow:after {
    border-top-color: #cccccc !important;
  }
  .popover.gray.bottom .arrow:after {
    border-bottom-color: #cccccc !important;
  }
  .popover.gray.left .arrow:after {
    border-left-color: #cccccc !important;
  }
  .popover.gray.right .arrow:after {
    border-right-color: #cccccc !important;
  }
  .popover.darkgray {
    background-color: #999999 !important;
  }
  .popover.darkgray .popover-title {
    background-color: #999999 !important;
  }
  .popover.darkgray.top .arrow:after {
    border-top-color: #999999 !important;
  }
  .popover.darkgray.bottom .arrow:after {
    border-bottom-color: #999999 !important;
  }
  .popover.darkgray.left .arrow:after {
    border-left-color: #999999 !important;
  }
  .popover.darkgray.right .arrow:after {
    border-right-color: #999999 !important;
  }
  .popover.silver {
    background-color: #777777 !important;
  }
  .popover.silver .popover-title {
    background-color: #777777 !important;
  }
  .popover.silver.top .arrow:after {
    border-top-color: #777777 !important;
  }
  .popover.silver.bottom .arrow:after {
    border-bottom-color: #777777 !important;
  }
  .popover.silver.left .arrow:after {
    border-left-color: #777777 !important;
  }
  .popover.silver.right .arrow:after {
    border-right-color: #777777 !important;
  }
  .popover.sonic-silver {
    background-color: #737373 !important;
  }
  .popover.sonic-silver .popover-title {
    background-color: #737373 !important;
  }
  .popover.sonic-silver.top .arrow:after {
    border-top-color: #737373 !important;
  }
  .popover.sonic-silver.bottom .arrow:after {
    border-bottom-color: #737373 !important;
  }
  .popover.sonic-silver.left .arrow:after {
    border-left-color: #737373 !important;
  }
  .popover.sonic-silver.right .arrow:after {
    border-right-color: #737373 !important;
  }
  .popover.storm-cloud {
    background-color: #666666 !important;
  }
  .popover.storm-cloud .popover-title {
    background-color: #666666 !important;
  }
  .popover.storm-cloud.top .arrow:after {
    border-top-color: #666666 !important;
  }
  .popover.storm-cloud.bottom .arrow:after {
    border-bottom-color: #666666 !important;
  }
  .popover.storm-cloud.left .arrow:after {
    border-left-color: #666666 !important;
  }
  .popover.storm-cloud.right .arrow:after {
    border-right-color: #666666 !important;
  }
  .popover.lightcarbon {
    background-color: #555555 !important;
  }
  .popover.lightcarbon .popover-title {
    background-color: #555555 !important;
  }
  .popover.lightcarbon.top .arrow:after {
    border-top-color: #555555 !important;
  }
  .popover.lightcarbon.bottom .arrow:after {
    border-bottom-color: #555555 !important;
  }
  .popover.lightcarbon.left .arrow:after {
    border-left-color: #555555 !important;
  }
  .popover.lightcarbon.right .arrow:after {
    border-right-color: #555555 !important;
  }
  .popover.carbon {
    background-color: #444444 !important;
  }
  .popover.carbon .popover-title {
    background-color: #444444 !important;
  }
  .popover.carbon.top .arrow:after {
    border-top-color: #444444 !important;
  }
  .popover.carbon.bottom .arrow:after {
    border-bottom-color: #444444 !important;
  }
  .popover.carbon.left .arrow:after {
    border-left-color: #444444 !important;
  }
  .popover.carbon.right .arrow:after {
    border-right-color: #444444 !important;
  }
  .popover.slate-gray {
    background-color: #333333 !important;
  }
  .popover.slate-gray .popover-title {
    background-color: #333333 !important;
  }
  .popover.slate-gray.top .arrow:after {
    border-top-color: #333333 !important;
  }
  .popover.slate-gray.bottom .arrow:after {
    border-bottom-color: #333333 !important;
  }
  .popover.slate-gray.left .arrow:after {
    border-left-color: #333333 !important;
  }
  .popover.slate-gray.right .arrow:after {
    border-right-color: #333333 !important;
  }
  .popover.darkcarbon {
    background-color: #262626 !important;
  }
  .popover.darkcarbon .popover-title {
    background-color: #262626 !important;
  }
  .popover.darkcarbon.top .arrow:after {
    border-top-color: #262626 !important;
  }
  .popover.darkcarbon.bottom .arrow:after {
    border-bottom-color: #262626 !important;
  }
  .popover.darkcarbon.left .arrow:after {
    border-left-color: #262626 !important;
  }
  .popover.darkcarbon.right .arrow:after {
    border-right-color: #262626 !important;
  }
  .popover.blue {
    background-color: #2aade5;
  }
  .popover.blue .popover-title {
    background-color: #2aade5;
  }
  .popover.blue.top .arrow:after {
    border-top-color: #2aade5;
  }
  .popover.blue.bottom .arrow:after {
    border-bottom-color: #2aade5;
  }
  .popover.blue.left .arrow:after {
    border-left-color: #2aade5;
  }
  .popover.blue.right .arrow:after {
    border-right-color: #2aade5;
  }
  .popover.info {
    background-color: #57b5e3 !important;
  }
  .popover.info .popover-title {
    background-color: #57b5e3 !important;
  }
  .popover.info.top .arrow:after {
    border-top-color: #57b5e3 !important;
  }
  .popover.info.bottom .arrow:after {
    border-bottom-color: #57b5e3 !important;
  }
  .popover.info.left .arrow:after {
    border-left-color: #57b5e3 !important;
  }
  .popover.info.right .arrow:after {
    border-right-color: #57b5e3 !important;
  }
  .popover.sky {
    background-color: #11a9cc !important;
  }
  .popover.sky .popover-title {
    background-color: #11a9cc !important;
  }
  .popover.sky.top .arrow:after {
    border-top-color: #11a9cc !important;
  }
  .popover.sky.bottom .arrow:after {
    border-bottom-color: #11a9cc !important;
  }
  .popover.sky.left .arrow:after {
    border-left-color: #11a9cc !important;
  }
  .popover.sky.right .arrow:after {
    border-right-color: #11a9cc !important;
  }
  .popover.primary {
    background-color: #4374e0 !important;
  }
  .popover.primary .popover-title {
    background-color: #4374e0 !important;
  }
  .popover.primary.top .arrow:after {
    border-top-color: #4374e0 !important;
  }
  .popover.primary.bottom .arrow:after {
    border-bottom-color: #4374e0 !important;
  }
  .popover.primary.left .arrow:after {
    border-left-color: #4374e0 !important;
  }
  .popover.primary.right .arrow:after {
    border-right-color: #4374e0 !important;
  }
  .popover.azure {
    background-color: #2dc3e8 !important;
  }
  .popover.azure .popover-title {
    background-color: #2dc3e8 !important;
  }
  .popover.azure.top .arrow:after {
    border-top-color: #2dc3e8 !important;
  }
  .popover.azure.bottom .arrow:after {
    border-bottom-color: #2dc3e8 !important;
  }
  .popover.azure.left .arrow:after {
    border-left-color: #2dc3e8 !important;
  }
  .popover.azure.right .arrow:after {
    border-right-color: #2dc3e8 !important;
  }
  .popover.blueberry {
    background-color: #6f85bf !important;
  }
  .popover.blueberry .popover-title {
    background-color: #6f85bf !important;
  }
  .popover.blueberry.top .arrow:after {
    border-top-color: #6f85bf !important;
  }
  .popover.blueberry.bottom .arrow:after {
    border-bottom-color: #6f85bf !important;
  }
  .popover.blueberry.left .arrow:after {
    border-left-color: #6f85bf !important;
  }
  .popover.blueberry.right .arrow:after {
    border-right-color: #6f85bf !important;
  }
  .popover.palegreen {
    background-color: #a0d468 !important;
  }
  .popover.palegreen .popover-title {
    background-color: #a0d468 !important;
  }
  .popover.palegreen.top .arrow:after {
    border-top-color: #a0d468 !important;
  }
  .popover.palegreen.bottom .arrow:after {
    border-bottom-color: #a0d468 !important;
  }
  .popover.palegreen.left .arrow:after {
    border-left-color: #a0d468 !important;
  }
  .popover.palegreen.right .arrow:after {
    border-right-color: #a0d468 !important;
  }
  .popover.success {
    background-color: #53a93f !important;
  }
  .popover.success .popover-title {
    background-color: #53a93f !important;
  }
  .popover.success.top .arrow:after {
    border-top-color: #53a93f !important;
  }
  .popover.success.bottom .arrow:after {
    border-bottom-color: #53a93f !important;
  }
  .popover.success.left .arrow:after {
    border-left-color: #53a93f !important;
  }
  .popover.success.right .arrow:after {
    border-right-color: #53a93f !important;
  }
  .popover.green {
    background-color: #8cc474 !important;
  }
  .popover.green .popover-title {
    background-color: #8cc474 !important;
  }
  .popover.green.top .arrow:after {
    border-top-color: #8cc474 !important;
  }
  .popover.green.bottom .arrow:after {
    border-bottom-color: #8cc474 !important;
  }
  .popover.green.left .arrow:after {
    border-left-color: #8cc474 !important;
  }
  .popover.green.right .arrow:after {
    border-right-color: #8cc474 !important;
  }
  .popover.lightyellow {
    background-color: #f6d52e !important;
  }
  .popover.lightyellow .popover-title {
    background-color: #f6d52e !important;
  }
  .popover.lightyellow.top .arrow:after {
    border-top-color: #f6d52e !important;
  }
  .popover.lightyellow.bottom .arrow:after {
    border-bottom-color: #f6d52e !important;
  }
  .popover.lightyellow.left .arrow:after {
    border-left-color: #f6d52e !important;
  }
  .popover.lightyellow.right .arrow:after {
    border-right-color: #f6d52e !important;
  }
  .popover.yellow {
    background-color: #ffce55 !important;
  }
  .popover.yellow .popover-title {
    background-color: #ffce55 !important;
  }
  .popover.yellow.top .arrow:after {
    border-top-color: #ffce55 !important;
  }
  .popover.yellow.bottom .arrow:after {
    border-bottom-color: #ffce55 !important;
  }
  .popover.yellow.left .arrow:after {
    border-left-color: #ffce55 !important;
  }
  .popover.yellow.right .arrow:after {
    border-right-color: #ffce55 !important;
  }
  .popover.warning {
    background-color: #f4b400 !important;
  }
  .popover.warning .popover-title {
    background-color: #f4b400 !important;
  }
  .popover.warning.top .arrow:after {
    border-top-color: #f4b400 !important;
  }
  .popover.warning.bottom .arrow:after {
    border-bottom-color: #f4b400 !important;
  }
  .popover.warning.left .arrow:after {
    border-left-color: #f4b400 !important;
  }
  .popover.warning.right .arrow:after {
    border-right-color: #f4b400 !important;
  }
  .popover.gold {
    background-color: #f9b256 !important;
  }
  .popover.gold .popover-title {
    background-color: #f9b256 !important;
  }
  .popover.gold.top .arrow:after {
    border-top-color: #f9b256 !important;
  }
  .popover.gold.bottom .arrow:after {
    border-bottom-color: #f9b256 !important;
  }
  .popover.gold.left .arrow:after {
    border-left-color: #f9b256 !important;
  }
  .popover.gold.right .arrow:after {
    border-right-color: #f9b256 !important;
  }
  .popover.orange {
    background-color: #fb6e52 !important;
  }
  .popover.orange .popover-title {
    background-color: #fb6e52 !important;
  }
  .popover.orange.top .arrow:after {
    border-top-color: #fb6e52 !important;
  }
  .popover.orange.bottom .arrow:after {
    border-bottom-color: #fb6e52 !important;
  }
  .popover.orange.left .arrow:after {
    border-left-color: #fb6e52 !important;
  }
  .popover.orange.right .arrow:after {
    border-right-color: #fb6e52 !important;
  }
  .popover.lightred {
    background-color: #e46f61 !important;
  }
  .popover.lightred .popover-title {
    background-color: #e46f61 !important;
  }
  .popover.lightred.top .arrow:after {
    border-top-color: #e46f61 !important;
  }
  .popover.lightred.bottom .arrow:after {
    border-bottom-color: #e46f61 !important;
  }
  .popover.lightred.left .arrow:after {
    border-left-color: #e46f61 !important;
  }
  .popover.lightred.right .arrow:after {
    border-right-color: #e46f61 !important;
  }
  .popover.darkorange {
    background-color: #ed4e2a !important;
  }
  .popover.darkorange .popover-title {
    background-color: #ed4e2a !important;
  }
  .popover.darkorange.top .arrow:after {
    border-top-color: #ed4e2a !important;
  }
  .popover.darkorange.bottom .arrow:after {
    border-bottom-color: #ed4e2a !important;
  }
  .popover.darkorange.left .arrow:after {
    border-left-color: #ed4e2a !important;
  }
  .popover.darkorange.right .arrow:after {
    border-right-color: #ed4e2a !important;
  }
  .popover.red {
    background-color: #df5138 !important;
  }
  .popover.red .popover-title {
    background-color: #df5138 !important;
  }
  .popover.red.top .arrow:after {
    border-top-color: #df5138 !important;
  }
  .popover.red.bottom .arrow:after {
    border-bottom-color: #df5138 !important;
  }
  .popover.red.left .arrow:after {
    border-left-color: #df5138 !important;
  }
  .popover.red.right .arrow:after {
    border-right-color: #df5138 !important;
  }
  .popover.danger {
    background-color: #d73d32 !important;
  }
  .popover.danger .popover-title {
    background-color: #d73d32 !important;
  }
  .popover.danger.top .arrow:after {
    border-top-color: #d73d32 !important;
  }
  .popover.danger.bottom .arrow:after {
    border-bottom-color: #d73d32 !important;
  }
  .popover.danger.left .arrow:after {
    border-left-color: #d73d32 !important;
  }
  .popover.danger.right .arrow:after {
    border-right-color: #d73d32 !important;
  }
  .popover.pink {
    background-color: #e75b8d !important;
  }
  .popover.pink .popover-title {
    background-color: #e75b8d !important;
  }
  .popover.pink.top .arrow:after {
    border-top-color: #e75b8d !important;
  }
  .popover.pink.bottom .arrow:after {
    border-bottom-color: #e75b8d !important;
  }
  .popover.pink.left .arrow:after {
    border-left-color: #e75b8d !important;
  }
  .popover.pink.right .arrow:after {
    border-right-color: #e75b8d !important;
  }
  .popover.darkpink {
    background-color: #cc324b !important;
  }
  .popover.darkpink .popover-title {
    background-color: #cc324b !important;
  }
  .popover.darkpink.top .arrow:after {
    border-top-color: #cc324b !important;
  }
  .popover.darkpink.bottom .arrow:after {
    border-bottom-color: #cc324b !important;
  }
  .popover.darkpink.left .arrow:after {
    border-left-color: #cc324b !important;
  }
  .popover.darkpink.right .arrow:after {
    border-right-color: #cc324b !important;
  }
  .popover.magenta {
    background-color: #bc5679 !important;
  }
  .popover.magenta .popover-title {
    background-color: #bc5679 !important;
  }
  .popover.magenta.top .arrow:after {
    border-top-color: #bc5679 !important;
  }
  .popover.magenta.bottom .arrow:after {
    border-bottom-color: #bc5679 !important;
  }
  .popover.magenta.left .arrow:after {
    border-left-color: #bc5679 !important;
  }
  .popover.magenta.right .arrow:after {
    border-right-color: #bc5679 !important;
  }
  .popover.purple {
    background-color: #7e3794 !important;
  }
  .popover.purple .popover-title {
    background-color: #7e3794 !important;
  }
  .popover.purple.top .arrow:after {
    border-top-color: #7e3794 !important;
  }
  .popover.purple.bottom .arrow:after {
    border-bottom-color: #7e3794 !important;
  }
  .popover.purple.left .arrow:after {
    border-left-color: #7e3794 !important;
  }
  .popover.purple.right .arrow:after {
    border-right-color: #7e3794 !important;
  }
  .popover.maroon {
    background-color: #981b48 !important;
  }
  .popover.maroon .popover-title {
    background-color: #981b48 !important;
  }
  .popover.maroon.top .arrow:after {
    border-top-color: #981b48 !important;
  }
  .popover.maroon.bottom .arrow:after {
    border-bottom-color: #981b48 !important;
  }
  .popover.maroon.left .arrow:after {
    border-left-color: #981b48 !important;
  }
  .popover.maroon.right .arrow:after {
    border-right-color: #981b48 !important;
  }




</style>

<!--<template>
  <span>
    <transition :name="transition" @after-leave="doDestroy">
      <div class="el-popover" :class="[popperClass]" ref="popper" v-show="!disabled && showPopper" :style="{ width: width + 'px' }">
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>-->

<!--<script>
  import Popper from 'element-ui/src/utils/vue-popper';
  import { on, off } from 'element-ui/src/utils/dom';
  export default {
    name: 'ElPopover',
    mixins: [Popper],
    props: {
      trigger: {
        type: String,
        default: 'click',
        validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    }
  },
  watch: {
    showPopper(newVal, oldVal) {
      newVal ? this.$emit('show') : this.$emit('hide');
    }
  },
  mounted() {
    let reference = this.reference || this.$refs.reference;
    const popper = this.popper || this.$refs.popper;
    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    if (this.trigger === 'click') {
      on(reference, 'click', () => { this.showPopper = !this.showPopper; });
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popper, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      let found = false;
      if ([].slice.call(reference.children).length) {
        const children = reference.childNodes;
        const len = children.length;
        for (let i = 0; i < len; i++) {
          if (children[i].nodeName === 'INPUT' ||
            children[i].nodeName === 'TEXTAREA') {
            on(children[i], 'focus', () => { this.showPopper = true; });
            on(children[i], 'blur', () => { this.showPopper = false; });
            found = true;
            break;
          }
        }
      }
      if (found) return;
      if (reference.nodeName === 'INPUT' ||
        reference.nodeName === 'TEXTAREA') {
        on(reference, 'focus', () => { this.showPopper = true; });
        on(reference, 'blur', () => { this.showPopper = false; });
      } else {
        on(reference, 'mousedown', () => { this.showPopper = true; });
        on(reference, 'mouseup', () => { this.showPopper = false; });
      }
    }
  },
  methods: {
    handleMouseEnter() {
      this.showPopper = true;
      clearTimeout(this._timer);
    },
    handleMouseLeave() {
      this._timer = setTimeout(() => {
        this.showPopper = false;
    }, 200);
    },
    handleDocumentClick(e) {
      let reference = this.reference || this.$refs.reference;
      const popper = this.popper || this.$refs.popper;
      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return;
      this.showPopper = false;
    }
  },
  destroyed() {
    const reference = this.reference;
    off(reference, 'mouseup');
    off(reference, 'mousedown');
    off(reference, 'focus');
    off(reference, 'blur');
    off(reference, 'mouseleave');
    off(reference, 'mouseenter');
    off(document, 'click', this.handleDocumentClick);
  }
  };
</script>-->

