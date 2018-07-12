<template>
  <div class="">
    <div class="page-body">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Tree 示例</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <hd-row>
            <hd-col :cols="cols6">
              <div class="widget flat radius-bordered">
                <div class="widget-header bg-lightred">
                  <span class="widget-caption">Default TreeView With Folders</span>
                  <div class="widget-buttons">
                    <a href="#" data-toggle="collapse">
                      <i class="fa fa-minus"></i>
                    </a>
                    <a href="#" data-toggle="dispose">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div class="widget-body">
                  <hd-button @click="getCN">CheckedNodes</hd-button>
                  <hd-button @click="getSN">SelectedNodes</hd-button>
                  <br/><br/>

                  <hd-tree ref="hdTree"
                           :data="test_data1"
                           :multiple="true"
                           show-checkbox
                           :indent="20"
                           placeholder="这本是一棵树"
                           @selectChange="hdTreeSelect"
                           @checkChange="hdTreeCheck"
                           @parentNode="hdTreeParentNode"
                  ></hd-tree>

                </div>
              </div>
            </hd-col>
          </hd-row>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Tree API</h5>
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
                            <td width="10%">String,Number</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>当前组件的展示数据</td>
                            <td>Array</td>
                            <td>见详解</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>show-checkbox</td>
                            <td>是否显示多选框</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>(在show-checkbox为true的前提下)是否支持多选</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>check-strictly</td>
                            <td>(在multiple为true的前提下)是否严格的遵循父子不互相关联</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>accordion</td>
                            <td>是否每次只打开一个同级树节点(手风琴模式)</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>default-expand-all</td>
                            <td>是否默认展开所有节点</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>child-auto-disabled</td>
                            <td>(存在disabled为true节点的前提下)子节点是否自动添加disabled样式</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>indent</td>
                            <td>相邻级节点间的水平缩进</td>
                            <td>Number</td>
                            <td></td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>(在不传data时前提下)当前组件展示的文本</td>
                            <td>String</td>
                            <td></td>
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
                        data详解
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
                            <td width="10%">text</td>
                            <td width="20%">标题</td>
                            <td width="10%">String</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>expand</td>
                            <td>(在default-expand-all为false的前提下)控制是否展开直子节点</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>
                                是否勾选(如果当前为:单选模式,则默认勾选最后一个checked=true的节点;多选模式,则勾选当前节点后,子节点也会全部勾选;多选严格不相关联模式,则勾选所有checked=true的节点)
                            </td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selected</td>
                            <td>选中的子节点</td>
                            <td>Array</td>
                            <td></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>禁掉当前节点的响应</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disableCheckbox</td>
                            <td>禁掉多选框</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>子节点属性数组</td>
                            <td>Array</td>
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
                            <td>selectChange</td>
                            <td>点击树节点时触发</td>
                            <td>newVal；oldVal</td>
                        </tr>
                        <tr>
                            <td>checkChange</td>
                            <td>点击复选框时触发</td>
                            <td>newVal；oldVal</td>
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
        test_data1: [
          {text:'一级1',expand:true,disabled:true,selected:true,isleaf:false,icon:'fa-folder',children:[
            {text:'二级1-1',disableCheckbox:true,checked:true,isleaf:false,icon:'fa-folder',children:[
              {text:'三级1-1-1',disableCheckbox:false,isleaf:true}
            ]}
          ]},
          {text:'一级2',expand:true,disabled:true,selected:true,isleaf:false,icon:'fa-folder',children:[
            {text:'二级2-1',expand:false,isleaf:false,icon:'fa-folder',children:[
              {text:'三级2-1-1',checked:true,isleaf:true},
              {text:'三级2-1-2',checked:false,isleaf:true},
              {text:'三级2-1-3',checked:false,isleaf:true},
              {text:'三级2-1-4',checked:false,isleaf:true}
            ]},
            {text:'二级2-2',isleaf:true}
          ]},
          {text:'一级3',expand:true,selected:true,isleaf:false,icon:'fa-folder',children:[
            {text:'二级3-1',expand:true,isleaf:false,icon:'fa-folder',children:[
              {text:'三级3-1-1',checked:true,isleaf:true},
              {text:'三级3-1-2',checked:false,isleaf:true},
              {text:'三级3-1-3',checked:false,isleaf:true}
            ]},
            {text:'二级3-2',expand:true,checked:false,isleaf:false,icon:'fa-folder',children:[
              {text:'三级3-2-1',checked:true,isleaf:true},
              {text:'三级3-2-2',checked:false,isleaf:true},
              {text:'三级3-2-3',checked:false,isleaf:true}
            ]},
            {text:'二级3-3',expand:false,checked:false,isleaf:false,icon:'fa-folder',children:[
              {text:'三级3-3-1',checked:true,isleaf:true},
              {text:'三级3-3-2',checked:false,isleaf:true},
              {text:'三级3-3-3',checked:false,isleaf:true}
            ]}
          ]}
        ],
        test_data2:[{text:'一级1',expand:true,isleaf:false,icon:'fa-folder',children:[{text:'二级1'}]}]
      }
    },
    computed:{
      tpAry1(){
        return this.tpAry1_
      },
    },
//    mounted() {},
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
      hdTreeSelect(newVal,oldval){
//        console.log('----------------------------------------------------------------------------------------------------\n'+'before select'+'\nnew value :');
//        console.log(newVal);
//        console.log('old value :');
//        console.log(oldval);
//        console.log('after select');
      },
      hdTreeCheck(newVal,oldval){
//        console.log('----------------------------------------------------------------------------------------------------\n'+'before check'+'\nnew value :');
//        console.log(newVal);
//        console.log('old value :');
//        console.log(oldval);
//        console.log('after check');
      },
      hdTreeParentNode(parentnodedata){
          console.log('父节点数据：');
          console.log(parentnodedata);
      },
      getCN(){
//        console.log(this.$refs.hdTree.getCheckedNodes());
      },
      getSN(){
//        console.log(this.$refs.hdTree.getSelectedNodes());
      }
    }
  }
</script>
