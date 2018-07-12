<template>
  <hd-card  border :border-color="borderColor" :dis-hover="disHover">
    <hd-row>
      <hd-col :cols="cols6">
        <slot name="image"></slot>
      </hd-col>
      <hd-col :cols="cols6">
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
    name:'hd-card-horizontal',
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
        cols6:[6]
      }
    },
    components:{
      hdRow,hdCol,hdCard
    }
  }
</script>
<style>

</style>
