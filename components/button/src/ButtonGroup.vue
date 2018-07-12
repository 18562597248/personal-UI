<template>
  <div :id="id" :class="divCls">
    <slot v-if="!more"></slot>
    <transition name="slide-fade" mode="out-in" v-else style="margin: 4px;">
      <div class="btn-group more" v-if="showup">
        <slot></slot>
      </div>
      <slot name="init" v-else></slot>
    </transition>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  const cssPreFix = 'btn-group-'
  export default {
    name:'hd-button-group',
    props:{
      id:{
        type: [String, Number],
        default:''
      },
      type: {
        validator(value){
          return isOneOf(value,['horz','vertical','justified'])
        },
        default:'horz'
      }
      ,
      size:{
        validator(value){
          return isOneOf(value,['lg','normal','sm','xs'])
        },
        default:'normal'
      },
      more:Boolean
    },
    data: function () {
      return {
        showup:false
      }
    },
    computed:{
      divCls(){
        return[
          this.type==='horz' ? 'btn-group' : cssPreFix+this.type,
          this.size==='normal' ? '': cssPreFix+this.size
        ]
      }
    },
    beforeCreate:function(){},
    created:function(){},
    beforeMount:function(){},
    mounted(){
//      console.log(this.$slots.default);
//      console.log(this.$children);
    },
    methods: {
      show(){
        this.showup=true;
      },
      hide(){
        this.showup=false;
      }
    }
  }
</script>
<style>

/*.fade-enter-active, .fade-leave-active {*/
  /*transition: opacity .5s*/
/*}*/
/*.fade-enter, .fade-leave-to !* .fade-leave-active in <2.1.8 *! {*/
  /*opacity: 0*/
/*}*/

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter
{
  transform: translateX(-1px);
  opacity: 0.5;
}
.slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0.5;
}
</style>
