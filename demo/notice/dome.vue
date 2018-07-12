<template>
  <div class="">
    <toolbar>
    </toolbar>
    <div class="page-body">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Notice 示例</h5>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-size="sm" :show="true">
            <p slot="title">left-top</p>
            <div slot="body" class="buttons-preview">
              <span> mode-up &nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</span>
              <hd-button type="info" @click="infoNotice">info</hd-button>
              <hd-button type="success" @click="successNotice">success</hd-button>
              <hd-button type="warning" @click="warningNotice">warning</hd-button>
              <hd-button type="danger" @click="errorNotice">error</hd-button>
              <br>
              <span> mode-down :&nbsp</span>
              <hd-button type="info" @click="infoNotice2">info</hd-button>
              <hd-button type="success" @click="successNotice2">success</hd-button>
              <hd-button type="warning" @click="warningNotice2">warning</hd-button>
              <hd-button type="danger" @click="errorNotice2">error</hd-button>
            </div>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-size="sm" :show="true">
            <p slot="title">right-top</p>
            <div slot="body" class="buttons-preview">
              <hd-button color="sky" @click="skyNotice">sky</hd-button>
              <hd-button color="palegreen" @click="palegreenNotice">palegreen</hd-button>
              <hd-button color="yellow" @click="yellowNotice">yellow</hd-button>
              <hd-button color="purple" @click="purpleNotice">purple</hd-button>
              <span> <- mode-up</span>
              <br>
              <hd-button color="sky" @click="skyNotice2">sky</hd-button>
              <hd-button color="palegreen" @click="palegreenNotice2">palegreen</hd-button>
              <hd-button color="yellow" @click="yellowNotice2">yellow</hd-button>
              <hd-button color="purple" @click="purpleNotice2">purple</hd-button>
              <span> <- mode-down</span>
            </div>
          </hd-widget>
        </hd-col>
      </hd-row>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <hd-row>
        <hd-col :cols="cols6">
          <hd-widget header-size="sm" :show="true">
            <p slot="title">left-top</p>
            <div slot="body" class="buttons-preview">
              <span> mode-up &nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</span>
              <hd-button bg-color="gray" @click="icon1">icon</hd-button>
              <hd-button bg-color="gold" @click="icon2">icon</hd-button>
              <hd-button bg-color="orange" @click="icon3">icon</hd-button>
              <hd-button bg-color="darkpink" @click="icon4">icon</hd-button>
              <br>
              <span> mode-down :&nbsp</span>
              <hd-button bg-color="gray" @click="icon5">icon</hd-button>
              <hd-button bg-color="gold" @click="icon6">icon</hd-button>
              <hd-button bg-color="orange" @click="icon7">icon</hd-button>
              <hd-button bg-color="darkpink" @click="icon8">icon</hd-button>
            </div>
          </hd-widget>
        </hd-col>
        <hd-col :cols="cols6">
          <hd-widget header-size="sm" :show="true">
            <p slot="title">right-bottom</p>
            <div slot="body" class="buttons-preview">
              <hd-button font-color="blueberry" @click="message1">message</hd-button>
              <hd-button font-color="info" @click="message2">message</hd-button>
              <hd-button font-color="danger" @click="message3">message</hd-button>
              <span> <- mode-up</span>
              <br>
              <hd-button @click="message4">message</hd-button>
              <hd-button font-color="purple" @click="message5">message</hd-button>
              <hd-button font-color="info" @click="message6">message</hd-button>
              <hd-button font-color="success" @click="message7">message</hd-button>
              <hd-button font-color="danger" @click="message8">message</hd-button>
              <span> <- mode-down</span>
            </div>
          </hd-widget>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Notice API</h5>
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
                        <td width="50%">--</td>
                        <td width="10%">--</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>当前组件几种固定样式</td>
                        <td>[String]</td>
                        <td>default、info、success、warning、error</td>
                        <td>default</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>当前组件颜色(背景色)</td>
                        <td>[String]</td>
                        <td>
                            default(#030303)、white、snow、whitesmoke、seashell、ivory、platinum、lightgray、gray、darkgray、silver、sonic-silver、storm-cloud、lightcarbon、carbon、slate-gray、darkcarbon、blue、info、sky、primary、blueberry、palegreen、success、green、lightyellow、yellow、warning、gold、orange、lightred、darkorange、red、danger、pink、darkpink、magenta、purple、maroon(说明:可以覆盖type固定样式的颜色)
                        </td>
                        <td>default</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>当前组件图标</td>
                        <td>[String]</td>
                        <td>--(说明:可以覆盖type固定样式的icon样式)</td>
                        <td>"fa-home"</td>
                    </tr>
                    <tr>
                        <td>message</td>
                        <td>当前组件提示信息内容</td>
                        <td>[String]</td>
                        <td>--(说明:支持直接传入字符串或者字符串形式的原生html元素)</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>当前组件显示时间</td>
                        <td>[Number]</td>
                        <td>--(说明:单位毫秒;为0时,则组件不会自动关闭)</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td>当前组件显示的位置</td>
                        <td>[String]</td>
                        <td>rightTop,rightBottom,leftBottom,leftTop</td>
                        <td>rightTop</td>
                    </tr>
                    <tr>
                        <td>mode</td>
                        <td>当前组件new-notice相对于old-notice的位置</td>
                        <td>[String]</td>
                        <td>up(new-notice位于old-notice上方),down(new-notice位于old-notice下方)</td>
                        <td>up</td>
                    </tr>
                    <tr>
                        <td>offset</td>
                        <td>当前组件纵向偏移量</td>
                        <td>[Number]</td>
                        <td>--(由mode决定偏移量出现在上方还是下方)</td>
                        <td>0(下方出现偏移)</td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>关闭时的回调函数</td>
                        <td>[function]</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>点击 Notification 时的回调函数</td>
                        <td>[function]</td>
                        <td>--</td>
                        <td>--</td>
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
        message:"<span>标签当然可以解析</span>"
//        message:"谁说不能解析字符串"
//        message:"This is a Top-Left Notification."
      }
    },
    methods: {
      infoNotice(){
        this.$notice({
          type:'info',
          message:"you have a new message",
          duration:3000,
          position:'leftTop',
          mode:'up'
        });
      },
      successNotice(){
        this.$notice({
          type:'success',
          message:"<span>successfully execute</span>",
          duration:2500,
          position:'leftTop',
          mode:'up'
        });
      },
      warningNotice(){
        this.$notice({
          type:'warning',
          message:"<b>alive operation</b>",
          duration:3500,
          position:'leftTop',
          mode:'up'
        });
      },
      errorNotice(){
        this.$notice({
          type:'error',
          message:'you got an error',
          duration:2000,
          position:'leftTop',
          offset:30,
          mode:'up',
          onClose:function(){
            console.log('用户已确认了error,信息传达成功');
          },
          onClick:function(){
            console.log('用户调皮的点了组件一下');
          }
        });
      },
      infoNotice2(){
        this.$notice({
          type:'info',
          message:"you have a new message",
          duration:3000,
          position:'leftTop',
          mode:'down'
        });
      },
      successNotice2(){
        this.$notice({
          type:'success',
          message:"<span>successfully execute</span>",
          duration:2500,
          position:'leftTop',
          mode:'down'
        });
      },
      warningNotice2(){
        this.$notice({
          type:'warning',
          message:"<b>alive operation</b>",
          duration:3500,
          position:'leftTop',
          mode:'down'
        });
      },
      errorNotice2(){
        this.$notice({
          type:'error',
          message:'you got an error',
          duration:2000,
          position:'leftTop',
          offset:30,
          mode:'down',
          onClose:function(){
            console.log('用户已确认了error,信息传达成功');
          }
        });
      },
      skyNotice(){
        this.$notice({
          color:'sky',
          message:'color of sky',
          duration:2000,
          position:'rightTop',
          mode:'up'
        });
      },
      palegreenNotice(){
        this.$notice({
          color:'palegreen',
          message:'color of palegreen',
          duration:2000,
          position:'rightTop',
          mode:'up'
        });
      },
      yellowNotice(){
        this.$notice({
          color:'yellow',
          message:'color of yellow',
          duration:2000,
          position:'rightTop',
          mode:'up'
        });
      },
      purpleNotice(){
        this.$notice({
          color:'purple',
          message:'color of purple',
          duration:2000,
          position:'rightTop',
          mode:'up'
        });
      },
      skyNotice2(){
        this.$notice({
          color:'sky',
          message:'color of sky',
          duration:2000,
          position:'rightTop',
          mode:'down'
        });
      },
      palegreenNotice2(){
        this.$notice({
          color:'palegreen',
          message:'color of palegreen',
          duration:2000,
          position:'rightTop',
          mode:'down'
        });
      },
      yellowNotice2(){
        this.$notice({
          color:'yellow',
          message:'color of yellow',
          duration:2000,
          position:'rightTop',
          mode:'down'
        });
      },
      purpleNotice2(){
        this.$notice({
          color:'purple',
          message:'color of purple',
          duration:2000,
          position:'rightTop',
          mode:'down'
        });
      },
      icon1(){
        this.$notice({
          icon:'fa fa-connectdevelop',
          color:'gray',
          message:'fa-connectdevelop',
          position:'leftBottom',
          mode:'up'
        });
      },
      icon2(){
        this.$notice({
          icon:'fa fa-heartbeat',
          color:'gold',
          message:'fa-heartbeat',
          position:'leftBottom',
          mode:'up'
        });
      },
      icon3(){
        this.$notice({
          icon:'',
          color:'orange',
          message:'null',
          position:'leftBottom',
          mode:'up'
        });
      },
      icon4(){
        this.$notice({
          icon:'default',
          color:'darkpink',
          message:'default',
          position:'leftBottom',
          mode:'up'
        });
      },
      icon5(){
        this.$notice({
          icon:'fa fa-at',
          color:'gray',
          message:'不会自动关闭',
          position:'leftBottom',
          mode:'down'
        });
      },
      icon6(){
        this.$notice({
          icon:'fa fa-info-circle',
          color:'',
          message:'null',
          position:'leftBottom',
          mode:'down'
        });
      },
      icon7(){
        this.$notice({
          icon:'fa fa-bug',
          message:'undefind',
          position:'leftBottom',
          mode:'down'
        });
      },
      icon8(){
        this.$notice({
          icon:'fa fa-windows',
          color:'default',
          message:'default',
          position:'leftBottom',
          mode:'down'
        });
      },
      message1(){
        this.$notice({
          icon:'fa fa-gift',
          color:'blueberry',
          message:'<img width="24px" height="24px" src="/static/img/avatars/divyia.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;<span>You got a gift from divyia.</span>',
          position:'rightBottom',
          mode:'up'
        });
      },
      message2(){
        this.$notice({
          icon:'fa fa-comment-o',
          color:'info',
          message:'<img width="24px" height="24px" src="/static/img/avatars/adam-jansen.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;You got a new message',
          position:'rightBottom',
          mode:'up'
        });
      },
      message3(){
        this.$notice({
          icon:'fa fa-exclamation',
          color:'danger',
          message:'<img width="24px" height="24px" src="/static/img/avatars/mystery-man.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;an anonymous letter',
          opacity:1,
          position:'rightBottom',
          mode:'up'
        });
      },
      message4(){
        this.$notice({
          icon:'fa fa-twitter',
          color:'default',
          message:'message from twitter&nbsp;&nbsp;<img width="24px" height="24px" src="/static/img/avatars/Jack-Dorsey.jpg"/>',
          position:'rightBottom',
          mode:'down'
        });
      },
      message5(){
        this.$notice({
          color:'baidu',
          icon:'fa fa-paw',
          message:'message from 百度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="24px" height="24px" src="/static/img/avatars/李彦宏.jpg"/>',
          position:'rightBottom',
          mode:'down'
        });
      },
      message6(){
        this.$notice({
          icon:'fa fa-qq',
          color:'info',
          message:'message from qq&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="24px" height="24px" src="/static/img/avatars/马化腾.jpg"/>',
          position:'rightBottom',
          mode:'down'
        });
      },
      message7(){
        this.$notice({
          icon:'fa fa-weixin',
          color:'success',
          message:'message from 微信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="24px" height="24px" src="/static/img/avatars/马化腾.jpg"/>',
          position:'rightBottom',
          mode:'down'
        });
      },
      message8(){
        this.$notice({
          icon:'fa fa-weibo',
          color:'danger',
          message:'message from 新浪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="24px" height="24px" src="/static/img/avatars/曹国伟.jpg"/>',
          position:'rightBottom',
          mode:'down'
        });
      }
    }
  }
</script>
<style>
  .toast-baidu{
    background-color: #2319DC !important;
  }
</style>
