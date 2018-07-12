<template>
       <div :class="classObj" v-if="is_horizontal" style="padding-top: 1px;" :style="horStyle()">
           <div class="control-label no-padding-right" :class="hdFromitemLabelParentCls" v-show="nolabel">
             <hd-label   :text=label :text-align="labelAlign" v-if="label">{{separator}}</hd-label>
             <hd-label   :text=label :text-align="labelAlign" v-else></hd-label>
            </div>
           <div :class="hdFromitemSlotParentCls">
            <slot v-if="!showTooltip"></slot>
               <div v-else>
                   <hd-tooltip  v-show="showTooltip" :text="message" placement="top" v-if="is_show" bg-color="warning">
                       <slot></slot>
                   </hd-tooltip>
                   <slot v-else></slot>
               </div>
            <small class="help-block" v-if="is_show"  v-show="!showTooltip">{{message}}</small>
            </div>
       </div>
       <div :class="classObj"  v-else style="margin-bottom: 8px;padding-top: 1px;">
          <div :class="classLabel" v-show="nolabel">
            <label     v-if="label">{{label+separator}}</label>
            <label    v-else>{{label}}</label>
          </div>
           <slot v-if="!showTooltip"></slot>
           <div v-else>
               <hd-tooltip  v-show="showTooltip" :text="message" placement="top" v-if="is_show" bg-color="warning">
                   <slot></slot>
               </hd-tooltip>
               <slot v-else></slot>
           </div>
           <small class="help-block" v-if="is_show"  v-show="!showTooltip">{{message}}</small>
       </div>
