<template>
    <!--通过div控制大小-->
    <div :class="GroupCls">
        <div :class="leftSpanCls" v-if="this.$slots.outleft">
            <slot name="outleft"></slot>
        </div>
        <div :class="spanCls">
            <textarea :id="id" ref="hdTextarea" class="form-control" :class="inputCls" :rows="rows" :readonly="readonly" :disabled="disabled" :placeholder="placeholder" :value="this.currentValue"
                @input="handleInput" @blur="handleBlur" @focus="handleFocus":maxlength="maxlength"
                v-if="this.type=='textarea'" style="resize: vertical;width: 100%;" :style="textareaStyle"></textarea>
            <input :id="id" ref="hdInput" class="form-control"
                   :class="inputCls" :type="type" :readonly="readonly" :disabled="disabled" :placeholder="placeholder" autocomplete="off" :value="this.currentValue"
                   @keydown="btnKeydown"  @keydown.13="enterevent" @keyup="btnKeyup" @input="handleInput" @blur="handleBlur"  @focus="handleFocus" :maxlength="maxlength" :style="textareaStyle" v-else>
            <slot name="inicon" v-if="!(this.$slots.outleft||this.$slots.outright||this.type=='textarea')"></slot>
        </div>
        <div :class="rightSpanCls" v-if="this.$slots.outright">
            <slot name="outright"></slot>
        </div>
    </div>
