<template>
    <div class="page-breadcrumbs"  :style="{minHeight: searchheight + 'px'}">
      <ul class="breadcrumb" >
        <li class="active"  style="font-size:18px;font-weight: bolder;padding-top: 6px;">{{ breadcrumb }}</li>
      </ul>
      <slot></slot>
    </div>
</template>
<script>
  /**
   * @fileOverview 面包屑组件
   * @author 刘聪
   * @date 2016.11.23 10:00:00
   */

  /**
   * @export default 导出本组件
   */
  export default {
    name:'breadcrumb',
    props: {
      breadcrumb:String
    },
    data(){
      return{
        searchheight:40
      }
    },
    watch:{
      breadcrumb(val){
        this.breadcrumb=val
      }
    }
  }
</script>
