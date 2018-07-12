<template>
  <div>
    <!-- Loading Container -->
    <div class="loading-container loading-inactive">
      <div class="loader"></div>
    </div>
    <!--  /Loading Container -->
    <nav-bar></nav-bar>
    <!-- Main Container -->
    <div class="main-container container-fluid">
      <!-- Page Container -->
      <div class="page-container">
        <side-bar></side-bar>
        <!--<chat-bar></chat-bar>-->
        <!-- Page Content -->
        <div class="page-content">
          <bread-crumb style="border-left: 1px solid #ffffff;">
          </bread-crumb>
          <div class="page-body">
            <router-view>
            </router-view>
          </div>
        </div>
        <!-- /Page Content -->
      </div>
      <!-- /Page Container -->
      <!-- Main Container -->
    </div>
    <!--<footer-bar></footer-bar>-->
  </div>
</template>

<script>
  // 导入主页面组件
  import NavBar from 'src/components/layout/NavBar.vue'
  import SideBar from 'src/components/layout/SideBar.vue'
  import ChatBar from 'src/components/layout/ChatBar.vue'
  import  breadCrumb from 'src/components/breadcrumb/BreadCrumb.vue'

  import {InitiateSideMenu, InitiateSettings, InitiateWidgets} from '../../static/js/hdui.js'

  export default {
    components: {
      'nav-bar': NavBar,
      'side-bar': SideBar,
      'chat-bar': ChatBar,
      breadCrumb
    },
    //新增：高春明 开始
    mounted:function(){
      InitiateSideMenu()    // 初始化SideMenu，增加menu事件及切换样式
      InitiateSettings()    // 设置navbar、sidebar、breadcrumbs、page-header是否锁定
      InitiateWidgets()    //初始化页面最大化、最小化事件
    }
    //新增：高春明 结束

  }
</script>
