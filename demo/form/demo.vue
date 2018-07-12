<template>
  <div>
    <hd-row>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">Default Form</p>
          <p slot="body">
            <hd-form type="default" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
            <hd-row>
              <hd-col :cols="col">
                <hd-form-item   rule="undefined" label="Email">
                  <hd-input v-model="ruleForm1.undefined"></hd-input>
                </hd-form-item>
              </hd-col>
              <hd-col :cols="col">
                <hd-form-item   rule="undefined" label="Email">
                  <hd-input v-model="ruleForm1.undefined"></hd-input>
                </hd-form-item>
              </hd-col>
            </hd-row>
            <hd-form-item   rule="undefined" label="Email">
              <hd-input v-model="ruleForm1.undefined"></hd-input>
            </hd-form-item>
            <hd-form-item label="Email" >
              <input type="email" class="form-control" placeholder="Email">
            </hd-form-item>
            <hd-form-item label="Email"  rule="region" >
              <hd-input v-model="ruleForm1.region"></hd-input>
            </hd-form-item>
          </hd-form>
          </p>
        </hd-widget>
      </hd-col>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">Bordered Form（各种验证规则）</p>
          <p slot="body">
            <hd-form type="bordered"  :rules="rules1" :formData="ruleForm1" ref="ruleForm1">
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="loginid" label="用户工号">
                    <hd-input v-model="ruleForm1.loginid" ></hd-input>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="staffid" label="用户帐号">
                    <hd-input v-model="ruleForm1.staffid"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="staffname" label="用户姓名">
                    <hd-input v-model="ruleForm1.staffname"></hd-input>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="password" label="登录密码">
                    <hd-input v-model="ruleForm1.password"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="birthdate" label="出生年月">
                    <hd-date-picker v-model="ruleForm1.birthdate"></hd-date-picker>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col" >
                  <hd-form-item label="用户状态">
                    <hd-input v-model="ruleForm1.state"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="sex"  label="性别">
                    <hd-radio-group v-model="ruleForm1.sex" >
                      <hd-radio name='form' initvalue="男">男</hd-radio>
                      <hd-radio name='form' initvalue="女">女</hd-radio>
                    </hd-radio-group>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="home" label="籍贯">
                    <hd-checkbox-group v-model="ruleForm1.home">
                      <hd-checkbox name='form' initvalue="吃饭">吃饭</hd-checkbox>
                      <hd-checkbox name='form' initvalue="睡觉">睡觉</hd-checkbox>
                      <hd-checkbox name='form' initvalue="跑步">跑步</hd-checkbox>
                      <hd-checkbox name='form' initvalue="看电影">看电影</hd-checkbox>
                    </hd-checkbox-group>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item label="联系电话">
                    <hd-input v-model="ruleForm1.phone"></hd-input>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item label="邮箱">
                    <hd-input v-model="ruleForm1.email"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col_only">
                  <hd-form-item labelCol=1 rule="bz" label="备注">
                    <hd-input v-model="ruleForm1.bz"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <div class="col-lg-offset-9 col-lg-3">
                  <hd-button  type="hdprimary" @click="submitForm()">提交</hd-button>
                  <hd-button   @click="resetForm()">重置</hd-button>
                </div>
              </hd-row>
            </hd-form>
          </p>
        </hd-widget>
      </hd-col>
    </hd-row>
    <hd-row>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">Horizontal Form</p>
          <p slot="body">
            <hd-form type="horizontal" role="form">
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注" >
                    <hd-input v-model="ruleForm.name"></hd-input>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-input v-model="ruleForm.name"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-input v-model="ruleForm.name"></hd-input></hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-input v-model="ruleForm.name"></hd-input></hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-input v-model="ruleForm.name"></hd-input></hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-input v-model="ruleForm.name"></hd-input></hd-form-item>
                </hd-col>
              </hd-row>
              <hd-row>
                <hd-col :cols="col_only">
                  <hd-form-item  labelCol=1 rule="name" label="备注">
                    <hd-input v-model="ruleForm.name"></hd-input>
                  </hd-form-item>
                </hd-col>
              </hd-row>
            </hd-form>
          </p>
        </hd-widget>
      </hd-col>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">inline Form</p>
          <p slot="body">
            <hd-form type="inline">
              <hd-form-item label="Email：" >
                <input type="email" class="form-control"  placeholder="账号">
              </hd-form-item>
              <hd-form-item label="Email：" >
                <input type="email" class="form-control"  placeholder="密码">
              </hd-form-item>
              <hd-checkbox  text-color="pink" selected-color="blue" >记住密码</hd-checkbox>
              <hd-button  type="hdprimary">提交</hd-button>
            </hd-form>
          </p>
        </hd-widget>
      </hd-col>
    </hd-row>
    <hd-row>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">自定义验证规则</p>
          <p slot="body">
            <hd-form type="horizontal" :formData="ruleForm2" :rules="rules2" ref="ruleForm2" >
              <hd-form-item  rule="pass" label="密码">
                <hd-input type="password" v-model="ruleForm2.pass" ></hd-input>
              </hd-form-item>
              <hd-form-item  rule="checkPass" label="确认密码">
                <hd-input type="password" v-model="ruleForm2.checkPass" ></hd-input>
              </hd-form-item>
              <hd-form-item rule="age" label="年龄">
                <hd-input v-model.number="ruleForm2.age"></hd-input>
              </hd-form-item>
              <hd-row>
                <div class="col-lg-offset-10 col-lg-2">
                  <hd-button type="primary" @click="submitForm1('ruleForm2')">提交</hd-button>
                  <hd-button @click="resetForm1('ruleForm2')">重置</hd-button>
                </div>
              </hd-row>
            </hd-form>
          </p>
        </hd-widget>
      </hd-col>
    </hd-row>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Form API</h5>
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
                          <td>表格布局方式（lable与表单控件的排列方式）</td>
                          <td>string</td>
                          <td>inline/horizontal/bordered/default</td>
                          <td>default</td>
                      </tr>
                      <tr>
                          <td>formData</td>
                          <td>表单数据对象</td>
                          <td>object</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>rules</td>
                          <td>表单验证规则 （见详解）</td>
                          <td>object</td>
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
                      slot
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
                          <td>默认插槽</td>
                          <td>放置表单域组件</td>
                          <td>string</td>
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
                      方法
                  </div>
                  <table class="table table-bordered table-hover">
                      <thead>
                      <tr>
                          <th>方法名</th>
                          <th>说明</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>validate</td>
                          <td>验证整个表单的方法</td>
                      <tr>
                          <td>resetFields</td>
                          <td>重置表单</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Form-item API</h5>
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
                          <td>label</td>
                          <td>字段名称</td>
                          <td>string</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>label-align</td>
                          <td>文字对齐方式</td>
                          <td>string</td>
                          <td>right,left,justify</td>
                          <td>justify</td>
                      </tr>
                      <tr>
                          <td>label-col</td>
                          <td>label所占栅格数(当类型为Array时,表示对台式电脑,平板和手机分别定义所占栅格数)</td>
                          <td>string，Number,Array</td>
                          <td>--</td>
                          <td>2</td>
                      </tr>
                      <tr>
                          <td>rule</td>
                          <td>需要验证的表单项</td>
                          <td>string</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>separator</td>
                          <td>分隔符</td>
                          <td>string</td>
                          <td>':'（英文）,'：'（中文）</td>
                          <td>'：'（中文）</td>
                      </tr>
                      <tr>
                          <td>showTooltip</td>
                          <td>仅在edittable中使用验证时，是否显示验证的错误信息</td>
                          <td>Boolean</td>
                          <td>false/true</td>
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
                      rules详解
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
                          <td>required</td>
                          <td>是否验证</td>
                          <td>Boolean</td>
                          <td>false/true</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>message</td>
                          <td>提示的验证信息</td>
                          <td>String</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>trigger</td>
                          <td>触发哪种验证行为</td>
                          <td>String</td>
                          <td>blur/change</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>type</td>
                          <td>数据类型的验证</td>
                          <td>String</td>
                          <td>'integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date',
                              'url', 'hex'
                          </td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>min</td>
                          <td>定义最小值，type为string，array，number</td>
                          <td>Number</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>max</td>
                          <td>定义最大值，type为string，array，number</td>
                          <td>Number</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>len</td>
                          <td>验证字段长度，type为string，array，number</td>
                          <td>Number</td>
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
                      Slot
                  </div>
                  <table class="table table-bordered table-hover">
                      <thead>
                      <tr>
                          <th>名字</th>
                          <th>说明</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>默认插槽</td>
                          <td>表单域中可以放置各种类型的表单控件</td>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
          if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        col:[6],
        col_only:[12],
        ruleForm: {
          name: '',
          region: '',
          date:'',
          time:'',
          time1:''
        },
        ruleForm1: {
          loginid: '',
          staffid: '',
          staffname:'',
          password:'',
          birthdate: '',
          state: '',
          phone:'',
          email:'',
          home: [],
          bz: '',
          sex:''
        },
        rules: {
          name: [
            { required: false, message: '请输入活动名称', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'blur' }
          ],
          date: [
            { required: true,type:'date', message: '请选择日期', trigger: 'change' }
          ],
          time: [
            { required: true, type:'date', message: '请选择时间', trigger: 'change' }
          ],
          time1: [
            {  required: true, message: '请选择固定时间', trigger: 'change' }
          ]
        },
        rules1: {
          loginid: [
            { required: true, message: '请输入登陆账号', trigger: 'blur' }
          ],
          staffid: [
            { required: true, message: '请输入用户账号', trigger: 'blur' }
          ],
          staffname: [
            { required: true, message: '输入用户姓名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '输入用户密码', trigger: 'blur' }
          ],
          birthdate: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          sex: [
            {  required: true, message: '请选择性别', trigger: 'change' }
          ],
          home: [
            { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
          ],
          bz: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' },
            { type: 'string', len: 5, message: '介绍必须为5个字', trigger: 'blur' }
          ]
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }

      }
    },
    methods: {
      submitForm1(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error submit!!');
        return false;
      }
      });
      },
      resetForm1(formName) {
        this.$refs[formName].resetFields();
      },
      submit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error!!');
        return false;
      }
      });
      },
      reset() {
        this.$refs.ruleForm.resetFields();
      },
      submitForm() {
        this.$refs.ruleForm1.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error!!');
        return false;
      }
      });
      },
      resetForm() {
        this.$refs.ruleForm1.resetFields();
      }
    }
  };
</script>
