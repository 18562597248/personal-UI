<template>
  <div>
    <hd-tree-table  :TreeTableData="data" hover bordered titleAlign="center" @selected="cc" >

      <hd-tree-table-column title="年龄" field="name" type="start" width="180" ></hd-tree-table-column>
      <hd-tree-table-column title="男" field="text" align="right"></hd-tree-table-column>
      <hd-tree-table-column title="nanan" field="id"   align="right"></hd-tree-table-column>
      <hd-tree-table-column title="操作" align="center" width="200" >
        <template scope="scope">
          <div class="tree-actions">
            <hd-addhdbutton @click="add(scope.row)"></hd-addhdbutton>
            <hd-deletebutton @click="del(scope.row)"></hd-deletebutton>
            <hd-editbutton @click="edit(scope.row)"></hd-editbutton>
          </div>
        </template>
      </hd-tree-table-column>
    </hd-tree-table>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>TreeTable API</h5>
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
                          <td>TreeTableData</td>
                          <td>树形表格数据对象</td>
                          <td>object</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>striped</td>
                          <td>是否为斑马纹</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>bordered</td>
                          <td>是否带有纵向边框</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>show-header</td>
                          <td>是否显示表头</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>true</td>
                      </tr>
                      <tr>
                          <td>hover</td>
                          <td>鼠标滑过是否加底色</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>width</td>
                          <td>table对应的宽度</td>
                          <td>string</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>titleAlign</td>
                          <td>标题的对齐方式</td>
                          <td>String</td>
                          <td>left/right/center</td>
                          <td>left</td>
                      </tr>
                      <tr>
                          <td>defaultExpandAll</td>
                          <td>是否展开所有树</td>
                          <td>boolean</td>
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
                          <th>说明</th>
                          <th>参数</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>selected</td>
                          <td>第一列文件夹被点击时会触发该事件</td>
                          <td>row</td>
                      </tr>
                      <tr>
                          <td>row-click</td>
                          <td>当某一行被点击时会触发该事件</td>
                          <td>event，row，index</td>
                      </tr>
                      <tr>
                          <td>row-dblclick</td>
                          <td>当某一行被双击时会触发该事件</td>
                          <td>event，row，index</td>
                      </tr>
                      <tr>
                          <td>select</td>
                          <td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
                          <td>selection, row</td>
                      </tr>
                      <tr>
                          <td>select-all</td>
                          <td>当用户手动勾选全选 Checkbox 时触发的事件</td>
                          <td>selection</td>
                      </tr>
                      <tr>
                          <td>selection-change</td>
                          <td>当选择项发生变化时会触发该事件</td>
                          <td>selection，checkIndex</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>TreeTableColumn API</h5>
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
                          <td>type</td>
                          <td>对应列的类型：start代表第一列展示文件夹;selection代表对应列显示checkbox</td>
                          <td>String</td>
                          <td>start/default/selection</td>
                          <td>default</td>
                      </tr>
                      <tr>
                          <td>title</td>
                          <td>thead每一列的标题</td>
                          <td>String</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>filed</td>
                          <td>列对应的字段名</td>
                          <td>String</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>align</td>
                          <td>列内data的对齐方式</td>
                          <td>String</td>
                          <td>left/right/center</td>
                          <td>left</td>
                      </tr>
                      <tr>
                          <td>width</td>
                          <td>对应列的宽度</td>
                          <td>string</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    data:function(){
      return {
        data:[
          {"id":"1","text":"name2233","name":"部门"},
          {"id":"2","name":"测试"}
        ],
        ff:{}
      }
    },
    methods:{
      cc(w){
        this.ff=w
        let a=[
          {"id":"121","text":"name","name":"输煤班",prentid:'1'},
          {"id":"122","text":"name","name":"输煤班",prentid:'1'}
        ]
        this.$set(w,'children',a)
      },
      add(e){
        let a= {"id":"121","text":"name","name":"输煤33班",prentid:'1'}
        e.children.push(a)
      },
      del(e){
        e._parent.children.splice(e._parent.children.indexOf(e),1)
      },
      edit(e){
       alert(e+'要执行编辑')
      }
    }
  }
</script>
<!--<style>
  .fa {
    font-size: medium;
    padding-right: 10px;
    cursor:pointer
  }
</style>-->
