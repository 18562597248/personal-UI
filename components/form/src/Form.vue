<template>
  <form  :class="classObj">
    <slot></slot>
  </form>
</template>
<script>
  const prefixCls = 'form';
  const prefix = 'form-horizontal';
  export default {
    name: 'hd-form',
    componentName: 'hd-form',
    props: {
      formData: Object,
      rules: Object,
      type:String,
      inline: Boolean
    },
    watch: {
      rules() {
        this.validate();
      }
    },
    data() {
      return {
        fields: []
      };
    },
    computed: {
      classObj () {
        if(this.type==='default'){
          return  null
        }else{
          if(this.type==='bordered'){
            return  `${prefix} ${prefixCls}-${this.type}`
          }else{
            return  `${prefixCls}-${this.type}`
          }
        }
      },
      col () {
        let wrapCol = 12;
        return wrapCol - this.label_col
      }
    },
    created() {
      this.$on('form.addField', (field) => {
        if (field) {
          this.fields.push(field);
        }
      });
      this.$on('form.removeField', (field) => {
        if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
    },
    methods: {
      resetFields() {
        this.fields.forEach(field => {
          field.resetField();
      });
      },
      validate(callback) {
        let valid = true;
        let count = 0;
        this.fields.forEach((field, index) => {
          field.validate('', errors => {
          if (errors) {
            valid = false;
          }
          if (typeof callback === 'function' && ++count === this.fields.length) {
          callback(valid);
        }
      });
      });
      }
    }
  }
</script>

