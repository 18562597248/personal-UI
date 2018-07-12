<template>
  <div class="widget" :class="widgetCss">
    <div class="widget-header" :class="headerCss">
      <i class="widget-icon" v-if="$slots.icon">
        <slot name="icon"></slot>
      </i>
      <span class="widget-caption">
        <slot name="title"></slot>
      </span>
      <div class="widget-buttons" v-if="$slots.tool" :class="toolCss">
        <slot name="tool"></slot>
      </div>
    </div>
    <transition name="widget-fade">
      <div class="widget-body" :class="bodyCss" v-show="show">
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  export default {
    name: 'hd-widget',
    props: {
      show:{
        type:Boolean,
        default:true
      },
      maximized:{
        type:Boolean,
        default:false
      },
      flat:{
        type:Boolean,
        default:false
      },
      transparent:{
        type:Boolean,
        default:false
      },
      radius:{
        type:Boolean,
        default:false
      },
      separated:{
        type:Boolean,
        default:false
      },
      compact:{
        type:Boolean,
        default:false
      },
      'is-no-header':{
        type:Boolean,
        default:false
      },
      'header-size': {
        validator(value){
          return isOneOf(value, ['lg','sm','xs'])
        },
        default:'sm'
      },
      'header-bordered-color-top':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'header-bordered-color-left':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'header-bordered-color-bottom':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'header-bordered-color-right':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-bordered-color-top':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-bordered-color-left':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-bordered-color-bottom':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-bordered-color-right':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'header-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'header-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      }
    },
    computed: {
      widgetCss(){
        return {
          'maximized' : this.maximized,
          'flat' : this.flat,
          'transparent' : this.transparent,
          'radius-bordered' : this.radius,
          'no-header' : this.isNoHeader
        }
      },
      headerCss(){
        return [
          this.headerSize ? 'header-' + this.headerSize : '',
          this.headerColor ? this.headerColor : '',
          this.headerBgColor ? 'bg-' + this.headerBgColor : '',
          this.headerBorderedColorTop ? 'bordered-' + this.headerBorderedColorTop : '',
          this.headerBorderedColorLeft ? 'bordered-' + this.headerBorderedColorLeft : '',
          this.headerBorderedColorBottom ? 'bordered-' + this.headerBorderedColorBottom : '',
          this.headerBorderedColorRight ? 'bordered-' + this.headerBorderedColorRight : '',
          {
            'separated' : this.separated,
            'bordered-top' : this.headerBorderedColorTop,
            'bordered-left' : this.headerBorderedColorLeft,
            'bordered-bottom' : this.headerBorderedColorBottom,
            'bordered-right' : this.headerBorderedColorRight
          }
        ]
      },
      bodyCss(){
        return [
          this.bodyBgColor ? 'bg-' + this.bodyBgColor : '',
          this.bodyColor ? this.bodyColor : '',
          this.bodyBorderedColorTop ? 'bordered-' + this.bodyBorderedColorTop : '',
          this.bodyBorderedColorLeft ? 'bordered-' + this.bodyBorderedColorLeft : '',
          this.bodyBorderedColorBottom ? 'bordered-' + this.bodyBorderedColorBottom : '',
          this.bodyBorderedColorRight ? 'bordered-' + this.bodyBorderedColorRight : '',
          {
            'bordered-top' : this.bodyBorderedColorTop,
            'bordered-left' : this.bodyBorderedColorLeft,
            'bordered-bottom' : this.bodyBorderedColorBottom,
            'bordered-right' : this.bodyBorderedColorRight
          }
        ]
      },
      toolCss(){
        return {
          'compact' : this.compact
        }
      }
    }
  }
</script>
<style>
  @keyframes widgetfirst {
    from {
      padding-top: 0;
      padding-bottom: 0;
      max-height: 0;
      overflow: hidden;
    }
    to {
      padding-top: 12px;
      padding-bottom: 12px;
      max-height: 1000px;
      overflow: hidden;
    }
  }
  @keyframes widgettwo {
    from {
      padding-top: 12px;
      padding-bottom: 12px;
      max-height: 1000px;
      overflow: hidden;
    }
    to {
      padding-top: 0;
      padding-bottom: 0;
      max-height: 0;
      overflow: hidden;
    }
  }
  .widget .widget-header.header-lg {
    min-height: 49px;
    padding-left: 18px;
  }
  .widget .widget-header.header-sm {
    min-height: 36px;
    padding-left: 12px;
  }
  .widget .widget-header.header-xs {
    min-height: 29px;
    padding-left: 10px;
  }
  .widget .widget-body {
    padding: 12px;
    box-shadow: 1px 0 10px 1px rgba(0,0,0,.3);
    -webkit-box-shadow: 1px 0 10px 1px rgba(0,0,0,.3);
  }
  .widget .widget-body.hd-widget-no-padding{
    padding: 12px 0;
  }/*add by cjp 添加无padding样式*/
  .widget .widget-caption > p {
    line-height: 34px;
    margin: 0;
  }
  .widget .header-lg .widget-caption {
    line-height: 34px;
    margin: 6px 0;
  }
  .widget-body[class*="bg-white"],.widget-body[class*="bg-snow"],.widget-body[class*="bg-seashell"],.widget-body[class*="bg-ivory"],.widget-body[class*="bg-platinum"],.widget-body[class*="bg-lightgray"] {
    color: #000;
  }
  .widget-header[class*="bg-white"] .widget-caption,.widget-header[class*="bg-white"]>i,.widget-header[class*="bg-white"]>i>i,.widget-header[class*="bg-snow"] .widget-caption,.widget-header[class*="bg-snow"]>i,.widget-header[class*="bg-snow"]>i>i,.widget-header[class*="bg-seashell"] .widget-caption,.widget-header[class*="bg-seashell"]>i,.widget-header[class*="bg-seashell"]>i>i,.widget-header[class*="bg-ivory"] .widget-caption,.widget-header[class*="bg-ivory"]>i,.widget-header[class*="bg-ivory"]>i>i,.widget-header[class*="bg-platinum"] .widget-caption,.widget-header[class*="bg-platinum"]>i,.widget-header[class*="bg-platinum"]>i>i,.widget-header[class*="bg-lightgray"] .widget-caption,.widget-header[class*="bg-lightgray"]>i,.widget-header[class*="bg-lightgray"]>i>i {
    color: #000;
  }
  .widget.maximized .widget-body {
    height: 100%;
  }
  .widget-fade-enter-active {
    animation: widgetfirst .5s ease;
  }
  .widget-fade-leave-active {
    animation: widgettwo .3s linear;
  }
</style>
