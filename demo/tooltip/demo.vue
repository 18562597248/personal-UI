<template>
  <div>
    <toolbar>
        <hd-tooltip slot="left" text="帮助" placement="top">
          <hd-button  shape="circle" size="xs" type="success">
            <hd-icon type="glyphicon glyphicon glyphicon-plus"></hd-icon>
          </hd-button>
        </hd-tooltip>
        <hd-tooltip slot="left" text="增加" placement="top">
          <hd-button shape="circle" size="xs" type="hdprimary">
            <hd-icon type="glyphicon glyphicon glyphicon-plus"></hd-icon>
          </hd-button>
        </hd-tooltip>
        <hd-tooltip slot="left" text="删除" placement="top">
          <hd-button  shape="circle" size="xs" type="danger">
            <hd-icon type="glyphicon glyphicon glyphicon-plus"></hd-icon>
          </hd-button>
        </hd-tooltip>
      <hd-button-group  slot="left">
        <hd-tooltip text="增加" placement="top">
          <hd-button  shape="circle" size="xs" type="hdprimary">
            <hd-icon type="glyphicon glyphicon glyphicon-plus"></hd-icon>
          </hd-button>
        </hd-tooltip>
        <hd-tooltip text="删啊那看来没看到看见你除" placement="top">
          <hd-button  shape="circle" size="xs" type="danger">
            <hd-icon type="glyphicon glyphicon glyphicon-plus"></hd-icon>
          </hd-button>
        </hd-tooltip>
      </hd-button-group>
    </toolbar>
    <div class="page-body">
      <h5 class="row-title">位置</h5>
      <hd-row>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-button-group>
              <hd-tooltip text="上方">
                <hd-button type="info">top</hd-button>
              </hd-tooltip>
              <hd-tooltip  text="Left" placement="left">
                <hd-button type="success">left</hd-button>
              </hd-tooltip>
              <hd-tooltip text="Right" placement="right">
                <hd-button type="warning">right</hd-button>
              </hd-tooltip>
              <hd-tooltip text="Bottom" placement="bottom">
                <hd-button type="danger">bottom</hd-button>
              </hd-tooltip>
            </hd-button-group>
            <div class="footer"><code>在Button上添加Tooltip</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-success">文字</div>
            <p>
              <hd-tooltip text="Input" trigger="click"><hd-input placeholder="这里是input，点击触发tooltip"></hd-input></hd-tooltip>
              Tight pants next level keffiyeh you probably haven't heard of them.
              <hd-tooltip text="照片"><a>Photo</a></hd-tooltip>booth beard raw denim letterpress vegan <hd-tooltip text="信使" placement="left"><a>messenger</a></hd-tooltip>bag stumptown.
              Farm-to-table seitan, mcsweeney's fixie <hd-tooltip text="可持续的" placement="right"><a>sustainable</a></hd-tooltip> quinoa 8-bit american apparel have a terry richardson
              vinyl chambray. twitter handle freegan cred raw denim single-origin <hd-tooltip text="咖啡" placement="bottom"><a>coffee</a></hd-tooltip> viral.
            </p>
            <div class="footer"><code>在文字上添加Tooltip</code></div>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">颜色</h5>
      <hd-row>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">文字颜色</div>
            <hd-button-group>
              <hd-tooltip text="Top">
                <hd-button type="info">top</hd-button>
              </hd-tooltip>
              <hd-tooltip  text="Left" placement="left"  text-color="info">
                <hd-button type="success">left</hd-button>
              </hd-tooltip>
              <hd-tooltip text="Right" placement="right" text-color="success">
                <hd-button type="warning">right</hd-button>
              </hd-tooltip>
              <hd-tooltip text="Bottom" placement="bottom" text-color="red">
                <hd-button type="danger">bottom</hd-button>
              </hd-tooltip>
            </hd-button-group>
            <div class="footer"><code>text-color="?"</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-success">背景色</div>
            <p>
              Tight pants next level keffiyeh you probably haven't heard of them.
              <hd-tooltip text="照片" bg-color="warning"><a>Photo</a></hd-tooltip>booth beard raw denim letterpress vegan <hd-tooltip text="信使" placement="left" bg-color="success"><a>messenger</a></hd-tooltip>bag stumptown.
              Farm-to-table seitan, mcsweeney's fixie <hd-tooltip text="可持续的" placement="right" bg-color="danger"><a>sustainable</a></hd-tooltip> quinoa 8-bit american apparel have a terry richardson
              vinyl chambray. twitter handle freegan cred raw denim single-origin <hd-tooltip text="咖啡" placement="bottom" bg-color="info"><a>coffee</a></hd-tooltip> viral.
            </p>
            <div class="footer"><code>bg-color="?"</code></div>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">大小</h5>
      <hd-row>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-button-group>
              <hd-tooltip text="AAA">
                <hd-button type="info">正常</hd-button>
              </hd-tooltip>
              <hd-tooltip  text="AAA" larged>
                <hd-button type="success">变大</hd-button>
              </hd-tooltip>
            </hd-button-group>
            <div class="footer"><code>larged 字体大小由13px变为15px</code></div>
          </div>
        </hd-col>
      </hd-row>

        <h5 class="row-title"><i class="fa fa-tags blue"></i>ToolTip API</h5>
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
                            <td width="10%">text</td>
                            <td width="20%">tooltip内容</td>
                            <td width="10%">String</td>
                            <td width="50%">——</td>
                            <td width="10%">——</td>
                        </tr>
                        <tr>
                            <td width="10%">text-color</td>
                            <td width="20%">text文字颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                black,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">snow</td>
                        </tr>
                        <tr>
                            <td width="10%">larged</td>
                            <td width="20%">tooltip文字变大2px(默认13px,变大后15px)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">placement</td>
                            <td width="20%">Tooltip 的出现位置</td>
                            <td width="10%">String</td>
                            <td width="50%">right,left,top,bottom</td>
                            <td width="10%">top</td>
                        </tr>
                        <tr>
                            <td width="10%">bg-color</td>
                            <td width="20%">背景色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                black,white,whitesmoke,snow,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">black</td>
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
                    <table class="table table-bordered table-hover" style="max-width:75em">
                        <thead>
                        <tr>
                            <th>名字</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="10%">——</td>
                            <td width="20%">放置按钮等组件</td>
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
      }
    }
  }
</script>
