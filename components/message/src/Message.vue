<template>
  <transition name="test1">
    <div class="modal open" v-if="this.showMessage">
      <div class="modal-content modal-white dialog" style="z-index: 1500; overflow: hidden;width: 30%; vertical-align: middle; margin: 12% auto; position: relative;">
        <div class="modal-header black bg-white" style="border-bottom: 0;cursor: default;">
          <a class="close" @click="onCancelSoucer" v-show="showCloseIcon">×</a>
          <h4 style="display: block;" :class="headerTitleType"><b>{{(title==='')?headerText:title}}</b></h4>
        </div>
        <div class="modal-body black bg-white">
          <div style="position: absolute; top: 0; font-size:36px;">
            <hd-icon :color="iconColor" :type="iconType"></hd-icon>
          </div>
          <div style="vertical-align: middle; margin-left:50px; font-size: 14px;" v-html="message"></div>
        </div>
        <div class="modal-footer black bg-white">
          <hd-button ref="spareRef" :type="footerBtnType.spare" :isloading="spareIsloading" :btnTabIndex="0" @click="onSpareSoucer" v-show="(spareText!='')">{{spareText}}</hd-button>
          <hd-button  ref="confirmRef" :type="footerBtnType.confirm" :isloading="confirmIsloading" :btnTabIndex="0" @click="onConfirmSoucer" v-show="(confirmText!='')">{{confirmText}}</hd-button>
          <hd-button  ref="cancelRef" :type="footerBtnType.cancel" :isloading="cancelIsloading" :btnTabIndex="0" @click="onCancelSoucer" v-show="(cancelText!='')">{{cancelText}}</hd-button>
        </div>
      </div>
      <div class="overlay" style="opacity: 0.8;background-color: #262626;" @click="overlay_click"></div>
    </div>
  </transition>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js';
  import hdIcon from 'components/icon'
  import hdButton from 'components/button'
  const cssPreFix = '';
  const messageIconColorMap = {
    'info': 'info',
    'success': 'success',
    'warning': 'warning',
    'error': 'danger'
  };
  const messageIconTypeMap = {
    'info': 'fa fa-info-circle',
    'success': 'fa fa-check-circle',
    'warning': 'fa fa-warning',
    'error': 'fa fa-ban'
  };
  const messageBtnTypeMap = {
    'info': 'info',
    'success': 'success',
    'warning': 'warning',
    'error': 'danger'
  };
  export default {
//    directives: {
//      focus: {
//        inserted: function (el) {
//        // 聚焦元素
//        el.focus()
//        }
//      }
//    },
    name:'hd-message',
    components:{
      hdIcon,
      hdButton
    },
    props:{},
    data:function(){
      return{
        //内部不对外暴露参数：
        showMessage:false,
        doubleRe:function(){},
        action:'',
        close:'',
        safetag:'safe',
        messageHeaderTextMap:{
          'info': '提示',
          'success':'成功',
          'warning':'警告',
          'error':'错误'
        },
        //message可使用参数：
        id:'',
        type:'info',
        title:'',
        message:'',
        confirmText:'confirm',
        cancelText:'',
        spareText:'',
        confirmIsloading:true,
        cancelIsloading:false,
        spareIsloading:false,
        focus:'confirm',
        showCloseIcon:true,
        beforeClose:'',
        lockScroll:false,
        closeOnClickModal:false
      }
    },
    computed:{
      iconColor(){
        let iconColorVal = null;
        if(this.type==undefined||this.type===''||this.type===null){
          iconColorVal = messageIconColorMap['info'];
        }else{
          iconColorVal = messageIconColorMap[this.type];
        }
        return iconColorVal;
      },
      iconType(){
        let iconTypeVal = null;
        if(this.type==undefined||this.type===''||this.type===null){
          iconTypeVal = messageIconTypeMap['info'];
        }else{
          iconTypeVal = messageIconTypeMap[this.type];
        }
        return iconTypeVal;
      },
      headerTitleType(){
        let footerBtnTypeVal = null;
        if(this.type==undefined||this.type===''||this.type===null){
          footerBtnTypeVal = messageBtnTypeMap['info'];
        }else{
          footerBtnTypeVal = messageBtnTypeMap[this.type];
        }
        return footerBtnTypeVal;
      },
      footerBtnType(){
        let footerBtnTypeVal = {};
        if(this.focus===''){
          footerBtnTypeVal['confirm'] = 'primary';
        }else{
          footerBtnTypeVal[this.focus] = 'primary';
        }
        return footerBtnTypeVal;
      },
      headerText(){
        let headerTextVal = null;
        if(this.type==undefined||this.type===''||this.type===null){
          headerTextVal = this.messageHeaderTextMap['info'];
        }else{
          headerTextVal = this.messageHeaderTextMap[this.type];
        }
        return headerTextVal;
      }
    },
    mounted(){},
    methods: {
      close_click(event){
        this.showMessage=false;
        if(this.lockScroll){
          document.getElementsByTagName('html')[0].style.overflow = null;
        }
      },
      safe_close(){
        let issafe = this.safetag;
        return () => {
          this.$nextTick(() => {
            if(issafe===this.safetag){this.close_click();}
          });
        };
      },
      overlay_click(event){
        if(this.closeOnClickModal){
          this.close_click(event);
        }
      },
      onConfirmSoucer(event){
        this.action='confirm';
        this.beforeClose(this.action,this.close_click,this.doubleRe,this);
      },
      onCancelSoucer(event){
        this.action='cancel';
        this.beforeClose(this.action,this.close_click,this.doubleRe,this);
      },
      onSpareSoucer(){
        this.action='spare';
        this.beforeClose(this.action,this.close_click,this.doubleRe,this);
      },
      modalKeyDown(event){
//        console.log(event);
      }
    },
    watch:{
//      showMessage(val){
//        console.log(val);
//        if(val){
//          this.$refs.confirmRef.$el.focus();       //focus 可能性3
//        }
//      }
    }
  }
</script>
<style>
  .test1-enter{
    opacity:0;
    -ms-transform:scaleY(0);
    transform:scaleY(0);
  }
  .test1-enter-active{
    opacity:1;
    -ms-transform:scaleY(1);
    transform:scaleY(1);
    transition:transform .3s cubic-bezier(1,.23,1,.32) .1s,opacity .3s cubic-bezier(1,.23,1,.32) .1s;
    -ms-transform-origin:center center;
    transform-origin:center center;
  }
  .test1-leave{
    opacity:1;
    -ms-transform:scaleY(1);
    transform:scaleY(1);
  }
  .test1-leave-active{
    opacity:0;
    -ms-transform:scaleY(0);
    transform:scaleY(0);
    transition:transform .3s cubic-bezier(.23,1,.32,1) .1s,opacity .3s cubic-bezier(.23,1,.32,1) .1s;
    -ms-transform-origin:center top;
    transform-origin:center top;
  }

  .test2-enter-active {
    transition: all .3s ease;
  }
  .test2-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .test2-enter, .test2-leave-active {
    padding-left: 10px;
    opacity: 0;
  }
</style>
