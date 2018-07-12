<template>
  <!--<transition name="noticeFlash">-->
    <div :id="(typeof id==='object') ? '' : id"
         class="notice noticeFlash"
         :class="divCls"
         :style="divStyle"
         @click="divClick()"
         @mouseenter="clearTimer()"
         @mouseleave="startTimer()"
         v-if="showNotice">
      <hd-icon class="notoce-icon" :type="noticeIconType"></hd-icon>
      <button class="notice-close-button" @click="closeClick">×</button>
      <div class="notice-message" v-html="(typeof message==='object') ? message.default : message"></div>
    </div>
  <!--</transition>-->
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js';
  import emitter from 'src/utils/emitter';
  import hdIcon from 'components/icon';
  const cssPreFix = 'toast-';
  const iconTypes = {
    'info': 'fa fa-envelope',
    'success': 'fa fa-check',
    'warning': 'fa fa-warning',
    'error': 'fa fa-bolt'
  };
  export default{
    name: 'hd-notice',
    components:{
      hdIcon
    },
    mixins: [emitter],
    props: {},
    data () {
      return {
        showNotice:true,
        timer:null,
        id:{
          type: [String, Number],
          default:''
        },
        type:{
          type:[String],
          validator(value){
            return isOneOf(value,['default','info','success','warning','error'])
          },
          default:'default'
        },
        color:{
          type:[String],
          validator(value){
            return isOneOf(value,['','default','white','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','danger','pink','darkpink','magenta','purple','maroon'])
          },
          default:''
        },
        icon:{
          type:[String],
          default:''
        },
        message:{
          type:[String],
          default:'这是个必填项'
        },
        duration:{
          type:[Number],
          default:0
        },
        position:{
          type:[String],
          validator(value){
            return isOneOf(value,['rightTop','rightBottom','leftBottom','leftTop'])
          },
          default:'rightTop'
        },
        mode:{
          type:[String],
          default:'up'
        },
        offset:{
          type:[Number],
          default:0
        },
        opacity:{type:[Number],default:-1},
        onClose:function(){},
        onClick:function(){}
      }
    },
    computed: {
      divCls(){
        if(this.type.default==='default'||this.type==='default'||this.type===''){
          if(this.color.default===''||this.color===''||this.color==='default'){
            return;
          }else{
            return cssPreFix+this.color;
          }
        }else{
          return (this.type==='error' ? 'toast-danger' :cssPreFix+this.type);
        }
      },
      noticeIconType(){
        if(this.type.default==='default'||this.type==='default'||this.type===''){
          if(this.icon.default===''||this.icon===''||this.icon==='default'){
            return 'fa fa-home';
          }else{
            return this.icon;
          }
        }else{
          return iconTypes[this.type];
        }
      },
      divStyle(){
        var ret = {};
        if(typeof this.offset!=='object'){
          if(typeof this.mode ==='object'||this.mode==='up'){
            ret.marginTop = this.offset+'px';
          }else if(this.mode==='down'){
            ret.marginBottom = this.offset+'px';
          }
        }
        if(this.opacity>=0){
          ret.opacity = this.opacity;
        }
        return ret;
      }
    },
    mounted(){
      if(this.duration>0){
        this.timer = setTimeout(()=>{
          this.selfClose();
        },this.duration);
      }
    },
    methods: {
      selfClose(){
        if(typeof this.onClose === 'function'){
          this.onClose();
        }
        if(this.showNotice){
          this.showNotice=false;
        }
        this.$nextTick(function(){
            if(document.getElementById('theOnlyHdNotifications')){
                var domIsEmpty = true;
                for(var i= 0,len=document.getElementById('theOnlyHdNotifications').childNodes.length;i<len;i++){
                    if(document.getElementById('theOnlyHdNotifications').childNodes[i].nodeName !== '#comment' && document.getElementById('theOnlyHdNotifications').childNodes[i].nodeName !== 'AUDIO'){
                        domIsEmpty = false;
                    }
                }
                if(domIsEmpty){
                    document.body.removeChild(document.getElementById('theOnlyHdNotifications'));
                }
            }
        });//当所有的notice关闭时 需要把多余的notification 节点删除
      },
      closeClick(e){
        let self = this;
        self.selfClose();
      },
      divClick(){
        if(typeof this.onClick === 'function'){
          this.onClick();
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(()=>{
            this.selfClose();
        },1000);
        }
      }
    }
  }
