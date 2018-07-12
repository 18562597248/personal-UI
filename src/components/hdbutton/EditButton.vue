<template>

  <hd-tooltip   text="编辑" placement="top">
    <hd-button shape="circle" size="xs" :disabled="disabled" @click="btnClick" type="hdprimary">
      <hd-icon type="hd-icon hd-pencil"></hd-icon>
    </hd-button>
  </hd-tooltip>

</template>
<script>
  export default {
    name:'hd-editbutton',
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
