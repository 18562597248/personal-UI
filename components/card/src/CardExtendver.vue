<template>
  <hd-card  border :border-color="borderColor" :dis-hover="disHover">
    <hd-row>
      <hd-col :cols="cols12">
        <slot name="image"></slot>
      </hd-col>
      <hd-col :cols="cols12">
        <slot></slot>
      </hd-col>
    </hd-row>
  </hd-card>
</template>
<script>
  import  hdCard from './Card.vue'
  import  hdRow from 'components/row'
  import  hdCol from 'components/col'
  export default {
    name:'hd-card-vertical',
    props: {
      'border-color':{
        type:String
      },
      'dis-hover':{
        type:Boolean
      }
    },
    data: function () {
      return {
        cols12:[12]
      }
    },
    components:{
      hdRow,hdCol,hdCard
    }
  }
</script>
<style>

</style>
