<template>
  <div class="">
    <toolbar></toolbar>
    <div class="page-body">
      <hd-row>
        <hd-col :cols="cols12">
          <hd-transfer
            :left-data="data1"
            :right-data="data2"
            :columns="column1"
            :titles="['源数据集','目标数据集']"
            :operations="true"
            placeholder="源/目标数据·空"
            :tableHeight = 260
            @change="achange"
            @left-table-scroll-bottom="ltsb"
            @left-table-scroll-top="ltst"
            @right-table-scroll-bottom="rtsb"
            @right-table-scroll-top="rtst"
          >
            <hd-icon slot="leftTitle" type="fa fa-heartbeat red animated infinite rubberBand"></hd-icon>
            <hd-icon slot="rightTitle" type="fa fa-crosshairs green animated infinite shake"></hd-icon>
            <hd-button slot="leftFooter">增加</hd-button>
            <hd-button slot="leftFooter">删除</hd-button>
            <hd-button slot="leftFooter">修改</hd-button>
            <hd-button slot="leftFooter">查询</hd-button>
            <hd-button slot="leftFooter">刷新</hd-button>
            <hd-button slot="rightFooter">增加</hd-button>
            <hd-button slot="rightFooter">删除</hd-button>
            <hd-button slot="rightFooter">修改</hd-button>
            <hd-button slot="rightFooter">查询</hd-button>
            <hd-button slot="rightFooter">刷新</hd-button>
          </hd-transfer>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Transfer API</h5>
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
                            <td width="10%">leftData</td>
                            <td>渲染在左侧的数据集合</td>
                            <td>Array</td>
                            <td>-</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>rightData</td>
                            <td>渲染在右侧的数据集合</td>
                            <td>Array</td>
                            <td>-</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>columns</td>
                            <td>渲染在两侧的列名</td>
                            <td>Array</td>
                            <td>-</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>operations</td>
                            <td>操作按钮标题，顺序从上至下</td>
                            <td>Array</td>
                            <td>-</td>
                            <td>['','']</td>
                        </tr>
                        <tr>
                            <td>titles</td>
                            <td>标题集合，顺序从左至右</td>
                            <td>Array</td>
                            <td>-</td>
                            <td>['','']</td>
                        </tr>
                        <tr>
                            <td>placehodler</td>
                            <td>数据为空时,提示的文本</td>
                            <td>String</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tableHeight</td>
                            <td>两个table的高度(已自动添加单位px)</td>
                            <td>Number</td>
                            <td>-</td>
                            <td>260</td>
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
                            <td width="10%">leftTitle</td>
                            <td width="20%">hdTransfer左侧顶部标题区域的插槽</td>
                        </tr>
                        <tr>
                            <td>rightTitle</td>
                            <td>hdTransfer右侧顶部标题区域的插槽</td>
                        </tr>
                        <tr>
                            <td>leftFooter</td>
                            <td>hdTransfer左侧底部自定义操作区域的插槽</td>
                        </tr>
                        <tr>
                            <td>rightFooter</td>
                            <td>hdTransfer右侧底部自定义操作区域的插槽</td>
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
                            <td>change</td>
                            <td>当前组件选项在两栏之间转移时触发</td>
                            <td></td>
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
        test:false,
        test_title:false,
        test_body:false,
        test_icon:false,
        test_footer:false,
        test_empty:false,
        test2:false,
        column1:[
          {type:'selection',width:'35',align:'center'},
          {type:'index',width:'40',align:'center'},
          {title:'年龄',field:'age',width:'60'},
          {title:'男',field:'name',align:'right',width:'80'},
          {title:'nanan',field:'address',align:'right',width:'160'}
        ],
        data1: [
          {name: '王小明',age: 18,address: '北京市朝阳区芍药居'},
          {name: '张小刚',age: 25,address: '北京市海淀区西二旗'},
          {name: '李小红',age: 30,address: '上海市浦东新区世纪大道'},
          {name: '周小伟',age: 26,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '赵',age: 24,address: '青岛市市南山区宁夏路'},
          {name: '钱',age: 22,address: '深圳市南山区深南大道'},
          {name: '孙',age: 19,address: '深圳市南山区深南大道'},
          {name: '吴',age: 23,address: '深圳市南山区深南大道'},
          {name: '郑',age: 21,address: '深圳市南山区深南大道'}
        ],
        data2: [
          {name: '王五',age: 5,address: '深圳市南山区深南大道'},
          {name: '张三',age: 7,address: '北京市海淀区西二旗'},
          {name: '李四',age: 9,address: '北京市朝阳区芍药居'},
          {name: '周董',age: 15,address: '上海市浦东新区世纪大道'},
          {name: '二狗',age: 3,address: '上海市浦东新区世纪大道'}
        ]
      }
    },
    methods: {
      cancel(){
        this.test=!this.test;
        this.test2=false;
      },
      makesure(){
        this.test2=!this.test2;
      },
      warn_ensure(event){
        console.log(this.$refs.hdwdia.text);
      },
      err_ensure(){
        console.log(this.$refs.hdedia.text);
      },
      achange(){
        console.log('change event');
      },
      ltsb(event){
        console.log('左边table，我听到你到底了')
        console.log(event)
      },
      ltst(event){
        console.log('左边table，我听到你到顶了')
        console.log(event)
      },
      rtsb(event){
        console.log('右边table，我听到你到底了')
        console.log(event)
      },
      rtst(event){
        console.log('右边table，我听到你到顶了')
        console.log(event)
      },
    }
  }
</script>
