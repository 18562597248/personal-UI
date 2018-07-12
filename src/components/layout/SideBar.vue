<template>
  <div class="page-sidebar" id="sidebar">
    <!-- Page Sidebar Header-->
    <div class="sidebar-header-wrapper">
      <div class="sidebar-header-dashboard">
        <a class="sidebar-toggle-btn btn-default pull-right" @click="sidebar">
          <i class="fa fa-server"></i>
        </a>
        <!--<router-link id="logoutBtn" class="sidebar-toggle-btn btn-default pull-left" to="/login">-->
          <!--<i class="fa fa-outdent"></i>-->
        <!--</router-link>-->
        <div id="dashboardText" style="line-height: 40px;padding-left: 15px;"><span style="font-size: 16px;color: #cacfda;">功能菜单</span></div>
      </div>

    </div>
    <!-- /Page Sidebar Header -->
    <!-- Sidebar Menu -->
    <menulists :menulists="menulists" :count="false"></menulists>
    <!-- /Sidebar Menu -->
  </div>
</template>
<script>
  import  menulists  from 'src/components/menu/MenuList.vue';
  import  { getScrollBarSize }  from 'src/utils/assist';
  import  { tableHandleResize }  from 'src/utils/demoUtils/width-self-adaptation.js';
  export default {
    components: {
      menulists: menulists
    },
    data: function () {
      return {
        menulists: [
                {"id":1418,"text":"demo","iconCls":"menu-icon typcn typcn-location-outline","leaf":false,"href":"","marker":"",
                "children":[
                    {"id":1511,"text":"badge","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/badge","marker":" "},
                    {"id":1425,"text":"button","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/button","marker":""},
                    {"id":1419,"text":"buttongroup","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/buttongroup","marker":""},
                    {"id":1523,"text":"card","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/card"},
                    {"id":1520,"text":"collpase","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/collpase"},
                    {"id":1433,"text":"checkbox","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/checkbox"},
                    {"id":1422,"text":"datepicker","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/datepicker","marker":""},
                    {"id":1507,"text":"dropdown","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/dropdown"},
                    {"id":1502,"text":"form","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/form","marker":""},
                    {"id":1426,"text":"input","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/input","marker":""},
                    {"id":1514,"text":"inputnumber","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/inputnumber","marker":" "},
                    {"id":1420,"text":"icon","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/icon","marker":""},
                    {"id":1506,"text":"label","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/label"},
                    {"id":1427,"text":"layout","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/layout","marker":""},
                    {"id":1524,"text":"loading","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/loading","marker":""},
                    {"id":1431,"text":"message","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/message","marker":" "},
                    {"id":1409,"text":"modal","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/modal"},
                    {"id":1562,"text":"multisearch","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/multisearch","marker":" "},
                    {"id":1526,"text":"notice","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/notice","marker":" "},
                    {"id":1561,"text":"pagebar","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/pagebar"},
                    {"id":1515,"text":"popover","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/popover"},
                    {"id":1517,"text":"progress","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/progress"},
                    {"id":1503,"text":"radio","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/radio","marker":""},
                    {"id":1513,"text":"select","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/select"},
                    {"id":1516,"text":"steps","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/steps","marker":""},
                    {"id":1519,"text":"slider","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/slider"},
                    {"id":1508,"text":"switch","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/switch","marker":""},
                    {"id":1421,"text":"tag","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/tag","marker":""},
                    {"id":1512,"text":"table","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/table","marker":""},
                    {"id":1501,"text":"tabs","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/tabs"},
                    {"id":1518,"text":"tree","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/tree","marker":" "},
                    {"id":1521,"text":"transfer","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/transfer","marker":" "},
                    {"id":1432,"text":"timepicker","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/timepicker","marker":" "},
                    {"id":1510,"text":"tooltip","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/tooltip"},
                    {"id":1429,"text":"treetable","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/treetable","marker":""},
                    {"id":1522,"text":"upload","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/upload"},
                    {"id":1428,"text":"widget","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/widget","marker":" "},
                    {"id":1560,"text":"timeline","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/timeline","marker":" "},
                    {"id":1561,"text":"calendar","iconCls":"menu-icon fa fa-table","leaf":true,"href":"/calendar","marker":" "},
                    {"id":1559,"text":"配色板","iconCls":"menu-icon glyphicon glyphicon-map-marker","leaf":true,"href":"/colourmatching","marker":"  "},
                    {"id":1562,"text":"可用icon","iconCls":"menu-icon fa fa-image","leaf":true,"href":"/usableIcons","marker":"  "}],"expanded":false}
        ]
      }
    },
    methods:{
      sidebar:function(){

        if (!$('#sidebar').is(':visible'))
          $("#sidebar").toggleClass("hide");
        $("#sidebar").toggleClass("menu-compact");
        $(".sidebar-collapse").toggleClass("active");
        var b = $("#sidebar").hasClass("menu-compact");

        if ($(".sidebar-menu").closest("div").hasClass("slimScrollDiv")) {
          $(".sidebar-menu").slimScroll({ destroy: true });
          $(".sidebar-menu").attr('style', '');
        }
        if (b) {
          $(".open > .submenu")
            .removeClass("open");
        } else {
          if ($('.page-sidebar').hasClass('sidebar-fixed')) {
            var position = (readCookie("rtl-support") || location.pathname == "/index-rtl-fa.html" || location.pathname == "/index-rtl-ar.html") ? 'right' : 'left';
            /*  $('.sidebar-menu').slimscroll({
             height: 'auto',
             position: position,
             size: '3px',
             color: themeprimary
             });*/
          }
        }
        //Slim Scroll Handle
        //作用 在收起折叠sidebar时，调整table的左边距；add by cjp
        $(".table").addClass("margin-left-4");
        if(!b){
          $(".table").removeClass("margin-left-4");
        }

        this.sidebarToggle();     //"功能菜单"部分的隐藏显示功能
        tableHandleResize(this.$parent);    //调整table自适应,接受一个保证是tableElement父级 及及以上的 eleObj参数,建议<page-body>的$parent级

      },
      sidebarToggle(){
        let isShow = true;
        let sideBarElement = document.getElementById('sidebar');    //是否收叠的标准
        let aimElement = document.getElementById('dashboardText');    //目标元素
//        let aimElement2 = document.getElementById('logoutBtn');    //目标元素
        for(let i=0;i<sideBarElement.className.split(' ').length;i++){
          if(sideBarElement.className.split(' ')[i]==='menu-compact'){isShow = false;}
        }
        if(isShow){
          aimElement.style.display = '';
//          aimElement2.style.display = '';
        } else {
          aimElement.style.display = 'none';
//          aimElement2.style.display = 'none';
        }
      }
    }
  }
</script>
<style>
  .sidebar-header-dashboard .sidebar-toggle-btn{
    padding: 10px 12px 10px 16px;
    font-size: 14px;
    color: #737373;
    background-color: #f3f3f3;
    /*border-right: 1px solid #d1d1d1;*/
  }
  .sidebar-toggle-btn :hover{
    color: #262626;
    /*border-right: 1px solid #d1d1d1;*/
  }
</style>
