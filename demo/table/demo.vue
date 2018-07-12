<template>
  <div>
    <hd-row>
      <hd-col :cols="col">
        <div class="well with-header  with-footer">
          <div class="header bg-blue">
            多级表头加scope slot
          </div>
          <hd-table :tableData="data1"  hover bordered titleAlign="center">
            <hd-table-column title="年龄" field="age">
              <hd-table-column title="年龄222" field="age">
                <hd-table-column title="男" field="age" align="right" edit></hd-table-column>
                <hd-table-column title="女" field="address"  width="180" align="right"></hd-table-column>
              </hd-table-column>
              <hd-table-column title="姓名" >
                <hd-table-column title="男" field="name" align="right"></hd-table-column>
                <hd-table-column title="女" field="address"   align="right"></hd-table-column>
              </hd-table-column>
              <hd-table-column
                      title="权限"
                      align="center">
                <template scope="scope">
                  <button type="text" size="small" >编辑</button>
                  <button  type="text" size="small" >查看</button>
                </template>
              </hd-table-column>
            </hd-table-column>
          </hd-table>
        </div>
      </hd-col>
      <hd-col :cols="col">
        <div class="well with-header  with-footer">
          <div class="header bg-darkorange">
            多选
          </div>
          <hd-table  :tableData="data1" hover bordered titleAlign="center">
            <hd-table-column  type="selection" width="60" align="center"></hd-table-column>
            <hd-table-column title="年龄" field="age" edit> </hd-table-column>
            <hd-table-column title="男" field="name" align="right" edit></hd-table-column>
            <hd-table-column title="nanan" field="address"   align="right"></hd-table-column>
            <hd-table-column title="年龄" field="age" ></hd-table-column>
          </hd-table>
        </div>
      </hd-col>
    </hd-row>
    <div class="horizontal-space"></div>
    <hd-row>
      <hd-col :cols="col">
        <div class="well with-header  with-footer">
          <div class="header bg-darkorange">
            单选
          </div>
          <hd-table  :tableData="data1" hover bordered titleAlign="center" highlight>
            <hd-table-column  type="index" width="60" align="center"></hd-table-column>
            <hd-table-column title="年龄" field="index" align="left" ></hd-table-column>
            <hd-table-column title="男" field="name" align="right" ></hd-table-column>
            <hd-table-column title="女" field="address"   align="right"></hd-table-column>
          </hd-table>
        </div>
      </hd-col>
      <hd-col :cols="col">
        <div class="well with-header with-footer">
          <div class="header bg-palegreen">
            无数据
          </div>
          <hd-table  hover bordered titleAlign="center">
            <hd-table-column title="年龄" field="age" > </hd-table-column>
            <hd-table-column title="男" field="name" align="right"></hd-table-column>
            <hd-table-column title="nanan" field="age"   align="right" sortable></hd-table-column>
            <hd-table-column title="年龄" field="age" ></hd-table-column>
          </hd-table>
        </div>
      </hd-col>
    </hd-row>
    <hd-row>
      <hd-col :cols="col">
            <div class="well with-header  with-footer">
                <div class="header bg-darkorange">
                    固定右列
                </div>
                <hd-table width="500" :striped="false" :tableData="data1" titleAlign="center">
                    <hd-table-column title="年龄" field="age" width="100"> </hd-table-column>
                    <hd-table-column title="年龄1" field="age" width="100"> </hd-table-column>
                    <hd-table-column title="年龄2" field="age" width="100"> </hd-table-column>
                    <hd-table-column title="男" field="name" align="right" width="200"></hd-table-column>
                    <hd-table-column title="女" field="address"   align="right" width="200"></hd-table-column>
                    <hd-table-column title="年龄4" field="age" fixed="right" width="100"></hd-table-column>
                </hd-table>
            </div>
        </hd-col>
      <hd-col :cols="col">
        <div class="well with-header with-footer">
          <div class="header bg-palegreen">
            固定左列
          </div>
          <hd-table width="500"  :striped="false"  titleAlign="center" :tableData="data1">
            <hd-table-column title="年龄" field="age"  fixed="left"  width="200"> </hd-table-column>
            <hd-table-column title="男" field="name" align="right"  width="120"></hd-table-column>
            <hd-table-column title="nanan" field="age"   align="right"  width="190"></hd-table-column>
            <hd-table-column title="年龄" field="age"  width="200" ></hd-table-column>
          </hd-table>
        </div>
      </hd-col>
    </hd-row>
    <hd-row>
        <hd-col :cols="col">
            <div class="well with-header  with-footer">
                <div class="header bg-blue">
                    可拖动的table
                </div>
                <hd-table :tableData="data1"  hover bordered titleAlign="center" :striped="false">
                    <hd-table-column title="年龄" field="age" width=500>
                        <hd-table-column title="年龄222" field="age">
                            <hd-table-column title="男" field="age" align="right" edit></hd-table-column>
                            <hd-table-column title="女" field="address"  width="180" align="right"></hd-table-column>
                        </hd-table-column>
                        <hd-table-column title="姓名" >
                            <hd-table-column title="男" field="name" align="right"></hd-table-column>
                            <hd-table-column title="女" field="address"  width="180" align="right"></hd-table-column>
                        </hd-table-column>
                    </hd-table-column>
                </hd-table>
                <div>默认顺序  &nbsp;  {{ olderList}}</div>
                <div>拖拽后顺序{{newList}}</div>
            </div>
        </hd-col>
      <hd-col :cols="col">
        <div class="well with-header  with-footer">
          <div class="header bg-blue">
            table新增行
          </div>
          <button @click="newdata">新增</button>
          <button @click="saveAll">保存全部</button>
          <hd-table :tableData="data2"  hover bordered titleAlign="center"  @tabledata_change="selection" >
            <hd-table-column title="男"  align="right" field="age" width="218">
              <template scope="scope">
                <hd-input v-show="scope.row.edit"  v-model="scope.row.age"></hd-input>
                <span v-show="!scope.row.edit">{{ scope.row.age }}</span>
              </template>
            </hd-table-column>
            <hd-table-column title="女" field="address"  align="right" width="218">
              <template scope="scope">
                <hd-input v-show="scope.row.edit"  v-model="scope.row.address"></hd-input>
                <span v-show="!scope.row.edit">{{ scope.row.address }}</span>
              </template>
            </hd-table-column>
            <hd-table-column title="男" field="name" align="left" width="218">
              <template scope="scope">
                <hd-input v-show="scope.row.edit"  v-model="scope.row.name"></hd-input>
                <span v-show="!scope.row.edit">{{ scope.row.name }}</span>
              </template>
            </hd-table-column>
            <hd-table-column
                    title="权限"
                    align="center"
                    width="130"
            >
              <template scope="scope" >
                <button type="text" size="small" @click="edit(scope.row)" v-show="!scope.row.edit">编辑</button>
                <button  type="text" size="small" v-show="scope.row.edit"  @click="save(scope.row)">保存</button>
                <button  type="text" size="small" v-show="scope.row.edit" @click="del(scope.row)">删除</button>
              </template>
            </hd-table-column>
          </hd-table>
        </div>
      </hd-col>
    </hd-row>
    <hd-row>
      <hd-col :cols="col">
        <div class="well with-header  with-footer">
          <div class="header bg-blue">
            table支持自定义组件及其验证
          </div>
          <hd-table class="edit-table" :tableData="data3"  hover bordered titleAlign="center" >
            <hd-table-column title="男"  align="right" field="age" width="218">
              <template scope="scope">
                  <hd-form  type="horizontal"  :formData="{age:scope.row.age}"  :rules="rule" v-show="scope.row.edit">
                      <hd-form-item  rule="age" showTooltip>
                          <hd-input v-show="scope.row.edit"  v-model="scope.row.age"></hd-input>
                      </hd-form-item>
                  </hd-form>

                <span v-show="!scope.row.edit">{{ scope.row.age }}</span>
              </template>
            </hd-table-column>
            <hd-table-column title="女" field="address"  align="right" width="218">
              <template scope="scope">
                <hd-datepicker type="date" format="yyyy-MM-dd"  v-show="scope.row.edit"  v-model="scope.row.address"></hd-datepicker>
                <span v-show="!scope.row.edit">{{ scope.row.address }}</span>
              </template>
            </hd-table-column>
            <hd-table-column title="男" field="name" align="left" width="218">
              <template scope="scope">
                <hd-select  placeholder="请选择"  v-show="scope.row.edit" class="hd-table-position-inherit" v-model="scope.row.name">
                  <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                </hd-select>
                <span v-show="!scope.row.edit">{{ scope.row.name }}</span>
              </template>
            </hd-table-column>
          </hd-table>
        </div>
      </hd-col>
      <hd-col :cols="col">
        <div class="well with-header  with-footer">
          <div class="header bg-blue">
            table支持右键菜单
          </div>
          <hd-table :tableData="data3"  hover bordered titleAlign="center"  @tabledata_change="selection"  @row-contextmenu="handelcontextmenu" @row-click.stop="handelclick">
            <hd-table-column title="男"  align="right" field="age" width="218">
              <template scope="scope">
                <hd-input v-show="scope.row.edit"  v-model="scope.row.age"></hd-input>
                <span v-show="!scope.row.edit">{{ scope.row.age }}</span>
              </template>
            </hd-table-column>
            <hd-table-column title="女" field="address"  align="right" width="218">
              <template scope="scope">
                <hd-datepicker type="date" format="yyyy-MM-dd"  v-show="scope.row.edit"  v-model="scope.row.address"></hd-datepicker>
                <span v-show="!scope.row.edit">{{ scope.row.address }}</span>
              </template>
            </hd-table-column>
            <hd-table-column title="男" field="name" align="left" width="218">
              <template scope="scope">
                <hd-select  placeholder="请选择"  v-show="scope.row.edit" class="hd-table-position-inherit" v-model="scope.row.name">
                  <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                </hd-select>
                <span v-show="!scope.row.edit">{{ scope.row.name }}</span>
              </template>
            </hd-table-column>
          </hd-table>
          <hd-context-menu ref="menu">
            <div class="hd-dropdown">
              <ul  class="hd-dropdown-menu dropdown-menu">
                <li  class="hd-dropdown-item" @click="addone"><a class="black" style="padding-right: 41px;">增加一行</a> </li>
                <li  class="hd-dropdown-item"  @click="delone"><a class="black" style="padding-right: 41px;">删除一行</a> </li>
              </ul>
            </div>
          </hd-context-menu>
        </div>
      </hd-col>
    </hd-row>
    <hd-row>
          <hd-col :cols="col">
              <div class="well with-header  with-footer">
                  <div class="header bg-darkorange">
                      table合并单元格
                  </div>
                  <hd-table  :tableData="data1" hover bordered titleAlign="center" highlight :striped="false" @row-click="teest">
                      <hd-table-column  type="index" width="60" align="center"></hd-table-column>
                      <hd-table-column title="年龄" field="index" align="left" :render="render"></hd-table-column>
                      <hd-table-column title="男" field="name" align="right" ></hd-table-column>
                      <hd-table-column title="女" field="address"   align="right" ></hd-table-column>
                  </hd-table>
              </div>
          </hd-col>
          </hd-row>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Table API</h5>
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
                        <td>tableData</td>
                        <td>表格数据对象</td>
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
                        <td>height</td>
                        <td>table对应的高度</td>
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
                        <td>drag</td>
                        <td>表头是否可拖动</td>
                        <td>boolean</td>
                        <td>true/false</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>rowClass</td>
                        <td>自定义行内样式</td>
                        <td>Function(row, index)</td>
                        <td>--</td>
                        <td>--</td>
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
                        <th>返回参数</th>
                    </tr>
                    </thead>
                    <tbody>
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
                        <td>row-contextmenu</td>
                        <td>当某一行被鼠标右击时会触发该事件</td>
                        <td>event，row，index</td>
                    </tr>
                    <tr>
                        <td>tabledata_change</td>
                        <td>当使用自定义组件获取组件的触发</td>
                        <td>tableData</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <h5 class="row-title"><i class="fa fa-tags blue"></i>TableColumn API</h5>
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
                        <td>对应列的类型：如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）</td>
                        <td>String</td>
                        <td>selection/index/default</td>
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
                        <td>string，Number</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>minWidth</td>
                        <td>对应列的最小宽度</td>
                        <td>string，Number</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>sortable</td>
                        <td>对应列是否可以排序</td>
                        <td>boolean</td>
                        <td>true/false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>格式化数据（常用于对数据字典的转换）</td>
                        <td>Function(row, column)</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>hidden</td>
                        <td>对应列是否隐藏</td>
                        <td>boolean</td>
                        <td>true/false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>fixed</td>
                        <td>对应列是否固定</td>
                        <td>boolean，string</td>
                        <td>left，right/true/false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showTooltip</td>
                        <td>对应列是否显示tooltip</td>
                        <td>boolean</td>
                        <td>true/false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>render</td>
                        <td>重新渲染Cell，例如合并单元格，控制单元格样式</td>
                        <td>Function(row, column，index)</td>
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
  import Sortable from 'src/utils/demoUtils/Sortable'
  export default {
    data () {
      return {
        col:[6],
        sortable: null,
        olderList: [],
        newList: [],
          rule:{
              age: [
                  {required: true, max: '500', message: '工作小结不允许为空！', trigger: 'blur，change'}
              ],
          },
        options:[
          {text:'选项1',value:'1'},
          {text:'五四广场',value:'2'},
          {text:'李村',value:'3'},
          {text:'李家庄',value:'4'},
          {text:'火车站',value:'5'},
          {text:'火车北站',value:'6'},
          {text:'鲁迅公园',value:'7'},
          {text:'选择2',value:'8'},
          {text:'鲁迅广场',value:'9'}
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳北京市朝阳北京市朝阳区芍药居',
            hide:true,
            index:1
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海市海市海市海444444444444淀区西二旗',
            hide:true,
            index:2
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新44444444444444区世纪大道',
            index:3,
            hide:true
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山市海44444444444444区深南大道',
            index:4,
            hide:true
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居',
            edit:false,
            index:1
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
            edit:false,
            index:2
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            index:3
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道',
            index:4
          }
        ],
        data2: [],
        data3: [{age: '', name:[], address: '',edit:true}],
        test_val:''
      }
    },
    created() {
      this.$nextTick(() => {
        this.getList()
    })
    },
    methods:{
      getPartial(val,val1){
         return  val.address.substr(0,val1);
      },
      getTotal(val){
        return val.address+ '<a style="cursor: pointer;"><b>收起</b></a>'
      },
      handelhide(val){
        val.hide=true
      },
      handelshow(val){
        val.hide=false
      },
        teest(event,val){
         console.log(event)
        console.log(val)
      },
      addone() {
        this.newdata()
      },
      handelcontextmenu(val,val1) {
        this.test_val=val1
        this.$refs.menu.open(val)
      },
      handelclick() {
        this.$refs.menu.close()
      },
      delone() {
        console.log(this.test_val)
      },
      selection(val){
        console.log(val)
        this.data2=val
      },
      edit(val){
        val.edit=true
      },
      save(val){
        console.log(val)
        val.edit=false
      },
      select(val){
        this.data2=val
      },
      saveAll(){
        alert('保存全部')
        this.data2.forEach((val)=>{
          val.edit=false
      })
        console.log(this.data2)
      },
      cancel(val){
        alert('取消操作')
        val.edit=false
      },
      del(val){
        console.log(val)
        this.data2.splice(this.data2.indexOf(val),1)
      },
        render (row,column,index){//合并单元格
          var  obj={}
            if (index === 1) {
                obj.rowSpan =2;
            }
           return obj;

        },
      newdata(){
        this.data2.forEach((val)=>{
          if(val.age===''){
          val.edit=true
        }else{
          val.edit=false
        }
      })
        this.data2.push({age: '', name:'', address: '',edit:true})

      },
      getList() {
        this.olderList = this.data1.map(v => v.index);
        this.newList = this.olderList.slice();
        this.$nextTick(() => {
          this.setSort()
      })

      },
      setSort() {
        const el = document.querySelectorAll('.table-body > table > tbody')[6];//  此处的6代表第7个table
        this.sortable = Sortable.create(el, {
                  onEnd: evt => {
                  const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
        this.newList.splice(evt.newIndex, 0, tempIndex);
      }
      });
      }
    }
  }
</script>
