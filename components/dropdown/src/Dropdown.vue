<template>
  <div ref="reference" class="hd-dropdown">
      <slot></slot>
      <hd-dropdown-menu ref="hd_dropdown_menu" :itemColor_="itemColor" :bgColor_="bgColor" :textColor_="textColor" :data_="data" :parentChoiced_="parentChoiced"
                        class="hd-first-dropdown-menu" :style="hdfirdpdnmeunSty"
                        @mousemove="dropdown_menu_mousemove" @mouseout="dropdown_menu_mouseout"
                        v-show="showPopper"
      ></hd-dropdown-menu>
  </div>
</template>
<script>
  import Popper from 'src/utils/vue-popper.js';
  import { isOneOf } from 'src/utils/validator.js'
  import {on , off } from 'src/utils/dom.js'
  import emitter from 'src/utils/emitter';
  import popup from 'src/utils/popup/popupManager.js'     //z-index管理
  const cssPreFix = 'dropdown-'
  export default {
    name:'hd-dropdown',
    mixins: [emitter,Popper],
    componentName:'hd-dropdown',
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      itemColor:{
        validator(value){
          return isOneOf(value,['gray','info','primary','success','warning','danger','inverse','blue','blueberry','palegreen','orange','darkorange','magenta','purple','maroon'])
        },
        default:'gray'
      },
      bgColor:{
        validator(value){
          return isOneOf(value,['white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'white'
      },
      textColor:{
        validator(value){
          return isOneOf(value,['black','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:'black'
      },
      data: {
        type: Array
      },
      parentChoiced:{
        type:Boolean,
        default:false
      },
        reference: {},
        trigger: {
            type: String,
            default: 'click',
            validator(value){
                return isOneOf(value, ['click', 'focus', 'hover', 'manual'])
            }
        },
        selectMode:{
            type:Boolean,
            default: false
        }
    },
    data(){
      return {
        dropdown_mouseout:true,
        slot_click_:false,
        referencewidth:{
          type:[Number,String],
          default:''
        }
      }
    },
    computed:{
      ulCls(){
        return[
          this.data ? 'dropdownmenu' : '',
          this.itemColor==='gray' ? '': cssPreFix+this.itemColor,
          this.bgColor==='white' ? '' : 'bg-'+this.bgColor
        ]
      },
        hdfirdpdnmeunSty(){
            let ret = {};
            if(this.selectMode){
                ret.width = this.referencewidth + 'px';
            }
            return ret;
        }
    },
    mounted () {
//      this.$children[this.$children.length-1].$el.style.display='none';
      document.addEventListener('click', this.body_mousedown);
        this.$refs.popper = this.$refs.hd_dropdown_menu.$el;
        let reference = this.reference;
        const popper = this.popper || this.$refs.popper;
        if(!this){reference = this || this.$refs.reference}
        if (this.trigger === 'click') {
            on(reference, 'click', this.doToggle);
            on(document, 'click', this.handleDocumentClick);
        }
        else if (this.trigger === 'hover') {
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
    beforeUpdate(){
      this.referencewidth = this.$el.offsetWidth;
    },
    beforeDestroy () {
      document.removeEventListener('click', this.body_mousedown);
    },
    methods: {
      show(){
        this.slot_click_=true;
      },
      body_mousedown(){
//        if(this.slot_click_&&(this.$children[this.$children.length-1].$el.style.display=='')){
        if(this.slot_click_ && this.showPopper){
          this.slot_click_=false;
          this.dropdown_menu_hide();
//        } else if(this.slot_click_&&(this.$children[this.$children.length-1].$el.style.display=='none')){
        } else if(this.slot_click_ && !this.showPopper){
          this.slot_click_=false;
          this.dropdown_menu_show();
        } else if(this.dropdown_mouseout&&(!this.slot_click_)){
          this.dropdown_menu_hide();
        }
      },
      dropdown_menu_mousemove(){
        this.dropdown_mouseout=false;
      },
      dropdown_menu_mouseout(){
        this.dropdown_mouseout=true;
      },
      dropdown_menu_show(){
//        this.$children[this.$children.length-1].$el.style.display='';
          this.showPopper = true;
        if(this.$refs.hd_dropdown_menu){
          this.$refs.hd_dropdown_menu.$el.style.zIndex = popup.nextZIndex();
        }     //z-index管理
      },
      dropdown_menu_hide(){
//        this.$children[this.$children.length-1].$el.style.display='none';
          this.showPopper = false;
      },

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