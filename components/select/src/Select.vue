<template>
  <span ref="reference" class="hd-select" :style="selStyle" :class="selectCss">
    <div class="hd-select-input" v-if="multipled" @click="showop" :class="inpCss">
      <div class="hd-select-tags" :style="hdSelectTagsStyle">
        <hd-tag v-for="tag in selectes" :bg-color="(tag.color===undefined||tag.color===null)?'azure':tag.color" closable @close.stop="tagclose(tag)" :disabled="disabled">{{tag.text}}</hd-tag>
        <i class="fa fa-times hd-select-input-icon aaa" :style="hdselecticonstyle" v-if="hasvalue" @click.stop="clear"></i>
        <i class="fa fa-chevron-down hd-select-input-icon bbb" :style="hdselecticonstyle" v-else></i>
        <input ref="select_input"
               :id="id"
               type="search"
               :placeholder="placehol"
               :readonly="readonly"
               :name="name"
               :hidden="hidden"
               v-model="selectedtext"
               :style="hdSelectTagsinputStyle"
               @keyup="search($event,selectedtext)"
               @keydown.enter.prevent="selectOption"
               @keydown.down.prevent="handelOption(40)"
               @keydown.up.prevent="handelOption(38)"
               @keydown.delete="delTag"
               :disabled="disabled"
               @blur="inputblur">
      </div>
    </div>
    <div class="hd-select-input" v-else  @click="showop" :class="inpCss">
      <i class="fa fa-times hd-select-input-icon" v-if="hasvalue" @click.stop="clear"></i>
      <i class="fa fa-chevron-down hd-select-input-icon" v-else></i>
      <input ref="select_input"
             :id="id" type="search"
             :placeholder="placehol"
             :readonly="readonly"
             :name="name"
             :hidden="hidden"
             v-model="selectedtext"
             @keyup="search($event,selectedtext)"
             @keydown.enter.prevent="selectOption"
             @keydown.down.prevent="handelOption(40)"
             @keydown.up.prevent="handelOption(38)"
             @keydown.delete="delTag"
             :disabled="disabled"
             @blur="inputblur"
             style="width: 100%"
      >
    </div>
    <div ref="popper" class="hd-select-dropdown" :style="{width: ddwidth + 'px'}" v-show="showPopper" :class="ddCss">
      <div class="hd-scrollbar">
        <div class="hd-select-dropdown__wrap hd-scrollbar__wrap">
          <ul class="hd-scrollbar__view hd-select-dropdown__list" v-if="grouped">
            <slot></slot>
          </ul>
          <ul class="hd-scrollbar__view hd-select-dropdown__list" v-else>
            <slot></slot>
          </ul>
          <ul class="select-not-found" v-show="itemshow">
            <li >无匹配数据</li>
          </ul>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
  import Popper from 'src/utils/vue-popper.js';
  import { isOneOf } from 'src/utils/validator.js';
  import {on , off } from 'src/utils/dom.js'
  import Emitter from 'src/utils/emitter';
  import multipleSearchFilter from 'src/utils/multipleSearchFilter/index';
  import  makePy  from 'src/utils/pinyin';
  import popup from 'src/utils/popup/popupManager.js';  //z-index管理
  import hdTag from 'components/tag';
  export default {
    name:'hd-select',
    components:{
      hdTag
    },
    mixins: [Emitter,makePy,Popper],
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      value:{
        type:Array,
        default(){
          return []
        }
      },
      placeholder:{
        type:String,
        default:''
      },
      name:String,
      disabled:{
        type:Boolean,
        default:false
      },
      radiused:{
        type:Boolean,
        default:false
      },
      width:{
        type:[Number,String],
        default:'100%'
      },
      readonly:{
        type:Boolean,
        default:false
      },
      multipled:{
        type:Boolean,
        default:false
      },
      grouped:{
        type:Boolean,
        default:false
      },
      remote:{
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
      }
    },
    data(){
      return{
        placehol:'',//处理props中的placeholder
        options:[],//处理异步传入的options
        selectedtext:'',//单选input中显示的内容
        selectes:[],//多选tag要显示的内容
//        show:false,//显示下拉列表
        hasvalue:false,//显示清空按钮
        hidden:false,//是否隐藏input
        selectedIndex:-1,
        Index:0,
        ddwidth:{
          type:[Number,String],
          default:''
        },
        itemshow:false,
        hdselecticonstyle:{}
      }
    },
    watch:{
      options(v){
        if(v.length === 0){
          this.itemshow = true
        }else{
          this.itemshow = false
        }
        this.optionSelected()
      },
        value(value){
        this.$emit('input',value);
        this.dispatch('hd-formitem', 'form.change', value);
        if(this.multipled === true){
          this.selectes = []
        }
        if(value.length !== 0){
          if(this.$slots.default !== undefined){
            for(let va = 0;va < value.length;va = va + 1){
              for(let v = 0;v < this.$slots.default.length;v = v + 1){
                if(value[va] === this.$slots.default[v].componentOptions.propsData.item.value){
                  if(this.multipled === true){
                    this.selectes.push(this.$slots.default[v].componentOptions.propsData.item);
                  }else{
                    this.selectedtext = this.$slots.default[v].componentOptions.propsData.item.text
                  }
                }
              }
            }
          }
        }else{
          this.selectedtext = ''
        }
        if(value.length === 0){
          this.hasvalue = false;
          this.placehol = this.placeholder;
          this.hidden = false
        }else{
          this.hasvalue = true;
          this.placehol = '';
          if(this.readonly === true&&this.multipled === true){
            this.hidden = true
          }
        }
      },
      width(val){
        if(val === ''||val === undefined||val === null){
          return
        }else{
          return this.ddwidth = val
        }
      },
      showPopper(val){
        if(val){if(this.$refs.popper){this.$refs.popper.style.zIndex = popup.nextZIndex();}}
      },     //z-index管理
      selectes(val){
        this.$nextTick(function(){
        let ret = {}
        let offsetHeight = this.$el.offsetHeight;
        let retTop = ((((offsetHeight - 13) / 2) / offsetHeight) * 100) - 2;
        let retTop_ = retTop + '%';
        ret = {top:retTop_}
        this.hdselecticonstyle = ret;
        })
      }
    },
    mounted(){
      let value = this.value;
      if(value.length === 0){
        this.hasvalue = false;
        this.placehol = this.placeholder;
        this.hidden = false
      }else{
        this.hasvalue = true;
        this.placehol = '';
        if(this.readonly === true&&this.multipled === true){
          this.hidden = true
        }
      }
      document.addEventListener('click', this.leave, false);

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
      this.ddwidth = this.$el.offsetWidth
    },
    beforeDestroy () {
      document.removeEventListener('click', this.leave, false);
    },
    computed:{
      selectCss(){
        return{
          'disabled' : this.disabled
        }
      },
      selStyle(){
        if(isNaN(Number(this.width))){
          return {width: this.width}
        }else{
          return {width: this.width + 'px'}
        }
      },
      inpCss(){
          return{
              'radius' : this.radiused
          }
      },
      ddCss(){
          return{
              'radius' : this.radiused
          }
      },
      hdSelectTagsStyle(){
        let ret = {};
        if(typeof this.ddwidth==='number'){
          ret['max-width'] = (this.ddwidth-35)+'px';
        }
        return ret;
      },//add by cjp
      hdSelectTagsinputStyle(){
        let ret = {};
        if(this.hasvalue){
          if(this.selectedtext.length <= 0){
            ret['width'] = '10px' ;
          }else{
            ret['width'] = (this.selectedtext.length * 13 + 7) + 'px' ;
          }
        }else{
          ret['width'] = (this.ddwidth-35)+'px';
        }
        return ret;
      }
    },
    methods:{
      optionSelected(){
        let _child = false;
        for(let a = 0;a < this.$slots.default.length;a = a + 1) {
          if (this.$slots.default[a].child === undefined) {
            _child = true
          }else{
            _child = false
          }
        }
        if(_child === true){
          if(this.value.length !== 0){
            if(this.multipled == true){
              this.selectes = [];
              for(let i =0;i < this.value.length;i = i + 1){
                for(let m = 0;m < this.$children.length;m = m + 1){
                  if(this.value[i] === this.$children[m].item.value){
                    this.selectes.push(this.$children[m].item);
                    this.$children[m].selected = true
                  }
                }
              }
            }else{
              for(let o = 0;o < this.$children.length;o = o + 1){
                this.$children[o].selected = false;
              }
              for(let i =0;i < this.value.length;i = i + 1){
                for(let m = 0;m < this.$children.length;m = m + 1){
                  if(this.value[i] === this.$children[m].item.value){
                    this.$children[m].selected = true;
                    this.selectedtext = this.$children[m].item.text
                  }
                }
              }
            }
          }
        }
        if(_child === false){
          if(this.value.length !== 0){
            if(this.multipled == true){
              this.selectes = [];
              for(let i =0;i < this.value.length;i = i + 1){
                for(let m = 0;m < this.$slots.default.length;m = m + 1){
                  if(this.value[i] === this.$slots.default[m].child.item.value){
                    this.selectes.push(this.$slots.default[m].child.item);
                    this.$slots.default[m].child.selected = true
                  }
                }
              }
            }else{
              for(let o = 0;o < this.$slots.default.length;o = o + 1){
                this.$slots.default[o].child.selected = false;
              }
              for(let i =0;i < this.value.length;i = i + 1){
                for(let m = 0;m < this.$slots.default.length;m = m + 1){
                  if(this.value[i] === this.$slots.default[m].child.item.value){
                    this.$slots.default[m].child.selected = true;
                    this.selectedtext = this.$slots.default[m].child.item.text
                  }
                }
              }
            }
          }
        }
      },
      selectOption() {
        if(this.$slots.default !== undefined){
          if(this.multipled){
            if (this.value.indexOf(this.$slots.default[this.Index].child.item.value)<0){
                this.value.push(this.$slots.default[this.Index].child.item.value);
              this.handleChange(this.value);
              this.$slots.default[this.Index].child.selected = true;
              this.selectedtext=''
            }else{
                this.value.splice(this.value.indexOf(this.$slots.default[this.Index].child.item.value),1);
              this.handleChange(this.value);
              this.$slots.default[this.Index].child.selected= false
            }
          }else{
            for(let i = 0;i < this.$slots.default.length;i = i + 1){
              this.$slots.default[i].child.selected = false
            }
            if(this.value.indexOf(this.$slots.default[this.Index].child.item.value)<0) {
                this.value.splice(0,1,this.$slots.default[this.Index].child.item.value);
              this.handleChange(this.value);
              this.$slots.default[this.Index].child.selected = true;
              this.showPopper = false;
            } else{
                this.value.splice(this.value.indexOf(this.$slots.default[this.Index].child.item.value),1);
              this.handleChange(this.value);
              this.$slots.default[this.Index].child.selected = false;
              this.selectedtext=''
            }
          }
        }
      },
      handelOption (direction) {
        if(this.$slots.default !== undefined){
          var _child=[];
          let _this=this;
          this.$slots.default.forEach((val) => {
            if(val.child.display==='block'){
            _child.push(val)
          }
        });
          if (direction === 40) {
            const next = this.selectedIndex + 1;
            this.selectedIndex = (this.selectedIndex === _child.length-1) ? 0 : next;
          } else if (direction === 38) {
            const prev = this.selectedIndex - 1;
            this.selectedIndex = (this.selectedIndex <= 0) ? _child.length-1 : prev;
          }
          for(let i = 0;i < _child.length;i = i + 1){
            _child[i].child.choosed = false
          }
          if(this.selectedIndex> _child.length) {
            this.selectedIndex=0;
            _child[this.selectedIndex].child.choosed = true;
            this.Index=  _child[this.selectedIndex].child.index
          }else{
            _child[this.selectedIndex].child.choosed = true;
            this.Index=  _child[this.selectedIndex].child.index;
            this.$refs.popper.scrollTop = _child[this.selectedIndex].child.$el.offsetTop - 60  //滚动条随动
          }
        }
      },
      delTag(e,k){
        if(this.$slots.default !== undefined){
          if(this.multipled){
            if(this.selectedtext !=''){
              this.selectedtext = this.selectedtext.substring(0,this.selectedtext.length);
                this.showPopper=true;
              this.itemshow=false;
              this.$slots.default.forEach(function(t){
                t.child.display = 'block'
              });
              if (!this.selectedtext) return;
            }else{
              if(!this.selectes.length) return;
              let _child = this.$slots.default;
                for(let i = 0;i < _child.length;i = i + 1){
                if(this.selectes[this.selectes.length-1].value === _child[i].child.item.value){
                  this.$slots.default[i].child.selected = false
                }
              }
              for(let m = 0;m < this.value.length;m = m + 1){
                if(this.selectes[this.selectes.length-1].value === this.value[m]){
                    this.value.splice(m,1);
                  this.removeChange(this.selectes[this.selectes.length-1].value);
                  this.handleChange(this.value)
                }
              }
              this.selectes.splice(this.selectes.length-1, 1);
            }
          }else{
            if(this.selectedtext !=''){
              this.selectedtext = this.selectedtext.substring(0,this.selectedtext.length);
                this.showPopper=true;
              this.itemshow=false;
              this.$slots.default.forEach(function(t){
                t.child.display = 'block'
              });
              if (!this.selectedtext) return;
            }
          }
        }
      },    //add by liuc 回车删除
      handleChange(val) {
        this.$emit('change',val);
      },    //add by liuc change事件
      removeChange(val) {
        this.$emit('remove',val)
      },
      showop(){
        if(this.disabled === true){
          return
        }else{
          if(this.$slots.default !== undefined){
            for(let q = 0;q < this.$slots.default.length;q = q + 1){
              this.$slots.default[q].child.choosed = false
            }
          }
          this.$refs.popper.scrollTop = 0;
          this.selectedIndex = -1;
          this.$refs.select_input.focus();
          if(this.showPopper === false){
              this.showPopper = true;
            if(this.value.length !== 0){
              if(this.remote === true){
                this.$emit('ClickOutSide',this.value)
              }
              if(this.$slots.default !== undefined){
                for(let v = 0;v < this.$slots.default.length;v = v + 1){
                  for(let va = 0;va < this.value.length;va = va + 1){
                    if(this.value[va] === this.$slots.default[v].componentOptions.propsData.item.value){
                      this.$slots.default[v].componentInstance.selected = true
                    }
                  }
                }
              }
            }  //add by qimy  展开option列表时渲染选中数据。
            if(!this.$slots.default){
              this.itemshow=true
            }else{
              this.$slots.default.forEach(function(t){
                t.child.display = 'block'
              });
              this.itemshow=false
            }
          }else{
              this.showPopper = false;
          }
        }
      },
      tagclose(tag) {
        let _child = this.$slots.default;
        this.selectes.splice(this.selectes.indexOf(tag), 1);
        if(this.$slots.default !== undefined){
          for(let i = 0;i < _child.length;i = i + 1){
            if(tag.value === _child[i].child.item.value){
              this.$slots.default[i].child.selected = false
            }
          }
        }
        for(let m = 0;m < this.value.length;m = m + 1){
          if(tag.value === this.value[m]){
              this.value.splice(m,1);
            this.removeChange(tag.value);
            this.handleChange(this.value)
          }
        }
      },
      search(e,k){
        if(this.remote === true){
          if(k === '' && this.multipled === false){
              this.showPopper = false;
            this.$emit('query',k)
          }
          if(e.keyCode===37 || e.keyCode===38 || e.keyCode===39 || e.keyCode===40 || e.keyCode===27 || e.keyCode===13 || e.keyCode===8) return;
            this.showPopper = true;
          if(this.$slots.default === undefined){
            this.itemshow = true
          }else{
            this.itemshow = false
          }
          k = k.trim();
          this.$emit('query',k)
        }else{
          var _List = [];
          if(e.keyCode===37 || e.keyCode===38 || e.keyCode===39 || e.keyCode===40 || e.keyCode===27 || e.keyCode===13 || e.keyCode===8) return;
          let _this=this;
            this.showPopper = true;
          k = k.trim();
          var keyLength = k.length;
          if(!k){
            this.$slots.default.forEach(function(t){
              t.child.display = 'block';
              _List.push(t.child);
              _this.itemshow=false
            });
          }else{
            if(/^[\u4e00-\u9fa5]*$/.test(k)){
              this.$slots.default.forEach(function(t){
                if(multipleSearchFilter(t.child.item.text,k)){
                  t.child.display = 'block';
                  _List.push(t.child);
                  _this.itemshow=false
                }else{
                  t.child.display = 'none';
                  ind++
                }
              })
            }else{
              var names=[];
              var nameList = [];
              var ind=0;
              this.$slots.default.forEach(function(t){
                names.push(t.child.item.text)
              });
              for (var i = 0; i < names.length; i++){
                var arrRslt = this.makePy(names[i]);
                nameList.push(new Array(arrRslt.toString(), names[i]));
              }
              for (var i = 0; i < nameList.length; i++){
                if(nameList[i][0].substr(0, keyLength) == k.toLocaleUpperCase()){
                  this.$slots.default[i].child.display = 'block';
                  _List.push(this.$slots.default[i].child);
                  _this.itemshow=false
                }else{
                  this.$slots.default[i].child.display = 'none';
                  ind++
                }
              }
            }
            if(ind== this.$slots.default.length){
              _this.itemshow=true
            }
          }
          if(_List.length === 1){
            for (var a = 0;a < this.$slots.default.length;a = a + 1){
              this.$slots.default[a].child.oneList = true
            }
          }else{
            for (var a = 0;a < this.$slots.default.length;a = a + 1){
              this.$slots.default[a].child.oneList = false
            }
          }
        }
      },
      clear(){
        if(this.disabled === true){
          return
        }else{
          for(let a = 0;a < this.value.length;a = a + 1){
            this.removeChange(this.value[a])
          }
            this.value.splice(0, this.value.length);
          this.$emit('input',this.value);
          this.handleChange(this.value);
          this.dispatch('hd-formitem', 'form.change', []);
          this.selectes = [];
          this.selectedtext = '';
          if(this.remote === true){
            this.$emit('query',this.value)
          }else{
            for(let i = 0;i < this.$slots.default.length;i = i + 1){
              this.$slots.default[i].child.selected = false
            }
          }
        }
      },
      leave(e){
        if (!this.$el.contains(e.target)){
          this.close();
          if(this.remote === true){
            this.$emit('ClickOutSide',this.value)
          }
          if(this.multipled === true){
            this.selectedtext = ''
          }else{
            if(this.value.length !== 0){
              if(this.$slots.default !== undefined){
                for(let v = 0;v < this.$slots.default.length;v = v + 1){
                  for(let va = 0;va < this.value.length;va = va + 1){
                    if(this.value[va] === this.$slots.default[v].componentOptions.propsData.item.value){
                      this.selectedtext = this.$slots.default[v].componentOptions.propsData.item.text
                    }
                  }
                }
              }
            }else{
              this.selectedtext = ''
            }
          }
        }
      },
      close(){
          this.showPopper = false;
        this.selectedIndex=-1;
        this.$refs.popper.scrollTop = 0
      },
      inputblur(){
        this.dispatch('hd-formitem', 'form.blur', this.value);
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
<style>
  .hd-select{
    display: inline-block;
    position: relative;
  }
  .hd-select.disabled,.hd-select.disabled:hover,.hd-select.disabled:focus{
    cursor: not-allowed;
  }
  .hd-select-input{
    position: relative;
    font-size: 12px;
    display: inline-block;
    border: 1px solid #CCCCCC;
    padding: 3px 10px 8px 10px;
    outline: 0;
    background-color: #FFFFFF;
    width: 100%;
  }
  .hd-select.disabled>.hd-select-input,.hd-select.disabled>.hd-select-input:hover,.hd-select.disabled>.hd-select-input:focus{
    background-color: #fbfbfb !important;
    border-color: #e5e5e5 !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    color: #e5e5e5;
    cursor: not-allowed;
  }
  .hd-select-tags{
    display: inline-block;
    height: 26px;
  }
  .hd-select.disabled>.hd-select-input input{
    background-color: #fbfbfb !important;
  }
  .hd-select-input.radius{
    border-radius: 3px;
  }
  .hd-select-input input{
    border: none;
    box-shadow: none;
    background: transparent;
    min-height: 26px; /* edit by cjp (原:28px) */
    width: auto;
  }
  .hd-select-input input:focus{
    box-shadow: none;
  }
  .hd-select-input:hover,.hd-select-input input:hover{
    cursor: pointer;
  }
  .hd-select.disabled>.hd-select-input input:hover{
    cursor: not-allowed;
  }
  .hd-select>.hd-select-input .hd-select-input-icon{
    font-size: 13px;
    top: 30%;
    cursor: pointer;
  }
  .hd-select>.hd-select-input input[readonly]+.hd-select-input-icon{
      cursor: default;
  }
  .hd-select.disabled>.hd-select-input .hd-select-input-icon{
    cursor: not-allowed;
  }
  .hd-select-input-icon{
    position: absolute;
    width: 35px;
    right: 0;
    text-align: center;
  }
  .hd-select-dropdown{
    position: absolute;
    z-index: 1001;
    border: 1px solid #d1dbe5;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    box-sizing: border-box;
    margin: 0;
  }
  .hd-select-dropdown.radius{
    border-radius: 3px;
  }
  .hd-scrollbar{
    position: relative;
  }
  .hd-select-dropdown__wrap{
    max-height: 274px;
  }
  .hd-select-dropdown__list{
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
  }
  .form-group.has-required .hd-select:not(.disabled) .hd-select-input{
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background-color: #eaeaf9;
  }
  .select-not-found {
    text-align: center;
    color: #c3cbd6;
  }
</style>
