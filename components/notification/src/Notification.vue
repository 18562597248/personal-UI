<template>
  <div ref="hdNotifications" id="theOnlyHdNotifications" class="hd-notification" :class="notificationClass">
    <audio ref="hdNotificationSound" src="/static/sound/alert.mp3"></audio>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js';
  import emitter from 'src/utils/emitter';
  //  import Notice from 'src/components/common/notification/Notice.vue';
  const cssPreFix = 'toast-';
  export default{
    name: 'hd-notice-wraper',
    mixins: [emitter],
    props: {},
    data () {
      return {
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
        }
      }
    },
    computed: {
      notificationClass(){
        let clsNameForMode = '';
        if(this.mode==='down'){clsNameForMode='notice-mode-down'}else{clsNameForMode='notice-mode-up'}
        let thisStyle = 'toast-top-right';
        switch(this.position){
          case 'rightTop':thisStyle=cssPreFix+'top-right';break;
          case 'rightBottom':thisStyle=cssPreFix+'bottom-right';break;
          case 'leftBottom':thisStyle=cssPreFix+'bottom-left';break;
          case 'leftTop':thisStyle=cssPreFix+'top-left';break;
        }
        return [thisStyle,clsNameForMode];
      }
    },
    mounted(){},
    methods: {},
    watch:{}
  };
</script>
