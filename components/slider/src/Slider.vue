<template>
  <div class=" noUi-target noUi-ltr noUi-horizontal noUi-background" :class="showCss1" style="margin-bottom: 20px"
       @click="onSliderClick"
       v-if="this.value.length===2">
     <div class="noUi-base" ref="slider">
       <div class="noUi-origin noUi-connect" :class="sliderCss1" :style="sliderStyle1">
         <hd-tooltip  placement="top" :text=this.value[0]>
          <div class="noUi-handle noUi-handle-lower"
               @mouseover="handleMouseOver"
               @mouseleave="handleMouseLeave"
               @mousedown="onButtonDown"
          >
          </div>
         </hd-tooltip>
       </div>
       <div class="noUi-origin noUi-background" :style="sliderStyle2">
         <hd-tooltip  placement="top" :text=this.value[1]>
         <div class="noUi-handle noUi-handle-upper"
              @mouseover="handleMouseOver"
              @mouseleave="handleMouseLeave"
              @mousedown="onButtonDown"
         >
         </div>
         </hd-tooltip>
       </div>
    </div>
  </div>
  <div   class="noUi-target noUi-ltr" :class="showCss" style="margin-bottom: 20px "
         :style="outStyle"
         @click="onSliderClick"
         v-else >
    <div class="noUi-base" ref="slider">
      <div class="noUi-origin"  :class="sliderCss"
           :style="sliderStyle"
           :disabled="this.disabled"
      >
        <hd-tooltip placement="top" :text=this.value>
        <div class="noUi-handle noUi-handle-lower"
             @mouseover="handleMouseOver"
             @mouseleave="handleMouseLeave"
             @mousedown="onButtonDown"
             @mouseup="onDragEnd"
        >
        </div>
        </hd-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import { getStyle } from 'src/utils/dom.js';
  import hdTooltip from 'components/tooltip'
  const cssPreFix = 'slider-'
  const colorCss='colored-slider bg-'
  export default{
    name: 'hd-slider',
    components:{
      hdTooltip
    },
    props: {
      value: {
        type: [Number,Array],
        default: 0
      },
      min: {
        type: [Number,String],
        default: 0
      },
      max: {
        type: [Number,String],
        default: 100
      },
      color: {
        validator(value){
          return isOneOf(value, [ 'danger', 'success', 'info','warning','silver','blue','inverse','sky','azure','blueberry','palegreen',
            'orange','darkorange','magenta','purple','maroon','primary','green'])
        },
        default: 'primary'
      },
      size: {
        validator(value){
          return isOneOf(value, ['sm', 'xs', 'lg', 'xl'])
        },
        default: 'xs'
      },
      disabled: Boolean,
      step: {
        type: Number,
        default:1
      },
      reversal: {
        type: Boolean,
        default:false
      },
      orientation: {
        validator(value){
          return isOneOf(value, ['horizontal', 'vertical'])
        },
        default: 'horizontal'
      }
    },
    data(){
      return{
       precision: 0,
        inputValue: null,
//        disable:false,
        hovering:false,
        dragging: false,
        startX: 0,
        startY:0,
        currentX: 0,
        currentY:0,
        startPos: 0,
        timeout: null,
        newPos: null,
        oldValue: this.value,
        firstValue:'',
        secondValue:''
      }
    },
    mounted() {
      if (this.value.length===2) {
        if (Array.isArray(this.value)) {
          this.firstValue = Math.max(this.min, this.value[0]);
          this.secondValue = Math.min(this.max, this.value[1]);
        } else {
          this.firstValue = this.min;
          this.secondValue = this.max;
        }
        this.oldValue = [this.firstValue, this.secondValue];
      } else {
      if (typeof this.value !== 'number' ||
        isNaN(this.value) ||
        this.value < this.min) {
        this.$emit('input', this.min);
      } else if (this.value > this.max) {
        this.$emit('input', this.max)
      }
      let precisions = [this.min, this.max, this.step].map(item => {
          let decimal = ('' + item).split('.')[1];
          return decimal ? decimal.length : 0;
    });
      this.precision = Math.max.apply(null, precisions);
      this.inputValue = this.inputValue || this.value;
    }
    },

    methods: {
      handleMouseOver(){
        this.hovering=true
      },
      handleMouseLeave() {
        this.hovering = false
      },
        /*滑块点击事件
         *slider分为horizontal和vertical，通过计算得到slider滑块位置
         * */
      onSliderClick(event) {
        if (this.disabled || this.dragging) return;
        {
         if(this.orientation=='horizontal') {
           const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
//           console.log(sliderOffsetLeft)
//           console.log(event.clientX)
           this.setPosition((event.clientX - sliderOffsetLeft) / this.$sliderWidth * 100);
         }else if(this.orientation=='vertical'){
           const sliderOffsetTop = this.$refs.slider.getBoundingClientRect().top;
//           console.log(sliderOffsetTop)
//           console.log(event.clientY)
           this.setPosition((event.clientY - sliderOffsetTop) / this.$sliderHeight * 100);
         }
        }
      },
      onDragStart(event) {
        if(this.orientation=='horizontal') {
          this.dragging = true;
          this.startX = event.clientX;
          this.startPos = parseFloat(this.currentPosition);
        }else{
          this.dragging = true;
          this.startY = event.clientY;
          this.startPos = parseFloat(this.currentPosition);
        }
      },

        /* 拖拽过程中对滑块位置的计算*/
      onDragging(event) {
        if (this.dragging && this.orientation=='horizontal') {
          this.currentX = event.clientX;
          const diff = (this.currentX - this.startX) / this.$sliderWidth * 100;
          this.newPos = this.startPos + diff;
          this.setPosition(this.newPos);
        }else if(this.dragging && this.orientation=='vertical'){
          this.currentY = event.clientY;
          const diff = (this.currentY - this.startY) / this.$sliderHeight * 100;
          this.newPos = this.startPos + diff;
          this.setPosition(this.newPos);
        }
      },
      onDragEnd() {
        if (this.dragging) {
          /*
           * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
           * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
           */
          setTimeout(() => {
            this.dragging = false;
            this.setPosition(this.newPos);
        }, 0);
          window.removeEventListener('mousemove', this.onDragging);
          window.removeEventListener('mouseup', this.onDragEnd);
          window.removeEventListener('contextmenu', this.onDragEnd);
        }
      },
      onButtonDown(event) {
//        console.log(event)
        if (this.disabled) return;
//        console.log(event.target)
        this.onDragStart(event);
        window.addEventListener('mousemove', this.onDragging);
        window.addEventListener('mouseup', this.onDragEnd);
        window.addEventListener('contextmenu', this.onDragEnd);
      },
      setPosition(newPos) {
        if (newPos < 0) {
          newPos = 0;
        } else if (newPos > 100) {
          newPos = 100;
        }
        const lengthPerStep = 100 / ((this.max - this.min) / this.step);
        //round() 方法可把一个数字舍入为最接近的整数。
        const steps = Math.round(newPos / lengthPerStep);
        let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
        value = parseFloat(value.toFixed(this.precision));
        this.$emit('input', value);
        this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
        if (!this.dragging) {
          if (this.value !== this.oldValue) {
            this.$emit('change', this.value);
            this.oldValue = this.value;
          }
        }
      }
    },
    computed:{
      currentPosition() {
        var pos=`${ (this.value - this.min) / (this.max - this.min) * 100 }%`;
        return pos;
      },
      $sliderWidth() {
        return parseInt(getStyle(this.$refs.slider, 'width'), 10);
      },
      $sliderHeight() {
        return parseInt(getStyle(this.$refs.slider, 'height'), 10);
      },
      sliderCss1(){
        return[
          this.color ? colorCss + this.color : ''
        ]
      },
      sliderCss(){
          let shaCss = '';
          let shaCss1=  this.color ? colorCss + this.color : '';
        return[
          this.reversal ?  shaCss1 + ' noUi-connect':shaCss+' noUi-background'
        ]
      },
      showCss(){
        let shCss =  this.color ? colorCss + this.color : '';
        let shCss1 = '';
        return [
          this.reversal ? shCss1 + ' noUi-background' :  shCss + ' noUi-connect',
          this.orientation ? 'noUi-'+this.orientation : '',
          this.size ? cssPreFix + this.size : ''
        ]
      },
      outStyle(){
        let outCss = ''
        let outCss1 = "margin: 10px; display: inline-block; height: 200px;"
        if(this.orientation=='vertical'){
          return outCss1
        }else{
          return ''
        }
      },
      showCss1(){
        return[
          this.size ? cssPreFix + this.size : '',
          this.orientation ? 'noUi-'+this.orientation : ''
        ]
      },
      sliderStyle(){
       if(this.orientation=='vertical'){
        return  'top:'+ this.value + '%'
       }else{
         return  'left:'+ this.value + '%'
       }
      },
      sliderStyle1(){
        return  'left:'+ this.firstValue + '%'
      },
      sliderStyle2(){
        return  'left:'+ this.secondValue + '%'
      }
    }
  }
</script>
<style>
  .noUi-handle {
    cursor: pointer;
  }
  .noUi-connect {
    background: #fff;
    -webkit-transition: background 450ms;
    -moz-transition: background 450ms;
    -o-transition: background 450ms;
    transition: background 450ms;
  }
  [disabled].noUi-connect, [disabled] .noUi-connect {
    background: #B8B8B8;
  }
</style>
