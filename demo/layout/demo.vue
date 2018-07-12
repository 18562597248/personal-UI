<template>
  <div>
    <div class="page-body">
      <hd-row v-if="tiaopi_">
        <hd-col :cols="tpAry" :offset="tpAry1">
          <img src="static/img/qg.gif" alt="敲鼓" />
        </hd-col>
      </hd-row>
      <h5 class="row-title">水平堆积</h5>
      <hd-row>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
        <hd-col :cols="horz1"><hd-button shiny block color="palegreen">col-md-1</hd-button></hd-col>
      </hd-row>
      <h5 class="row-title">Mobile&desktop</h5>
      <hd-row>
        <hd-col :cols="md1"><hd-button shiny block color="palegreen">col-md-3 col-xs-6</hd-button></hd-col>
        <hd-col :cols="md1"><hd-button shiny block color="palegreen">col-md-3 col-xs-6</hd-button></hd-col>
        <hd-col :cols="md1"><hd-button shiny block color="palegreen">col-md-3 col-xs-6</hd-button></hd-col>
        <hd-col :cols="md1"><hd-button shiny block color="palegreen">col-md-3 col-xs-6</hd-button></hd-col>
      </hd-row>
      <h5 class="row-title">Mobile&tablet&desktops</h5>
      <hd-row>
        <hd-col :cols="mtd1"><hd-button shiny block color="palegreen">c-md-2 c-sm-4 c-xs-6</hd-button></hd-col>
        <hd-col :cols="mtd1"><hd-button shiny block color="palegreen">c-md-2 c-sm-4 c-xs-6</hd-button></hd-col>
        <hd-col :cols="mtd1"><hd-button shiny block color="palegreen">c-md-2 c-sm-4 c-xs-6</hd-button></hd-col>
        <hd-col :cols="mtd1"><hd-button shiny block color="palegreen">c-md-2 c-sm-4 c-xs-6</hd-button></hd-col>
        <hd-col :cols="mtd1"><hd-button shiny block color="palegreen">c-md-2 c-sm-4 c-xs-6</hd-button></hd-col>
        <hd-col :cols="mtd1"><hd-button shiny block color="palegreen">c-md-2 c-sm-4 c-xs-6</hd-button></hd-col>
      </hd-row>
      <h5 class="row-title">偏置</h5>
      <hd-row>
        <hd-col :cols="horz2" :offset="offset1"><hd-button shiny block color="palegreen">col-md-3 col-md-offset-3</hd-button></hd-col>
        <hd-col :cols="horz2" :offset="offset1"><hd-button shiny block color="palegreen">col-md-3 col-md-offset-3</hd-button></hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="md2" :offset="offset2"><hd-button shiny block color="palegreen">md-3 xs-6 md-o-3 xs-o-2</hd-button></hd-col>
        <hd-col :cols="md2" :offset="offset2"><hd-button shiny block color="palegreen">md-3 xs-6 md-o-3 xs-o-2</hd-button></hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="mtd2" :offset="offset3"><hd-button shiny block color="palegreen">m-2-o-3 s-4-o-2 x-4-o-1</hd-button></hd-col>
        <hd-col :cols="mtd2" :offset="offset3"><hd-button shiny block color="palegreen">m-2-o-3 s-4-o-2 x-4-o-1</hd-button></hd-col>
      </hd-row>
      <h5 class="row-title">嵌套</h5>
      <hd-row>
        <hd-col :cols="horz3">
          <div style="background-color: #2badce">- col-md-5
            <hd-row>
              <hd-col :cols="horz4"><div style="background-color: #aa1317">- col-md-6</div></hd-col>
              <hd-col :cols="horz4"><div style="background-color: #8c0095">- col-md-6</div></hd-col>
            </hd-row>
            <br>
          </div>
        </hd-col>
      </hd-row>
      <h5 class="row-title">平移</h5>
      <hd-row>
        <hd-col :cols="horz4" :order="order"><hd-button shiny block color="palegreen">col-md-6 col-md-push-3</hd-button></hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="md2" :order="order1"><hd-button shiny block color="darkorange">md-3 xs-6 md-ph-2 xs-ph-6</hd-button></hd-col>
        <hd-col :cols="md2" :order="order2"><hd-button shiny block color="azure">md-3 xs-6 md-ph-4 xs-pl-6</hd-button></hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="mtd2" :order="order3" style="background-color: #AA0000">m2-ph2 s4 x4</hd-col>
        <hd-col :cols="mtd2" :order="order4" style="background-color: #0000AA">m2-ph2 s4 x4-pl2</hd-col>
        <hd-col :cols="mtd2" :order="order5" style="background-color: #00AA00">m2-ph2 s4 x4-pl4</hd-col>
      </hd-row>
        </br>
        </br>
        </br>
        </br>
        </br>
        </br>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Col API</h5>
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
                            <td>cols</td>
                            <td>数组长度为1表示对台式电脑定义所占栅格数;长度为2表示对台式电脑,手机定义所占栅格数;长度为3表示对台式电脑,平板和手机定义所占栅格数</td>
                            <td>[Array]</td>
                            <td>1~12的整数</td>
                            <td>[12]</td>
                        </tr>
                        <tr>
                            <td>offset</td>
                            <td>
                                数组长度为1表示对台式电脑的向右偏置的位移量;长度为2表示对台式电脑,手机的向右偏置的位移量;长度为3表示台式电脑,平板和手机的向右偏置的位移量;偏置位移会填充旧位置,在被移动元素右侧的其它元素会被影响一块移动,不会出现覆盖
                            </td>
                            <td>[Array]</td>
                            <td>0~12的整数</td>
                            <td>[0]</td>
                        </tr>
                        <tr>
                            <td>order</td>
                            <td>
                                数组长度为1表示对台式电脑的水平位移量;长度为2表示对台式电脑,手机的水平位移量;长度为3表示对台式电脑,平板和手机的水平位移量;正数向右移,负数向左移;平移只作用于定义的元素,不影响相邻元素,如果位置冲突,会产生覆盖
                            </td>
                            <td>[Array]</td>
                            <td>-12~12的整数</td>
                            <td>[0]</td>
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
    components:{},
    data:function (){
      return{
        horz1:[1],
        horz2:[3],
        horz3:[5],
        horz4:[6],
        md1:[3,6],
        md2:[3,6],
        mtd1:[2,4,6],
        mtd2:[2,4,4],
        offset1:[3],
        offset2:[3,2],
        offset3:[3,2,1],
        order:[3],
        order1:[2,6],
        order2:[4,-6],
        order3:[1,0,0],
        order4:[3,0,-2],
        order5:[5,0,-4],
        tpAry:[1],
        tpAry1_:[10],
        tiao_:false,
        pi_:false,
        tiaopi_:false
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
      },
      leftclick(){
        this.$refs.aaa.hide();
      },
      rightclick(){
        this.$refs.aaa.show();
      }
    }
  }
</script>
