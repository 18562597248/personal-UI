<!--
新增：高春明
新增日期：2016.10.31 9:00:00
实现功能：用户登录验证

编辑：高春明
编辑日期：2016.10.31 9:00:00
编辑内容：新增“忘记密码”功能

编辑：高春明
编辑日期：2016.10.31 9:00:00
编辑内容：优化登录验证方式
-->

<template>
  <div>
    <div class="hd-teambuild-screen login-bgimage-div"></div>
    <div class="login-container animated fadeInDown">
      <div class="loginbox bg-white">
        <div class="loginbox-title">华能山东公司<br/>班组建设信息化管理系统</div>
        <form class="ui form loginForm" @submit.prevent="checkCreds" id="test">
          <div class="loginbox-textbox">
            <span class="input-icon icon-left">
              <input type="text" id="userid" class="form-control" placeholder="用户名" v-model="username"/>
              <i class="fa fa-user azure"></i>
            </span>
          </div>
          <div class="loginbox-textbox">
            <span class="input-icon">
              <i class="fa fa-lock azure"></i>
              <input id="showPwd" class="form-control" type="text" placeholder="密  码" v-model="password"
                     v-show="flag1"/>
              <input type="password" id="pwd" class="form-control" style="padding-right: 54px;" placeholder="密  码"
                     v-model="password" v-show="flag2"/>
              <i class="fa fa-eye-slash azure" style="left: auto;right: 5px;" @click="showps()" v-show="flag1"></i>
              <i class="fa fa-eye azure" style="left: auto;right: 5px;" @click="showps()" v-show="flag2"></i>
            </span>
          </div>
          <div class="loginbox-forgot" style="padding-right: 40px;">
          <div class="checkbox">
            <label>
              <input type="checkbox" checked="checked" v-model="remember">
              <span class="text">记住密码</span>
            </label>
            <i class="fa fa-question red" style="float: right;font-size: 16px;" @click="showdetail"></i>
          </div>
        </div>
          <div class="loginbox-submit">
            <input type="submit" class="btn btn-primary btn-block shiny" value="登 录">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'Login',
    data: function (router) {
      return {
        section: 'Login',
        loading: '',
        method: 'local',
        types: 'staffCode',
        username: '',
        password: '',
        response: '',
        checked:false,
        remember:'',
        flag1: false,
        flag2: true
      }
    },
    mounted: function(){
      var uv = readCookie("hdoa_uid");
      var pv = readCookie("hdoa_pwd");
      var rm = readCookie("hdoa_rm");
      if (uv != null)
        this.username = uv;
      if (pv != null)
        this.password = pv;
      if (rm != null)
        this.remember = rm;
    },
    methods: {
      showps: function () {
        if (!this.flag1) {
          this.flag1 = true,
            this.flag2 = false
        } else {
          this.flag1 = false,
            this.flag2 = true

        }
      },
      showdetail: function () {
        let self = this;
        this.$message({
          type:'info',
          message:'详细信息',
          confirmText:'',
          beforeClose:function(action,close,done,instance){
            close();
            done(action);
          }
        }).then(function(value){

        }).catch(function(error){
        });
      },
      checkCreds: function () {
        if (this.username == '' || this.username == null) {
          alert('用户名不能为空');
          return;
        }
        if (this.password == '' || this.password == null) {
          alert('密码不能为空');
          return;
        }
        var that = this
        $.ajax({
          url: url_api + '/process/signon',
          type: 'post',
          cache: false,
          dataType: 'json',
          data: {
            method: that.method, userid: that.username, password: that.password, types: that.types
          },
          success: function (data) {
            if (!data.success) {//登录失败
              alert('用户名或密码错误，请重试！')
            } else {
              sessionStorage.setItem("TOKEN",true);
              that.getProperty();
              that.$router.push('/home')    // 登录成功跳转到主页面
            }
          },
          error: function () {
            alert("网络错误")
          }
        });
      },
      getProperty: function () {
        var   this_=this
        $.ajax({
          url: url_api + '/process/signon',
          type: 'post',
          cache: false,
          dataType: 'json',
          data: {
            method: 'getprperty'
          },
          success: function (data) {
            if (data.success) {//登录失败
              var items = data.items
              if (items.length > 0) {
                var item = items[0];
                sessionStorage.setItem("user","ok");
                localStorage.setItem("banzu", item.banzu);
                localStorage.setItem("company", item.company);
                localStorage.setItem("werks", item.werks);
                localStorage.setItem("jobNo", item.jobNo);
                localStorage.setItem("profession", item.profession);
                localStorage.setItem("staffid", item.staffid);
                localStorage.setItem("staffcode", item.staffcode);
                localStorage.setItem("staffname", item.staffname);
                if (this_.remember) {
                  createCookie("hdoa_uid", this_.username, 30);
                  createCookie("hdoa_pwd", this_.password, 30);
                  createCookie("hdoa_rm", true, 30);

                } else {
                  createCookie("hdoa_uid", "", -1);
                  createCookie("hdoa_pwd", "", -1);
                  createCookie("hdoa_rm", "", -1);
                }
              }
            } else {
              alert(data.meg)
            }
          },
          error: function () {
            alert("网络错误")
          }
        });
      },
      createCookie:function(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toGMTString();

        }

        document.cookie = name + "=" + escape(value) + expires + "; path=/";
      },

      readCookie:function(name) {

        var nameEQ = name + "=";

        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {

          var c = ca[i];

          while (c.charAt(0) == ' ') c = c.substring(1, c.length);

          if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));

        }

        return null;

      }
    }
  }
</script>
