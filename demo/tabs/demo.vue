<template>
  <div>
    <div class="row" style="margin: 0">
      <div class="col-lg-12 col-sm-12 col-xs-12">
        <h5 class="row-title">选项卡标题方向</h5>
        <div class="row">
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs>
              <hd-tab title="标签一" id=1 is-active>
                <p>选项卡标题在面板上方。</p>
                <p>默认值，不需要传参数。</p>
              </hd-tab>
              <hd-tab title="标签二" id="2">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="3">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
              <hd-tab title="标签四" id="4">
                <p>这是第四个标签。</p>
              </hd-tab>
              <hd-tab title="标签五" id="5">
                <p>这是第五个标签。</p>
              </hd-tab>
              <hd-tab title="标签六" id="6">
                <p>这是第六个标签。</p>
              </hd-tab>
              <hd-tab title="标签七" id="7">
                <p>这是第七个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs header-position="left">
              <hd-tab title="标签一" id="8" is-active>
                <p>选项卡标题在面板左方。</p>
                <p>在hd-tabs标签中传入 header-position="left" 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="9">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="10">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs header-position="bottom">
              <hd-tab title="标签一" id="11" is-active>
                <p>选项卡标题在面板下方。</p>
                <p>在hd-tabs标签中传入 header-position="bottom" 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="12">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="13">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs header-position="right">
              <hd-tab title="标签一" id="14" is-active>
                <p>选项卡标题在面板右方。</p>
                <p>在hd-tabs标签中传入 header-position="right" 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="15">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="16">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <h5 class="row-title before-blue">选项卡平直样式</h5>
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs header-flat>
              <hd-tab title="标签一" id="17" is-active>
                <p>选项卡标题平直样式</p>
                <p>在hd-tabs标签中传入 header-flat 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="18">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="19">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs body-flat>
              <hd-tab title="标签一" id="20" is-active>
                <p>选项卡面板平直样式</p>
                <p>在hd-tabs标签中传入 body-flat 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="21">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="22">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs header-flat body-flat>
              <hd-tab title="标签一" id="23" is-active>
                <p>选项卡全平直样式</p>
                <p>在hd-tabs标签中传入 header-flat body-flat 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="24">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="25">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <h5 class="row-title before-blueberry">选项卡两端对齐、圆角样式</h5>
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-xs-6">
            <hd-tabs header-justified>
              <hd-tab title="标签一" id="26" is-active>
                <p>选项卡标题两端对齐样式</p>
                <p>在hd-tabs标签中传入 header-justified 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="27">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="28">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-6 col-sm-6 col-xs-6">
            <hd-tabs body-radius>
              <hd-tab title="标签一" id="29" is-active>
                <p>选项卡面板圆角样式</p>
                <p>在hd-tabs标签中传入 body-radius 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="30">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="31">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <h5 class="row-title before-carbon">hd-tabs整体颜色样式</h5>
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs header-bg-color="blue">
              <hd-tab title="标签一" id="32" is-active>
                <p>选项卡标题背景色为蓝色样式，被选中时为白色背景色。</p>
                <p>在hd-tabs标签中传入 header-bg-color="blue" 。</p>
                <p>一共44种颜色，不一一展示，默认为透明。</p>
              </hd-tab>
              <hd-tab title="标签二" id="33">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="34">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs body-bg-color="red">
              <hd-tab title="标签一" id="35" is-active>
                <p>选项卡面板背景色为红色样式</p>
                <p>在hd-tabs标签中传入 body-bg-color="red" 。</p>
                <p>一共44种颜色，不一一展示，默认为白色。</p>
              </hd-tab>
              <hd-tab title="标签二" id="36">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="37">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs body-color="orange">
              <hd-tab title="标签一" id="38" is-active>
                <p>选项卡面板文字颜色为橘色样式</p>
                <p>在hd-tabs标签中传入 body-color="orange" 。</p>
                <p>一共44种颜色，不一一展示，默认为黑色。</p>
              </hd-tab>
              <hd-tab title="标签二" id="39">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="40">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <h5 class="row-title before-darkcarbon">hd-tab组件样式</h5>
        <div class="row">
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs>
              <hd-tab title="标签一" id="41" tab-header-bg-color="gold" is-active>
                <p>选项卡标题背景色为金色样式，无论是否被选中都为金色。</p>
                <p>在hd-tab标签中传入 tab-header-bg-color="gold" 。</p>
                <p>一共44种颜色，不一一展示，默认为透明。</p>
              </hd-tab>
              <hd-tab title="标签二" id="42">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="43" tab-header-bg-color="carbon">
                <p>选项卡标题背景色为炭黑色样式，无论是否被选中都为炭黑色。</p>
                <p>在hd-tab标签中传入 tab-header-bg-color="carbon" 。</p>
                <p>一共44种颜色，不一一展示，默认为透明。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs>
              <hd-tab title="标签一" id="44" tab-header-color="yellow" is-active>
                <p>选项卡标题文字颜色为黄色样式</p>
                <p>在hd-tab标签中传入 tab-header-color="yellow" 。</p>
                <p>一共44种颜色，不一一展示，默认为银色，鼠标悬浮或者选中状态下为黑色。</p>
              </hd-tab>
              <hd-tab title="标签二" id="45">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="46" tab-header-color="gray">
                <p>选项卡标题文字颜色为灰色样式</p>
                <p>在hd-tab标签中传入 tab-header-color="gray" 。</p>
                <p>一共44种颜色，不一一展示，默认为银色，鼠标悬浮或者选中状态下为黑色。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs>
              <hd-tab title="标签一" id="47" tab-header-line-color="green" is-active>
                <p>选项卡标题边框线的颜色为绿色样式，被选中时显示。</p>
                <p>在hd-tab标签中传入 tab-header-line-color="green" 。</p>
                <p>一共44种颜色，不一一展示，默认为蔚蓝色。</p>
              </hd-tab>
              <hd-tab title="标签二" id="48">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="49" tab-header-line-color="palegreen">
                <p>选项卡标题边框线的颜色为淡绿色样式，被选中时显示。</p>
                <p>在hd-tab标签中传入 tab-header-line-color="palegreen" 。</p>
                <p>一共44种颜色，不一一展示，默认为蔚蓝色。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <hd-tabs>
              <hd-tab title="标签一" id="49">
                <p>这是第一个标签。</p>
              </hd-tab>
              <hd-tab title="标签二" id="50" is-active>
                <p>选项卡是否是默认打开。</p>
                <p>在hd-tab标签中传入 is-active 。</p>
              </hd-tab>
              <hd-tab title="标签三" id="51">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-xs-6">
            <hd-tabs>
              <hd-tab title="标签一" id="52" is-active tab-body-bg-color="darkorange">
                <p>选项卡面板背景色为深橘色样式。</p>
                <p>在hd-tab标签中传入 tab-body-bg-color="darkorange" 。</p>
                <p>一共44种颜色，不一一展示，默认为白色。</p>
              </hd-tab>
              <hd-tab title="标签二" id="53">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="54" tab-body-bg-color="sky">
                <p>选项卡面板背景色为天蓝色样式。</p>
                <p>在hd-tab标签中传入 tab-body-bg-color="sky" 。</p>
                <p>一共44种颜色，不一一展示，默认为白色。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-6 col-sm-6 col-xs-6">
            <hd-tabs>
              <hd-tab title="标签一" id="55" is-active tab-body-color="lightyellow">
                <p>选项卡面板文字颜色为浅黄色样式</p>
                <p>在hd-tab标签中传入 tab-body-color="lightyellow" 。</p>
                <p>一共44种颜色，不一一展示，默认为黑色。</p>
              </hd-tab>
              <hd-tab title="标签二" id="56">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="57" tab-body-color="pink">
                <p>选项卡面板文字颜色为粉色样式</p>
                <p>在hd-tab标签中传入 tab-body-color="pink" 。</p>
                <p>一共44种颜色，不一一展示，默认为黑色。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <h5 class="row-title before-darkpink">hd-tabs颜色样式组合使用</h5>
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs header-bg-color="blue">
              <hd-tab title="标签一" id="58" is-active>
                <p>选项卡标题背景色为蓝色样式，被选中时为白色背景色。</p>
                <p>在hd-tabs标签中传入 header-bg-color="blue" 。</p>
                <p>一共44种颜色，不一一展示，默认为透明。</p>
              </hd-tab>
              <hd-tab title="标签二" id="59" tab-header-bg-color="red">
                <p>选项卡标题背景色为红色样式，无论是否被选中都为红色，并且会覆盖header-bg-color传入的蓝色背景色。</p>
                <p>在hd-tabs标签中传入 header-bg-color="blue" 。</p>
                <p>在hd-tab标签中传入 tab-header-bg-color="red" 。</p>
              </hd-tab>
              <hd-tab title="标签三" id="60">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs body-bg-color="green">
              <hd-tab title="标签一" id="61" is-active tab-body-bg-color="pink">
                <p>选项卡面板背景色为绿色与粉色共存样式</p>
                <p>在hd-tabs标签中传入 body-bg-color="green" 。</p>
                <p>在hd-tab标签中传入 tab-body-color="pink" 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="62">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="63">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-4">
            <hd-tabs body-color="yellow">
              <hd-tab title="标签一" id="64" is-active tab-body-color="gray">
                <p>选项卡面板文字颜色为灰色，覆盖了body-color传入的黄色。</p>
                <p>在hd-tabs标签中传入 body-color="yellow" 。</p>
                <p>在hd-tab标签中传入 tab-body-color="gray" 。</p>
              </hd-tab>
              <hd-tab title="标签二" id="65">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="66">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
        <h5 class="row-title before-darkorange">hd-tabs的disabled和固定高度样式</h5>
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-xs-6">
            <hd-tabs>
              <hd-tab title="标签一" id=58 is-active>
                <p>在hd-tab标签中传入 disabled 。</p>
                <p>此例子中标签二为disabled样式，即不可点击。</p>
              </hd-tab>
              <hd-tab title="标签二" id="59" disabled>
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="60">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
          <div class="col-lg-6 col-sm-6 col-xs-6">
            <hd-tabs body-height="300">
              <hd-tab title="标签一" id=61 is-active>
                <p>在hd-tabs标签中传入 body-height="300"或者body-height=300 。</p>
                <p>不传此参数默认为自适应高度大小，传入此参数为固定高度（此例子中为固定高度300px），若内容超出高度范围自动添加滚动条。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
                <p>固定高度滚动条实验。</p>
              </hd-tab>
              <hd-tab title="标签二" id="62">
                <p>这是第二个标签。</p>
                <p>这是第二个标签。</p>
              </hd-tab>
              <hd-tab title="标签三" id="63">
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
                <p>这是第三个标签。</p>
              </hd-tab>
            </hd-tabs>
          </div>
        </div>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Tabs API</h5>
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
                          <td width="10%">header-bg-color</td>
                          <td width="20%">标签页选项卡标题背景的颜色（默认default为透明，已选中的选项卡标题背景色会变为白色。）</td>
                          <td width="10%">[string]</td>
                          <td width="50%">
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td width="10%">default</td>
                      </tr>
                      <tr>
                          <td>body-bg-color</td>
                          <td>标签页选项卡面板背景的颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>body-color</td>
                          <td>标签页选项卡面板文字的颜色（default是黑色。）</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>default</td>
                      </tr>
                      <tr>
                          <td>header-position</td>
                          <td>标签页选项卡标题的方向</td>
                          <td>[string]</td>
                          <td>top,left,bottom,right</td>
                          <td>top</td>
                      </tr>
                      <tr>
                          <td>header-flat</td>
                          <td>标签页的选项卡标题是否平直</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>body-flat</td>
                          <td>标签页的选项卡面板是否平直</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>body-radius</td>
                          <td>标签页选项卡面板是否是圆角</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>header-justified</td>
                          <td>标签页选项卡标题是否是两端对齐</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>body-height</td>
                          <td>标签页选项卡面板高度。（默认为自适应高度大小，传入此参数面板高度为固定高度，大小为传入的值的大小。）</td>
                          <td>[number]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Tab API</h5>
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
                          <td>id</td>
                          <td>必传项，值不可重复。</td>
                          <td>[string，number]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>title</td>
                          <td>标签页选项卡标题。</td>
                          <td>[string]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td width="10%">tab-header-bg-color</td>
                          <td width="20%">标签页选项卡标题背景的颜色（默认default为透明）</td>
                          <td width="10%">[string]</td>
                          <td width="50%">
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td width="10%">default</td>
                      </tr>
                      <tr>
                          <td>tab-body-bg-color</td>
                          <td>标签页选项卡面板背景的颜色。（面板内容为文本或按钮等小组件时显示背景色，大组件将遮盖住此背景色。）</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>tab-header-color</td>
                          <td>标签页选项卡标题文字的颜色</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>silver</td>
                      </tr>
                      <tr>
                          <td>tab-body-color</td>
                          <td>标签页选项卡标题文字的颜色（默认default为黑色。）</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>default</td>
                      </tr>
                      <tr>
                          <td>tab-header-line-color</td>
                          <td>标签页选项卡标题线的颜色（选中时显示，线的位置与选项卡面板位置相对）</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>azure</td>
                      </tr>
                      <tr>
                          <td>is-active</td>
                          <td>标签页选项卡标题是否是默认打开</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>disabled</td>
                          <td>标签页选项卡是否禁用</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
