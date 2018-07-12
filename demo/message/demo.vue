<template>
  <div class="">
    <toolbar>
      <hd-button-group slot="left">
        <hd-button type="success" @click="singleBtn">confirm</hd-button>
        <hd-button type="danger" @click="boubleBtn">con&can</hd-button>
        <hd-button type="info" @click="moreBtn">con&can&sqa</hd-button>
        <hd-button bgcolor="lightcarbon" font-color="slate-gray" @click="defaultBtn">defalut</hd-button>
        <hd-button type="hdprimary" @click="nullBtn">Null</hd-button>
        <hd-button @click="supplement">supplement</hd-button>
      </hd-button-group>
      <hd-button-group slot="right">
        <hd-button type="success" @click="succDialog">成功</hd-button>
        <hd-button type="info" @click="infoDialog">提示</hd-button>
        <hd-button type="warning" @click="warnDialog">警告</hd-button>
        <hd-button type="danger" @click="errDialog">报错</hd-button>
      </hd-button-group>
    </toolbar>
    <div class="page-body">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Message API</h5>
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
                            <td width="10%">[String,Number]</td>
                            <td width="50%">--</td>
                            <td width="10%">--</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>当前组件固定样式类型</td>
                            <td>[String]</td>
                            <td>info、success、warning、error</td>
                            <td>info</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>当前组件提示信息标题</td>
                            <td>[String]</td>
                            <td>--</td>
                            <td>成功/提示/警告/报错 (根据type变化)</td>
                        </tr>
                        <tr>
                            <td>message</td>
                            <td>当前组件提示信息内容</td>
                            <td>[String]</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>confirmText</td>
                            <td>当前组件中间(通常为确定)按钮的文本内容;设置为空时按钮不会显示;confirm按钮在组件打开时会默认获得焦点</td>
                            <td>[String]</td>
                            <td>--</td>
                            <td>confirm</td>
                        </tr>
                        <tr>
                            <td>cancelText</td>
                            <td>当前组件右侧(通常为取消)按钮的文本内容;设置为空时按钮不会显示</td>
                            <td>[String]</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>sqareText</td>
                            <td>当前组件左侧(通常为备用)按钮的文本内容;设置为空时按钮不会显示</td>
                            <td>[String]</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>confirmIsloading</td>
                            <td>confirm按钮是否为isloading类型(type)</td>
                            <td>[Boolean]</td>
                            <td>true、false</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>cancelIsloading</td>
                            <td>cancel按钮是否为isloading类型(type)</td>
                            <td>[Boolean]</td>
                            <td>true、false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>spareIsloading</td>
                            <td>spare按钮是否为isloading类型(type)</td>
                            <td>[Boolean]</td>
                            <td>true、false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>showCloseIcon</td>
                            <td>当前组件关闭按钮(×)是否展示</td>
                            <td>[Boolean]</td>
                            <td>true、false</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>lockScroll</td>
                            <td>当前组件展示时是否锁定滚动条</td>
                            <td>[Boolean]</td>
                            <td>true、false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>closeOnClickModal</td>
                            <td>点击遮罩层是否关闭当前组件</td>
                            <td>[Boolean]</td>
                            <td>true、false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>beforeClose</td>
                            <td>当前组件关闭前的响应事件</td>
                            <td>[Function]</td>
                            <td>
                                参数:action(confirm/cancel/sqare)、close()(组件关闭Function)、done({传递给then/catch的value}，{true会调用.then、传入false会调用.catch})、instance(组件自身)
                            </td>
                            <td>--</td>
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
        test:false
      }
    },
    methods: {
      succDialog(event){
        let self = this;
        this.$message({
          type:'success',
          message:'<span>执行成功</span>',
          confirmText:'确定',
          beforeClose:function(action,close,done,instance){
            close();
            done(action);
          }
        }).then(function(value){
          self.$notice({
            type:'success',
            message:'您却确认了执行状态',
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      infoDialog(event){
        let self = this;
        this.$message({
          type:'info',
          message:'您有一条新的提示消息',
          confirmText:'确定',
          beforeClose:function(action,close,done,instance){
            close();
            done(action);
          }
        }).then(function(value){
          self.$notice({
            type:'info',
            message:'没错说的就是本提示消息(～￣(OO)￣)ブ',
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      warnDialog(event){
        let self = this;
        this.$message({
          type:'warning',
          message:'当前操作存在一定风险，要继续操作吗？',
          confirmText:'确定',
          cancelText:'取消',
          spareText:'撤回',
          focus:'cancel',
          beforeClose:function(action,close,done,instance){
            if(action==='confirm'){
              setTimeout(function(){
                close();
                done('执行成功');
              },5000);
            }else if(action==='cancel'){
              close();
              done('您取消了执行',false);
            }else if(action==='spare'){
              close();
              done('操作撤回',true);
            }
          }
        }).then(function(value){
          self.$notice({
            type:'warning',
            message:value,
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      errDialog(event){
        let self = this;
        this.$message({
          type:'error',
          message:'操作错误，请点击任意键退出当前操作！',
          confirmText:'确定',
          cancelText:'提交报错信息',
          cancelIsloading:true,
          beforeClose:function(action,close,done,instance){
            if(action==='confirm'){
              close();
              done('您确认了失误操作');
            }else if(action==='cancel'){
              setTimeout(function(){
                close();
                done('已将该操作传递给服务端处理',false);
              },3000);
            }
          }
        }).then(function(value){
          self.$notice({
            type:'info',
            message:value,
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      singleBtn(event){
        let self = this;
        this.$message({
          type:'info',
          title:'一按钮对话框',
          message:'只给参数confirm传值,而不给cancel,sqare传值则',
          confirmText:'just me',
          beforeClose:function(a,c,d,i){
            c();
            d('done方法第二个参数在true时执行.then()的内容;反之执行.catch()',true);
          }
        }).then(function(value){
          self.$notice({
            type:'info',
            message:value,
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      boubleBtn(event){
        let self = this;
        this.$message({
          title:'俩按钮对话框',
          message:'给confirm和cancel同时传值,就会有2个btn',
          confirmText:'BTN1',
          cancelText:'BTN2',
          showCloseIcon:false,
          beforeClose:function(a,c,d,i){
            c();
            if(a==='confirm'){
              d('当然done方法的第二个参数也有默认值(为true)');
            }else if(a==='cancel'){
              d('只要你的beforeClose不处理异步过程,你就放心的在方法刚开始就把对话框关掉(func开头处直接调用close())',false);
            }
          }
        }).then(function(value){
          self.$notice({
            type:'info',
            message:value,
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      moreBtn(event){
        let self = this;
        this.$message({
          type:'',
          tltle:'仨按钮对话框',
          message:'同时给confirm,cancel和sqare传值',
          confirmText:'习惯确定',
          cancelText:'习惯取消',
          spareText:'习惯备用',
          beforeClose:function(a,c,d,i){
            if(a==='confirm'){
              setTimeout(function(){
                c();
                d('若处理异步过程,则不能在beforeClose开头就关闭对话框');
              },5000);
            }else if(a==='cancel'){
              setTimeout(function(){
                c();
                d('在异步回掉的时候调用close关闭对话框');
              },3000);
            }else if(a==='spare'){
              setTimeout(function(){
                c();
                d('当然把c()和d()作为参数传给异步func,func会处理关闭和调用then|catch');
              },1000);
            }
          }
        }).then(function(value){
          self.$notice({
            type:'',
            message:value,
            duration:5000
          });
        }).catch(function(error){
          self.$notice({
            type:'error',
            message:error,
            duration:5000
          });
        });
      },
      defaultBtn(event){
        let self = this;
        this.$message({
          message:'只传了message属性,beforeClose方法',
          beforeClose:function(a,c,d,i){
            c();
          }
        });
        //之前的是错误对的示范
      },
      nullBtn(event){
        let self = this;
        this.$message({
          type:'info',
          title:'这个对话框将不展示任何按钮',
          message:'给confirmText传一个空值则confirm按钮不会展示',
          confirmText:'',
          beforeClose:function(a,c,d,i){
            c();
          }
        });
      },
      supplement(event){
        let self = this;
        this.$message({
          type:null,
          title:'这个对话框将展示一些未上线的功能',
          message:'',
          confirmText:'',
          cancelText:'cancel',
          sqareText:'sqare',
          confirmIsloading:false,
          cancelIsloading:true,
          spareIsloading:false,
          lockScroll:true,
          closeOnClickModal:true,
          beforeClose:function(a,c,d,i){
            c();
          }
        });
      }
    }
  }
</script>
