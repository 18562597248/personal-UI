<template>
  <div>
    <div class="page-body">
      <h5 class="row-title">位置</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover title="文字">
              <hd-button type="info">Popover on top</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover title="标题" placement="left">
              <hd-button type="danger">Popover on left</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover title="Right" placement="right">
              <hd-button type="success">Popover on right</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover title="Bottom" placement="bottom">
              <hd-button type="warning">Popover on bottom</hd-button>
              <el-table slot="popover-content" :data="gridData">
                <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>
              </el-table>
              <!--<p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>-->
            </hd-popover>
            <div class="footer"><code>默认为top,placement="?"</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-success">文字</div>
            <p>
              <hd-popover title="Input" trigger="focus"><hd-input placeholder="这里是input，点击触发tooltip"></hd-input><p slot="popover-content">上面的css定义中的用!important限定的定义却是优先级最高的</p></hd-popover>
            Tight pants next level keffiyeh you probably haven't heard of them.
            <hd-popover title="照片"><a>Photo</a><p slot="popover-content">我是一个照片</p></hd-popover>booth beard raw denim letterpress vegan <hd-popover title="信使" placement="left"><a>messenger</a><p slot="popover-content">没有内容</p></hd-popover>bag stumptown.
            Farm-to-table seitan, mcsweeney's fixie <hd-popover title="可持续的" placement="right"><a>sustainable</a><p slot="popover-content">aaaaaaaaaa</p></hd-popover> quinoa 8-bit american apparel have a terry richardson
            vinyl chambray. twitter handle freegan cred raw denim single-origin <hd-popover title="咖啡" placement="bottom"><a>coffee</a><p slot="popover-content">nklndenkeneoifncjkc</p></hd-popover> viral.
            </p>
            <div class="footer"><code>在文字上添加Popover</code></div>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">无title</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover>
              <hd-button type="info">Popover on top</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="left">
              <hd-button type="danger">Popover on left</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="right">
              <hd-button type="success">Popover on right</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="bottom">
              <hd-button type="warning">Popover on bottom</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <div class="footer"><code>不需要配置titlt参数即可</code></div>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">触发方式</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover title="文字">
              <hd-button type="info">hover</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="left" trigger="click">
              <hd-button type="danger">click</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="right" title="文字" trigger="focus">
              <hd-button type="success">focus</hd-button type="success">
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="bottom" trigger="contextmenu">
              <hd-button type="warning">contextmenu</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <div class="footer"><code>trigger="?" 默认hover</code></div>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">类型</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover title="文字" type="dark">
              <hd-button type="info">Popover on top</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="left" type="inverted">
              <hd-button type="danger">Popover on left</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="right" title="文字" type="inverted">
              <hd-button type="success">Popover on right</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="bottom" type="dark">
              <hd-button type="warning">Popover on bottom</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <div class="footer"><code>type="dark" or type="inverted"</code></div>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">颜色</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover title="文字" title-text-color="red">
              <hd-button type="info">Popover on top</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="left" title="文字" type="inverted">
              <hd-button type="danger">Popover on left</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="right" title="文字" title-text-color="orange">
              <hd-button type="success">Popover on right</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="bottom" title="文字" title-text-color="primary">
              <hd-button type="warning">Popover on bottom</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <div class="footer"><code>title-text-color="?"标题文字颜色</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover title="文字" bg-color="red">
              <hd-button type="info">Popover on top</hd-button>
              <p slot="popover-content" style="color: snow"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="left" title="文字" bg-color="success">
              <hd-button type="danger">Popover on left</hd-button>
              <p slot="popover-content" style="color: snow"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="right" title="文字" bg-color="pink">
              <hd-button type="success">Popover on right</hd-button>
              <p slot="popover-content" style="color: snow"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="bottom" title="文字" bg-color="warning">
              <hd-button type="warning">Popover on bottom</hd-button>
              <p slot="popover-content" style="color: snow"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <div class="footer"><code>bg-color="?"背景色</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">Placement</div>
            <hd-popover title="文字" separate-color="red">
              <hd-button type="info">Popover on top</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="left" title="文字" type="inverted" separate-color="success">
              <hd-button type="danger">Popover on left</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="right" title="文字" separate-color="orange">
              <hd-button type="success">Popover on right</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <hd-popover placement="bottom" title="文字" separate-color="pink">
              <hd-button type="warning">Popover on bottom</hd-button>
              <p slot="popover-content"> Tight pants next level keffiyeh you probably haven't heard of them.</p>
            </hd-popover>
            <div class="footer"><code>separate-color="?"分割线颜色</code></div>
          </div>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Popover API</h5>
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
                            <td width="10%">title</td>
                            <td width="20%">popover标题</td>
                            <td width="10%">String</td>
                            <td width="50%">——</td>
                            <td width="10%">——</td>
                        </tr>
                        <tr>
                            <td width="10%">type</td>
                            <td width="20%">类型</td>
                            <td width="10%">String</td>
                            <td width="50%">default,dark,inverted</td>
                            <td width="10%">default</td>
                        </tr>
                        <tr>
                            <td width="10%">title-text-color</td>
                            <td width="20%">title文字颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                black,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">black</td>
                        </tr>
                        <tr>
                            <td width="10%">placement</td>
                            <td width="20%">Popover 的出现位置</td>
                            <td width="10%">String</td>
                            <td width="50%">right,left,top,bottom</td>
                            <td width="10%">top</td>
                        </tr>
                        <tr>
                            <td width="10%">trigger</td>
                            <td width="20%">触发方式</td>
                            <td width="10%">String</td>
                            <td width="50%">click,focus,hover,contextmenu</td>
                            <td width="10%">hover</td>
                        </tr>
                        <tr>
                            <td width="10%">bg-color</td>
                            <td width="20%">(标题和内容)背景色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                themeprimary，themesecondary，themethirdcolor，themefourthcolor，themefifthcolor，default,black,white,whitesmoke,snow,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">default</td>
                        </tr>
                        <tr>
                            <td width="10%">separate-color</td>
                            <td width="20%">分割线颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                themeprimary，themesecondary，themethirdcolor，themefourthcolor，themefifthcolor，black,white,whitesmoke,snow,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">themeprimary</td>
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="10%">——</td>
                            <td width="20%">放置按钮等组件</td>
                        </tr>
                        <tr>
                            <td width="10%">popover-content</td>
                            <td width="20%">popover的内容</td>
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
