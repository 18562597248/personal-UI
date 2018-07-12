<template>
  <div class="page-header position-relative" >
    <div class="page-header-buttons col-sm-6">
      <div class="pull-left">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="page-header-views col-sm-5 pull-right">
      <div class="pull-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'toolbar'
  }
</script>
