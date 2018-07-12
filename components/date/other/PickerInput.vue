<template>
  <div class="input-group"  :class="inputClasses">
    <input
      ref="input"
      type="text"
      :class="inputClasses"
      class="form-control date-picker"
      onkeyup="value=value.replace(/[^\-:\d]/g,'') "
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      :readonly="readonly"
      :value="currentValue"
      :number="number"
      :autofocus="autofocus"
      @keyup.enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange">
    <span class="input-group-addon"  :class="inputClasses" @click="handleIconClick"  :style="spanstyles"> <i  :class="['fa fa-' + icon]"  v-if="icon" style="width: 13px;"></i></span>
  </div>
</template>
<script>
  import { oneOf, findComponentUpward } from 'src/utils/assist';
  import Emitter from 'src/utils/emitter';
  const prefixCls = 'hd-input';
  export default {
    mixins: [ Emitter ],
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large']);
        }
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: {
        type: Number
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: String,
      readonly: {
        type: Boolean,
        default: false
      },
      number: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentValue: this.value
      };
    },
    computed: {
      inputClasses () {
        return [
          {
            [`${prefixCls}-${this.size}`]: !!this.size
          }
        ];
      },
      spanstyles (){
        let style = {};
        if (this.disabled) {
          style.backgroundColor = `#fbfbfb`;
          style.color = `#ACA899`;
          style.cursor=`not-allowed`;
        }
        return style;
      }
    },
    methods: {
      handleEnter (event) {
        this.$emit('on-enter', event);
      },
      handleIconClick (event) {
      if(this.disabled || this.readonly) return
        this.$emit('on-click', event);
      },
      handleFocus (event) {
        this.$emit('on-focus', event);
      },
      handleBlur (event) {
        this.$emit('on-blur', event);
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker'])) {
          this.dispatch('hd-formitem', 'form.blur', this.currentValue);
        }
      },
      handleInput (event) {
        let value = event.target.value;
        if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('on-change', event);
      },
      handleChange (event) {
        this.$emit('on-input-change', event);
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker'])) {
          this.dispatch('hd-formitem', 'form.change', value);
        }
      },
      focus() {
        this.$refs.input.focus();
      }
    },
    watch: {
      value (val) {
        this.setCurrentValue(val);
      }
    }
  };
</script>
<style>
  .hd-input-small {
    height: 28px;
  }
</style>