<template>
  <div :id="id" class="row">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'hd-row',
    componentName:'hd-row',
    props:{
      id:{
        type: [String, Number],
        default:''
      }
    }
  }
</script>
