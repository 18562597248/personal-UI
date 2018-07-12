<template>
  <div>
    <div class="page-body" v-loading.fullscreen="full" loading-text="这是全屏">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Loading DEMO</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-bordered-color-bottom="success" >
            <p slot="title">Basic</p>
            <p slot="body" v-loading="wid">
              <hd-collapse  loading-color="red" loading-text-color="success" loading-text="我是文字" v-loading="zbc">
                <hd-collapse-item title="我是标题1">
                  <hd-form type="default">
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
              <hd-button type="success" @click="zbc=!zbc">loading</hd-button>
              <hd-button type="warning" @click="widgetFullScreen">widget</hd-button>
              <hd-button type="danger" @click="FullScreen">全屏loading</hd-button>
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
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Loading API</h5>
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
                            <td width="10%">loading-text</td>
                            <td width="20%">显示在加载图标下方的加载文字</td>
                            <td width="10%">String</td>
                            <td width="50%">——</td>
                            <td width="10%">Loading</td>
                        </tr>
                        <tr>
                            <td width="10%">fullscreen</td>
                            <td width="20%">全屏修饰符(用法：v-loading.fullscreen)</td>
                            <td width="10%">Boolean</td>
                            <td width="50%">true,false</td>
                            <td width="10%">false</td>
                        </tr>
                        <tr>
                            <td width="10%">loading-text-color</td>
                            <td width="20%">text文字颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">themeprimary</td>
                        </tr>
                        <tr>
                            <td width="10%">loading-color</td>
                            <td width="20%">加载图标颜色</td>
                            <td width="10%">String</td>
                            <td width="50%">
                                themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td width="10%">themeprimary</td>
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
        activeName:['1','3','4'],
        zbc:false,
        wid:false,
        full:false
      }
    },
    methods: {
      widgetFullScreen(){
        this.wid = true;
        setTimeout(() => {
          this.wid = false;
      }, 2000);
      },
      FullScreen() {
        this.full = true;
        setTimeout(() => {
          this.full = false;
      }, 3000);
      }
    }
  }
</script>