</template>
<script>
    import { isOneOf } from 'src/utils/validator.js';
    import emitter from 'src/utils/emitter';
    const cssPreFix = 'input-';
    export default {
        name:'hd-input',
        mixins: [emitter],
        componentName: 'hd-input',
        props:{
            id:{
                type: [String, Number],
                default:''
            },
            value:{
                type: [String, Number],
                default:''
            },
            type: {
                validator(value){
                    return isOneOf(value,['text','password','textarea'])
                },
                default:'text'
            },
            size: {
                validator(value){
                    return isOneOf(value,['xs','sm','normal','lg','xl'])
                },
                default:'normal'
            },
            rows:{
                type:[Number],
                default:5
            },
            autosize:{
                type:[Boolean,Object]
            },
            placeholder:String,
            iconInInput:String,
            leftBgColor:String,
            rightBgColor:String,
            disabled: Boolean,
            readonly: Boolean,
            isInverted:Boolean,
            inleft:Boolean,
            maxlength:{
                type:[Number,String],
                default:50
            }
        },
        data() {
            return {
                currentValue: this.value,
                textareaAutoSize:{},
                currentValueIsETCplaceholder:false
            };
        },
        computed:{
            GroupCls(){
                return [
                    (this.$slots.outleft||this.$slots.outright) ? 'input-group' : '',
                    this.size==='normal' ? '' : cssPreFix+'group-'+this.size
                ]
            },
            spanCls(){
                return [
                    (this.$slots.inicon&&!(this.$slots.outleft||this.$slots.outright)) ? 'input-icon':'',
                    this.inleft ? '':'icon-right',
                    this.isInverted ? 'inverted':''
                ]
            },
            leftSpanCls(){
                const tagNameArray = this.$slots.outleft[0].tag.split('-');
                const tagName = tagNameArray[tagNameArray.length-1];
                return [
                    this.leftBgColor ? 'bg-'+this.leftBgColor:'',
                    this.isInverted ? 'inverted':'',
                    isOneOf(tagName,['p','simple','b','u','tt','cite','em','strong','span','i','icon']) ? 'input-group-addon':'',
                    isOneOf(tagName,['a','button','hdButton','group','upload']) ? 'input-group-btn':'',
                    this.type==='textarea'?'vertical-align-top':''
                ]
            },
            rightSpanCls(){
                const tagNameArray = this.$slots.outright[0].tag.split('-');
                const tagName = tagNameArray[tagNameArray.length-1];
                return [
                    this.rightBgColor ? 'bg-'+this.rightBgColor:'',
                    this.isInverted ? 'inverted':'',
                    isOneOf(tagName,['p','simple','b','u','tt','cite','em','strong','span','i','icon']) ? 'input-group-addon':'',
                    isOneOf(tagName,['a','button','hdButton','group','upload']) ? 'input-group-btn':'',
                    this.type==='textarea'?'vertical-align-top':''
                ]
            },
            inputCls(){
                return [
                    this.disabled ? 'is-disabled' : ''
                ]
            },
            textareaStyle(){
                let style = {};
                if(this.autosize==true){
                    style.overflow='hidden';
                    style.height=this.textareaAutoSize+'px';
                }
                if(this.IeVesion() == '9'&&this.isPlaceholderNotNull()&&this.isCurrentValueNull()){
                    style.color='#858585';
                }
                return style;
            }
        },
        mounted(){
            if(this.type=='textarea'&&this.$refs.hdTextarea!=undefined&&(this.autosize)){
                this.textarea_auto_size();
            }
            if(this.IeVesion() == '9'&&this.isPlaceholderNotNull()&&this.isCurrentValueNull()){
                this.IeUsePlaceholderBySelf();
            }
        },
        methods: {
            handleBlur(event) {
                this.currentValue=event.target.value;
                this.$emit('blur', event);
                this.dispatch('hd-formitem', 'form.blur',[this.currentValue]);
                if(this.IeVesion() == '9'){
                    if(!this.currentValueIsETCplaceholder){
                        this.isCurrentValueNull();
                    }
                    if(this.isPlaceholderNotNull()&&this.isCurrentValueNull()){
                        this.IeUsePlaceholderBySelf();
                    }
                }
            },
            handleFocus(event){
                this.$emit('focus', event);
                if(this.IeVesion() == '9'&&this.currentValueIsETCplaceholder){
                    this.currentValue = '';
                    this.currentValueIsETCplaceholder = false;
                }
            },
            handleInput(event) {   //add by liuc
                this.currentValue=event.target.value;
                this.$emit('input',this.currentValue);
                this.$emit('change',this.currentValue);
                if(this.type=='textarea'&&this.$refs.hdTextarea!=undefined&&(this.autosize)){this.textarea_auto_size();}
                this.dispatch('hd-formitem', 'form.change', [this.currentValue]);
                if(this.IeVesion() == '9'&&!this.currentValueIsETCplaceholder){
                    this.isCurrentValueNull();
                }
            },
            textarea_auto_size(){
                if(this.autosize!=undefined&&this.$refs.hdTextarea != undefined){
                    let maxSize = this.autosize.maxRows;
                    let minSize = this.autosize.minRows;
                    this.textareaAutoSize = this.textarea_auto_height(this.$refs.hdTextarea,minSize,maxSize);
                }
            },
            textarea_node_styling(node){
                const CONTEXT_STYLE = [
                    'letter-spacing',
                    'line-height',
                    'padding-top',
                    'padding-bottom',
                    'font-family',
                    'font-weight',
                    'font-size',
                    'text-rendering',
                    'text-transform',
                    'width',
                    'text-indent',
                    'padding-left',
                    'padding-right',
                    'border-width',
                    'box-sizing'
                ];
                const style = window.getComputedStyle(node);
                const boxSizing = style.getPropertyValue('box-sizing');
                const paddingSize = (
                    parseFloat(style.getPropertyValue('padding-bottom')) +
                    parseFloat(style.getPropertyValue('padding-top'))
                );
                const borderSize = (
                    parseFloat(style.getPropertyValue('border-bottom-width')) +
                    parseFloat(style.getPropertyValue('border-top-width'))
                );
                const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';');
                return { contextStyle, paddingSize, borderSize, boxSizing };
            },
            textarea_auto_height(targetNode,minRows,maxRows){//取自elemnt-input-TextareaHeightForEle.js
                let hiddenTextarea;
                const HIDDEN_STYLE = `
          height:0 !important;
          visibility:hidden !important;
          overflow:hidden !important;
          position:absolute !important;
          z-index:-1000 !important;
          top:0 !important;
          right:0 !important
        `;
                if (!hiddenTextarea) {
                    hiddenTextarea = document.createElement('textarea');
                    document.body.appendChild(hiddenTextarea);
                }
                let {paddingSize,borderSize,boxSizing,contextStyle} = this.textarea_node_styling(targetNode);
                hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
                hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';
                let height = hiddenTextarea.scrollHeight;
                if (boxSizing === 'border-box') {
                    height = height + borderSize;
                } else if (boxSizing === 'content-box') {
                    height = height - paddingSize;
                }
                hiddenTextarea.value = '';
                let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
                if (minRows && minRows !== null) {
                    let minHeight = singleRowHeight * minRows;
                    if (boxSizing === 'border-box') {
                        minHeight = minHeight + paddingSize + borderSize;
                    }
                    height = Math.max(minHeight, height);
                }
                if (minRows && maxRows !== null) {
                    let maxHeight = singleRowHeight * maxRows;
                    if (boxSizing === 'border-box') {
                        maxHeight = maxHeight + paddingSize + borderSize;
                    }
                    height = Math.min(maxHeight, height);
                }
                return height;
            },
            btnKeydown(event){
                this.$emit('keydown',event);
            },
            enterevent(){
                this.$emit('enter',event);
            },
            btnKeyup(event){
                this.$emit('keyup',event);
            },

            IeVesion() {
                var Sys = {};
                var ua = navigator.userAgent.toLowerCase();
                var s;
                (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
                return Sys.ie ? parseInt(Sys.ie) : false;
            },
            IeUsePlaceholderBySelf(){
                this.currentValue = this.placeholder;
                this.currentValueIsETCplaceholder = true;
            },
            isPlaceholderNotNull(){
                return (this.placeholder!=''&&this.placeholder!=null&&this.placeholder.length!=0);
            },
            isCurrentValueNull(){
                return (this.currentValue==''||this.currentValue==null||this.currentValue.length == 0);
            }
        },
        watch: {   //add by liuc
            value(val) {
                this.currentValue=val
                this.$emit('change',this.currentValue);
                this.dispatch('hd-formitem', 'form.change', [this.currentValue]);
            },
            autosize(val){
                if(this.type=='textarea'&&this.$refs.hdTextarea!=undefined&&this.autosize!=undefined){
                    this.textarea_auto_size();
                }
            },
            placeholder(val){
                if(this.IeVesion() == '9'){
                    this.isPlaceholderNotNull();
                }
            }
        }
    }
</script>