<template>
  <div class="modal" :style="zIndexManager" :class="on">
    <div id="mcontent" class="modal-content"  :class="modalCss" :style="{top: ctop + 'px',left: cleft + 'px'}">
      <div class="modal-header" :class="headerCss" @mousedown="mdown($event)" @mousemove="mmove($event)" @mouseup="mup($event)">
        <a href="#" class="close" @click.stop="close($event)" @mousedown="adown" @mousemove="amove">
          <i class="fa fa-times" :class="closebtnCss"></i>
        </a>
        <h4 class="modal-title" @mousedown="tdown" @mousemove="tmove">
          <slot name="title"></slot>
        </h4>
      </div>
      <div class="modal-body modal-body-less" :class="bodyCss" :style="{height:bodyHeight + 'px'}" @mousemove="mmove($event)" @mouseup="mup($event)">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer modal-footer-less" :class="footerCss" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <div class="overlay" @click="handlerClick($event)" :style="overlayStyle" @mousemove="mmove($event)" @mouseup="mup($event)"></div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import popup from 'src/utils/popup/popupManager.js'
  import { hasClass,removeClass } from 'src/utils/dom.js';
  const cssPreFix = 'modal-';
  export default {
    name: 'hd-modal',
    data(){
      return {
        oldmouseX: 0,
        oldmouseY: 0,
        newmouseX: 0,
        newmouseY: 0,
        oldX: 0,
        oldY: 0,
        ctop: 0,
        cleft: 0,
        oldopacity: '',
        mousedown: false,
        hasMove:false
      }
    },
    props: {
      offsetTop:{
            type:[Boolean],
            default:false
        },
      open:{
        type:Boolean,
        default:false
      },
      'body-height':{
        type:[Number,String],
        default:''
      },
      act:{
        validator(value){
          return isOneOf(value, ['top-fade','left-fade','right-fade','y-rotate','x-rotate','expand'])
        },
        default:'top-fade'
      },
      opacity:{
        type:String,
        default:'0.4'
      },
      'overlay-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'lightgray'
      },
      'header-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
      'body-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
      'footer-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
      size: {
        validator(value){
          return isOneOf(value, ['lg','sm','xs'])
        },
        default:'sm'
      },
      'header-b-color': {
        validator(value){
          return isOneOf(value, ['white','blue', 'danger', 'warning', 'success', 'darkorange', 'blueberry', 'purple', 'silver', 'inverse', 'magenta', 'maroon', 'orange', 'palegreen', 'primary'])
        },
        default:'white'
      },
      'header-color': {
        validator(value){
          return isOneOf(value, ['black','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'black'
      },
      'body-color': {
        validator(value){
          return isOneOf(value, ['black','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'black'
      },
      'footer-color': {
        validator(value){
          return isOneOf(value, ['black','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'black'
      },
      'close-btn-color': {
        validator(value){
          return isOneOf(value, ['blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'darkgray'
      }
    },
    computed: {
      on(){
        return {
          'open' : this.open
        }
      },
      modalCss(){
        return [
          this.act ? this.act : '',
          this.headerBColor ? cssPreFix + this.headerBColor : '',
          this.size ? cssPreFix + this.size : '',
          this.offsetTop ? 'offset-top' : ''
        ]
      },
      headerCss(){
        return [
          this.headerColor ? this.headerColor : '',
          this.headerBgColor ? 'bg-' + this.headerBgColor : ''
        ]
      },
      bodyCss(){
        return [
          this.bodyColor ? this.bodyColor : '',
          this.bodyBgColor ? 'bg-' + this.bodyBgColor : ''
        ]
      },
      footerCss(){
        return [
          this.footerColor ? this.footerColor : '',
          this.footerBgColor ? 'bg-' + this.footerBgColor : ''
        ]
      },
      closebtnCss(){
        return [
          this.closeBtnColor ? this.closeBtnColor : ''
        ]
      },
      overlayStyle(){
        return {
          'opacity': this.opacity,
          'background-color': this.overlayColor
        }
      },
      zIndexManager(){
        let ret = {};
        ret.zIndex = popup.nextZIndex();
        return ret;
      }
    },
    methods: {
      close(event){
        this.$emit("close",event)
      },
      adown(){
        event.stopPropagation()
      },
      amove(){
        event.stopPropagation()
      },
      tdown(){
        event.stopPropagation()
      },
      tmove(){
        event.stopPropagation()
      },
      handlerClick(event){
        this.$emit("handlerClick",event)
      },
      mdown(e){
         if(hasClass(e.target.parentElement,'offset-top')){
             removeClass(e.target.parentElement,'offset-top')
         }
        var rect = e.target.getBoundingClientRect();
        this.oldX = rect.left;
        this.oldY = rect.top;
        this.oldmouseX = e.screenX;
        this.oldmouseY = e.screenY;
        this.mousedown = true;
        this.oldopacity = this.opacity;
        this.$el.children[1].style.opacity = 0
      },
      mmove(e){
          this.hasMove = true;
          if (this.mousedown === true) {
              this.newmouseX = e.screenX;
              this.newmouseY = e.screenY;
              var _x = this.oldmouseX - this.newmouseX;
              var _y = this.oldmouseY - this.newmouseY;
              var x = this.oldX - _x;
              var y = this.oldY - _y;
              this.ctop = y;
              this.cleft = x;
          }
      },
      mup(e){
        if(this.mousedown === true){
          var rect = this.$el.firstChild.getBoundingClientRect();
          this.cleft = rect.left;
          this.ctop = rect.top;
        }
        this.mousedown = false;
        this.$el.children[1].style.opacity = this.oldopacity
      }
    },
    watch:{
        open(val){
            if(val && !this.hasMove){
                this.$nextTick(function(){
                    this.ctop = (document.documentElement.clientHeight-this.$el.firstChild.offsetHeight)/2;   //原 200
                    this.cleft = (document.documentElement.clientWidth-this.$el.firstChild.offsetWidth)/2;   //原 550
                });
            }
        }
    }
  }
</script>
<style>
  @keyframes modalfirst {
    from {top: 0;opacity: 0;}
    to {opacity: 1;}
  }
  @keyframes modaltwo {
    from {left: 0;opacity: 0;}
    to {opacity: 1;}
  }
  @keyframes modalthree {
    from {left: 580px;opacity: 0;}
    to {opacity: 1;}
  }
  @keyframes modalfour {
    from {
      -webkit-transform: rotateY(90deg);
      transform: rotateY(90deg);
      opacity: 0;
    }
    to {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
  @keyframes modalfive {
    from {
      -webkit-transform: rotateX(90deg);
      transform: rotateX(90deg);
      opacity: 0;
    }
    to {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
  @keyframes modalsix {
    from {
      -webkit-transform: scale(0,0);
      transform: scale(0,0);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1,1);
      transform: scale(1,1);
      opacity: 1;
    }
  }
  @keyframes modalseven {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    25% {
      -webkit-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
    50% {
      -webkit-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
  }
  @keyframes modaleight {
    0% {
      -webkit-transform: rotate(0deg) scale(0,0);
      transform: rotate(0deg) scale(0,0);
    }
    25% {
      -webkit-transform: rotate(180deg) scale(0.25,0.25);
      transform: rotate(180deg) scale(0.25,0.25);
    }
    50% {
      -webkit-transform: rotate(360deg) scale(0.5,0.5);
      transform: rotate(360deg) scale(0.5,0.5);
    }
    75% {
      -webkit-transform: rotate(180deg) scale(0.75,0.75);
      transform: rotate(1800deg) scale(0.75,0.75);
    }
    100% {
      -webkit-transform: rotate(0deg) scale(1,1);
      transform: rotate(0deg) scale(1,1);
    }
  }
  @keyframes modalnine {
    0% {
      -webkit-transform: scale(0,0);
      transform: scale(0,0);
      top: 0;
      left: 0;
    }
    10% {
      -webkit-transform: scale(0.1,0.1);
      transform: scale(0.1,0.1);
      top: 0;
      left: -550px;
    }
    20% {
      -webkit-transform: scale(0.2,0.2);
      transform: scale(0.2,0.2);
      top: -350px;
      left: -350px;
    }
    30% {
      -webkit-transform: scale(0.3,0.3);
      transform: scale(0.3,0.3);
      top: -450px;
      left: 0;
    }
    40% {
      -webkit-transform: scale(0.4,0.4);
      transform: scale(0.4,0.4);
      top: -350px;
      left: 350px;
    }
    50% {
      -webkit-transform: scale(0.5,0.5);
      transform: scale(0.5,0.5);
      top: 0;
      left: 550px;
    }
    60% {
      -webkit-transform: scale(0.6,0.6);
      transform: scale(0.6,0.6);
      top: 350px;
      left: 350px;
    }
    70% {
      -webkit-transform: scale(0.7,0.7);
      transform: scale(0.7,0.7);
      top: 450px;
      left: 0;
    }
    80% {
      -webkit-transform: scale(0.8,0.8);
      transform: scale(0.8,0.8);
      top: 350px;
      left: -350px;
    }
    90% {
      -webkit-transform: scale(0.9,0.9);
      transform: scale(0.9,0.9);
      top: 0;
      left: -550px;
    }
    100% {
      -webkit-transform: scale(1,1);
      transform: scale(1,1);
      top: 0;
      left: 0;
    }
  }
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999;
    opacity: .4;
    z-index: 1000;
  }
  .modal-content {
    z-index: 1500;
    overflow: hidden;
    position: absolute;
  }
  .well h4 {
    margin: 6px 0;
  }
  .modal h4{
    display: inline-block;
  }
  .modal-header{
    cursor: move;
  }
  .modal-header .modal-title {
    margin: 8px 0;
    cursor: auto;
  }
  .modal .modal-lg {
    width: 80%;
  }
  .modal .modal-sm {
    width: 60%;
  }
  .modal .modal-xs {
    width: 30%;
  }
  .modal-lg .modal-header {
    height: 60px;
  }
  .modal-lg .modal-body {
    overflow: auto;
  }
  .modal-lg .modal-footer {
    height: 60px;
  }
  .modal-sm .modal-header {
    height: 60px;
  }
  .modal-sm .modal-body {
    overflow: auto;
  }
  .modal-sm .modal-footer {
    height: 60px;
  }
  .modal-xs .modal-header {
    height: 60px;
  }
  .modal-xs .modal-body {
    overflow: auto;
  }
  .modal-xs .modal-footer {
    height: 60px;
  }
  .close {
    opacity: 1;
  }
  .modal.open {
    display: block;
  }
  .modal.open .modal-content.top-fade {
    animation: modalfirst linear 0.5s;
    -webkit-animation: modalfirst linear 0.5s;
  }
  .modal.open .modal-content.left-fade {
    animation: modaltwo linear 0.5s;
    -webkit-animation: modaltwo linear 0.5s;
  }
  .modal.open .modal-content.right-fade {
    animation: modalthree linear 0.5s;
    -webkit-animation: modalthree linear 0.5s;
  }
  .modal.open .modal-content.y-rotate {
    animation: modalfour linear 1s;
    -webkit-animation: modalfour linear 1s;
  }
  .modal.open .modal-content.x-rotate {
    animation: modalfive linear 1s;
    -webkit-animation: modalfive linear 1s;
  }
  .modal.open .modal-content.expand {
    animation: modalsix linear 0.5s;
    -webkit-animation: modalsix linear 0.5s;
  }
  .modal.open .modal-content.act7 {
    animation: modalseven linear 3s;
    -webkit-animation: modalseven linear 3s;
  }
  .modal.open .modal-content.act8 {
    animation: modaleight linear 3s;
    -webkit-animation: modaleight linear 3s;
  }
  .modal.open .modal-content.act9 {
    animation: modalnine linear 3s;
    -webkit-animation: modalnine linear 3s;
  }
    .offset-top{
        top:85px !important;
        left:226px !important;
    }
</style>