</script>
<style>
  #toast-container>span>.toast {
    background-image: none !important;
  }
  #toast-container>:hover {
    /*-webkit-box-shadow: 0 0 12px #000;*/
    /*-moz-box-shadow: 0 0 12px #000;*/
    /*box-shadow: 0 0 12px #000;*/
    /*zoom: 1;*/
    /*filter: alpha(opacity=100);*/
    /*-webkit-opacity: 1;*/
    /*-moz-opacity: 1;*/
    /*cursor: pointer;*/
  }
  #toast-container>span>div {
    margin: 0 0 6px;
    padding: 15px 15px 15px 50px;
    width: 300px;
    -webkit-border-radius: 3px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 3px;
    -moz-background-clip: padding;
    border-radius: 3px;
    background-clip: padding-box;
    background-position: 15px center;
    background-repeat: no-repeat;
    -webkit-box-shadow: 0 0 12px #999;
    -moz-box-shadow: 0 0 12px #999;
    box-shadow: 0 0 12px #999;
    color: #fff;
    zoom: 1;
    filter: alpha(opacity=80);
    -webkit-opacity: .8;
    -moz-opacity: .8;
    opacity: .8;
  }
  #toast-container>span>.toast:before {
    position: fixed;
    font-family: FontAwesome;
    font-size: 24px;
    line-height: 18px;
    float: left;
    color: #fff;
    padding-right: .5em;
    margin: auto .5em auto -1.5em;
  }
  .hd-notification{
    position: fixed;
    z-index: 999999;
  }
  .hd-notification>span>.notice,.hd-notification>.notice {
    background-image: none !important;
  }
  .hd-notification>:hover {
    -webkit-box-shadow: 0 0 12px #000;
    -moz-box-shadow: 0 0 12px #000;
    box-shadow: 0 0 12px #000;
    zoom: 1;
    opacity: 1;
    cursor: pointer;
  }
  .hd-notification>span>div,.hd-notification>div {
    margin: 0 0 6px;
    padding: 15px 15px 15px 50px;
    width: 300px;
    -webkit-border-radius: 3px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 3px;
    -moz-background-clip: padding;
    border-radius: 3px;
    background-clip: padding-box;
    background-position: 15px center;
    background-repeat: no-repeat;
    -webkit-box-shadow: 0 0 12px #999;
    -moz-box-shadow: 0 0 12px #999;
    box-shadow: 0 0 12px #999;
    color: #fff;
    zoom: 1;
    opacity: .8;
  }
  .notice {
    background-color: #030303;
  }
  .notice-close-button {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
  }
  .notice-close-button {
    position: relative;
    right: -.3em;
    top: -.5em;
    float: right;
    font-size: 18px;
    font-family: 'FontAwesome';
    font-weight: bold;
    color: #fff;
    -webkit-text-shadow: 0 1px 0 #fff;
    text-shadow: 0 1px 0 #fff;
    zoom: 1;
    opacity: .8;
  }
  .notice-message {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }
  .hd-notification .notoce-icon {
    position: fixed;
    font-family: FontAwesome;
    font-style: normal;
    font-size: 24px;
    line-height: 18px;
    float: left;
    color: #fff;
    padding-right: .5em;
    margin: auto .5em auto -1.5em;
  }

  .noticeFlash-leave-active{
    opacity:0;
    -ms-transform:scaleY(0);
    transform:scaleY(0);
    transition:transform .3s cubic-bezier(.23,1,.32,1) .1s,opacity .3s cubic-bezier(.23,1,.32,1) .1s;
    -ms-transform-origin:center top;
    transform-origin:center top;
  }
  .noticeFlash {
    animation: opacity0-1 linear 0.5s;
    -webkit-animation: opacity0-1 linear 0.5s;
  }
  @keyframes opacity0-1 {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  .noticeFlashEnd {
    animation: opacity1-0 linear 0.5s;
    -webkit-animation: opacity1-0 linear 0.5s;
  }
  @keyframes opacity1-0 {
    from {opacity: 1;}
    to {opacity: 0;}
  }
</style>
