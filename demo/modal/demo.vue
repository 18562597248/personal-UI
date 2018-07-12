<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框大小</div>
          <hd-modal size="lg" offsetTop header-b-color="blue" :open="open" @close="close" v-if="open1" body-height="200">
            <i slot="title" class="glyphicon glyphicon-check">大型模态框</i>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">模态框的大小为：宽度80%</p>
            <p slot="body">body-height传入body的高度</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="body">在modal标签内写 size="lg"</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="sm" header-b-color="blue" :open="open" @close="close" v-if="open2">
            <p slot="title">小型模态框</p>
            <p slot="body">在modal标签内写 size="sm"</p>
            <p slot="body">模态框的大小为：宽度60%</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="xs" header-b-color="blue" :open="open" @close="close" v-if="open13">
            <p slot="title">超小型模态框</p>
            <p slot="body">在modal标签内写 size="xs"</p>
            <p slot="body">模态框的大小为：宽度30%</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-default" @click="show1">modal-lg</button>
          <button class="btn btn-default" @click="show2">modal-sm</button>
          <button class="btn btn-default" @click="show13">modal-xs</button>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框标题底线的颜色（一共14种颜色，不一一展示）</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open3">
            <p slot="title">这是标题（底线为蓝色）</p>
            <p slot="body">在modal标签内写 header-b-color="blue"</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="orange" :open="open" @close="close" v-if="open4">
            <p slot="title">这是标题（底线为橙色）</p>
            <p slot="body">在modal标签内写 header-b-color="orange"</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="purple" :open="open" @close="close" v-if="open5">
            <p slot="title">这是标题（底线为紫色）</p>
            <p slot="body">在modal标签内写 header-b-color="purple"</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show3">蓝色</button>
          <button class="btn btn-success" @click="show4">橙色</button>
          <button class="btn btn-purple" @click="show5">紫色</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框遮罩层点击事件和遮盖层颜色</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open6" @handlerClick="handlerClick">
            <p slot="title">监听遮罩层点击事件</p>
            <p slot="body">在modal标签内写 @handlerClick="handlerClick"</p>
            <p slot="body">在methods中写handlerClick方法</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open20" overlay-color="blue">
            <p slot="title">遮罩层颜色（蓝色）</p>
            <p slot="body">在modal标签内写 overlay-color="blue" 默认为浅灰色（lightgray），不一一展示。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-info" @click="show6">modal</button>
          <button class="btn btn-blue" @click="show20">蓝色遮罩层</button>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">多层模态框</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open7">
            <p slot="title">多层模态框</p>
            <hd-modal slot="body" header-b-color="blue" :open="openboy" @close="close1" v-if="open8">
              <p slot="title">子模态框</p>
              <p slot="body">子模态框放在父模态框的body插槽中，但是需要与父模态框的样式和方法控制分开。</p>
              <p slot="footer">页脚（一般为按钮）</p>
            </hd-modal>
            <button slot="body" class="btn btn-blue" @click="show8">子modal</button>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show7">父modal</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框遮罩层透明度</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open9" opacity="0">
            <p slot="title">遮罩层透明度</p>
            <p slot="body">在modal标签内写 opacity="0"， 引号内数字可变，范围为0~1，0为全透明，1为不透明，一般为0.4。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open10" opacity="0.4">
            <p slot="title">遮罩层透明度</p>
            <p slot="body">在modal标签内写 opacity="0.4"， 引号内数字可变，范围为0~1，0为全透明，1为不透明，一般为0.4。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open11" opacity="1">
            <p slot="title">遮罩层透明度</p>
            <p slot="body">在modal标签内写 opacity="1"， 引号内数字可变，范围为0~1，0为全透明，1为不透明，一般为0.4。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show9">遮盖层透明度为0</button>
          <button class="btn btn-blue" @click="show10">遮盖层透明度为0.4</button>
          <button class="btn btn-blue" @click="show11">遮盖层透明度为1</button>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框body插槽可写入其他组件</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open12">
            <p slot="title">模态框中写入form</p>
            <div slot="body" class="form-group">
              <input type="text" class="form-control">
            </div>
            <div slot="body" class="form-group">
              <textarea type="text" class="form-control" rows="2"></textarea>
            </div>
            <div slot="body" class="form-group">
              <textarea type="text" class="form-control" rows="5"></textarea>
            </div>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show12">搭载form</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框的标题文字颜色、内容文字颜色、页脚文字颜色</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open14" header-color="blue">
            <p slot="title">模态框标题文字颜色（蓝色）</p>
            <p slot="body">在modal标签内写 header-color="blue"， 一共有45种，默认为黑色，不一一展示。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open15" body-color="red">
            <p slot="title">模态框内容文字颜色（红色）</p>
            <p slot="body">在modal标签内写 body-color="red"， 一共有45种，默认为黑色，不一一展示。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open16" footer-color="yellow">
            <p slot="title">模态框页脚文字颜色（黄色）</p>
            <p slot="body">在modal标签内写 footer-color="yellow"， 一共有45种，默认为黑色，不一一展示。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show14">标题文字颜色（蓝色）</button>
          <button class="btn btn-danger" @click="show15">内容文字颜色（红色）</button>
          <button class="btn btn-warning" @click="show16">页脚文字颜色（黄色）</button>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-blue">模态框的标题背景颜色、内容背景颜色、页脚背景颜色</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open17" header-bg-color="blue" close-btn-color="white">
            <p slot="title">模态框标题背景颜色（蓝色）</p>
            <p slot="body">在modal标签内写 header-bg-color="blue"， 默认为白色，不一一展示。有的颜色会遮盖住关闭按钮的颜色，关闭按钮颜色需要再传入参数  close-btn-color="white"，  一共有44种颜色。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open18" body-bg-color="red">
            <p slot="title">模态框内容背景颜色（红色）</p>
            <p slot="body">在modal标签内写 body-bg-color="red"，  默认为白色，不一一展示。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open19" footer-bg-color="yellow">
            <p slot="title">模态框页脚背景颜色（黄色）</p>
            <p slot="body">在modal标签内写 footer-bg-color="yellow"，  默认为白色，不一一展示。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show17">标题背景颜色（蓝色）</button>
          <button class="btn btn-danger" @click="show18">内容背景颜色（红色）</button>
          <button class="btn btn-warning" @click="show19">页脚背景颜色（黄色）</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-blue">模态框的动画演示</div>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open21" act="top-fade">
            <p slot="title">模态框的上渐入动画（默认）</p>
            <p slot="body">在modal标签内写 :open="open" act="top-fade"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open22" act="left-fade">
            <p slot="title">模态框的左渐入动画</p>
            <p slot="body">在modal标签内写 :open="open" act="left-fade"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open23" act="right-fade">
            <p slot="title">模态框的右渐入动画</p>
            <p slot="body">在modal标签内写 :open="open" act="right-fade"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open24" act="y-rotate">
            <p slot="title">模态框的Y轴旋转动画</p>
            <p slot="body">在modal标签内写 :open="open" act="y-rotate"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open25" act="x-rotate">
            <p slot="title">模态框的X轴旋转动画</p>
            <p slot="body">在modal标签内写 :open="open" act="x-rotate"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open26" act="expand">
            <p slot="title">模态框的中心展开动画</p>
            <p slot="body">在modal标签内写 :open="open" act="expand"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open27" act="act7">
            <p slot="title">模态框的X轴多次旋转动画(测试用)</p>
            <p slot="body">在modal标签内写 :open="open" act="act7"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open28" act="act8">
            <p slot="title">模态框的2D旋转展开动画(测试用)</p>
            <p slot="body">在modal标签内写 :open="open" act="act8"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <hd-modal size="lg" header-b-color="blue" :open="open" @close="close" v-if="open29" act="act9">
            <p slot="title">模态框的2D位移旋转展开动画(测试用)</p>
            <p slot="body">在modal标签内写 :open="open" act="act9"，通过控制open的布尔值为true或false来打开或关闭模态框。</p>
            <p slot="footer">页脚（一般为按钮）</p>
          </hd-modal>
          <button class="btn btn-blue" @click="show21">上渐入</button>
          <button class="btn btn-blue" @click="show22">左渐入</button>
          <button class="btn btn-blue" @click="show23">右渐入</button>
          <button class="btn btn-blue" @click="show24">Y轴旋转</button>
          <button class="btn btn-blue" @click="show25">X轴旋转</button>
          <button class="btn btn-blue" @click="show26">中心展开</button>
          <button class="btn btn-blue" @click="show27">X轴多次旋转(测试用)</button>
          <button class="btn btn-blue" @click="show28">2D旋转展开(测试用)</button>
          <button class="btn btn-blue" @click="show29">2D位移旋转展开(测试用)</button>
        </div>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Model API</h5>
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
                          <td width="20%">模态框的大小：lg(宽度80%，高度700px),sm(宽度60%，高度580px),xs(宽度30%，高度360px)</td>
                          <td width="10%">[string]</td>
                          <td width="50%">lg,sm,xs</td>
                          <td width="10%">sm</td>
                      </tr>
                      <tr>
                          <td>header-b-color</td>
                          <td>模态框标题底线的颜色</td>
                          <td>[string]</td>
                          <td>
                              white,blue,danger,warning,success,darkorange,blueberry,purple,silver,inverse,magenta,maroon,orange,palegreen,primary
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>opacity</td>
                          <td>模态框遮罩层透明度</td>
                          <td>[string]</td>
                          <td>0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1</td>
                          <td>0.4</td>
                      </tr>
                      <tr>
                          <td>overlay-color</td>
                          <td>模态框遮罩层颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>lightgray</td>
                      </tr>
                      <tr>
                          <td>header-bg-color</td>
                          <td>模态框标题背景颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>body-bg-color</td>
                          <td>模态框内容背景颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>footer-bg-color</td>
                          <td>模态框页脚背景颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>header-color</td>
                          <td>模态框标题文字颜色</td>
                          <td>[string]</td>
                          <td>
                              black,blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>black</td>
                      </tr>
                      <tr>
                          <td>body-color</td>
                          <td>模态框内容文字颜色</td>
                          <td>[string]</td>
                          <td>
                              black,blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>black</td>
                      </tr>
                      <tr>
                          <td>footer-color</td>
                          <td>模态框页脚文字颜色</td>
                          <td>[string]</td>
                          <td>
                              black,blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>black</td>
                      </tr>
                      <tr>
                          <td>close-btn-color</td>
                          <td>模态框标题自带的关闭按钮颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>darkgray</td>
                      </tr>
                      <tr>
                          <td>open</td>
                          <td>模态框是否显示</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>act</td>
                          <td>
                              模态框打开动画：top-fade(上渐入动画),left-fade(左渐入动画),right-fade(右渐入动画),y-rotate(以Y轴为中心3D旋转90°),x-rotate(以X轴为中心3D旋转90°),expand(中心展开动画)
                          </td>
                          <td>[string]</td>
                          <td>top-fade,left-fade,right-fade,y-rotate,x-rotate,expand</td>
                          <td>top-fade</td>
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
                          <td width="15%">title</td>
                          <td width="70%">modal的标题</td>
                          <td width="15%">string</td>
                      </tr>
                      <tr>
                          <td>body</td>
                          <td>modal的内容</td>
                          <td>string</td>
                      </tr>
                      <tr>
                          <td>footer</td>
                          <td>modal的页脚</td>
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
                      事件
                  </div>
                  <table class="table table-bordered table-hover">
                      <thead>
                      <tr>
                          <th>事件名字</th>
                          <th>说明</th>
                          <th>返回值</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>close</td>
                          <td>模态框标题处自带关闭按钮的点击事件</td>
                          <td></td>
                      </tr>
                      <tr>
                          <td>handlerClick</td>
                          <td>发布了模态框遮罩层点击事件</td>
                          <td></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
    data:function(){
      return{
        open:false,
        openboy:false,
        open1:false,
        open2:false,
        open3:false,
        open4:false,
        open5:false,
        open6:false,
        open7:false,
        open8:false,
        open9:false,
        open10:false,
        open11:false,
        open12:false,
        open13:false,
        open14:false,
        open15:false,
        open16:false,
        open17:false,
        open18:false,
        open19:false,
        open20:false,
        open21:false,
        open22:false,
        open23:false,
        open24:false,
        open25:false,
        open26:false,
        open27:false,
        open28:false,
        open29:false
      }
    },
    methods:{
      show1(){
        if (this.open1 == false){
          this.open1 = true;
          this.open = true
        }else{
          this.open = false;
          this.open1 = false
        }
      },
      show2(){
        if (this.open2 == false){
          this.open2 = true;
          this.open = true
        }else{
          this.open = false;
          this.open2 = false
        }
      },
      show3(){
        if (this.open3 == false){
          this.open3 = true;
          this.open = true
        }else{
          this.open = false;
          this.open3 = false
        }
      },
      show4(){
        if (this.open4 == false){
          this.open4 = true;
          this.open = true
        }else{
          this.open = false;
          this.open4 = false
        }
      },
      show5(){
        if (this.open5 == false){
          this.open5 = true;
          this.open = true
        }else{
          this.open = false;
          this.open5 = false
        }
      },
      show6(){
        if (this.open6 == false){
          this.open6 = true;
          this.open = true
        }else{
          this.open = false;
          this.open6 = false
        }
      },
      show7(){
        if (this.open7 == false){
          this.open7 = true;
          this.open = true
        }else{
          this.open = false;
          this.open7 = false
        }
      },
      show8(){
        if (this.open8 == false){
          this.open8 = true;
          this.openboy = true
        }else{
          this.openboy = false;
          this.open8 = false
        }
      },
      show9(){
        if (this.open9 == false){
          this.open9 = true;
          this.open = true
        }else{
          this.open = false;
          this.open9 = false
        }
      },
      show10(){
        if (this.open10 == false){
          this.open10 = true;
          this.open = true
        }else{
          this.open = false;
          this.open10 = false
        }
      },
      show11(){
        if (this.open11 == false){
          this.open11 = true;
          this.open = true
        }else{
          this.open = false;
          this.open11 = false
        }
      },
      show12(){
        if (this.open12 == false){
          this.open12 = true;
          this.open = true
        }else{
          this.open = false;
          this.open12 = false
        }
      },
      show13(){
        if (this.open13 == false){
          this.open13 = true;
          this.open = true
        }else{
          this.open = false;
          this.open13 = false
        }
      },
      show14(){
        if (this.open14 == false){
          this.open14 = true;
          this.open = true
        }else{
          this.open = false;
          this.open14 = false
        }
      },
      show15(){
        if (this.open15 == false){
          this.open15 = true;
          this.open = true
        }else{
          this.open = false;
          this.open15 = false
        }
      },
      show16(){
        if (this.open16 == false){
          this.open16 = true;
          this.open = true
        }else{
          this.open = false;
          this.open16 = false
        }
      },
      show17(){
        if (this.open17 == false){
          this.open17 = true;
          this.open = true
        }else{
          this.open = false;
          this.open17 = false
        }
      },
      show18(){
        if (this.open18 == false){
          this.open18 = true;
          this.open = true
        }else{
          this.open = false;
          this.open18 = false
        }
      },
      show19(){
        if (this.open19 == false){
          this.open19 = true;
          this.open = true
        }else{
          this.open = false;
          this.open19 = false
        }
      },
      show20(){
        if (this.open20 == false){
          this.open20 = true;
          this.open = true
        }else{
          this.open = false;
          this.open20 = false
        }
      },
      show21(){
        if (this.open21 == false){
          this.open21 = true;
          this.open = true
        }else{
          this.open = false;
          this.open21 = false
        }
      },
      show22(){
        if (this.open22 == false){
          this.open22 = true;
          this.open = true
        }else{
          this.open = false;
          this.open22 = false
        }
      },
      show23(){
        if (this.open23 == false){
          this.open23 = true;
          this.open = true
        }else{
          this.open = false;
          this.open23 = false
        }
      },
      show24(){
        if (this.open24 == false){
          this.open24 = true;
          this.open = true
        }else{
          this.open = false;
          this.open24 = false
        }
      },
      show25(){
        if (this.open25 == false){
          this.open25 = true;
          this.open = true
        }else{
          this.open = false;
          this.open25 = false
        }
      },
      show26(){
        if (this.open26 == false){
          this.open26 = true;
          this.open = true
        }else{
          this.open = false;
          this.open26 = false
        }
      },
      show27(){
        if (this.open27 == false){
          this.open27 = true;
          this.open = true
        }else{
          this.open = false;
          this.open27 = false
        }
      },
      show28(){
        if (this.open28 == false){
          this.open28 = true;
          this.open = true
        }else{
          this.open = false;
          this.open28 = false
        }
      },
      show29(){
        if (this.open29 == false){
          this.open29 = true;
          this.open = true
        }else{
          this.open = false;
          this.open29 = false
        }
      },
      close(){
        this.open = false;
        this.open1 = false;
        this.open2 = false;
        this.open3 = false;
        this.open4 = false;
        this.open5 = false;
        this.open6 = false;
        this.open7 = false;
        this.open9 = false;
        this.open10 = false;
        this.open11 = false;
        this.open12 = false;
        this.open13 = false;
        this.open14 = false;
        this.open15 = false;
        this.open16 = false;
        this.open17 = false;
        this.open18 = false;
        this.open19 = false;
        this.open20 = false;
        this.open21 = false;
        this.open22 = false;
        this.open23 = false;
        this.open24 = false;
        this.open25 = false;
        this.open26 = false;
        this.open27 = false;
        this.open28 = false;
        this.open29 = false
      },
      close1(){
        this.openboy = false;
        this.open8 = false
      },
      handlerClick(){
        this.open = false;
        this.open6 = false
      }
    }
  }
</script>
