class Singleton {
  constructor(){
    if(! Singleton.instance){
      this.handing = false;
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  ensureHandling(){
    this.handing = true;
  }

}
const instance = new Singleton();  // 单例，保证所有的提示访问该对象的状态

/**
 * 处理ajax返回失败信息(success:false)的情况。当success为false时：
 * 根据返回的信息中是否包含“请先登录”字样判断：
 *    1、如果包含，说明需要重新登录，所以如果当前页面已经是“login”页面，则不需要处理，如果不是“login”页面则需要跳转至“login”界面并根据需要提示用户。
 *       这里为了解决同时弹出多个“请先登录……”提示的问题（多个业务流同时返回success:false时出现的情况），采用单例模式管理提示的弹出。
 *       然后，判断是否登录过（sessionStorage.getItem('TOKEN')）
 *         1）已登录（TOKEN为true），说明是session过期，则弹出提示“请先登录……”，用户点击“确定”按钮后将TOKEN设置为false、释放提示管理权限并跳转至登录页面
 *         2）未登录（TOKEN为false），直接跳转到登录页面，不用提示
 *    2、如果不包含说明是普通错误，直接根据返回的meg进行提示。
 *
 * 此方法已经注册为全局方法，通过this.$handleUnsuccessfulAjax(data)方式调用
 * */
export default function handleUnsuccessfulAjax(data) {
  let self = this;
  let regexp = /.*请先登录.*/  // 正则表达式，根据返回的信息判断是不是session过期
  let currentPage = self.$router.currentRoute.path;  // 当前路由页面
  if(regexp.test(data.meg)){  // 如果返回信息中存在“请先登录”字样
    if(currentPage === '/login' || instance.handing){  // 如果已经在登录界面或已经有处理“session过期”的提示，则不再重复提示
      return
    }
    instance.ensureHandling();  // 标示在处理过程中

    if(sessionStorage.getItem('TOKEN') === 'true'){  // 如果已经登录过
      self.$message({
        type: 'info',
        title: '信息',
        message: data.meg,
        confirmText: '确定',
        beforeClose: function (a, c, d, i) {
          c();
          sessionStorage.setItem('TOKEN',false)  // 将TOKEN设置为false
          self.$router.push({path: '/login'})  // 返回登录界面
          instance.handing = false;  // 已返回登录界面，将instance的handing状态设置为false，否则重新登录后再有session过期的情况将不会进行提示
        }
      });
    }else{  // 从未登录过，直接跳转到login界面，不用提示，解决登录前访问IP弹出提示的问题
      self.$router.push({path: '/login'})  // 返回登录界面
    }
  }else {  // 否则直接弹出message
    self.$message.error({
      message: data.meg,
      confirmText: '确定',
      beforeClose: function (a, c, d, i) {
        c();
      }
    })
  }
}
