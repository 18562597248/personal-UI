<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <ul v-bind:class="count?'submenu':'nav sidebar-menu'">
    <li v-for="item in menulists">
        <router-link :to="{ query: {modulename:item},path: item.href}" v-if="item.leaf">
        <i v-bind:class="item.iconCls"></i>
        <span class="menu-text"> {{item.text}} </span>
        </router-link>
      <a href="#" v-else class="menu-dropdown">
        <i v-bind:class="item.iconCls"></i>
        <span class="menu-text"> {{item.text}}  </span>
        <i class="menu-expand"></i>
      </a>
      <nstree v-if="!item.leaf" :menulists="item.children" :count="true"></nstree>
  </li>
  </ul>
</template>
<script>
  export default {
    name: 'nstree',
    props: ['menulists','count'],
    data: function () {
      return {

      }
    }
  }
</script>
