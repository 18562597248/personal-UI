<template>
  <span ref="trigger">
    <slot></slot>
    <transition>
        <div :id="id" ref="popper" v-show="showPopper" :class="tooltipClass">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner" :class="this.textColor">
                {{text}}
            </div>
        </div>
    </transition>
  </span>
</template>
<script>
    import Popper from 'src/utils/vue-popper.js'
    import { isOneOf } from 'src/utils/validator.js'
    import {on , off } from 'src/utils/dom.js'
    export default {
        name:'hd-tooltip',
        mixins: [Popper],
        props: {
            id:{
                type: [String, Number],
                default:''
            },
            text: {
                type: [String, Number],
                default: ''
            },
            'text-color':{
                type:String,
                default:'snow'
            },
            'bg-color':{
                type:String,
                default:''
            },
            larged:{
                type:Boolean,
                default:false
            },
            placement: {
                validator(value){
                    return isOneOf(value, ['top', 'left', 'right', 'bottom'])
                },
                default:'top'
            },
            reference: {},
            trigger: {
                type: String,
                default: 'hover',
                validator(value){
                    return isOneOf(value, ['click', 'focus', 'hover', 'manual'])
                }
            },
        },
        computed:{
            tooltipClass(){
                if(this.larged==true){
                    return ['tooltip tooltip-lg tooltip-'+ this.bgColor,this.placement]
                }else{
                    return ['tooltip tooltip-'+ this.bgColor,this.placement]
                }
            }
        },
        mounted() {
            let reference = this.reference;
            const popper = this.popper || this.$refs.popper;
            if (!reference && this.$slots.default[0]) {
                reference = this.referenceElm = this.$slots.default[0].elm;
            }
            if (this.trigger === 'click') {
                on(reference, 'click', this.doToggle);
                on(document, 'click', this.handleDocumentClick);
            } else if (this.trigger === 'hover') {
                on(reference, 'mouseenter', this.handleMouseEnter);
                on(popper, 'mouseenter', this.handleMouseEnter);
                on(reference, 'mouseleave', this.handleMouseLeave);
                on(popper, 'mouseleave', this.handleMouseLeave);
            }
            else if (this.trigger === 'focus') {
                let found = false;
                if ([].slice.call(reference.children).length) {
                    const children = reference.childNodes;
                    const len = children.length;
                    for (let i = 0; i < len; i++) {
                      if (children[i].nodeName === 'INPUT' ||
                          children[i].nodeName === 'TEXTAREA') {
                          on(children[i], 'focus', this.doShow);
                          on(children[i], 'blur', this.doClose);
                          found = true;
                          break;
                      }
                    }
                }
                if (found) return;
                if (reference.nodeName === 'INPUT' ||
                    reference.nodeName === 'TEXTAREA') {
                    on(reference, 'focus', this.doShow);
                    on(reference, 'blur', this.doClose);
                } else {
                    on(reference, 'mousedown', this.doShow);
                    on(reference, 'mouseup', this.doClose);
                }
            }
        },
        methods:{
            handleMouseEnter() {
//              if (this.openDelay) {
//                  setTimeout(() => {
//                      this.showPopper = true;
//                  }, this.openDelay);
//              } else {
                this.showPopper = true;
//              }
//              clearTimeout(this._timer);
            },
            handleMouseLeave() {
//              this._timer = setTimeout(() => {
                this.showPopper = false;
//              }, 200);
            },
            doToggle() {
                this.showPopper = !this.showPopper;
            },
            doShow() {
                this.showPopper = true;
            },
            doClose() {
                this.showPopper = false;
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
            off(reference, 'click', this.doToggle);
            off(reference, 'mouseup', this.doClose);
            off(reference, 'mousedown', this.doShow);
            off(reference, 'focus', this.doShow);
            off(reference, 'blur', this.doClose);
            off(reference, 'mouseleave', this.handleMouseLeave);
            off(reference, 'mouseenter', this.handleMouseEnter);
            off(document, 'click', this.handleDocumentClick);
        }

    }
</script>

<style>
    .tooltip.top,
    .tooltip.left,
    .tooltip.right,
    .tooltip.bottom {
        opacity: .9;
    }
    .fadein-enter {
        animation:fadein-in 0.3s ease-in;
    }
    .fadein-leave-active {
        animation:fadein-out 0.3s ease-out;
    }
    @keyframes fadein-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .9;
        }
    }
    @keyframes fadein-out {
        0% {
            opacity: .9;
        }
        100% {
            opacity: 0;
        }
    }
    .tooltip-lg.tooltip > .tooltip-inner {
        font-size: 15px !important;
    }
    .tooltip-white.tooltip > .tooltip-inner {
        border: 1px solid #ffffff;
        background-color: #ffffff;
        color: #262626;
    }
    .tooltip-white.tooltip.top .tooltip-arrow {
        border-top-color: #ffffff;
    }
    .tooltip-white.tooltip.right .tooltip-arrow {
        border-right-color: #ffffff;
    }
    .tooltip-white.tooltip.left .tooltip-arrow {
        border-left-color: #ffffff;
    }
    .tooltip-white.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #ffffff;
    }
    .tooltip-whitesmoke.tooltip > .tooltip-inner {
        border: 1px solid #f5f5f5;
        background-color: #f5f5f5;
        color: #262626;
    }
    .tooltip-whitesmoke.tooltip.top .tooltip-arrow {
        border-top-color: #f5f5f5;
    }
    .tooltip-whitesmoke.tooltip.right .tooltip-arrow {
        border-right-color: #f5f5f5;
    }
    .tooltip-whitesmoke.tooltip.left .tooltip-arrow {
        border-left-color: #f5f5f5;
    }
    .tooltip-whitesmoke.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #f5f5f5;
    }
    .tooltip-snow.tooltip > .tooltip-inner {
        border: 1px solid #fbfbfb;
        background-color: #fbfbfb;
        color: #262626;
    }
    .tooltip-snow.tooltip.top .tooltip-arrow {
        border-top-color: #fbfbfb;
    }
    .tooltip-snow.tooltip.right .tooltip-arrow {
        border-right-color: #fbfbfb;
    }
    .tooltip-snow.tooltip.left .tooltip-arrow {
        border-left-color: #fbfbfb;
    }
    .tooltip-snow.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #fbfbfb;
    }
    .tooltip-seashell.tooltip > .tooltip-inner {
        border: 1px solid #f3f3f3;
        background-color: #f3f3f3;
        color: #262626;
    }
    .tooltip-seashell.tooltip.top .tooltip-arrow {
        border-top-color: #f3f3f3;
    }
    .tooltip-seashell.tooltip.right .tooltip-arrow {
        border-right-color: #f3f3f3;
    }
    .tooltip-seashell.tooltip.left .tooltip-arrow {
        border-left-color: #f3f3f3;
    }
    .tooltip-seashell.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #f3f3f3;
    }
    .tooltip-ivory.tooltip > .tooltip-inner {
        border: 1px solid #eeeeee;
        background-color: #eeeeee;
        color: #262626;
    }
    .tooltip-ivory.tooltip.top .tooltip-arrow {
        border-top-color: #eeeeee;
    }
    .tooltip-ivory.tooltip.right .tooltip-arrow {
        border-right-color: #eeeeee;
    }
    .tooltip-ivory.tooltip.left .tooltip-arrow {
        border-left-color: #eeeeee;
    }
    .tooltip-ivory.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #eeeeee;
    }
    .tooltip-platinum.tooltip > .tooltip-inner {
        border: 1px solid #e5e5e5;
        background-color: #e5e5e5;
        color: #262626;
    }
    .tooltip-platinum.tooltip.top .tooltip-arrow {
        border-top-color: #e5e5e5;
    }
    .tooltip-platinum.tooltip.right .tooltip-arrow {
        border-right-color: #e5e5e5;
    }
    .tooltip-platinum.tooltip.left .tooltip-arrow {
        border-left-color: #e5e5e5;
    }
    .tooltip-platinum.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #e5e5e5;
    }
    .tooltip-lightgray.tooltip > .tooltip-inner {
        border: 1px solid #d0d0d0;
        background-color: #d0d0d0;
        color: #262626;
    }
    .tooltip-lightgray.tooltip.top .tooltip-arrow {
        border-top-color: #d0d0d0;
    }
    .tooltip-lightgray.tooltip.right .tooltip-arrow {
        border-right-color: #d0d0d0;
    }
    .tooltip-lightgray.tooltip.left .tooltip-arrow {
        border-left-color: #d0d0d0;
    }
    .tooltip-lightgray.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #d0d0d0;
    }
    .tooltip-gray.tooltip > .tooltip-inner {
        border: 1px solid #cccccc;
        background-color: #cccccc;
        color: #262626;
    }
    .tooltip-gray.tooltip.top .tooltip-arrow {
        border-top-color: #cccccc;
    }
    .tooltip-gray.tooltip.right .tooltip-arrow {
        border-right-color: #cccccc;
    }
    .tooltip-gray.tooltip.left .tooltip-arrow {
        border-left-color: #cccccc;
    }
    .tooltip-gray.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #cccccc;
    }
    .tooltip-darkgray.tooltip > .tooltip-inner {
        border: 1px solid #999999;
        background-color: #999999;
        color: #262626;
    }
    .tooltip-darkgray.tooltip.top .tooltip-arrow {
        border-top-color: #999999;
    }
    .tooltip-darkgray.tooltip.right .tooltip-arrow {
        border-right-color: #999999;
    }
    .tooltip-darkgray.tooltip.left .tooltip-arrow {
        border-left-color: #999999;
    }
    .tooltip-darkgray.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #999999;
    }
    .tooltip-silver.tooltip > .tooltip-inner {
        border: 1px solid #777777;
        background-color: #777777;
        color: #ffffff;
    }
    .tooltip-silver.tooltip.top .tooltip-arrow {
        border-top-color: #777777;
    }
    .tooltip-silver.tooltip.right .tooltip-arrow {
        border-right-color: #777777;
    }
    .tooltip-silver.tooltip.left .tooltip-arrow {
        border-left-color: #777777;
    }
    .tooltip-silver.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #777777;
    }
    .tooltip-sonic-silver.tooltip > .tooltip-inner {
        border: 1px solid #737373;
        background-color: #737373;
        color: #ffffff;
    }
    .tooltip-sonic-silver.tooltip.top .tooltip-arrow {
        border-top-color: #737373;
    }
    .tooltip-sonic-silver.tooltip.right .tooltip-arrow {
        border-right-color: #737373;
    }
    .tooltip-sonic-silver.tooltip.left .tooltip-arrow {
        border-left-color: #737373;
    }
    .tooltip-sonic-silver.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #737373;
    }
    .tooltip-storm-cloud.tooltip > .tooltip-inner {
        border: 1px solid #666666;
        background-color: #666666;
        color: #ffffff;
    }
    .tooltip-storm-cloud.tooltip.top .tooltip-arrow {
        border-top-color: #666666;
    }
    .tooltip-storm-cloud.tooltip.right .tooltip-arrow {
        border-right-color: #666666;
    }
    .tooltip-storm-cloud.tooltip.left .tooltip-arrow {
        border-left-color: #666666;
    }
    .tooltip-storm-cloud.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #666666;
    }
    .tooltip-lightcarbon.tooltip > .tooltip-inner {
        border: 1px solid #555555;
        background-color: #555555;
        color: #ffffff;
    }
    .tooltip-lightcarbon.tooltip.top .tooltip-arrow {
        border-top-color: #555555;
    }
    .tooltip-lightcarbon.tooltip.right .tooltip-arrow {
        border-right-color: #555555;
    }
    .tooltip-lightcarbon.tooltip.left .tooltip-arrow {
        border-left-color: #555555;
    }
    .tooltip-lightcarbon.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #555555;
    }
    .tooltip-carbon.tooltip > .tooltip-inner {
        border: 1px solid #444444;
        background-color: #444444;
        color: #ffffff;
    }
    .tooltip-carbon.tooltip.top .tooltip-arrow {
        border-top-color: #444444;
    }
    .tooltip-carbon.tooltip.right .tooltip-arrow {
        border-right-color: #444444;
    }
    .tooltip-carbon.tooltip.left .tooltip-arrow {
        border-left-color: #444444;
    }
    .tooltip-carbon.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #444444;
    }
    .tooltip-slate-gray.tooltip > .tooltip-inner {
        border: 1px solid #333333;
        background-color: #333333;
        color: #ffffff;
    }
    .tooltip-slate-gray.tooltip.top .tooltip-arrow {
        border-top-color: #333333;
    }
    .tooltip-slate-gray.tooltip.right .tooltip-arrow {
        border-right-color: #333333;
    }
    .tooltip-slate-gray.tooltip.left .tooltip-arrow {
        border-left-color: #333333;
    }
    .tooltip-slate-gray.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #333333;
    }
    .tooltip-darkcarbon.tooltip > .tooltip-inner {
        border: 1px solid #262626;
        background-color: #262626;
        color: #ffffff;
    }
    .tooltip-darkcarbon.tooltip.top .tooltip-arrow {
        border-top-color: #262626;
    }
    .tooltip-darkcarbon.tooltip.right .tooltip-arrow {
        border-right-color: #262626;
    }
    .tooltip-darkcarbon.tooltip.left .tooltip-arrow {
        border-left-color: #262626;
    }
    .tooltip-darkcarbon.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #262626;
    }
    .tooltip-blue.tooltip > .tooltip-inner {
        border: 1px solid #5db2ff;
        background-color: #5db2ff;
        color: #fff;
    }
    .tooltip-blue.tooltip.top .tooltip-arrow {
        border-top-color: #5db2ff;
    }
    .tooltip-blue.tooltip.right .tooltip-arrow {
        border-right-color: #5db2ff;
    }
    .tooltip-blue.tooltip.left .tooltip-arrow {
        border-left-color: #5db2ff;
    }
    .tooltip-blue.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #5db2ff;
    }
    .tooltip-info.tooltip > .tooltip-inner {
        border: 1px solid #57b5e3;
        background-color: #57b5e3;
        color: #fff;
    }
    .tooltip-info.tooltip.top .tooltip-arrow {
        border-top-color: #57b5e3;
    }
    .tooltip-info.tooltip.right .tooltip-arrow {
        border-right-color: #57b5e3;
    }
    .tooltip-info.tooltip.left .tooltip-arrow {
        border-left-color: #57b5e3;
    }
    .tooltip-info.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #57b5e3;
    }
    .tooltip-sky.tooltip > .tooltip-inner {
        border: 1px solid #11a9cc;
        background-color: #11a9cc;
        color: #fff;
    }
    .tooltip-sky.tooltip.top .tooltip-arrow {
        border-top-color: #11a9cc;
    }
    .tooltip-sky.tooltip.right .tooltip-arrow {
        border-right-color: #11a9cc;
    }
    .tooltip-sky.tooltip.left .tooltip-arrow {
        border-left-color: #11a9cc;
    }
    .tooltip-sky.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #11a9cc;
    }
    .tooltip-primary.tooltip > .tooltip-inner {
        border: 1px solid #4374e0;
        background-color: #4374e0;
        color: #fff;
    }
    .tooltip-primary.tooltip.top .tooltip-arrow {
        border-top-color: #4374e0;
    }
    .tooltip-primary.tooltip.right .tooltip-arrow {
        border-right-color: #4374e0;
    }
    .tooltip-primary.tooltip.left .tooltip-arrow {
        border-left-color: #4374e0;
    }
    .tooltip-primary.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #4374e0;
    }
    .tooltip-azure.tooltip > .tooltip-inner {
        border: 1px solid #2dc3e8;
        background-color: #2dc3e8;
        color: #fff;
    }
    .tooltip-azure.tooltip.top .tooltip-arrow {
        border-top-color: #2dc3e8;
    }
    .tooltip-azure.tooltip.right .tooltip-arrow {
        border-right-color: #2dc3e8;
    }
    .tooltip-azure.tooltip.left .tooltip-arrow {
        border-left-color: #2dc3e8;
    }
    .tooltip-azure.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #2dc3e8;
    }
    .tooltip-blueberry.tooltip > .tooltip-inner {
        border: 1px solid #6f85bf;
        background-color: #6f85bf;
        color: #fff;
    }
    .tooltip-blueberry.tooltip.top .tooltip-arrow {
        border-top-color: #6f85bf;
    }
    .tooltip-blueberry.tooltip.right .tooltip-arrow {
        border-right-color: #6f85bf;
    }
    .tooltip-blueberry.tooltip.left .tooltip-arrow {
        border-left-color: #6f85bf;
    }
    .tooltip-blueberry.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #6f85bf;
    }
    .tooltip-palegreen.tooltip > .tooltip-inner {
        border: 1px solid #a0d468;
        background-color: #a0d468;
        color: #fff;
    }
    .tooltip-palegreen.tooltip.top .tooltip-arrow {
        border-top-color: #a0d468;
    }
    .tooltip-palegreen.tooltip.right .tooltip-arrow {
        border-right-color: #a0d468;
    }
    .tooltip-palegreen.tooltip.left .tooltip-arrow {
        border-left-color: #a0d468;
    }
    .tooltip-palegreen.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #a0d468;
    }
    .tooltip-success.tooltip > .tooltip-inner {
        border: 1px solid #53a93f;
        background-color: #53a93f;
        color: #fff;
    }
    .tooltip-success.tooltip.top .tooltip-arrow {
        border-top-color: #53a93f;
    }
    .tooltip-success.tooltip.right .tooltip-arrow {
        border-right-color: #53a93f;
    }
    .tooltip-success.tooltip.left .tooltip-arrow {
        border-left-color: #53a93f;
    }
    .tooltip-success.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #53a93f;
    }
    .tooltip-green.tooltip > .tooltip-inner {
        border: 1px solid #8cc474;
        background-color: #8cc474;
        color: #fff;
    }
    .tooltip-green.tooltip.top .tooltip-arrow {
        border-top-color: #8cc474;
    }
    .tooltip-green.tooltip.right .tooltip-arrow {
        border-right-color: #8cc474;
    }
    .tooltip-green.tooltip.left .tooltip-arrow {
        border-left-color: #8cc474;
    }
    .tooltip-green.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #8cc474;
    }
    .tooltip-lightyellow.tooltip > .tooltip-inner {
        border: 1px solid #f6d52e;
        background-color: #f6d52e;
        color: #fff;
    }
    .tooltip-lightyellow.tooltip.top .tooltip-arrow {
        border-top-color: #f6d52e;
    }
    .tooltip-lightyellow.tooltip.right .tooltip-arrow {
        border-right-color: #f6d52e;
    }
    .tooltip-lightyellow.tooltip.left .tooltip-arrow {
        border-left-color: #f6d52e;
    }
    .tooltip-lightyellow.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #f6d52e;
    }
    .tooltip-yellow.tooltip > .tooltip-inner {
        border: 1px solid #ffce55;
        background-color: #ffce55;
        color: #fff;
    }
    .tooltip-yellow.tooltip.top .tooltip-arrow {
        border-top-color: #ffce55;
    }
    .tooltip-yellow.tooltip.right .tooltip-arrow {
        border-right-color: #ffce55;
    }
    .tooltip-yellow.tooltip.left .tooltip-arrow {
        border-left-color: #ffce55;
    }
    .tooltip-yellow.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #ffce55;
    }
    .tooltip-warning.tooltip > .tooltip-inner {
        border: 1px solid #f4b400;
        background-color: #f4b400;
        color: #fff;
    }
    .tooltip-warning.tooltip.top .tooltip-arrow {
        border-top-color: #f4b400;
    }
    .tooltip-warning.tooltip.right .tooltip-arrow {
        border-right-color: #f4b400;
    }
    .tooltip-warning.tooltip.left .tooltip-arrow {
        border-left-color: #f4b400;
    }
    .tooltip-warning.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #f4b400;
    }
    .tooltip-gold.tooltip > .tooltip-inner {
        border: 1px solid #f9b256;
        background-color: #f9b256;
        color: #fff;
    }
    .tooltip-gold.tooltip.top .tooltip-arrow {
        border-top-color: #f9b256;
    }
    .tooltip-gold.tooltip.right .tooltip-arrow {
        border-right-color: #f9b256;
    }
    .tooltip-gold.tooltip.left .tooltip-arrow {
        border-left-color: #f9b256;
    }
    .tooltip-gold.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #f9b256;
    }
    .tooltip-orange.tooltip > .tooltip-inner {
        border: 1px solid #fb6e52;
        background-color: #fb6e52;
        color: #fff;
    }
    .tooltip-orange.tooltip.top .tooltip-arrow {
        border-top-color: #fb6e52;
    }
    .tooltip-orange.tooltip.right .tooltip-arrow {
        border-right-color: #fb6e52;
    }
    .tooltip-orange.tooltip.left .tooltip-arrow {
        border-left-color: #fb6e52;
    }
    .tooltip-orange.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #fb6e52;
    }
    .tooltip-lightred.tooltip > .tooltip-inner {
        border: 1px solid #e46f61;
        background-color: #e46f61;
        color: #fff;
    }
    .tooltip-lightred.tooltip.top .tooltip-arrow {
        border-top-color: #e46f61;
    }
    .tooltip-lightred.tooltip.right .tooltip-arrow {
        border-right-color: #e46f61;
    }
    .tooltip-lightred.tooltip.left .tooltip-arrow {
        border-left-color: #e46f61;
    }
    .tooltip-lightred.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #e46f61;
    }
    .tooltip-darkorange.tooltip > .tooltip-inner {
        border: 1px solid #ed4e2a;
        background-color: #ed4e2a;
        color: #fff;
    }
    .tooltip-darkorange.tooltip.top .tooltip-arrow {
        border-top-color: #ed4e2a;
    }
    .tooltip-darkorange.tooltip.right .tooltip-arrow {
        border-right-color: #ed4e2a;
    }
    .tooltip-darkorange.tooltip.left .tooltip-arrow {
        border-left-color: #ed4e2a;
    }
    .tooltip-darkorange.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #ed4e2a;
    }
    .tooltip-red.tooltip > .tooltip-inner {
        border: 1px solid #df5138;
        background-color: #df5138;
        color: #fff;
    }
    .tooltip-red.tooltip.top .tooltip-arrow {
        border-top-color: #df5138;
    }
    .tooltip-red.tooltip.right .tooltip-arrow {
        border-right-color: #df5138;
    }
    .tooltip-red.tooltip.left .tooltip-arrow {
        border-left-color: #df5138;
    }
    .tooltip-red.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #df5138;
    }
    .tooltip-pink.tooltip > .tooltip-inner {
        border: 1px solid #e75b8d;
        background-color: #e75b8d;
        color: #fff;
    }
    .tooltip-pink.tooltip.top .tooltip-arrow {
        border-top-color: #e75b8d;
    }
    .tooltip-pink.tooltip.right .tooltip-arrow {
        border-right-color: #e75b8d;
    }
    .tooltip-pink.tooltip.left .tooltip-arrow {
        border-left-color: #e75b8d;
    }
    .tooltip-pink.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #e75b8d;
    }
    .tooltip-darkpink.tooltip > .tooltip-inner {
        border: 1px solid #cc324b;
        background-color: #cc324b;
        color: #fff;
    }
    .tooltip-darkpink.tooltip.top .tooltip-arrow {
        border-top-color: #cc324b;
    }
    .tooltip-darkpink.tooltip.right .tooltip-arrow {
        border-right-color: #cc324b;
    }
    .tooltip-darkpink.tooltip.left .tooltip-arrow {
        border-left-color: #cc324b;
    }
    .tooltip-darkpink.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #cc324b;
    }
    .tooltip-danger.tooltip > .tooltip-inner {
        border: 1px solid #d73d32;
        background-color: #d73d32;
        color: #fff;
    }
    .tooltip-danger.tooltip.top .tooltip-arrow {
        border-top-color: #d73d32;
    }
    .tooltip-danger.tooltip.right .tooltip-arrow {
        border-right-color: #d73d32;
    }
    .tooltip-danger.tooltip.left .tooltip-arrow {
        border-left-color: #d73d32;
    }
    .tooltip-danger.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #d73d32;
    }
    .tooltip-magenta.tooltip > .tooltip-inner {
        border: 1px solid #bc5679;
        background-color: #bc5679;
        color: #fff;
    }
    .tooltip-magenta.tooltip.top .tooltip-arrow {
        border-top-color: #bc5679;
    }
    .tooltip-magenta.tooltip.right .tooltip-arrow {
        border-right-color: #bc5679;
    }
    .tooltip-magenta.tooltip.left .tooltip-arrow {
        border-left-color: #bc5679;
    }
    .tooltip-magenta.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #bc5679;
    }
    .tooltip-purple.tooltip > .tooltip-inner {
        border: 1px solid #7e3794;
        background-color: #7e3794;
        color: #fff;
    }
    .tooltip-purple.tooltip.top .tooltip-arrow {
        border-top-color: #7e3794;
    }
    .tooltip-purple.tooltip.right .tooltip-arrow {
        border-right-color: #7e3794;
    }
    .tooltip-purple.tooltip.left .tooltip-arrow {
        border-left-color: #7e3794;
    }
    .tooltip-purple.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #7e3794;
    }
    .tooltip-maroon.tooltip > .tooltip-inner {
        border: 1px solid #981b48;
        background-color: #981b48;
        color: #fff;
    }
    .tooltip-maroon.tooltip.top .tooltip-arrow {
        border-top-color: #981b48;
    }
    .tooltip-maroon.tooltip.right .tooltip-arrow {
        border-right-color: #981b48;
    }
    .tooltip-maroon.tooltip.left .tooltip-arrow {
        border-left-color: #981b48;
    }
    .tooltip-maroon.tooltip.bottom .tooltip-arrow {
        border-bottom-color: #981b48;
    }
</style>