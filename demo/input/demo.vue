<template>
  <div class="">
    <toolbar>
      <hd-button-group slot="left" more>
        <hd-button shape="circle" type="primary" size="xs">I</hd-button>
        <hd-button shape="circle" type="info" size="xs">n</hd-button>
        <hd-button shape="circle" type="success" size="xs">p</hd-button>
        <hd-button shape="circle" type="warning" size="xs">u</hd-button>
        <hd-button shape="circle" type="danger" size="xs">t</hd-button>
      </hd-button-group>
    </toolbar>
    <div class="page-body">
      <hd-row>
        <hd-col :cols="cols12">
          <hd-row>
            <hd-col :cols="cols2">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">value</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-input value="有初始值的表单"></hd-input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </hd-col>
            <hd-col :cols="cols2">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">placeholder</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-input placeholder="空表单项的默认文本"></hd-input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </hd-col>
            <hd-col :cols="cols2">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">disabled</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-input disabled></hd-input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </hd-col>
            <hd-col :cols="cols2">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">label</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-input id="label" label="标题部分"></hd-input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </hd-col>
            <hd-col :cols="cols2">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">required</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-input required placeholder="加深背景色提醒用户这个表单是必填项"></hd-input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols12">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">type</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hr class="wide">
                        <hd-row>
                          <hd-col :cols="cols2">
                            <hd-input type="text" placeholder="text"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input type="password" placeholder="password"></hd-input>
                          </hd-col>
                        </hd-row>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"><code>type: text(默认) password</code></div>
              </div>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols12">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">type = "textarea"</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hr class="wide">
                        <hd-row>
                          <hd-col :cols="cols2">
                            <hd-input type="textarea" value="默认5行" placeholder="textarea"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input type="textarea" autosize value="高度自适应" placeholder="textarea"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input type="textarea" :autosize="{maxRows:4,minRows:2}" value="maxRows:4,minRows:2" placeholder="textarea">
                                <hd-button class="icon-only" slot="outleft" dropdown noRadius><i class="hd-icon hd-plus"></i></hd-button>
                                <hd-button class="icon-only" slot="outright" dropdown noRadius><i class="hd-icon hd-plus"></i></hd-button>
                            </hd-input>
                          </hd-col>
                        </hd-row>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"><code>type: textarea</code></div>
              </div>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols12">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">size</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-row>
                          <hd-col :cols="cols2">
                            <hd-input size="xl" placeholder="xl"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input size="lg" placeholder="lg"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input placeholder="normal"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input size="sm" placeholder="sm"></hd-input>
                          </hd-col>
                          <hd-col :cols="cols2">
                            <hd-input size="xs" placeholder="xs"></hd-input>
                          </hd-col>
                        </hd-row>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"><code>size: xs sm normal(默认) lg xl</code></div>
              </div>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols12">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">icon</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-row>
                          <hd-col :cols="cols3">
                            <hd-input>
                              <i slot="inicon" class="fa fa-envelope info circular"></i>
                            </hd-input>
                          </hd-col>
                          <hd-col :cols="cols3">
                            <hd-input inleft isInverted>
                              <i slot="inicon" class="fa fa-envelope info circular"></i>
                            </hd-input>
                          </hd-col>
                          <hd-col :cols="cols3">
                            <hd-input isInverted>
                              <i slot="inicon" class="fa fa-envelope bg-info circular"></i>
                            </hd-input>
                          </hd-col>
                        </hd-row>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"><code>slot="icon"</code></div>
              </div>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols12">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">outleft/outright</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-row>
                          <hd-col :cols="cols3">
                            <hd-input>
                              <span slot="outleft">before</span>
                              <span slot="outright">after</span>
                            </hd-input>
                          </hd-col>
                          <hd-col :cols="cols3">
                            <hd-input right-bg-color="blue">
                              <hd-icon slot="outleft" type="fa fa-user darkorange"></hd-icon>
                              <hd-icon slot="outright" type="fa fa-envelope-o"></hd-icon>
                            </hd-input>
                          </hd-col>
                          <hd-col :cols="cols3">
                            <hd-input>
                              <hd-button slot="outleft" noRadius>hd-btn</hd-button>
                              <hd-button slot="outright">btn-group</hd-button>
                              <hd-button slot="outright" dropdown noRadius><i class="fa fa-angle-down"></i></hd-button>
                              <ul slot="right" class="dropdown-menu bg-blue" role="menu">
                                <li style="clear:both;"><hd-button color="blue">1</hd-button></li>
                                <li style="clear:both;"><hd-button color="blue">2</hd-button></li>
                                <li style="clear:both;"><hd-button color="blue">3</hd-button></li>
                              </ul>
                            </hd-input>
                          </hd-col>
                        </hd-row>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"><code>slot="outleft"/slot="outright"</code></div>
              </div>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols12">
              <div class="widget">
                <div class="widget-header bordered-top bordered-palegreen">
                  <span class="widget-caption">in & out</span>
                </div>
                <div class="widget-body">
                  <div class="collapse in">
                    <form role="form">
                      <div class="form-group">
                        <hd-row>
                          <hd-col :cols="cols3">
                            <hd-input>
                              <i slot="inicon" class="fa fa-envelope info circular"></i>
                              <span slot="outleft">before</span>
                              <span slot="outright">after</span>
                            </hd-input>
                          </hd-col>
                          <hd-col :cols="cols3">
                            <hd-input right-bg-color="blue">
                              <i slot="inicon" class="fa fa-envelope info circular"></i>
                              <hd-icon slot="outleft" type="fa fa-user darkorange"></hd-icon>
                              <hd-icon slot="outright" type="fa fa-envelope-o"></hd-icon>
                            </hd-input>
                          </hd-col>
                          <hd-col :cols="cols3">
                            <hd-input>
                              <i slot="inicon" class="fa fa-envelope info circular"></i>
                              <hd-button slot="outleft" noRadius>hd-btn</hd-button>
                              <hd-button slot="outright">btn-group</hd-button>
                              <hd-button slot="outright" dropdown noRadius><i class="fa fa-angle-down"></i></hd-button>
                              <ul slot="right" class="dropdown-menu bg-blue" role="menu">
                                <li style="clear:both;"><hd-button color="blue">1</hd-button></li>
                                <li style="clear:both;"><hd-button color="blue">2</hd-button></li>
                                <li style="clear:both;"><hd-button color="blue">3</hd-button></li>
                              </ul>
                            </hd-input>
                          </hd-col>
                        </hd-row>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"><code>slot="inicon" & slot="outleft"/slot="outright"</code></div>
              </div>
            </hd-col>
          </hd-row>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Input API</h5>
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
                            <td width="10%">[String,Number]</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>当前表单项的初始化值</td>
                            <td>[String,Number]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>需要创建组件的基本样式类型;type="textarea"时不支持插入图片(即插入图片不会展示)</td>
                            <td>[String]</td>
                            <td>text、password、textarea</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>type="textarea"并且非自适应(!autosize)时有效,规定当前组件固定行数</td>
                            <td>[Number]</td>
                            <td>-</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>autosize</td>
                            <td>自适应内容高度,只对type="textarea"有效,可传入对象,如:{ minRows:2,maxRows:6}</td>
                            <td>[Boolean,Object]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>放置到空表单项中的默认文本</td>
                            <td>[String]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>当前组件处于无效状态时为true</td>
                            <td>[Boolean]</td>
                            <td>-</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>当前组件的大小样式</td>
                            <td>[String]</td>
                            <td>xs、sm、normal、lg、xl</td>
                            <td>normal</td>
                        </tr>
                        <tr>
                            <td>isInverted</td>
                            <td>slot=“inicon”插入子组件时，控制图标颜色反色</td>
                            <td>[Boolean]</td>
                            <td>-</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>inleft</td>
                            <td>slot=“inicon”插入子组件时，控制图标出现在组件左侧</td>
                            <td>[Boolean]</td>
                            <td>-</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>left-bg-color</td>
                            <td>slot=“outleft”，控制左侧的背景颜色</td>
                            <td>[String]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>right-bg-color</td>
                            <td>slot=“outright”，控制右侧的背景颜色</td>
                            <td>[String]</td>
                            <td>-</td>
                            <td>-</td>
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
                            <td width="15%">outleft</td>
                            <td width="70%">左侧插槽，可选值有p、b、u、tt、cite、em、strong、span、i、hdI、a、button、hdButton</td>
                            <td width="15%">String</td>
                        </tr>
                        <tr>
                            <td>outright</td>
                            <td>左侧插槽，可选值有p、b、u、tt、cite、em、strong、span、i、hdI、a、button、hdButton</td>
                            <td>String</td>
                        </tr>
                        <tr>
                            <td>inicon</td>
                            <td>第二类绑定icon所用插槽，可选值有i、hdI; 默认在右侧插入icon</td>
                            <td>String</td>
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
                            <td width="10%">blur</td>
                            <td width="20%">当失去焦点时触发的事件</td>
                            <td width="10%">event 事件对象</td>
                        </tr>
                        <tr>
                            <td width="10%">focus</td>
                            <td width="20%">当获得焦点时触发的事件</td>
                            <td width="10%">event 事件对象</td>
                        </tr>
                        <tr>
                            <td width="10%">change</td>
                            <td width="20%">当绑定值变化时触发的事件</td>
                            <td width="10%">event 事件对象</td>
                        </tr>
                        <tr>
                            <td width="10%">input</td>
                            <td width="20%">当输入时触发的事件</td>
                            <td width="10%">event 事件对象</td>
                        </tr>
                        <tr>
                            <td width="10%">enter</td>
                            <td width="20%">当键盘enter按下时触发的事件</td>
                            <td width="10%">event 事件对象</td>
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
        cols1:[1,1,1],
        cols2:[2,2,2],
        cols3:[3,3,3],
        cols4:[4,4,4],
        cols5:[5,5,5],
        cols6:[6,6,6],
        cols7:[7,7,7],
        cols8:[8,8,8],
        cols9:[9,9,9],
        cols10:[10,10,10],
        cols11:[11,11,11],
        cols12:[12,12,12],
        order1:[1,1,1],
        order2:[2,2,2],
        order_1:[-1,-1,-1],
        order_2:[-2,-2,-2],
        value_:0,
        min:0,
        max:1,
        step:1,
        controls:true
      }
    },
    computed:{},
    methods: {
      add(){},
      minus(){}
    },
    watch(){}
  }
</script>
<style>
 .btn-group > .btn.btn-circle.btn-xs.btn-primary{
   margin: 0;
 }
</style>
