<template>
 <div>
   <div class="col-lg-12 col-sm-12 col-xs-12">
     <hd-row>
       <hd-col :cols="cols12">
         <div class="well with-header with-footer">
           <div class="header bordered-purple">simple类型</div>
           <hd-steps type="simple" active="1" ref="headers1">
             <hd-step title="第一步"  id="1">
             </hd-step>
             <hd-step title="第二步"  id="2">
             </hd-step>
             <hd-step title="第三步"  id="3">
             </hd-step>
             <hd-step title="第四步"  id="4">
             </hd-step>
             <hd-step title="第五步"  id="5">
             </hd-step>
               <hd-button-group slot="footer">
                   <hd-button  size="xs"  type="hdprimary" @click="previous1">
                     <hd-icon type="glyphicon glyphicon-arrow-left"></hd-icon>
                   </hd-button>
                 <hd-button type="withtooltip"  size="xs"  @click="next1">
                   <hd-icon type="glyphicon glyphicon-arrow-right"></hd-icon>
                 </hd-button>
               </hd-button-group>
           </hd-steps>
         </div>
       </hd-col>
    <hd-col :cols="cols12">
         <div class="well with-header with-footer">
           <div class="header bordered-purple">wired类型</div>
           <hd-steps type="wired" active="1" ref="headers">
             <hd-step title="第一步" id="1">
               <hd-form type="horizontal" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="loginid" label="工号1">
                       <hd-input v-model="ruleForm1.loginid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffid" label="用户账号">
                       <hd-input v-model="ruleForm1.staffid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffname" label="用户姓名">
                       <hd-input v-model="ruleForm1.staffname"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="password" label="登录密码">
                       <hd-input v-model="ruleForm1.password"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="birthdate" label="出生年月">
                       <hd-input v-model="ruleForm1.birthdate"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3" >
                     <hd-form-item label="用户状态">
                       <hd-input v-model="ruleForm1.state"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                   <hd-button type="primary" >提交</hd-button>
                   <hd-button >重置</hd-button>
                   </hd-col>
                 </hd-row>
               </hd-form>
             </hd-step>
             <hd-step title="第二步"  id="2" >
               <hd-form type="horizontal" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="loginid" label="工号2">
                       <hd-input v-model="ruleForm1.loginid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffid" label="用户账号">
                       <hd-input v-model="ruleForm1.staffid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffname" label="用户姓名">
                       <hd-input v-model="ruleForm1.staffname"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="password" label="登录密码">
                       <hd-input v-model="ruleForm1.password"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
               </hd-form>
             </hd-step>
             <hd-step title="第三步"  id="3">
               <hd-form type="horizontal" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="loginid" label="工号3">
                       <hd-input v-model="ruleForm1.loginid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffid" label="用户账号">
                       <hd-input v-model="ruleForm1.staffid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffname" label="用户姓名">
                       <hd-input v-model="ruleForm1.staffname"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="password" label="登录密码">
                       <hd-input v-model="ruleForm1.password"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
               </hd-form>
             </hd-step>
             <hd-step title="第四步"  id="4">
               <hd-form type="horizontal" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="loginid" label="工号4">
                       <hd-input v-model="ruleForm1.loginid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffid" label="用户账号">
                       <hd-input v-model="ruleForm1.staffid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffname" label="用户姓名">
                       <hd-input v-model="ruleForm1.staffname"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="password" label="登录密码">
                       <hd-input v-model="ruleForm1.password"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
               </hd-form>
             </hd-step>
             <hd-step title="第五步"  id="5">
               <hd-form type="horizontal" :rules="rules1" :formData="ruleForm1"  ref="ruleForm1">
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="loginid" label="工号5">
                       <hd-input v-model="ruleForm1.loginid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffid" label="用户账号">
                       <hd-input v-model="ruleForm1.staffid"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="staffname" label="用户姓名">
                       <hd-input v-model="ruleForm1.staffname"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="password" label="登录密码">
                       <hd-input v-model="ruleForm1.password"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
                 <hd-row>
                   <hd-col :cols="cols3">
                     <hd-form-item rule="birthdate" label="出生年月">
                       <hd-input v-model="ruleForm1.birthdate"></hd-input>
                     </hd-form-item>
                   </hd-col>
                   <hd-col :cols="cols3" >
                     <hd-form-item label="用户状态">
                       <hd-input v-model="ruleForm1.state"></hd-input>
                     </hd-form-item>
                   </hd-col>
                 </hd-row>
               </hd-form>
             </hd-step>
               <hd-button-group slot="footer">
                 <hd-button size="xs"  type="hdprimary" @click="previous">
                   <hd-icon type="glyphicon glyphicon-arrow-left"></hd-icon>
                 </hd-button>
                 <hd-button type="withtooltip"  size="xs"  @click="next">
                   <hd-icon type="glyphicon glyphicon-arrow-right"></hd-icon>
                 </hd-button>
               </hd-button-group>
           </hd-steps>
         </div>
       </hd-col>
       <hd-col :cols="cols12">
         <div class="well with-header with-footer">
           <div class="header bordered-purple">tabbed类型</div>
           <hd-steps type="tabbed" active="1" ref="headers2">
             <hd-step title="第一步"  id="1">
             </hd-step>
             <hd-step title="第二步" id="2">
             </hd-step>
             <hd-step title="第三步"  id="3">
             </hd-step>
             <hd-step title="第四步"  id="4">
             </hd-step>
             <hd-step title="第五步"  id="5">
             </hd-step>
               <hd-button-group slot="footer">
                 <hd-button  size="xs"  type="hdprimary" @click="previous2">
                   <hd-icon type="glyphicon glyphicon-arrow-left"></hd-icon>
                 </hd-button>
                 <hd-button type="withtooltip"  size="xs"  @click="next2">
                   <hd-icon type="glyphicon glyphicon-arrow-right"></hd-icon>
                 </hd-button>
               </hd-button-group>
           </hd-steps>
         </div>
       </hd-col>
     </hd-row>
       <h5 class="row-title"><i class="fa fa-tags blue"></i>Steps API</h5>
       <div class="row">
           <div class="col-xs-12 col-sm-12">
               <div class="well with-header  with-footer">
                   <div class="header bg-blue">
                       配置项
                   </div>
                   <table class="table table-bordered table-hover" style="max-width:75em">
                       <thead>
                       <tr>
                           <td>参数</td>
                           <td>说明</td>
                           <td>数据类型</td>
                           <td>可选值</td>
                           <td>默认值</td>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td width="15%">type</td>
                           <td width="15%">标签页按钮的类型</td>
                           <td width="20%">[String]</td>
                           <td width="40%">simple,tabbed,wired</td>
                           <td width="10%">simple</td>
                       </tr>
                       <tr>
                           <td>active</td>
                           <td>设置当前激活步骤</td>
                           <td>[Number,String]</td>
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
                           <td>previous</td>
                           <td>跳转到上一步</td>
                       </tr>
                       <tr>
                           <td>next</td>
                           <td>跳转到下一步</td>
                       </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </div>
       <h5 class="row-title"><i class="fa fa-tags blue"></i>Step API</h5>
       <div class="row">
           <div class="col-xs-12 col-sm-12">
               <div class="well with-header  with-footer">
                   <div class="header bg-blue">
                       配置项
                   </div>
                   <table class="table table-bordered table-hover" style="max-width:75em">
                       <thead>
                       <tr>
                           <td>参数</td>
                           <td>说明</td>
                           <td>数据类型</td>
                           <td>可选值</td>
                           <td>默认值</td>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td width="15%">id</td>
                           <td width="15%">当前组件唯一的id(id是必须要传递的参数！)</td>
                           <td width="20%">[String,Number]</td>
                           <td width="40%">-</td>
                           <td width="10%">-</td>
                       </tr>
                       <tr>
                           <td width="15%">content</td>
                           <td width="15%">内容</td>
                           <td width="20%">[String]</td>
                           <td width="40%">-</td>
                           <td width="10%">-</td>
                       </tr>
                       <tr>
                           <td>title</td>
                           <td>标题</td>
                           <td>[String]</td>
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
                           <td>_isClick</td>
                           <td>点击当前步骤时出发</td>
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
    data: function () {
      return {
        cols3: [3],
        cols6: [6],
        cols9: [9],
        cols12: [12],
        ruleForm1: {
          loginid: '',
          staffid: '',
          staffname: '',
          password: '',
          birthdate: '',
          state: ''
        },
        rules1: {
          loginid: [
            {required: true, message: '请输入登陆账号', trigger: 'blur'}
          ],
          staffid: [
            {required: true, message: '请输入用户账号', trigger: 'blur'}
          ],
          staffname: [
            {required: true, message: '输入用户姓名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '输入用户密码', trigger: 'blur'}
          ],
          birthdate: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      previous(){
        this.$refs.headers.previous()
      },
      next(){
        this.$refs.headers.next()
      },
      previous1(){
        this.$refs.headers1.previous()
      },
      next1(){
        this.$refs.headers1.next()
      },
      previous2(){
        this.$refs.headers2.previous()
      },
      next2(){
        this.$refs.headers2.next()
      }

    }
  }
</script>
