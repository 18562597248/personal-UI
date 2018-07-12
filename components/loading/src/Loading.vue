<template>
  <transition name="fade"  @after-leave="handleAfterLeave">
    <div
      ref="popper"
      v-show="visible"
      class="loading-mask"
      :class="{ 'is-fullscreen': fullscreen }"
      >
      <div class="loading-spinner">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" :class="color" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <p v-if="text" class="loading-text" :class="loadTextColor">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
    import popup from 'src/utils/popup/popupManager.js';  //z-index管理
  export default {
    data() {
      return {
        color:'',
        loadTextColor:'',
        text: null,
        fullscreen:true,
        visible: false
      };
    },
    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      },
      setColor(color) {
        this.color = color;
      },
      setTextColor(loadTextColor) {
        this.loadTextColor = loadTextColor;
      }
    },
    watch:{
        visible(val){
            if(val){if(this.$refs.popper){this.$refs.popper.style.zIndex = popup.nextZIndex();}}
        },     //z-index管理
    }
  };
</script>
<style>

  .loading-mask {
    position: absolute;
    z-index: 10000;
    background-color: rgba(255, 255, 255, .9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
  }

  .loading-mask.is-fullscreen {
    position: fixed
  }

  .loading-mask.is-fullscreen .loading-spinner {
    margin-top: -25px
  }

  .loading-mask.is-fullscreen .loading-spinner .circular {
    width: 50px
  }

  .loading-spinner {
    top: 50%;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg)
    }
  }

  @keyframes load {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124
    }
  }

  .loading-spinner .loading-text {
    color: #2dc3e8 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.themeprimary {
    color: #2dc3e8 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.themesecondary {
    color:  #fb6e52 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.themethirdcolor {
    color:  #ffce55 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.themefourthcolor {
    color:  #a0d468 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.themefifthcolor {
    color:  #e75b8d !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.white {
    color:  #ffffff !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.snow {
    color:  #fbfbfb !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.whitesmoke {
    color:  #f5f5f5 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.seashell {
    color:  #f3f3f3 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.ivory {
    color:  #eeeeee !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.platinum {
    color:  #e5e5e5 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.lightgray {
    color: #d0d0d0 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.gray {
    color:  #cccccc !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.darkgray {
    color:  #999999 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.silver {
    color:  #777777 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.sonic-silver {
    color:  #737373 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.storm-cloud {
    color:  #666666 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.lightcarbon {
    color:  #555555 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.carbon {
    color:  #444444 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.slate-gray {
    color:  #333333 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.darkcarbon {
    color: #262626 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.blue {
    color:  #5db2ff !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.info {
    color:  #57b5e3 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.sky {
    color:  #11a9cc !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.primary {
    color:  #4374e0 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.azure {
    color:  #2dc3e8 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.blueberry {
    color:  #6f85bf !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.palegreen {
    color: #a0d468 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.success {
    color:  #53a93f !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.green {
    color:  #8cc474 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.lightyellow {
    color:  #f6d52e !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.yellow {
    color:  #ffce55 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.warning {
    color:  #f4b400 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.gold {
    color:  #f9b256 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.orange {
    color:  #fb6e52 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.lightred {
    color:  #e46f61 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.darkorange {
    color:  #ed4e2a !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.red {
    color:  #df5138 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.pink {
    color:  #e75b8d !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.darkpink {
    color:  #cc324b !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.danger {
    color:  #d73d32 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.magenta {
    color:  #bc5679 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.purple {
    color: #7e3794 !important;
    margin: 3px 0;
    font-size: 14px
  }
  .loading-spinner .loading-text.maroon {
    color:#981b48 !important;
    margin: 3px 0;
    font-size: 14px
  }

  .loading-spinner .circular {
    width: 42px;
    animation: rotate 2s linear infinite
  }

  .loading-spinner .path {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #2dc3e8 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.themeprimary {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #2dc3e8 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.themesecondary {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #fb6e52 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.themethirdcolor {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #ffce55 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.themefourthcolor {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #a0d468 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.themefifthcolor {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #e75b8d !important;
    stroke-linecap: round
  }
  .loading-spinner .path.white {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #ffffff !important;
    stroke-linecap: round
  }
  .loading-spinner .path.snow {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #fbfbfb !important;
    stroke-linecap: round
  }
  .loading-spinner .path.whitesmoke {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #f5f5f5 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.seashell {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #f3f3f3 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.ivory {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #eeeeee !important;
    stroke-linecap: round
  }
  .loading-spinner .path.platinum {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #e5e5e5 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.lightgray {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #d0d0d0 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.gray {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #cccccc !important;
    stroke-linecap: round
  }
  .loading-spinner .path.darkgray {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #999999 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.silver {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #777777 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.sonic-silver {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #737373 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.storm-cloud {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #666666 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.lightcarbon {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #555555 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.carbon {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #444444 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.slate-gray {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #333333 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.darkcarbon {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #262626 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.blue {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #5db2ff !important;
    stroke-linecap: round
  }
  .loading-spinner .path.info {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #57b5e3 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.sky {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #11a9cc !important;
    stroke-linecap: round
  }
  .loading-spinner .path.primary {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #4374e0 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.azure {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #2dc3e8 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.blueberry {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #6f85bf !important;
    stroke-linecap: round
  }
  .loading-spinner .path.palegreen {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #a0d468 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.success {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #53a93f !important;
    stroke-linecap: round
  }
  .loading-spinner .path.green {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #8cc474 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.lightyellow {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #f6d52e !important;
    stroke-linecap: round
  }
  .loading-spinner .path.yellow {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #ffce55 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.warning {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #f4b400 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.gold {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #f9b256 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.orange {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #fb6e52 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.lightred {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #e46f61 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.red {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #df5138 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.darkorange {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #ed4e2a !important;
    stroke-linecap: round
  }
  .loading-spinner .path.pink {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #e75b8d !important;
    stroke-linecap: round
  }
  .loading-spinner .path.darkpink {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #cc324b !important;
    stroke-linecap: round
  }
  .loading-spinner .path.danger {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #d73d32 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.magenta {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #bc5679 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.purple {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #7e3794 !important;
    stroke-linecap: round
  }
  .loading-spinner .path.maroon {
    animation: load 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #981b48 !important;
    stroke-linecap: round
  }
</style>