</template>
<script>
  import hdLabel from 'components/label'
  import { isOneOf } from 'src/utils/validator.js'
  import AsyncValidator from 'src/utils/async-validator';
  import emitter from 'src/utils/emitter';
  const prefixCls = 'form-group  has-required';
  const Cls = 'form-group';
  const labelCls = 'sr-only';
  const labelClass = 'control-label';
  const fixCls = 'has-error';
  function noop() {}
  function getPropByPath(obj, path) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');
    let keyArr = path.split('.');
    let i = 0;
    for (let len = keyArr.length; i < len - 1; ++i) {
      let key = keyArr[i];
      if (key in tempObj) {
        tempObj = tempObj[key];
      }
    }
    return {
      o: tempObj,   //form传递的整个对象
      k: keyArr[i],  // 对象中每个参数key
      v: tempObj[keyArr[i]] // 参数key对应的value
    };
  }
  export default {
    name: 'hd-form-item',
    componentName:'hd-formitem',
    mixins: [emitter],
    components:{
      hdLabel
    },
    props: {
//      labelCol: {
//        type: [String, Number]
//      },    //edit by cjp
      labelCol:{
        type:[Array,String,Number]
      },//add by cjp
      rule: String,
      label:String,
      separator:{
        validator(value){
          return isOneOf(value, [':','：',''])
        },
        default:'：'
      },
      'label-align':{
        validator(value){
          return isOneOf(value, ['left','right','justify'])
        },
        default:'justify'
      },
      rules: Object,
      showTooltip: {
        type:  Boolean, default: false
        }
    },
    data(){
      return{
        horizontal:false,
        inline:false,
        show:false,
        message: '', //error信息
        state: '', //验证的状态
        error: '',
        isvalidate:false,
          nolabel:true
      }
    },
    watch: {
      error(value) {
        this.message = value;
        this.state = value ? 'error' : '';
       },
      state(value) {
         this.state = value;
       }
    },
    computed: {
      classObj () {
        if(this.getRules()[0]===undefined){
          return  `${Cls}`
        }else{
          if(this.state==='error'){
            return  `${prefixCls} ${fixCls}`
          }
          if(!this.getRules()[0].required){
            return  `${Cls}`
          }
          if(this.state!=='error'){
            return  `${prefixCls}`
          }
        }
      },
      classLabel () {
        if(this.is_inline){
          return  `${labelCls}`
        }else{
          return  `${labelClass}`
        }
      },
      is_show(){
        if(this.state==='error'){
          return  true;
        }else{
          return  false;
        }
      },
      is_horizontal () {
        if(this.form.type === 'horizontal'||this.form.type === 'bordered'){
          return true
        }else{
          return false
        }
      },
      is_inline () {
        if(this.form.type === 'inline'){
          return true
        }else{
          return false
        }
      },
//      label_col () {
//        let defaultCol=2;
//        if(this.form.type === 'horizontal'||this.form.type === 'bordered'){
//          return this.labelCol ? this.labelCol : defaultCol
//        }
//      },    //edit by cjp
      hdFromitemLabelParentCls(){
        let ret =[];
        if(typeof this.labelCol === 'string'||typeof this.labelCol === 'number'){
          ret.push('col-lg-'+this.labelCol);
          ret.push('col-md-'+this.labelCol);
          ret.push('col-sm-'+this.labelCol);
          ret.push('col-xs-'+this.labelCol);
        }
        else if(typeof this.labelCol === 'object'&&this.labelCol.length>0){
          switch(this.labelCol.length){
            case 1:{
              ret.push('col-lg-'+this.labelCol[0]);
              ret.push('col-md-'+this.labelCol[0]);
              ret.push('col-sm-'+this.labelCol[0]);
              ret.push('col-xs-'+this.labelCol[0]);
            };break;
            case 2:{
              ret.push('col-lg-'+this.labelCol[0]);
              ret.push('col-md-'+this.labelCol[0]);
              ret.push('col-sm-'+this.labelCol[0]);
              ret.push('col-xs-'+this.labelCol[1]);
            };break;
            case 3:{
              ret.push('col-lg-'+this.labelCol[0]);
              ret.push('col-md-'+this.labelCol[0]);
              ret.push('col-sm-'+this.labelCol[1]);
              ret.push('col-xs-'+this.labelCol[2]);
            };break;
            default:{
              ret.push('col-lg-'+this.labelCol[0]);
              ret.push('col-md-'+this.labelCol[1]);
              ret.push('col-sm-'+this.labelCol[2]);
              ret.push('col-xs-'+this.labelCol[3]);
            };break
          }
        }
        else{
          ret.push('col-lg-2');
          ret.push('col-md-2');
          ret.push('col-sm-2');
          ret.push('col-xs-2');
        }
        return ret;
      },//add by cjp
//      item_col() {
//        let defaultcol=12;
//        return this.itemCol ? this.itemCol : defaultcol
//      },    //edit by cjp
//      col () {
//        let wrapCol = this.wrapCol ? this.wrapCol : 12;
//        return wrapCol - this.label_col
//      },    //edit by cjp
      hdFromitemSlotParentCls(){
        let ret =[];
          if(!this.label && !this.labelCol){
              ret.push('col-lg-12');
              ret.push('col-md-12');
              ret.push('col-sm-12');
              ret.push('col-xs-12');
              this.nolabel=false;
              return ret;
          }
        if(typeof this.labelCol === 'string'||typeof this.labelCol === 'number'){
          ret.push('col-lg-'+(12-parseInt(this.labelCol)));
          ret.push('col-md-'+(12-parseInt(this.labelCol)));
          ret.push('col-sm-'+(12-parseInt(this.labelCol)));
          ret.push('col-xs-'+(12-parseInt(this.labelCol)));
        }
        else if(typeof this.labelCol === 'object'&&this.labelCol.length>0){
          switch(this.labelCol.length){
            case 1:{
              ret.push('col-lg-'+(12-this.labelCol[0]));
              ret.push('col-md-'+(12-this.labelCol[0]));
              ret.push('col-sm-'+(12-this.labelCol[0]));
              ret.push('col-xs-'+(12-this.labelCol[0]));
            };break;
            case 2:{
              ret.push('col-lg-'+(12-this.labelCol[0]));
              ret.push('col-md-'+(12-this.labelCol[0]));
              ret.push('col-sm-'+(12-this.labelCol[0]));
              ret.push('col-xs-'+(12-this.labelCol[1]));
            };break;
            case 3:{
              ret.push('col-lg-'+(12-this.labelCol[0]));
              ret.push('col-md-'+(12-this.labelCol[0]));
              ret.push('col-sm-'+(12-this.labelCol[1]));
              ret.push('col-xs-'+(12-this.labelCol[2]));
            };break;
            default:{
              ret.push('col-lg-'+(12-this.labelCol[0]));
              ret.push('col-md-'+(12-this.labelCol[1]));
              ret.push('col-sm-'+(12-this.labelCol[2]));
              ret.push('col-xs-'+(12-this.labelCol[3]));
            };break
          }
        }
        else{
          ret.push('col-lg-10');
          ret.push('col-md-10');
          ret.push('col-sm-10');
          ret.push('col-xs-10');
        }
        return ret;
      },    //add by cjp
      form() {
        var parent = this.$parent;
        while (parent.$options.componentName !== 'hd-form') {
          parent = parent.$parent;
        }
        return parent;
      },
      fieldValue: {
        cache: false,  //cache为true，会缓存结果，第二次及更多次的调用会用缓存中的结果
        get() {
          var formData = this.form.formData;
          if (!formData || !this.rule) { return; }
          var path = this.rule;
          if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.');
          }
          return getPropByPath(formData, path).v;  //返回当前获得焦点filed 的value值
        }
      }
    },
    mounted() {
      if (this.rule) {
        this.dispatch('hd-form', 'form.addField', [this]);
        Object.defineProperty(this, 'initialValue', { //直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象
          value: this.fieldValue
        });
        let rules = this.getRules();
        if (rules.length) {
          this.$on('form.blur', this.onFieldBlur);
          this.$on('form.change', this.onFieldChange);
        }
      }
    },
    beforeDestroy() {
      this.dispatch('hd-form', 'form.removeField', [this]);
    },
    methods: {
      onFieldBlur() {
        this.validate('blur');
      },
      onFieldChange() {
        if (this.isvalidate) {
          this.isvalidate = false;
          return;
        }
        this.validate('change');
      },
      validate(trigger, callback = noop) {
        var rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
          callback();
          return true;
        }
        var descriptor = {};
        descriptor[this.rule] = rules;  //或许需要验证的对象
        var validator = new AsyncValidator(descriptor);   //根据验证规则返回结果
        var formData = {};
        if(this.getTypeRule(rules)){
          formData[this.rule] = new Date(this.fieldValue);
        }else{
          formData[this.rule] = this.fieldValue;
        }
        validator.validate(formData, { firstFields: true }, (errors, fields) => {
          this.state = !errors ? 'success' : 'error';
          this.message = errors ? errors[0].message : '';
          callback(this.message);
      });
      },
      resetField() {
        this.state = '';
        this.message = '';
        let formData = this.form.formData;
        let value = this.fieldValue;
        let path = this.rule;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }
        let prop = getPropByPath(formData, path);
        if (Array.isArray(value) && value.length > 0) {
          this.isvalidate = true;
          prop.o[prop.k] = [];
        } else if (value) {
          this.isvalidate = true;
          prop.o[prop.k] = this.initialValue;
        }
      },
      getRules() {
        var formRules = this.form.rules;
        var selfRuels = this.rules;
        formRules = formRules ? formRules[this.rule] : [];
        return [].concat( selfRuels ||formRules || []);// 返回数组对象
      },
      getFilteredRule(trigger) {
        var rules = this.getRules();
        return rules.filter(rule => {   //对trigger进行筛选并返回此条rule
            return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
         });
      },
      getTypeRule(rules) {
        for (let i =0 ; i < rules.length; i++) {
          if (rules[i].type && rules[i].type === 'date') {
            return true
          }else{
            return false
          }
        }
      },
        horStyle () {
            if(this.form.type === 'horizontal'||this.form.type === 'bordered'){
                let style = {};
                if(this.showTooltip){
                    style = { marginBottom: 0 + 'px',display:'block'};
                }else{
                    style= {marginBottom: 8+'px'}
                }
                return style;
            }

        }
    }
  }
</script>
<style>
  .form-bordered .row:first-child {
    border-top: 0;
    padding-top: 0;
  }
  .form-bordered .row  {
    border-top: 1px solid #e5e5e5;
    padding-top: 15px;
    margin-left: -12px;
    margin-right: -12px;
  }
</style>

