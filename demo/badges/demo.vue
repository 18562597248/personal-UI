<template>
  <div class="">
    <div class="page-body">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Badges Demo</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <hd-row>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">bg-color</span>
                <hd-badge slot="body" :text="1" bg-color="default"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="2" bg-color="blue"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="3" bg-color="info" ></hd-badge>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">size="sm"</span>
                <hd-badge slot="body" :text="4" bg-color="sky" size="sm"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="5" bg-color="primary" size="sm"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="6" bg-color="azure" size="sm"></hd-badge>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">text-color</span>
                <hd-badge slot="body" :text="7" bg-color="blueberry" text-color="black"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="8" bg-color="palegreen" text-color="danger"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="9" bg-color="success" text-color="purple"></hd-badge>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">:limit="9"</span>
                <hd-badge slot="body" :text="10" bg-color="green" :limit="9"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="11" bg-color="lightyellow" :limit="9"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="12" bg-color="yellow" :limit="9"></hd-badge>
              </hd-widget>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">shape="square"</span>
                <hd-badge slot="body" :text="13" bg-color="warning" :limit="99" shape="square"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="14" bg-color="gold" :limit="99" shape="square"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="15" bg-color="orange" :limit="99" shape="square"></hd-badge>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">bg-graded</span>
                <hd-badge slot="body" :text="16" bg-color="lightred" :limit="99" bg-graded></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="17" bg-color="darkorange" :limit="99" bg-graded></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="18" bg-color="red" :limit="99" bg-graded></hd-badge>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">shape="square"&size="sm"</span>
                <hd-badge slot="body" :text="19" bg-color="pink" :limit="99" shape="square" size="sm"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="20" bg-color="darkpink" :limit="99" shape="square" size="sm"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="21" bg-color="danger" :limit="99" shape="square" size="sm"></hd-badge>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols3">
              <hd-widget>
                <span slot="title" style="font-size:14px">:pullRight="false"</span>
                <hd-badge slot="body" :text="22" bg-color="magenta" :limit="99" :pullRight="true"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="23" bg-color="purple" :limit="99" :pullRight="true"></hd-badge>
                <span slot="body" style="font-size:14px">&nbsp;</span>
                <hd-badge slot="body" :text="24" bg-color="maroon" :limit="99" :pullRight="true"></hd-badge>
              </hd-widget>
            </hd-col>
          </hd-row>
        </hd-col>
      </hd-row>
        <br/>
        <br/>
        <br/>
        <br/>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Badges API</h5>

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
                            <td>当前组件唯一的id</td>
                            <td width="10%">[String,Number]</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>组件显示的数字</td>
                            <td>[Number]</td>
                            <td>-</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>limit</td>
                            <td>组件显示数字的上限,大于上限采用"[limit]+"的格式显示</td>
                            <td>[Number]</td>
                            <td>-</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>text-color</td>
                            <td>组件字体颜色</td>
                            <td>[String]</td>
                            <td>
                                black,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>white</td>
                        </tr>
                        <tr>
                            <td>bg-color</td>
                            <td>组件背景颜色</td>
                            <td>[String]</td>
                            <td>
                                default,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                            </td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>bg-graded</td>
                            <td>组件颜色:渐变色(须有背景色时才有效)</td>
                            <td>[Boolean]</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>组件大小</td>
                            <td>[String]</td>
                            <td>normal,sm</td>
                            <td>normal</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>组件形状</td>
                            <td>[String]</td>
                            <td>circle,square</td>
                            <td>circle</td>
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
        tpAry1_:[10]

      }
    },
    computed:{
      tpAry1(){
        return this.tpAry1_
      }
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
      }
    }
  }
</script>
