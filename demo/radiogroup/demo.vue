<template>
  <div>
    <hd-row>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">水平(默认排列)</p>
          <p slot="body">
            <hd-form type="default" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item   rule="undefined" label="Email">
                    <hd-radio-group v-model="q1">
                      <hd-radio  name="1"type="basic"    initvalue="blue1">r</hd-radio>
                      <hd-radio  name="1"type="inverted" initvalue="blue2">a</hd-radio>
                      <hd-radio  name="1"type="inverted" initvalue="blue3">d</hd-radio>
                      <hd-radio  name="1"type="inverted" initvalue="blue4">i</hd-radio>
                      <hd-radio  name="1"type="inverted" initvalue="blue5">o</hd-radio>
                    </hd-radio-group>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item   rule="undefined" label="Email">
                    <hd-radio-group v-model="q2"  color="blue">
                      <hd-radio  name="2" initvalue="Invertedq">g</hd-radio>
                      <hd-radio  name="2" initvalue="Invertedw">r</hd-radio>
                      <hd-radio  name="2" initvalue="Invertede">o</hd-radio>
                      <hd-radio  name="2" initvalue="Invertedf">u</hd-radio>
                      <hd-radio  name="2" initvalue="Invertedg">p</hd-radio>
                    </hd-radio-group>
                  </hd-form-item>
                </hd-col>
              </hd-row>
            </hd-form>
            <code>1、(1):inline="true" 水平显示;2、(2):inline="true"、 默认情况为垂直显示</code>
            <code>3、 color="danger"用来控制整个按钮组的颜色;color的可选值包括:danger,success,black,blue,blueberry</code>
          </p>
        </hd-widget>
      </hd-col>
      <hd-col :cols="col">
        <hd-widget flat>
          <p slot="title">垂直排列</p>
          <p slot="body">
            <hd-form type="horizontal" role="form">
              <hd-row>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-radio-group :inline="true" v-model="radio2" disabled="disabled">
                      <hd-radio  name="7"  initvalue ="Inv23">7</hd-radio>
                      <hd-radio  name="7"  initvalue="a33da">8</hd-radio>
                      <hd-radio  name="7"  initvalue="Inveeerte" >9</hd-radio>
                    </hd-radio-group>
                  </hd-form-item>
                </hd-col>
                <hd-col :cols="col">
                  <hd-form-item  rule="name" label="备注">
                    <hd-radio-group :inline="true" v-model="radio1">
                      <hd-radio  name="6" selectedColor="danger" initvalue ="Inverted">4</hd-radio>
                      <hd-radio  name="6" selectedColor="danger" initvalue="ada">5</hd-radio>
                      <hd-radio  name="6" selectedColor="danger" initvalue="Inverte" >6</hd-radio>
                    </hd-radio-group></hd-form-item>
                </hd-col>
              </hd-row>
            </hd-form>
          </p>
        </hd-widget>
      </hd-col>
    </hd-row>
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
        },
        radio1:'ada',
        radio2:'Inv23',
        q1:[],
        q2:[]
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
