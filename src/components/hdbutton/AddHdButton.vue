
<template>

  <hd-tooltip  text="新增" placement="top">
    <hd-button shape="circle" size="xs" @click="btnClick" type="hdprimary" :disabled="disabled">
      <!--<hd-icon type="glyphicon glyphicon glyphicon-plus"></hd-icon>-->
      <hd-icon type="hd-icon hd-plus"></hd-icon>
    </hd-button>
  </hd-tooltip >

</template>
<script>
  export default {
    name:'hd-addhdbutton',
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
