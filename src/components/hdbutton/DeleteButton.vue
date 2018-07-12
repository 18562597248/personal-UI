<template>

  <hd-tooltip   text="删除" placement="top">
    <hd-button type="withtooltip" shape="circle" size="xs" :disabled="disabled" @click="btnClick">
      <hd-icon type="hd-icon hd-trash"></hd-icon>
    </hd-button>
  </hd-tooltip>

</template>
<script>
  export default {
    name:'hd-deletebutton',
    props: {
      disabled:Boolean,
      default:false
    },
    methods:{
      btnClick(event) {
        this.$emit('click',event)
      }
    },
    watch:{
      disabled(val){
        this.disable=val;
      }
    }
  }
</script>
