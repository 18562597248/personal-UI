<template>
  <div>
    <div class="page-body">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Progress</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">Basic (value默认0,value="?")</p>
            <p slot="body">
              <hd-progress></hd-progress>
              <hd-progress value="10"></hd-progress>
              <hd-progress value="30"></hd-progress>
              <hd-progress value="60"></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="danger">
            <p slot="title">Text & Text-color (text="?",text-color="?")</p>
            <p slot="body">
              <hd-progress value="10" text="10%"></hd-progress>
              <hd-progress value="80" text="80%" text-color="red"></hd-progress>
              <hd-progress value="50" text="50%" text-color="success"></hd-progress>
              <hd-progress value="30" text="30%" text-color="storm-cloud"></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="warning">
            <p slot="title">Size (size="?",(xxs,xs,sm,default,lg,xlg))</p>
            <p slot="body">
              <hd-progress size="xxs" value="10"></hd-progress>
              <hd-progress size="xs" value="30" text="30%"></hd-progress>
              <hd-progress size="sm" value="76"></hd-progress>
              <hd-progress value="66"></hd-progress>
              <hd-progress size="lg"  value="90"></hd-progress>
              <hd-progress size="xlg"  value="20" text="20 Complete"></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="danger">
            <p slot="title">Bordered & Right & Shadowed & No-radius</p>
            <p slot="body">
              <hd-progress value="10" bordered></hd-progress>
              <hd-progress value="30" text="30%" right></hd-progress>
              <hd-progress value="20" bordered shadowed text="20 Complete"></hd-progress>
              <hd-progress value="90" no-radius></hd-progress>
              <hd-progress value="60" bordered right shadowed text="60 Complete"></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="warning">
            <p slot="title">Stripped & Color (stripped,color="?")</p>
            <p slot="body">
              <hd-progress value="10"  color="magenta" stripped></hd-progress>
              <hd-progress value="30" text="30%"  color="danger" stripped></hd-progress>
              <hd-progress value="20" color="warning" stripped text="20 Complete"></hd-progress>
              <hd-progress value="90" color="success" stripped></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="warning">
            <p slot="title">Animated (animated)</p>
            <p slot="body">
              <hd-progress value="10"  color="magenta" stripped animated></hd-progress>
              <hd-progress value="30" text="30%"  color="danger" stripped animated></hd-progress>
              <hd-progress value="20" color="warning" stripped animated text="20 Complete"></hd-progress>
              <hd-progress value="90" color="success" stripped animated></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="warning">
            <p slot="title">Vertical & Bottom (vertical bottom)</p>
            <p slot="body">
              <hd-progress value="18" vertical></hd-progress>
              <hd-progress value="30" color="orange" bottom text="30%" vertical></hd-progress>
              <hd-progress size="xlg"  value="20" vertical shadowed  bordered animated stripped text="20%"></hd-progress>
              <hd-progress size="xs"  value="77" vertical bottom color="success" animated shadowed  bordered  stripped></hd-progress>
              <hd-progress value="38" vertical></hd-progress>
              <hd-progress value="50" text="30%" color="danger" bottom  vertical></hd-progress>
              <hd-progress size="lg"  value="82" color="maroon" vertical animated stripped text="20%"></hd-progress>
              <hd-progress value="77" vertical bottom color="silver" animated shadowed  bordered  stripped></hd-progress>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="warning">
            <p slot="title">Stacked (由hd-progress-stacked包裹hd-progress,类似xxx-group)</p>
            <p slot="body">
              <hd-progress-stacked  shadowed  bordered  stripped>
                <hd-progress value="18" bordered color="success"></hd-progress>
                <hd-progress value="30" color="orange"  text="30%" ></hd-progress>
                <hd-progress value="20" text="20%"></hd-progress>
              </hd-progress-stacked>
              <hd-progress-stacked animated shadowed  bordered  stripped no-radius>
                <hd-progress value="18" text="18%"></hd-progress>
                <hd-progress value="30" color="orange"  text="30%" ></hd-progress>
                <hd-progress value="20" text="20%" color="maroon"></hd-progress>
              </hd-progress-stacked>
              <hd-progress-stacked animated shadowed stripped no-radius right>
                <hd-progress value="18" text="18%"></hd-progress>
                <hd-progress value="22" color="sky"></hd-progress>
                <hd-progress value="30" color="orange" text="30%" ></hd-progress>
                <hd-progress value="20" text="20%" color="maroon"></hd-progress>
              </hd-progress-stacked>
              <hd-progress-stacked  shadowed  no-radius size="lg">
                <hd-progress value="18" ></hd-progress>
                <hd-progress value="22" color="sky"></hd-progress>
                <hd-progress value="30" color="orange"></hd-progress>
                <hd-progress value="20" color="maroon"></hd-progress>
              </hd-progress-stacked>
            </p>
          </hd-widget>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Progress API</h5>
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
                            <td width="10%">id</td>
                            <td width="20%">当前组件唯一的id</td>
                            <td width="10%">[String,Number]</td>
                            <td width="50%">——</td>
                            <td width="10%">——</td>
                        </tr>
                        <tr>
                            <td width="10%">value</td>
                            <td width="20%">progress当前数值</td>
                            <td width="10%">Number</td>
                            <td width="50%">取值范围0到100</td>
                            <td width="10%">0</td>
                        </tr>
                        <tr>
                            <td width="10%">text</td>
                            <td width="20%">progress内容</td>
                            <td width="10%">String</td>
                            <td width="50%">——</td>
                            <td width="10%">——</td>
                        </tr>
                        <tr>
                            <td width="10%">text-color</td>
                            <td width="20%">text文字颜色(仅在text存在时有效)</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                black,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">white</td>
                        </tr>
                        <tr>
                            <td width="10%">size</td>
                            <td width="20%">progress组件大小</td>
                            <td width="10%">String</td>
                            <td width="50%">xxs,xs,default,sm,lg,xlg</td>
                            <td width="10%">default</td>
                        </tr>
                        <tr>
                            <td width="10%">no-radius</td>
                            <td width="20%">边框非圆角</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">stripped</td>
                            <td width="20%">带状显示(静态)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">animated</td>
                            <td width="20%">带状显示(动态)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">bordered</td>
                            <td width="20%">带有边框的进度条</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">right</td>
                            <td width="20%">进度条右侧显示(在水平进度条下使用)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">shadowed</td>
                            <td width="20%">带有阴影的进度条</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">vertical</td>
                            <td width="20%">垂直进度条</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">bottom</td>
                            <td width="20%">进度条底部显示(在垂直进度条下使用)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">color</td>
                            <td width="20%">进度条颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                default,danger,success,warning,silver,inverse,blue,info,azure,sky,blueberry,palegreen,orange,darkorange,magenta,purple,maroon
                            </td>
                            <td width="10%">default</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>ProgressStacked API</h5>
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
                            <td width="10%">size</td>
                            <td width="20%">progress组件大小</td>
                            <td width="10%">String</td>
                            <td width="50%">xxs,xs,default,sm,lg,xlg</td>
                            <td width="10%">default</td>
                        </tr>
                        <tr>
                            <td width="10%">no-radius</td>
                            <td width="20%">边框非圆角</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">stripped</td>
                            <td width="20%">带状显示(静态)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">animated</td>
                            <td width="20%">带状显示(动态)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">bordered</td>
                            <td width="20%">带有边框的进度条</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">right</td>
                            <td width="20%">进度条右侧显示(在水平进度条下使用)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">shadowed</td>
                            <td width="20%">带有阴影的进度条</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
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
  export default {
    data:function() {
      return {
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
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
