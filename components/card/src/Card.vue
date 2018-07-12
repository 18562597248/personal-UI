<template>
  <div class='ivu-card':class="classes" :style="style">
    <div class="ivu-card-extra" v-if="showExtra"><slot name="extra"></slot></div>
    <div class="ivu-card-body"><slot></slot></div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  const prefixCls = 'ivu-card';
//  const defaultPadding = 20;
  const bor='border:';
  const solid='solid';
  export default {
    name: 'hd-card',
    props: {
      border:{
        type:Boolean,
        default:false
      },
      'dis-hover':{
        type:Boolean,
        default:false
      },
      'border-color': {
        type: String,
        validator(value){
          return isOneOf(value, [ 'blue', 'red', 'yellow', 'white', 'themeprimary', 'themesecondary', 'themethirdcolor', 'themefourthcolor', 'themefifthcolor', 'snow', 'whitesmoke', 'seashell', 'ivory', 'platinum', 'lightgray', 'gray', 'darkgray', 'silver', 'sonic-silver', 'storm-cloud', 'lightcarbon', 'carbon', 'slate-gray', 'darkcarbon', 'info', 'sky', 'primary', 'azure', 'blueberry', 'palegreen', 'success', 'green', 'lightyellow', 'warning', 'gold', 'orange', 'lightred', 'darkorange', 'pink', 'darkpink', 'danger', 'magenta', 'purple', 'maroon'])
        },
        default:'white'
      }
//      padding: {
//        type: Number,
//        default: defaultPadding
//      }
    },
    data () {
      return {
        showExtra: true
      };
    },
    computed:{
      classes(){
          return [
            {
              [`${prefixCls}-dis-hover`]: this.disHover
            }
          ];
        },
      style(){
        if(this.border){
            return `${bor} 1px ${solid} ${this.borderColor}`;
        }else{
          return " "
        }
      }
    },
    mounted(){
      this.showExtra = this.$slots.extra !== undefined;
    }
  }
</script>
<style>
  .ivu-card.ivu-card-dis-hover.ivu-card-bordered:hover {
  }
  .ivu-card.ivu-card-dis-hover:hover {
    box-shadow: none;
  }
  .ivu-card:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  .ivu-card {
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    transition: all .2s ease-in-out;
  }
  .ivu-card-extra {
    position: absolute;
    right: 16px;
    top: 14px;
  }
</style>
