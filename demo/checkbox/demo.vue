<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12">
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-lightred">
            <span class="widget-caption">checkbox</span>
          </div>
          <div class="widget-body">
            <div id="horizontal-form">
              <hd-form type="bordered" :initvalue="ruleForm1" ref="ruleForm1">
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="用户工号">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="用户帐号">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="用户姓名">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="登陆密码">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item  label="出生年月">
                      <hd-date-picker></hd-date-picker>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  label="用户状态">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item  rule="sex"  label="性别">
                      <hd-radio-group v-model="ruleForm1.sex" >
                        <hd-radio name='form' initvalue="男">男</hd-radio>
                        <hd-radio name='form' initvalue="女">女</hd-radio>
                      </hd-radio-group>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  label="用户状态">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item   label="籍贯">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  label="联系电话">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="北方地区">
                      <hd-checkbox-group v-model="ruleForm1.north">
                        <hd-checkbox initvalue="北京" disabled selected-color="success">北京</hd-checkbox>
                        <hd-checkbox initvalue="山东" selected-color="blue">山东</hd-checkbox>
                        <hd-checkbox initvalue="吉林" selected-color="danger">吉林</hd-checkbox>
                        <hd-checkbox initvalue="陕西" selected-color="warning">陕西</hd-checkbox>
                      </hd-checkbox-group>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="南方地区">
                      <hd-checkbox-group inlined="false" text-color="primary" v-model="ruleForm1.sourth">
                        <hd-checkbox initvalue="湖南" type="inverted">湖南</hd-checkbox>
                        <hd-checkbox initvalue="重庆" selected-color="darkorange">重庆</hd-checkbox>
                        <hd-checkbox initvalue="广东" selected-color="maroon">广东</hd-checkbox>
                        <hd-checkbox initvalue="四川">四川</hd-checkbox>
                      </hd-checkbox-group>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="其他地区">
                      <hd-checkbox initvalue="新疆" text-color="pink" selected-color="blue" v-model="ruleForm1.other">新疆</hd-checkbox>
                      <hd-checkbox initvalue="西藏" text-color="warning" selected-color="danger" v-model="ruleForm1.other">西藏</hd-checkbox>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="北方地区">
                      <span>{{ ruleForm1.north }}</span>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="南方地区">
                      <span>{{ ruleForm1.sourth }}</span>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="其他地区">
                      <span>{{ ruleForm1.other }}</span>
                    </hd-form-item>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-offset-4 col-lg-8">
                    <hd-button  type="hdprimary" @click="northForm()">北方</hd-button>
                    <hd-button   @click="sourthForm()">南方</hd-button>
                    <hd-button   @click="otherForm()">其它</hd-button>
                  </div>
                </div>
              </hd-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="checkbox" class="col-lg-4 col-sm-4 col-xs-4">
        <div class="well with-header">
          <div class="header bordered-blue">Checkbox & text-color=""</div>
          <hd-checkbox initvalue="默认">默认</hd-checkbox>
          <hd-checkbox initvalue="默认" text-color="info">默认</hd-checkbox>
          <hd-checkbox initvalue="默认" text-color="danger">默认</hd-checkbox>
          <hd-checkbox checked initvalue="选中">选中</hd-checkbox>
        </div>
      </div>
    <div id="type" class="col-lg-4 col-sm-4 col-xs-4">
      <div class="well with-header">
        <div class="header bordered-success">type=""</div>
        <hd-checkbox checked initvalue="禁用"disabled>禁用</hd-checkbox>
        <hd-checkbox checked initvalue="反选" type="inverted">反选</hd-checkbox>
      </div>
    </div>
    <div id="text-color" class="col-lg-4 col-sm-4 col-xs-4">
      <div class="well with-header" style="height:160px">
        <div class="header bordered-red">selected-color=""</div>
        <div class="col-lg-12 col-sm-12 col-xs-12">
          <hd-checkbox checked selected-color="blue"  type="inverted" initvalue="blue">blue</hd-checkbox>
          <hd-checkbox checked selected-color="danger" type="inverted" initvalue="danger">danger</hd-checkbox>
          <hd-checkbox checked selected-color="warning" type="inverted" initvalue="warning">warning</hd-checkbox>
          <hd-checkbox checked selected-color="success" type="inverted" initvalue="success">success</hd-checkbox>
          <hd-checkbox checked selected-color="maroon" type="inverted" initvalue="maroon">maroon</hd-checkbox>
        </div>
        <div class="col-lg-12 col-sm-12 col-xs-12">
          <hd-checkbox checked selected-color="darkorange" initvalue="darkorange">darkorange</hd-checkbox>
          <hd-checkbox checked selected-color="inverse" initvalue="inverse">inverse</hd-checkbox>
          <hd-checkbox checked selected-color="primary" initvalue="primary">primary</hd-checkbox>
          <hd-checkbox checked selected-color="palegreen" initvalue="palegreen">palegreen</hd-checkbox>
          <hd-checkbox checked selected-color="orange" initvalue="orange">orange</hd-checkbox>
        </div>
        <div class="col-lg-12 col-sm-12 col-xs-12">
          <hd-checkbox checked selected-color="blueberry" initvalue="blueberry">blueberry</hd-checkbox>
          <hd-checkbox checked selected-color="silver" initvalue="silver">silver</hd-checkbox>
          <hd-checkbox checked selected-color="magenta" initvalue="magenta">magenta</hd-checkbox>
          <hd-checkbox checked selected-color="purple" initvalue="purple">purple</hd-checkbox>
        </div>
      </div>
    </div>
    <div  class="col-lg-4 col-sm-4 col-xs-4">
      <div class="well with-header">
        <div class="header bordered-warning">CheckboxGroup(默认横向)</div>
        <hd-checkbox-group>
          <hd-checkbox  selected-color="blue" initvalue="blue">blue</hd-checkbox>
          <hd-checkbox  selected-color="danger" initvalue="danger">danger</hd-checkbox>
          <hd-checkbox  selected-color="success" initvalue="success">success</hd-checkbox>
          <hd-checkbox  selected-color="maroon" initvalue="maroon">maroon</hd-checkbox>
          <hd-checkbox  selected-color="inverse" initvalue="inverse">inverse</hd-checkbox>
          <hd-checkbox  selected-color="primary" initvalue="primary">primary</hd-checkbox>
        </hd-checkbox-group>
      </div>
    </div>
    <div  class="col-lg-4 col-sm-4 col-xs-4">
      <div class="well with-header">
        <div class="header bordered-purple">CheckboxGroup(纵向)</div>
        <hd-checkbox-group inlined="false">
          <hd-checkbox  selected-color="blue" initvalue="blue">blue</hd-checkbox>
          <hd-checkbox  selected-color="danger" initvalue="danger">danger</hd-checkbox>
          <hd-checkbox  selected-color="success" initvalue="success">success</hd-checkbox>
          <hd-checkbox  selected-color="maroon" initvalue="maroon">maroon</hd-checkbox>
          <hd-checkbox  selected-color="inverse" initvalue="inverse">inverse</hd-checkbox>
          <hd-checkbox  selected-color="primary" initvalue="primary">primary</hd-checkbox>
        </hd-checkbox-group>
      </div>
    </div>
    <div  class="col-lg-4 col-sm-4 col-xs-4">
      <div class="well with-header">
        <div class="header bordered-warning">CheckboxGroup(text-color)</div>
        <hd-checkbox-group  text-color="orange">
          <hd-checkbox  selected-color="blue" initvalue="blue">blue</hd-checkbox>
          <hd-checkbox  selected-color="danger" initvalue="danger">danger</hd-checkbox>
          <hd-checkbox  selected-color="success" initvalue="success">success</hd-checkbox>
          <hd-checkbox  selected-color="maroon" initvalue="maroon">maroon</hd-checkbox>
          <hd-checkbox  selected-color="inverse" initvalue="inverse">inverse</hd-checkbox>
          <hd-checkbox  selected-color="primary" initvalue="primary">primary</hd-checkbox>
        </hd-checkbox-group>
      </div>
    </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>CheckBox API</h5>
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
                          <td width="10%">initvalue</td>
                          <td width="20%">checkbox的value</td>
                          <td width="10%">String</td>
                          <td width="50%">——</td>
                          <td width="10%">——</td>
                      </tr>
                      <tr>
                          <td width="10%">name</td>
                          <td width="20%">原生name属性</td>
                          <td width="10%">String</td>
                          <td width="50%">——</td>
                          <td width="10%">——</td>
                      </tr>
                      </tr>
                      <tr>
                          <td width="10%">type</td>
                          <td width="20%">类型</td>
                          <td width="10%">String</td>
                          <td width="50%">disabled（禁用）,inverted（反选）</td>
                          <td width="10%">——</td>
                      </tr>
                      <tr>
                          <td width="10%">checked</td>
                          <td width="20%">当前是否勾选</td>
                          <td width="10%">Boolean</td>
                          <td width="50%">true,false</td>
                          <td width="10%">false</td>
                      </tr>
                      <tr>
                          <td width="10%">selected-color</td>
                          <td width="20%">选中后显示的组件颜色</td>
                          <td width="10%">String</td>
                          <td width="50%">
                              success,danger,blue,warning,primary,silver,inverse,blueberry,palegreen,orange,darkorange,magenta,purple,maroon,black
                          </td>
                          <td width="10%">black</td>
                      </tr>
                      <tr>
                          <td width="10%">text-color</td>
                          <td width="20%">未选中时text的颜色</td>
                          <td width="10%">String</td>
                          <td width="50%">
                              black,success,danger,blue,warning,primary,silver,inverse,blueberry,palegreen,orange,darkorange,magenta,purple,maroon,
                          </td>
                          <td width="10%">black</td>
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
                          <td width="10%">内容插槽</td>
                          <td width="20%">checkbox显示的文本</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>CheckBoxGroup API</h5>
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
                          <td width="10%">text-color</td>
                          <td width="20%">(同一组)未选中时text的颜色</td>
                          <td width="10%">String</td>
                          <td width="50%">
                              black,success,danger,blue,warning,primary,silver,inverse,blueberry,palegreen,orange,darkorange,magenta,purple,maroon,
                          </td>
                          <td width="10%">black</td>
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
                          <td width="10%">change</td>
                          <td width="20%">当绑定值变化时触发的事件</td>
                          <td width="10%">event 事件对象</td>
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
    data:function() {
      return {
        ruleForm1: {
          north:['北京'],
          sourth:[],
          other:[]
        },
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
      }
    },
    methods:{
      northForm(){
        alert(this.ruleForm1.north)
      },
      sourthForm(){
        alert(this.ruleForm1.sourth)
      },
      otherForm(){
        alert(this.ruleForm1.other)
      }
    }
  }
</script>
