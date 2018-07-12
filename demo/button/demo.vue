<template>
  <div class="">
    <toolbar>
      <hd-button-group ref="aaa" slot="left" more>
        <hd-button slot="init" shape="circle" size="xs" @click="rightclick">
          <hd-icon type="fa fa-angle-right"></hd-icon>
        </hd-button>
        <hd-button shape="circle" type="danger" size="xs">B</hd-button>
        <hd-button shape="circle" color="darkorange" size="xs">U</hd-button>
        <hd-button shape="circle" type="warning" size="xs">T</hd-button>
        <hd-button shape="circle" type="success" size="xs">T</hd-button>
        <hd-button shape="circle" color="azure" size="xs">O</hd-button>
        <hd-button shape="circle" color="purple" size="xs">N</hd-button>
        <hd-button shape="circle" size="xs" @click="leftclick">
          <hd-icon type="fa fa-angle-left"></hd-icon>
        </hd-button>
      </hd-button-group>
    </toolbar>
    <div class="page-body">
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">type</div>
            <div class="buttons-preview">
              <hd-button type="default">default</hd-button>
              <hd-button type="link">link</hd-button>
              <hd-button type="primary">primary</hd-button>
              <hd-button type="info">info</hd-button>
              <hd-button type="success" @click="successC" @keydown="successK" v-focus>success</hd-button>
              <hd-button type="warning">warning</hd-button>
              <hd-button type="danger">danger</hd-button>
              <hd-button type="withtooltip">withtooltip</hd-button>
              <hd-button type="hdprimary">hdprimary</hd-button>
            </div>
            <div class="footer"><code>type: default(默认) link primary info success warning danger</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">disabled</div>
            <div class="buttons-preview">
              <hd-button disabled @click="alert">disabled</hd-button>
            </div>
            <div class="footer"><code>disabled</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">shiny</div>
            <div class="buttons-preview">
              <hd-button shiny type="info">shiny</hd-button>
            </div>
            <div class="footer"><code>shiny</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">size</div>
            <div class="buttons-preview">
              <hd-button size="lg">lg</hd-button>
              <hd-button>normal</hd-button>
              <hd-button size="sm">sm</hd-button>
              <hd-button size="xs">xs</hd-button>
            </div>
            <div class="footer"><code>size: lg normal(默认) sm xs</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols4">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">isloading</div>
            <div class="buttons-preview">
              <hd-button isloading type="hdprimary">确定</hd-button>
            </div>
            <div class="footer"><code>isloading</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols4">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">shape</div>
            <div class="buttons-preview">
              <hd-button>rectangle</hd-button>
              <hd-button size="xs" shape="circle">circle</hd-button>
            </div>
            <div class="footer"><code>shape: rectangle(默认) circle</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols4">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">block</div>
            <div class="buttons-preview">
              <hd-button block>block</hd-button>
            </div>
            <div class="footer"><code>block</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">color</div>
            <div class="buttons-preview">
              <hd-button color="white">white</hd-button>
              <hd-button color="blue">blue</hd-button>
              <hd-button color="sky">sky</hd-button>
              <hd-button color="azure">azure</hd-button>
              <hd-button color="palegreen">palegreen</hd-button>
              <hd-button color="yellow">yellow</hd-button>
              <hd-button color="darkorange">darkorange</hd-button>
              <hd-button color="magenta">magenta</hd-button>
              <hd-button color="purple">purple</hd-button>
              <hd-button color="maroon">maroon</hd-button>
            </div>
            <div class="footer"><code>color: white(默认)blue sky azure palegreen yellow darkorange magenta purple maroon</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols5">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">fontcolor bgcolor bdcolor</div>
            <div class="buttons-preview">
              <hd-button font-color="themeprimary">font-color</hd-button>
              <hd-button bg-color="themesecondary">bg-color</hd-button>
              <hd-button bd-color="themethirdcolor">bd-color</hd-button>
            </div>
            <div class="footer"><code>font-color: ...  bg-color: ...  bd-color: ... </code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">noRadius</div>
            <div class="buttons-preview">
              <hd-button>default</hd-button>
              <hd-button shiny type="info" noRadius>noRadius</hd-button>
            </div>
            <div class="footer"><code>noRadius</code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols4">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">嵌套icon</div>
            <div class="buttons-preview">
              <hd-button><hd-icon type="fa fa-camera"></hd-icon>拍照</hd-button>
              <hd-button>拍照<span class="badge badge-carton graded pull-right">3</span></hd-button>
            </div>
            <div class="footer"><code>noRadius</code></div>
          </div>
        </hd-col>
      </hd-row>

        <br/>
        <br/>
        <br/>
        <br/>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Button API</h5>

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
                        事件
                    </div>
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>事件名</th>
                            <th>事件说明</th>
                            <th>返回值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="15%">click事件</td>
                            <td width="40%">当前组件被点击时触发</td>
                            <td width="45%">event [object] (事件本身)</td>
                        </tr>
                        <tr>
                            <td>focus事件</td>
                            <td>当前组件获得焦点时触发</td>
                            <td>event [object] (事件本身)</td>
                        </tr>
                        <tr>
                            <td>blur事件</td>
                            <td>当前组件失去焦点时触发</td>
                            <td>event [object] (事件本身)</td>
                        </tr>
                        <tr>
                            <td>keydown事件</td>
                            <td>当前组件获得焦点前提下按下键盘时触发;默认‘回车’事件会触发click事件</td>
                            <td>event [object] (事件本身)</td>
                        </tr>
                        <tr>
                            <td>keyup事件</td>
                            <td>当前组件获得焦点前提下键盘收起时触发</td>
                            <td>event [object] (事件本身)</td>
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
  import Vue from 'vue';
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()              //focus 可能性1
    }
  })
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
        hd_btn_id:"",
        hd_btn_if:true,
        showup:true
      }
    },
    methods: {
      alert(){alert()},
      hdbtn_click(){
        alert(this.hd_btn_id);
      },
      showfun(){
        this.showup=!this.showup;
      },
      leftclick(){
        this.$refs.aaa.hide();
      },
      rightclick(){
        this.$refs.aaa.show();
      },
     successC(){
        alert('GG');
      },
        successK(e){
        console.log(e);
        if(e.code===13||e.key==='Enter'){
          console.log('you click the enter');
        }
      }
    }
  }
</script>
