<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget header-size="lg" :show="show1">
          <p slot="title">大标题面板</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <p slot="body">在 hd-widget 标签中写 header-size="lg" ，高度为49px。</p>
          <hd-button slot="tool" @click="open1">展开</hd-button>
        </hd-widget>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget header-size="sm">
          <i slot="icon" class="fa fa-check"></i>
          <p slot="title">小标题面板（默认）</p>
          <p slot="body">在 hd-widget 标签中写 header-size="sm" 或不传size参数，高度为36px。</p>
        </hd-widget>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget header-size="xs">
          <p slot="title">超小标题面板</p>
          <p slot="body">在 hd-widget 标签中写 header-size="xs" ，高度为29px</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-widget header-color="blue">
          <p slot="title">蓝色文字标题</p>
          <p slot="body">在 hd-widget 标签中写 header-color="blue" ，一共有44种颜色，默认为黑色。</p>
        </hd-widget>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-widget header-bg-color="purple">
          <p slot="title">紫色背景标题</p>
          <p slot="body">在 hd-widget 标签中写 header-bg-color="blue" ，一共有44种颜色，默认为白色。</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-widget body-color="pink">
          <p slot="title">粉色主体文字</p>
          <p slot="body">在 hd-widget 标签中写 body-color="pink" ，一共有44种颜色，默认为黑色。</p>
        </hd-widget>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-widget body-bg-color="magenta">
          <p slot="title">品红色主体背景</p>
          <p slot="body">在 hd-widget 标签中写 body-bg-color="magenta" ，一共有44种颜色，默认为白色。</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget header-bordered-color-top="red">
          <p slot="title">红色标题顶线</p>
          <p slot="body">在 hd-widget 标签中写 header-bordered-color-top="red" ，一共有44种颜色，默认为-（即无顶线）。</p>
        </hd-widget>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget header-bordered-color-left="yellow">
          <p slot="title">黄色背景左线</p>
          <p slot="body">在 hd-widget 标签中写 header-bordered-color-left="yellow" ，一共有44种颜色，默认为-（即无左线）。</p>
        </hd-widget>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget header-bordered-color-bottom="gray">
          <p slot="title">灰色标题底线</p>
          <p slot="body">在 hd-widget 标签中写 header-bordered-color-bottom="gray" ，一共有44种颜色，默认为-（即无底线）。</p>
        </hd-widget>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget header-bordered-color-right="green">
          <p slot="title">绿色背景右线</p>
          <p slot="body">在 hd-widget 标签中写 header-bordered-color-right="green" ，一共有44种颜色，默认为-（即无右线）。</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget body-bordered-color-top="carbon">
          <p slot="title">炭黑色主体顶线</p>
          <p slot="body">在 hd-widget 标签中写 body-bordered-color-top="carbon" ，一共有44种颜色，默认为-（即无顶线）。</p>
        </hd-widget>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget body-bordered-color-left="sky">
          <p slot="title">天蓝色主体左线</p>
          <p slot="body">在 hd-widget 标签中写 body-bordered-color-left="sky" ，一共有44种颜色，默认为-（即无左线）。</p>
        </hd-widget>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget body-bordered-color-bottom="gold">
          <p slot="title">金色主体底线</p>
          <p slot="body">在 hd-widget 标签中写 body-bordered-color-bottom="gold" ，一共有44种颜色，默认为-（即无底线）。</p>
        </hd-widget>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-3">
        <hd-widget body-bordered-color-right="orange">
          <p slot="title">橘色主体右线</p>
          <p slot="body">在 hd-widget 标签中写 body-bordered-color-right="orange" ，一共有44种颜色，默认为-（即无右线）。</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget flat>
          <p slot="title">平直</p>
          <p slot="body">在 hd-widget 标签中写 flat 或者 flat=true ，主体部分去除阴影效果，看起来主体与标题处于同一水平面上。</p>
        </hd-widget>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget transparent>
          <p slot="title">透明</p>
          <p slot="body">在 hd-widget 标签中写 transparent 或 transparent=true。</p>
        </hd-widget>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget radius>
          <p slot="title">圆角</p>
          <p slot="body">在 hd-widget 标签中写 radius 或 radius=true。</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget separated>
          <p slot="title">header与body分离</p>
          <p slot="body">在 hd-widget 标签中写 separated 或者 separated=true ，header和body中间会出现一段小间隔。</p>
        </hd-widget>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget compact>
          <p slot="title">工具栏紧密样式</p>
          <p slot="body">在 hd-widget 标签中写 compact 或 compact=true。</p>
          <a slot="tool">
            <i class="fa fa-cog"></i>
          </a>
          <a slot="tool">
            <i class="fa fa-expand"></i>
          </a>
          <a slot="tool">
            <i class="fa fa-minus"></i>
          </a>
          <a slot="tool">
            <i class="fa fa-times"></i>
          </a>
        </hd-widget>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-4">
        <hd-widget is-no-header>
          <p slot="body">无header样式</p>
          <p slot="body">在 hd-widget 标签中写 is-no-header 或 is-no-header=true。</p>
        </hd-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-widget :show="show2">
          <p slot="title">面板主体折叠展开控制</p>
          <p slot="body">在 hd-widget 标签中写 :show="show" ，通过控制show的布尔值为true或false展开或折叠主体部分，true为展开，false为折叠。</p>
          <hd-button slot="tool" @click="open2">展开</hd-button>
        </hd-widget>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-widget :maximized="max">
          <p slot="title">面板最大化控制</p>
          <p slot="body">在 hd-widget 标签中写 :maximized="max" ，通过控制maximized的布尔值为true或false最大化或还原主体部分，true为最大化，false为还原。</p>
          <hd-button slot="tool" @click="maxi">最大化</hd-button>
        </hd-widget>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Widget API</h5>
      <div class="row">
          <div class="col-xs-12 col-sm-12">
              <div class="well with-header  with-footer">
                  <div class="header bg-blue">
                      配置项
                  </div>
                  <table class="table table-bordered table-hover" style="max-width:75em">
                      <thead>
                      <tr>
                          <th>参数</th>
                          <th>说明</th>
                          <th>类型</th>
                          <th>可选值</th>
                          <th>默认值</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td width="10%">header-size</td>
                          <td width="20%">面板标题的大小：lg(高度49px),sm(高度36px),xs(高度29px)</td>
                          <td width="10%">[string]</td>
                          <td width="50%">lg,sm,xs</td>
                          <td width="10%">sm</td>
                      </tr>
                      <tr>
                          <td>header-color</td>
                          <td>面板标题文字的颜色，默认为黑色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>body-color</td>
                          <td>面板主体的文字颜色，默认为黑色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>header-bg-color</td>
                          <td>面板标题背景的颜色，默认为白色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>body-bg-color</td>
                          <td>面板主体背景的颜色，默认为白色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>header-bordered-color-top</td>
                          <td>面板标题顶线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>header-bordered-color-left</td>
                          <td>面板标题左线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>header-bordered-color-bottom</td>
                          <td>面板标题底线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>header-bordered-color-right</td>
                          <td>面板标题右线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>body-bordered-color-top</td>
                          <td>面板主体顶线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>body-bordered-color-left</td>
                          <td>面板主体左线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>body-bordered-color-bottom</td>
                          <td>面板主体底线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>body-bordered-color-right</td>
                          <td>面板主体右线的颜色，默认为无此参数样式</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>flat</td>
                          <td>是否是平直面板</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      <tr>
                          <td>transparent</td>
                          <td>是否是透明面板</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>radius</td>
                          <td>是否是圆角面板</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>separated</td>
                          <td>是否是header与body分离样式面板</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      <tr>
                          <td>compact</td>
                          <td>是否是工具栏紧密样式面板</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>is-no-header</td>
                          <td>是否是无header样式面板</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12 col-sm-12">
              <div class="well with-header  with-footer">
                  <div class="header bg-blue">
                      Slot
                  </div>
                  <table class="table table-bordered table-hover" style="max-width:75em">
                      <thead>
                      <tr>
                          <th>名字</th>
                          <th>说明</th>
                          <th>类型</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td width="15%">icon</td>
                          <td width="70%">widget-header中的图标，位于最左侧</td>
                          <td width="15%">string</td>
                      </tr>
                      <tr>
                          <td>title</td>
                          <td>widget-header中的标题，位于中间偏左</td>
                          <td>string</td>
                      </tr>
                      <tr>
                          <td>tool</td>
                          <td>widget-header中的工具，位于最右侧</td>
                          <td>string</td>
                      </tr>
                      <tr>
                          <td>body</td>
                          <td>widget的主体</td>
                          <td>string</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12 col-sm-12">
              <div class="well with-header  with-footer">
                  <div class="header bg-blue">
                      方法
                  </div>
                  - 面板主体部分折叠与展开方法：

                  在hd-widget标签中传入并控制show的值为true或false，true为展开，false为折叠。

                  </br>
                  </br>
                  </br>

                  - 面板最大化与还原方法：

                  在hd-widget标签中传入并控maximized的值为true或false，true为最大化，false为还原。
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    data:function(){
      return{
        show1:false,
        show2:false,
        max:false
      }
    },
    methods:{
      open1(){
        if (this.show1 == false){
          this.show1 = true;
        }else{
          this.show1 = false
        }
      },
      open2(){
        if (this.show2 == false){
          this.show2 = true;
        }else{
          this.show2 = false
        }
      },
      maxi(){
        if (this.max == false){
          this.max = true;
        }else{
          this.max = false
        }
      }
    }
  }
</script>
