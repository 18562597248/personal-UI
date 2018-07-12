<template>
  <div class="">
    <toolbar>
      <hd-button-group ref="aaa" slot="left" more>
        <hd-button slot="init" shape="circle" size="xs" @click="rightclick">
          <hd-icon type="fa fa-angle-right"></hd-icon>
        </hd-button>
        <hd-button shape="circle" font-color="white" type="danger" size="xs">B</hd-button>
        <hd-button shape="circle" font-color="white" color="darkorange" size="xs">u</hd-button>
        <hd-button shape="circle" font-color="white" type="warning" size="xs">t</hd-button>
        <hd-button shape="circle" font-color="white" color="palegreen" size="xs">t</hd-button>
        <hd-button shape="circle" font-color="white" type="success" size="xs">o</hd-button>
        <hd-button shape="circle" font-color="white" color="azure" size="xs">n</hd-button>
        <hd-button shape="circle" font-color="white" bd-color="primary" bg-color="primary" size="xs">G</hd-button>
        <hd-button shape="circle" font-color="white" color="purple" size="xs">r</hd-button>
        <hd-button shape="circle" font-color="white" color="magenta" size="xs">o</hd-button>
        <hd-button shape="circle" font-color="white" color="maroon" size="xs">u</hd-button>
        <hd-button shape="circle" font-color="white" bg-color="carbon" size="xs">p</hd-button>
        <hd-button shape="circle" size="xs" @click="leftclick">
          <hd-icon type="fa fa-angle-left"></hd-icon>
        </hd-button>
      </hd-button-group>
    </toolbar>
    <div class="page-body">
        <h5 class="row-title"><i class="fa fa-tags blue"></i>ButtonGroup DEMO</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">type</div>
            <hd-button-group type="horz">
              <hd-button>h</hd-button>
              <hd-button>o</hd-button>
              <hd-button>r</hd-button>
              <hd-button>z</hd-button>
            </hd-button-group>
            <hd-button-group type="vertical">
              <hd-button>v</hd-button>
              <hd-button>e</hd-button>
              <hd-button>r</hd-button>
              <hd-button>t</hd-button>
              <hd-button>i</hd-button>
              <hd-button>c</hd-button>
              <hd-button>a</hd-button>
              <hd-button>l</hd-button>
            </hd-button-group>
            <hd-button-group type="justified">
              <hd-button>j</hd-button>
              <hd-button>u</hd-button>
              <hd-button>s</hd-button>
              <hd-button>t</hd-button>
              <hd-button>i</hd-button>
              <hd-button>f</hd-button>
              <hd-button>i</hd-button>
              <hd-button>e</hd-button>
              <hd-button>d</hd-button>
            </hd-button-group>
            <div class="footer"><code>type: horz(默认) vertical justified</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">size</div>
            <hd-button-group size="lg">
              <hd-button>l</hd-button>
              <hd-button>g</hd-button>
            </hd-button-group>
            <hd-button-group size="normal">
              <hd-button>n</hd-button>
              <hd-button>o</hd-button>
              <hd-button>r</hd-button>
              <hd-button>m</hd-button>
              <hd-button>a</hd-button>
              <hd-button>l</hd-button>
            </hd-button-group>
            <hd-button-group size="sm">
              <hd-button>s</hd-button>
              <hd-button>m</hd-button>
            </hd-button-group>
            <hd-button-group size="xs">
              <hd-button>x</hd-button>
              <hd-button>s</hd-button>
            </hd-button-group>
            <div class="footer"><code>size: lg normal(默认) sm xs</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">more</div>
            <hd-button-group ref="bbb" more>
              <hd-button slot="init" shape="circle" size="xs" @click="_rightclick">
                <hd-icon type="fa fa-angle-right"></hd-icon>
              </hd-button>
              <hd-button>m</hd-button>
              <hd-button>o</hd-button>
              <hd-button>r</hd-button>
              <hd-button>e</hd-button>
              <hd-button shape="circle" size="xs" @click="_leftclick">
                <hd-icon type="fa fa-angle-left"></hd-icon>
              </hd-button>
            </hd-button-group>
            <hd-button-group ref="ccc" more>
              <hd-button slot="init" shape="circle" size="xs" @click="_rightclick_">
                <hd-icon type="fa fa-plus-circle"></hd-icon>
              </hd-button>
              <hd-button>m</hd-button>
              <hd-button>o</hd-button>
              <hd-button>r</hd-button>
              <hd-button>e</hd-button>
              <hd-button shape="circle" size="xs" @click="_leftclick_">
                <hd-icon type="fa fa-minus-circle"></hd-icon>
              </hd-button>
            </hd-button-group>
            <div class="footer"><code>more 常用icon样式:"fa fa-angle-right","fa fa-angle-left"</code></div>
          </div>
        </hd-col>
      </hd-row>

        <br/>
        <br/>
        <br/>
        <br/>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>ButtonGroup API</h5>

        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="well with-header  with-footer">
                    <div class="header bg-blue">
                        配置项
                    </div>
                    <table class="table table-bordered table-hover">
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
                            <td width="10%">id</td>
                            <td width="20%">当前组件唯一的id</td>
                            <td width="10%">[String, Number]</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>当前组件的基本样式类型</td>
                            <td>[String]</td>
                            <td>default,primary,info,success,danger,warning,link,hdprimary,withtooltip</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>当前组件处于无效状态时为true</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>当前组件大小样式</td>
                            <td>[String]</td>
                            <td>lg,normal,sm,xs</td>
                            <td>normal</td>
                        </tr>
                        <tr>
                            <td>shiny</td>
                            <td>当前组件带光泽样式</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>当前组件形状样式</td>
                            <td>[String]</td>
                            <td>rectangle,circle</td>
                            <td>rectangle</td>
                        </tr>
                        <tr>
                            <td>block</td>
                            <td>当前组件块显示样式</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>当前组件的整体颜色样式</td>
                            <td>[String]</td>
                            <td>white，blue,sky,azure,palegreen,yellow,darkorange,magenta,purple,maroon</td>
                            <td>white</td>
                        </tr>
                        <tr>
                            <td>font-color</td>
                            <td>当前组件的内容颜色样式</td>
                            <td>[String]</td>
                            <td>
                                carbon,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>carbon</td>
                        </tr>
                        <tr>
                            <td>bg-color</td>
                            <td>当前组件的背景颜色样式</td>
                            <td>[String]</td>
                            <td>
                                white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>white</td>
                        </tr>
                        <tr>
                            <td>bd-color</td>
                            <td>当前组件的边框颜色样式</td>
                            <td>[String]</td>
                            <td>
                                gray,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>gray</td>
                        </tr>
                        <tr>
                            <td>noRadius</td>
                            <td>当前组件的取消边角圆滑样式</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>isloading</td>
                            <td>当前btn被点击之后变为disabled的“执行中...”样式</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
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
                        slot
                    </div>
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>名字</th>
                            <th>说明</th>
                            <th>类型</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="15%">init</td>
                            <td width="70%">初始时展示，响应show()会消失，响应hide()会出现</td>
                            <td width="15%">String</td>
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
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="15%">show</td>
                            <td width="85%">在more配置项作用下，调用show()会将slot="init"的插槽隐藏，展示出默认的slot</td>
                        </tr>
                        <tr>
                            <td width="15%">hide</td>
                            <td width="85%">在more配置项作用下，调用show()会将默认的slot隐藏，展示出slot="init"的插槽</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    data:function (){
      return{
        cols1:[1],
        cols2:[2],
        cols3:[3],
        cols4:[4],
        cols5:[5],
        cols6:[6],
        cols7:[7],
        cols8:[8],
        cols9:[9],
        cols10:[10],
        cols11:[11],
        cols12:[12],
        color1:"blue",
        isdel_bool:false
      }
    },
    methods: {
//      isdel(){}
      close(){
        this.isdel_bool=false;
      },
      leftclick(){
        this.$refs.aaa.hide();
      },
      rightclick(){
        this.$refs.aaa.show();
      },
      _leftclick(){
        this.$refs.bbb.hide();
      },
      _rightclick(){
        this.$refs.bbb.show();
      },
      _leftclick_(){
        this.$refs.ccc.hide();
      },
      _rightclick_(){
        this.$refs.ccc.show();
      }
    }
  }
</script>
