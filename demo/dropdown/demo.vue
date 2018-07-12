<template>
  <div class="">
    <div class="page-body">
      <hd-row v-if="tiaopi_">
        <hd-col :cols="tpAry" :offset="tpAry1">
          <img src="static/img/qg.gif" alt="敲鼓" />
        </hd-col>
      </hd-row>

      <h5 class="row-title">颜色</h5>
      <hd-row>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">default</div>
            <hd-dropdown ref="Default" :data="user_data1">
              <hd-button-group>
                <hd-button>
                  Default
                </hd-button>
                <hd-button dropdown @click="show_('Default')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <div class="footer"><code></code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols9">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">color</div>
            <hd-dropdown ref="blue_" item-color="blue" :data="user_data1">
              <hd-button-group>
                <hd-button color="blue">
                  blue
                </hd-button>
                <hd-button dropdown color="blue" @click="show_('blue_')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="palegreen_" itemColor="palegreen" :data="user_data1">
              <hd-button-group>
                <hd-button color="palegreen">
                  palegreen
                </hd-button>
                <hd-button dropdown color="palegreen" @click="show_('palegreen_')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="darkorange_" itemColor="darkorange" :data="user_data1">
              <hd-button-group>
                <hd-button color="darkorange">
                  darkorange
                </hd-button>
                <hd-button dropdown color="darkorange" @click="show_('darkorange_')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="magenta_" itemColor="magenta" :data="user_data1">
              <hd-button-group>
                <hd-button color="magenta">
                  magenta
                </hd-button>
                <hd-button dropdown color="magenta" @click="show_('magenta_')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="purple_" itemColor="purple" :data="user_data1">
              <hd-button-group>
                <hd-button color="purple">
                  purple
                </hd-button>
                <hd-button dropdown color="purple" @click="show_('purple_')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="maroon_" itemColor="maroon" :data="user_data1">
              <hd-button-group>
                <hd-button color="maroon">
                  maroon
                </hd-button>
                <hd-button dropdown color="maroon" @click="show_('maroon_')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <div class="footer"><code>item-color="..."</code></div>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">backgroud-color & text-color</div>
            <hd-dropdown ref="blue" bg-color="blue" text-color="darkorange" :data="user_data1">
              <hd-button-group>
                <hd-button color="blue">
                  blue
                </hd-button>
                <hd-button dropdown color="blue" @click="show_('blue')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="palegreen" bg-color="palegreen" text-color="maroon" :data="user_data1">
              <hd-button-group>
                <hd-button color="palegreen">
                  palegreen
                </hd-button>
                <hd-button dropdown color="palegreen" @click="show_('palegreen')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="darkorange" bg-color="darkorange" text-color="palegreen" :data="user_data1">
              <hd-button-group>
                <hd-button color="darkorange">
                  darkorange
                </hd-button>
                <hd-button dropdown color="darkorange" @click="show_('darkorange')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="magenta" bg-color="magenta" text-color="sky" :data="user_data1">
              <hd-button-group>
                <hd-button color="magenta">
                  magenta
                </hd-button>
                <hd-button dropdown color="magenta" @click="show_('magenta')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="purple" bg-color="purple" text-color="yellow" :data="user_data1">
              <hd-button-group>
                <hd-button color="purple">
                  purple
                </hd-button>
                <hd-button dropdown color="purple" @click="show_('purple')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="maroon" bg-color="maroon" text-color="blue" :data="user_data1">
              <hd-button-group>
                <hd-button color="maroon">
                  maroon
                </hd-button>
                <hd-button dropdown color="maroon" @click="show_('maroon')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="sky" bg-color="sky" text-color="magenta" :data="user_data1">
              <hd-button-group>
                <hd-button bg-color="sky" bd-color="sky" font-color="white">
                  sky
                </hd-button>
                <hd-button dropdown bg-color="sky" bd-color="sky" font-color="white" @click="show_('sky')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="azure" bg-color="azure" text-color="purple" :data="user_data1">
              <hd-button-group>
                <hd-button bg-color="azure" bd-color="azure" font-color="white">
                  azure
                </hd-button>
                <hd-button dropdown bg-color="azure" bd-color="azure" font-color="white" @click="show_('azure')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="yellow" bg-color="yellow" text-color="azure" :data="user_data1">
              <hd-button-group>
                <hd-button bg-color="yellow" bd-color="yellow" font-color="white">
                  yellow
                </hd-button>
                <hd-button dropdown bg-color="yellow" bd-color="yellow" font-color="white" @click="show_('yellow')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <div class="footer"><code>bg-color="..." text-color="..."</code></div>
          </div>
        </hd-col>
      </hd-row>

      <h5 class="row-title">with icon</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">with icon</div>
            <hd-dropdown ref="Transportation" :data="user_data2">
              <hd-button-group>
                <hd-button color="palegreen">
                  Transportation
                </hd-button>
                <hd-button dropdown color="palegreen" @click="show_('Transportation')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="Chart" :data="user_data3">
              <hd-button-group>
                <hd-button bg-color="primary" bd-color="primary">
                  Chart
                </hd-button>
                <hd-button dropdown bg-color="primary" bd-color="primary" @click="show_('Chart')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="Directional" :data="user_data4">
              <hd-button-group>
                <hd-button>
                  Directional
                </hd-button>
                <hd-button dropdown @click="show_('Directional')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="Currency" :data="user_data5">
              <hd-button-group>
                <hd-button color="darkorange">
                  Currency
                </hd-button>
                <hd-button dropdown color="darkorange" @click="show_('Currency')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="File" :data="user_data6">
              <hd-button-group>
                <hd-button bg-color="danger" bd-color="danger" font-color="white">
                  File
                </hd-button>
                <hd-button dropdown bg-color="danger" bd-color="danger" font-color="white" @click="show_('File')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="glyphicon" :data="user_data7">
              <hd-button-group>
                <hd-button color="blue">
                  glyphicon
                </hd-button>
                <hd-button dropdown color="blue" @click="show_('glyphicon')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="Typicons" :data="user_data8">
              <hd-button-group>
                <hd-button color="purple">
                  Typicons
                </hd-button>
                <hd-button dropdown color="purple" @click="show_('Typicons')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <hd-dropdown ref="Typicons2" :data="user_data9">
              <hd-button-group>
                <hd-button color="magenta">
                  Typicons2
                </hd-button>
                <hd-button dropdown color="magenta" @click="show_('Typicons2')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <div class="footer"><code></code></div>
          </div>
        </hd-col>
      </hd-row>

      <h5 class="row-title">with badges</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">with badges</div>
              <hd-dropdown ref="badges" :data="user_data13">
                <hd-button-group>
                  <hd-button>
                    badges
                  </hd-button>
                  <hd-button dropdown @click="show_('badges')">
                    <hd-icon type="fa fa-chevron-down"></hd-icon>
                  </hd-button>
                </hd-button-group>
              </hd-dropdown>
            </hd-button-group>
            <div class="footer"><code></code></div>
          </div>
        </hd-col>
      </hd-row>

      <h5 class="row-title">嵌套 & 事件</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">nest</div>
            <hd-dropdown ref="Nest" :data="user_data10">
              <hd-button-group>
                <hd-button>
                  Nest
                </hd-button>
                <hd-button @click="show_('Nest')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <div class="footer"><code></code></div>
          </div>
        </hd-col>
        <hd-col :cols="cols12">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">event</div>
            <hd-dropdown ref="Event" :data="user_data11" @click-item="event_click">
              <hd-button-group>
                <hd-button color="blue">
                  Event
                </hd-button>
                <hd-button dropdown color="blue" @click="show_('Event')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>

            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

            <hd-dropdown ref="parentChiosed" :data="user_data12" :parent-choiced="parent_ch" @click-item="parentChoiced_click">
              <hd-button-group>
                <hd-button color="blue">
                  parent-chiosed
                </hd-button>
                <hd-button dropdown color="blue" @click="show_('parentChiosed')">
                  <hd-icon type="fa fa-chevron-down"></hd-icon>
                </hd-button>
              </hd-button-group>
            </hd-dropdown>
            <div class="footer"><code>控制台查看事件触发</code></div>
          </div>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>dropdown API</h5>
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
                            <td><code>data(必传参数)</code></td>
                            <td>当前组件的展示数据</td>
                            <td>[Array]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td width="10%">id</td>
                            <td width="20%">当前组件唯一的id</td>
                            <td width="10%">[String,Number]</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>组件列表项mouseover颜色</td>
                            <td>[String]</td>
                            <td>
                                gray,info,primary,success,warning,danger,inverse,blue,blueberry,palegreen,orange,darkorange,magenta,purple,maroon
                            </td>
                            <td>gray</td>
                        </tr>
                        <tr>
                            <td>bg-color</td>
                            <td>组件背景颜色</td>
                            <td>[String]</td>
                            <td>
                                white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>white</td>
                        </tr>
                        <tr>
                            <td>text-color</td>
                            <td>组件字体颜色</td>
                            <td>[String]</td>
                            <td>
                                black,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>black</td>
                        </tr>
                        <tr>
                            <td>parent-choiced</td>
                            <td>带有子节点的列表项是否有click事件.true代表有click事件;false代表没有click事件;</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>当前下拉列表是否展示</td>
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
                    <table class="table table-bordered table-hover" style="max-width:75em">
                        <thead>
                        <tr>
                            <th>事件说明</th>
                            <th>说明</th>
                            <th>回调参数</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="10%">click</td>
                            <td width="20%">当前组件列表被点击时触发</td>
                            <td width="10%">返回4个参数:
                                发布的事件本身(event);
                                展示的数据[data];
                                被点击item的下标[index];
                                节点自身[element]
                            </td>
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
        tpAry:[1],
        tpAry1_:[10],
        tiao_:false,
        pi_:false,
        tiaopi_:false,
        parent_ch:true,
        user_data1: [
          {text:'Action'},
          {text:'Another action'},
          {text:'Something else here'},
          {divider:true},
          {text:'Separated link',disabled:true},
          {text:'Another link'}
        ],
        user_data2: [
          {text:' foot',icon:{type:'fa fa-street-view',color:'palegreen'}},
          {text:' bicycle',icon:{type:'fa fa-bicycle',color:'palegreen'}},
          {text:' motorcycle',icon:{type:'fa fa-motorcycle',color:'palegreen'}},
          {divider:true},
          {text:' bus',icon:{type:'fa fa-bus',color:'blue'}},
          {text:' automobile',icon:{type:'fa fa-automobile',color:'blue'}},
          {divider:true},
          {text:' ship',icon:{type:'fa fa-ship',color:'blue'}},
          {divider:true},
          {text:' subway',icon:{type:'fa fa-subway',color:'purple'}},
          {text:' train',icon:{type:'fa fa-train',color:'purple'}},
          {text:' plane',icon:{type:'fa fa-plane',color:'purple'}},
          {divider:true},
          {text:' rocket',icon:{type:'fa fa-rocket',color:'red'}}
        ],
        user_data3: [
          {text:' 平面图',icon:{type:'fa fa-area-chart'}},
          {text:' 柱状图',icon:{type:'fa fa-bar-chart'}},
          {text:' 折线图',icon:{type:'fa fa-line-chart'}},
          {text:' 扇形图',icon:{type:'fa fa-pie-chart'}}
        ],
        user_data4: [
          {text:' double-down',icon:{type:'fa fa-angle-double-down',bgColor:'blueberry'}},
          {text:' down',icon:{type:'fa fa-angle-down',bgColor:'blueberry'}},
          {text:' arrow-circle-down',icon:{type:'fa fa-arrow-circle-down',bgColor:'blueberry'}},
          {text:' arrow-circle-o-down',icon:{type:'fa fa-arrow-circle-o-down',bgColor:'blueberry'}},
          {text:' arrow-down',icon:{type:'fa fa-arrow-down',bgColor:'blueberry'}},
          {text:' arrows-alt',icon:{type:'fa fa-arrows-alt',bgColor:'blueberry'}},
          {text:' caret-down',icon:{type:'fa fa-caret-down',bgColor:'blueberry'}},
          {text:' caret-square-o-down',icon:{type:'fa fa-caret-square-o-down',bgColor:'blueberry'}},
          {text:' chevron-circle-down',icon:{type:'fa fa-chevron-circle-down',bgColor:'blueberry'}},
          {text:' chevron-down',icon:{type:'fa fa-chevron-down',bgColor:'blueberry'}},
          {text:' hand-o-down',icon:{type:'fa fa-hand-o-down',bgColor:'blueberry'}},
          {text:' long-arrow-down',icon:{type:'fa fa-long-arrow-down',bgColor:'blueberry'},children:[{text:'2-1'},{text:'2-2'}]}
        ],
        user_data5: [
          {text:' rmb',icon:{type:'fa fa-rmb',circular:true}},
          {text:' dollar',icon:{type:'fa fa-dollar',circular:true}},
          {text:' euro',icon:{type:'fa fa-euro',circular:true}},
          {text:' gbp',icon:{type:'fa fa-gbp',circular:true}},
          {text:' rub',icon:{type:'fa fa-rub',circular:true}},
          {text:' btc',icon:{type:'fa fa-btc',circular:true}},
          {text:' ils',icon:{type:'fa fa-ils',circular:true}},
          {text:' inr',icon:{type:'fa fa-inr',circular:true}}
        ],
        user_data6: [
          {text:' file',icon:{type:'fa fa-file'}},
          {text:' file-excel-o',icon:{type:'fa fa-file-excel-o'}},
          {text:' file-pdf-o',icon:{type:'fa fa-file-pdf-o'}},
          {text:' file-word-o',icon:{type:'fa fa-file-word-o'}},
          {text:' file-code-o',icon:{type:'fa fa-file-code-o'}},
          {text:' file-picture-o',icon:{type:'fa fa-file-picture-o'}},
          {text:' file-text-o',icon:{type:'fa fa-file-text-o'}},
          {text:' file-powerpoint-o',icon:{type:'fa fa-file-powerpoint-o'}},
          {text:' file-audio-o',icon:{type:'fa fa-file-audio-o'}},
          {text:' file-video-o',icon:{type:'fa fa-file-video-o'}}
        ],
        user_data7: [
          {text:' add',icon:{type:'glyphicon glyphicon-plus'}},
          {text:' delete',icon:{type:'glyphicon glyphicon-trash'}},
          {text:' delete2',icon:{type:'glyphicon glyphicon-floppy-remove'}},
          {text:' edit',icon:{type:'glyphicon glyphicon-edit'}},
          {text:' edit2',icon:{type:'glyphicon glyphicon-pencil'}},
          {text:' find',icon:{type:'glyphicon glyphicon-search'}},
          {text:' save',icon:{type:'glyphicon glyphicon-floppy-saved'}},
          {text:' submit',icon:{type:'glyphicon glyphicon-share-alt'}},
          {text:' submit2',icon:{type:'glyphicon glyphicon-share'}},
          {text:' review',icon:{type:'glyphicon glyphicon-user'}},
          {text:' review2',icon:{type:'glyphicon glyphicon-eye-open'}},
          {text:' download',icon:{type:'glyphicon glyphicon-download-alt'}},
          {text:' download2',icon:{type:'glyphicon glyphicon-download'}},
          {text:' upload',icon:{type:'glyphicon glyphicon-upload'}},
          {text:' cloud-download',icon:{type:'glyphicon glyphicon-cloud-download'}},
          {text:' cloud-upload',icon:{type:'glyphicon glyphicon-cloud-upload'}}
        ],
        user_data8: [
          {text:' cog',icon:{type:'typcn typcn-cog'}},
          {text:' desktop',icon:{type:'typcn typcn-device-desktop'}},
          {text:' tablet',icon:{type:'typcn typcn-device-tablet'}},
          {text:' home',icon:{type:'typcn typcn-home'}},
          {text:' lock',icon:{type:'typcn typcn-lock-closed-outline'}},
          {text:' lock-open',icon:{type:'typcn typcn-lock-open-outline'}},
          {text:' mail',icon:{type:'typcn typcn-mail'}},
          {text:' stopwatch',icon:{type:'typcn typcn-stopwatch'}},
          {text:' list',icon:{type:'typcn typcn-th-list'}},
          {text:' menu',icon:{type:'typcn typcn-th-menu'}},
          {text:' th',icon:{type:'typcn typcn-th-small-outline'}},
          {text:' thermometer',icon:{type:'typcn typcn-thermometer'}},
          {text:' power',icon:{type:'typcn typcn-power'}},
          {text:' warning',icon:{type:'typcn typcn-warning-outline'}}
        ],
        user_data9: [
          {text:' microsoft',icon:{type:'typcn typcn-vendor-microsoft'}},
          {text:' android',icon:{type:'typcn typcn-vendor-android'}},
          {text:' apple',icon:{type:'typcn typcn-vendor-apple'}},
          {text:' html5',icon:{type:'typcn typcn-html5'}},
          {text:' at',icon:{type:'typcn typcn-at'}},
          {text:' brightness',icon:{type:'typcn typcn-adjust-brightness'}},
          {text:' contrast',icon:{type:'typcn typcn-adjust-contrast'}},
          {text:' microphone',icon:{type:'typcn typcn-microphone-outline'}},
          {text:' notes',icon:{type:'typcn typcn-notes'}},
          {text:' rss',icon:{type:'typcn typcn-rss'}},
          {text:' wi-fi',icon:{type:'typcn typcn-wi-fi'}},
          {text:' heart',icon:{type:'typcn typcn-heart-full-outline'}},
          {text:' location',icon:{type:'typcn typcn-location'}},
          {text:' compass',icon:{type:'typcn typcn-compass'}},
          {text:' feather',icon:{type:'typcn typcn-feather'}}
        ],
        user_data10: [
          {text:' 一级 1',children:[
            {text:' 二级 1-1',children:[
              {text:'三级 1-1-1',children:[{text:'四级 1-1-1-1'},{text:'四级 1-1-1-2'}]},{text:'三级 1-1-2',children:[{text:'四级 1-1-2-1'},{text:'四级 1-1-2-2'}]},{text:'三级 1-1-3',children:[{text:'四级 1-1-3-1'},{text:'四级 1-1-3-2'}]}
            ]},{text:' 二级 1-2',children:[
              {text:'三级 1-2-1',children:[{text:'四级 1-2-1-1'},{text:'四级 1-2-1-2'}]},{text:'三级 1-2-2',children:[{text:'四级 1-2-2-1'},{text:'四级 1-2-2-2'}]},{text:'三级 1-2-3',children:[{text:'四级 1-2-3-1'},{text:'四级 1-2-3-2'}]}
            ]},{text:' 二级 1-3',children:[
              {text:'三级 1-3-1'},{text:'三级 1-3-2'},{text:'三级 1-3-3'}
            ]},{text:' 二级 1-4',children:[
              {text:'三级 1-4-1'},{text:'三级 1-4-2'},{text:'三级 1-4-3'}
            ]}
          ]},
          {text:' 一级 2',children:[
            {text:' 二级 2-1',children:[
              {text:'三级 2-1-1'},{text:'三级 2-1-2'},{text:'三级 2-1-3'}
            ]},{text:' 二级 2-2',children:[
              {text:'三级 2-2-1'},{text:'三级 2-2-2'},{text:'三级 2-2-3'}
            ]},{text:' 二级 2-3',children:[
              {text:'三级 2-3-1'},{text:'三级 2-3-2'},{text:'三级 2-3-3'}
            ]},{text:' 二级 2-4',children:[
              {text:'三级 2-4-1'},{text:'三级 2-4-2'},{text:'三级 2-4-3'}
            ]}
          ]},
          {text:' 一级 3',children:[
            {text:' 二级 3-1',children:[
              {text:'三级 3-1-1'},{text:'三级 3-1-2'},{text:'三级 3-1-3'}
            ]},{text:' 二级 3-2',children:[
              {text:'三级 3-2-1'},{text:'三级 3-2-2'},{text:'三级 3-2-3'}
            ]},{text:' 二级 3-3',children:[
              {text:'三级 3-3-1'},{text:'三级 3-3-2'},{text:'三级 3-3-3'}
            ]},{text:' 二级 3-4',children:[
              {text:'三级 3-4-1'},{text:'三级 3-4-2'},{text:'三级 3-4-3'}
            ]}
          ]},
          {text:' 一级 4',children:[
            {text:' 二级 4-1',children:[
              {text:'三级 4-1-1'},{text:'三级 4-1-2'},{text:'三级 4-1-4'}
            ]},{text:' 二级 4-2',children:[
              {text:'三级 4-2-1'},{text:'三级 4-2-2'},{text:'三级 4-2-4'}
            ]},{text:' 二级 4-3',children:[
              {text:'三级 4-3-1'},{text:'三级 4-3-2'},{text:'三级 4-3-4'}
            ]},{text:' 二级 4-4',children:[
              {text:'三级 4-4-1'},{text:'三级 4-4-2'},{text:'三级 4-4-4'}
            ]}
          ]},
          {text:' 一级 5',children:[
            {text:' 二级 5-1',children:[
              {text:'三级 5-1-1'},{text:'三级 5-1-2'},{text:'三级 5-1-4'}
            ]},{text:' 二级 5-2',children:[
              {text:'三级 5-2-1'},{text:'三级 5-2-2'},{text:'三级 5-2-4'}
            ]},{text:' 二级 5-3',children:[
              {text:'三级 5-3-1'},{text:'三级 5-3-2'},{text:'三级 5-3-4'}
            ]},{text:' 二级 5-4',children:[
              {text:'三级 5-4-1'},{text:'三级 5-4-2'},{text:'三级 5-4-4'}
            ]}
          ]}
        ],
        user_data11: [
          {text:' 一级 1',disabled:true,children:[
            {text:' 二级 1-1',children:[
              {text:'三级 1-1-1',children:[{text:'四级 1-1-1-1'},{text:'四级 1-1-1-2'}]},{text:'三级 1-1-2',children:[{text:'四级 1-1-2-1'},{text:'四级 1-1-2-2'}]},{text:'三级 1-1-3',children:[{text:'四级 1-1-3-1'},{text:'四级 1-1-3-2'}]}
            ]},{text:' 二级 1-2',children:[
              {text:'三级 1-2-1',children:[{text:'四级 1-2-1-1'},{text:'四级 1-2-1-2'}]},{text:'三级 1-2-2',children:[{text:'四级 1-2-2-1'},{text:'四级 1-2-2-2'}]},{text:'三级 1-2-3',children:[{text:'四级 1-2-3-1'},{text:'四级 1-2-3-2'}]}
            ]},{text:' 二级 1-3',children:[
              {text:'三级 1-3-1'},{text:'三级 1-3-2'},{text:'三级 1-3-3'}
            ]},{text:' 二级 1-4',children:[
              {text:'三级 1-4-1'},{text:'三级 1-4-2'},{text:'三级 1-4-3'}
            ]}
          ]},
          {text:' 一级 2',children:[
            {text:' 二级 2-1',children:[
              {text:'三级 2-1-1'},{text:'三级 2-1-2'},{text:'三级 2-1-3'}
            ]},{text:' 二级 2-2',disabled:true,children:[
              {text:'三级 2-2-1'},{text:'三级 2-2-2'},{text:'三级 2-2-3'}
            ]},{text:' 二级 2-3',children:[
              {text:'三级 2-3-1'},{text:'三级 2-3-2'},{text:'三级 2-3-3'}
            ]},{text:' 二级 2-4',children:[
              {text:'三级 2-4-1'},{text:'三级 2-4-2'},{text:'三级 2-4-3'}
            ]}
          ]},
          {text:' 一级 3',children:[
            {text:' 二级 3-1',children:[
              {text:'三级 3-1-1'},{text:'三级 3-1-2'},{text:'三级 3-1-3'}
            ]},{text:' 二级 3-2',children:[
              {text:'三级 3-2-1'},{text:'三级 3-2-2'},{text:'三级 3-2-3'}
            ]},{text:' 二级 3-3',children:[
              {text:'三级 3-3-1'},{text:'三级 3-3-2'},{text:'三级 3-3-3',disabled:true}
            ]},{text:' 二级 3-4',children:[
              {text:'三级 3-4-1'},{text:'三级 3-4-2'},{text:'三级 3-4-3'}
            ]}
          ]},
          {text:' 一级 4',children:[
            {text:' 二级 4-1',children:[
              {text:'三级 4-1-1'},{text:'三级 4-1-2'},{text:'三级 4-1-4'}
            ]},{text:' 二级 4-2',children:[
              {text:'三级 4-2-1'},{text:'三级 4-2-2'},{text:'三级 4-2-4'}
            ]},{text:' 二级 4-3',children:[
              {text:'三级 4-3-1'},{text:'三级 4-3-2'},{text:'三级 4-3-4'}
            ]},{text:' 二级 4-4',children:[
              {text:'三级 4-4-1'},{text:'三级 4-4-2'},{text:'三级 4-4-4'}
            ]}
          ]},
          {text:' 一级 5',children:[
            {text:' 二级 5-1',children:[
              {text:'三级 5-1-1'},{text:'三级 5-1-2'},{text:'三级 5-1-4'}
            ]},{text:' 二级 5-2',children:[
              {text:'三级 5-2-1'},{text:'三级 5-2-2'},{text:'三级 5-2-4'}
            ]},{text:' 二级 5-3',children:[
              {text:'三级 5-3-1'},{text:'三级 5-3-2'},{text:'三级 5-3-4'}
            ]},{text:' 二级 5-4',children:[
              {text:'三级 5-4-1'},{text:'三级 5-4-2'},{text:'三级 5-4-4'}
            ]}
          ]}
        ],
        user_data12: [
          {text:' 一级 1',children:[
            {text:' 二级 1-1',children:[
              {text:'三级 1-1-1',children:[{text:'四级 1-1-1-1'},{text:'四级 1-1-1-2'}]},{text:'三级 1-1-2',children:[{text:'四级 1-1-2-1'},{text:'四级 1-1-2-2'}]},{text:'三级 1-1-3',children:[{text:'四级 1-1-3-1'},{text:'四级 1-1-3-2'}]}
            ]},{text:' 二级 1-2',children:[
              {text:'三级 1-2-1',children:[{text:'四级 1-2-1-1'},{text:'四级 1-2-1-2'}]},{text:'三级 1-2-2',children:[{text:'四级 1-2-2-1'},{text:'四级 1-2-2-2'}]},{text:'三级 1-2-3',children:[{text:'四级 1-2-3-1'},{text:'四级 1-2-3-2'}]}
            ]},{text:' 二级 1-3',children:[
              {text:'三级 1-3-1'},{text:'三级 1-3-2'},{text:'三级 1-3-3'}
            ]},{text:' 二级 1-4',children:[
              {text:'三级 1-4-1'},{text:'三级 1-4-2'},{text:'三级 1-4-3'}
            ]}
          ]},
          {text:' 一级 2',children:[
            {text:' 二级 2-1',children:[
              {text:'三级 2-1-1'},{text:'三级 2-1-2'},{text:'三级 2-1-3'}
            ]},{text:' 二级 2-2',children:[
              {text:'三级 2-2-1'},{text:'三级 2-2-2'},{text:'三级 2-2-3'}
            ]},{text:' 二级 2-3',children:[
              {text:'三级 2-3-1'},{text:'三级 2-3-2'},{text:'三级 2-3-3'}
            ]},{text:' 二级 2-4',children:[
              {text:'三级 2-4-1'},{text:'三级 2-4-2'},{text:'三级 2-4-3'}
            ]}
          ]},
          {text:' 一级 3',children:[
            {text:' 二级 3-1',children:[
              {text:'三级 3-1-1'},{text:'三级 3-1-2'},{text:'三级 3-1-3'}
            ]},{text:' 二级 3-2',children:[
              {text:'三级 3-2-1'},{text:'三级 3-2-2'},{text:'三级 3-2-3'}
            ]},{text:' 二级 3-3',children:[
              {text:'三级 3-3-1'},{text:'三级 3-3-2'},{text:'三级 3-3-3'}
            ]},{text:' 二级 3-4',children:[
              {text:'三级 3-4-1'},{text:'三级 3-4-2'},{text:'三级 3-4-3'}
            ]}
          ]},
          {text:' 一级 4',children:[
            {text:' 二级 4-1',children:[
              {text:'三级 4-1-1'},{text:'三级 4-1-2'},{text:'三级 4-1-4'}
            ]},{text:' 二级 4-2',children:[
              {text:'三级 4-2-1'},{text:'三级 4-2-2'},{text:'三级 4-2-4'}
            ]},{text:' 二级 4-3',children:[
              {text:'三级 4-3-1'},{text:'三级 4-3-2'},{text:'三级 4-3-4'}
            ]},{text:' 二级 4-4',children:[
              {text:'三级 4-4-1'},{text:'三级 4-4-2'},{text:'三级 4-4-4'}
            ]}
          ]},
          {text:' 一级 5',children:[
            {text:' 二级 5-1',children:[
              {text:'三级 5-1-1'},{text:'三级 5-1-2'},{text:'三级 5-1-4'}
            ]},{text:' 二级 5-2',children:[
              {text:'三级 5-2-1'},{text:'三级 5-2-2'},{text:'三级 5-2-4'}
            ]},{text:' 二级 5-3',children:[
              {text:'三级 5-3-1'},{text:'三级 5-3-2'},{text:'三级 5-3-4'}
            ]},{text:' 二级 5-4',children:[
              {text:'三级 5-4-1'},{text:'三级 5-4-2'},{text:'三级 5-4-4'}
            ]}
          ]}
        ],
        user_data13: [
          {text:'Action',badge:{text:100,bgColor:'red',limit:99}},
          {text:'Another action'},
          {text:'Something else here',badge:{text:3,size:'sm',bgColor:'red',limit:9}},
          {text:'Separated link',disabled:true,badge:{text:100,limit:99}},
          {divider:true},
          {text:'Another link',badge:{text:1,size:'sm',shape:'square',bgColor:'red',limit:19}}
        ],
        dropdown1:false,
        dropdown2:false
      }
    },
    computed:{
      tpAry1(){
        return this.tpAry1_
      }
    },
    mounted() {
//      this.initEvent();
    },
    methods:{
      tiao(){
        this.tiao_=!this.tiao_;
        if(this.tiaopi_){if(0<this.tpAry1_[0]){this.tpAry1_[0]-=1;}}
        if(this.tiao_&&this.pi_){this.tiaopi_=true;}else{this.tiaopi_=false;}
      },
      pi(){
        this.pi_=!this.pi_;
        if(this.tiaopi_){if(this.tpAry1_[0]<11){this.tpAry1_[0]+=1;}}
        if(this.tiao_&&this.pi_){this.tiaopi_=true;}else{this.tiaopi_=false;}
      },
      leftclick(){
        this.$refs.aaa.hide();
      },
      rightclick(){
        this.$refs.aaa.show();
      },
      event_click(event,index,data,element){
        console.log('第一个参数 index :');
        console.log(event);
        console.log('第二个参数 index :');
        console.log(index);
        console.log('第三个参数 data :');
        console.log(data);
        console.log('第四个参数 element :');
        console.log(element);
      },
      parentChoiced_click(event,index,data,element){
        console.log('第一个参数 index :');
        console.log(event);
        console.log('第二个参数 index :');
        console.log(index);
        console.log('第三个参数 data :');
        console.log(data);
        console.log('第四个参数 element :');
        console.log(element);
      },
      show_(val){
        this.$refs[val].show();
      }
    }
  }
</script>
