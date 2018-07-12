<template>
  <div>
    <div class="page-body">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Collapse DEMO</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">Basic</p>
            <p slot="body">
              <hd-collapse>
                <hd-collapse-item title="我是标题1">
                  <hd-form type="default"  ref="ruleForm1">
                    <hd-row>
                      <hd-col :cols="cols6">
                        <hd-form-item   rule="undefined" label="Email">
                          <hd-radio-group >
                            <hd-radio  name="1"type="basic"    initvalue="blue1">r</hd-radio>
                            <hd-radio  name="1"type="inverted" initvalue="blue2">a</hd-radio>
                            <hd-radio  name="1"type="inverted" initvalue="blue3">d</hd-radio>
                            <hd-radio  name="1"type="inverted" initvalue="blue4">i</hd-radio>
                            <hd-radio  name="1"type="inverted" initvalue="blue5">o</hd-radio>
                          </hd-radio-group>
                        </hd-form-item>
                      </hd-col>
                      <hd-col :cols="cols6">
                        <hd-form-item   rule="undefined" label="Email">
                          <hd-radio-group   color="blue">
                            <hd-radio  name="2" initvalue="Invertedq">g</hd-radio>
                            <hd-radio  name="2" initvalue="Invertedw">r</hd-radio>
                            <hd-radio  name="2" initvalue="Invertede">o</hd-radio>
                            <hd-radio  name="2" initvalue="Invertedf">u</hd-radio>
                            <hd-radio  name="2" initvalue="Invertedg">p</hd-radio>
                          </hd-radio-group>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                  </hd-form>
                </hd-collapse-item>
              </hd-collapse>
              <hd-collapse v-model="activeName">
                <hd-collapse-item title="我是标题1" name="9">
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题2" name="10">
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3" name="11">
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">展开 & 图标</p>
            <p slot="body">
              <hd-collapse v-model="activeName">
                <hd-collapse-item  name="1">
                  <span slot="title"><hd-icon type="fa fa-check"></hd-icon> 我是标题1</span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item name="2">
                  <span slot="title"><hd-icon type="fa fa-book"></hd-icon> 我是标题2</span>
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3" name="3">
                  <span slot="title"><hd-icon type="fa fa-qq"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">Title-color</p>
            <p slot="body">
              <hd-collapse v-model="activeName">
                <hd-collapse-item title="我是标题1" title-color="info" name="12">
                  <span slot="title"><hd-icon type="fa fa-wifi"></hd-icon></span>
                  <div style="color: #00adee">这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题2" title-color="success" name="13">
                  <span slot="title"><hd-icon type="fa fa-book"></hd-icon></span>
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3" title-color="warning" name="14">
                  <span slot="title"><hd-icon type="fa fa-bolt"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">Title-bg-color</p>
            <p slot="body">
              <hd-collapse v-model="activeName">
                <hd-collapse-item title="我是标题1" title-bg-color="warning" title-color="snow" name="15">
                  <span slot="title"><hd-icon type="fa fa-check"></hd-icon></span>
                  <div style="color: #00adee">这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题2" title-bg-color="pink" title-color="white" name="16">
                  <span slot="title"><hd-icon type="fa fa-bed"></hd-icon></span>
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3" title-bg-color="sky" name="17">
                  <span slot="title"><hd-icon type="fa fa-car"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">Body-bg-color</p>
            <p slot="body">
              <hd-collapse v-model="activeName">
                <hd-collapse-item title="我是标题1" body-bg-color="success" name=18>
                  <span slot="title"><hd-icon type="fa fa-reddit"></hd-icon></span>
                  <div style="color: snow">这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题2" body-bg-color="danger" name="19">
                  <span slot="title"><hd-icon type="fa fa-weixin"></hd-icon></span>
                  <div style="color: gold">啦啦啦啦啦啦</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3" body-bg-color="info" name="20">
                  <span slot="title"><hd-icon type="fa fa-weibo"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>
        </hd-col>
      </hd-row>
      <h5 class="row-title"><i class="fa fa-tags danger"></i>Accordion</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">Accordion</p>
            <p slot="body">
              <hd-collapse accordion v-model="activeName">
                <hd-collapse-item title="我是标题1" name="4">
                  <span slot="title"><hd-icon type="fa fa-umbrella"></hd-icon></span>
                  <div style="color: #00adee">这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题2"  name="5">
                  <span slot="title"><hd-icon type="fa fa-volume-up"></hd-icon></span>
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3" name="6">
                  <span slot="title"><hd-icon type="fa fa-shopping-cart"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success">
            <p slot="title">图标</p>
            <p slot="body">
              <hd-collapse accordion >
                <hd-collapse-item title="我是标题1"  title-color="purple">
                  <span slot="title"><hd-icon type="fa fa-github"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题2"  title-color="green">
                  <span slot="title"><hd-icon type="fa fa-apple"></hd-icon></span>
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题3"  title-color="primary">
                  <span slot="title"><hd-icon type="fa fa-trash"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题4" title-color="purple">
                  <span slot="title"><hd-icon type="fa fa-check"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
                <hd-collapse-item title="我是标题5" title-color="green">
                  <span slot="title"><hd-icon type="fa fa-book"></hd-icon></span>
                  啦啦啦啦啦啦
                </hd-collapse-item>
                <hd-collapse-item title="我是标题6" title-color="primary">
                  <span slot="title"><hd-icon type="fa fa-twitter-square"></hd-icon></span>
                  <div>这里是BODY!!!</div>
                </hd-collapse-item>
              </hd-collapse>
            </p>
          </hd-widget>

        </hd-col>
      </hd-row>

        <h5 class="row-title"><i class="fa fa-tags blue"></i>Collapse API</h5>
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
                            <td width="10%">accordion</td>
                            <td width="20%">手风琴类型</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
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
                            <td width="10%">--</td>
                            <td width="20%">hdCollapseItem的插槽</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Collapse-item API</h5>
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
                            <td width="10%">name</td>
                            <td width="20%">唯一标志符</td>
                            <td width="10%">[String,Number]</td>
                            <td width="50%">——</td>
                            <td width="10%">——</td>
                        </tr>
                        <tr>
                            <td width="10%">title</td>
                            <td width="20%">标题</td>
                            <td width="10%">String</td>
                            <td width="50%">——</td>
                            <td width="10%">——</td>
                        </tr>
                        <tr>
                            <td width="10%">title-color</td>
                            <td width="20%">title文字颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                black,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">black</td>
                        </tr>
                        <tr>
                            <td width="10%">title-bg-color</td>
                            <td width="20%">(标题和内容边框)背景色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                default，themeprimary，themesecondary，themethirdcolor，themefourthcolor，themefifthcolor,black,white,whitesmoke,snow,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">default</td>
                        </tr>
                        <tr>
                            <td width="10%">body-bg-color</td>
                            <td width="20%">内容背景色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                default,themeprimary，themesecondary，themethirdcolor，themefourthcolor，themefifthcolor，default,black,white,whitesmoke,snow,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">default</td>
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
                            <td width="10%">title</td>
                            <td width="20%">标题中包含的内容，如图标等</td>
                        </tr>
                        <tr>
                            <td width="10%">--</td>
                            <td width="20%">hdCollapse的内容</td>
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
//  import hdCollapse from 'src/components/common/Collapse/Collapse.vue'
//  import hdCollapseItem from 'src/components/common/Collapse/CollapseItem.vue'
//import loading from 'src/components/common/loading/Loading.vue';
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
        activeName:['1','3','4']
      }
    },
    components:{
//      loading
//      hdCollapseItem
    }
  }
</script>
