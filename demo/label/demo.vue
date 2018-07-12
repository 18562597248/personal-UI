<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-success">
            <span class="widget-caption">label(默认右对齐)</span>
          </div>
          <div class="widget-body">
            <div id="ss-form">
              <hd-form type="bordered">
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="用户工号" :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  required="staffid" label="用户帐号" :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item  required="staffname" label="用户姓名" :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  required="password" label="登录密码" :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="出生年月" :label-align="duiqi">
                      <hd-date-picker></hd-date-picker>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  label="用户状态" :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item  rule="sex"  label="性别"  :label-align="duiqi">
                      <hd-radio-group>
                        <hd-radio name='form' initvalue="男">男</hd-radio>
                        <hd-radio name='form' initvalue="女">女</hd-radio>
                      </hd-radio-group>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="籍贯"  :label-align="duiqi" >
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="联系电话"  :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="邮箱"  :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="左对齐"  :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="右对齐"  :label-align="duiqi">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-offset-4 col-lg-8">
                    <hd-button   @click="leftForm()">左对齐</hd-button>
                    <hd-button   @click="rightForm()">右对齐</hd-button>
                  </div>
                </div>
              </hd-form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-lightred">
            <span class="widget-caption">label(两端对齐 text-align="justify")</span>
          </div>
          <div class="widget-body">
            <div id="horizontal-form">
              <hd-form type="bordered">
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="用户工号">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  required="staffid" label="用户帐号">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item  required="staffname" label="用户姓名">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  required="password" label="登录密码">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="出生年月">
                      <hd-date-picker></hd-date-picker>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="用户状态">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item  rule="sex"  label="性别">
                      <hd-radio-group>
                        <hd-radio name='form' initvalue="男">男</hd-radio>
                        <hd-radio name='form' initvalue="女">女</hd-radio>
                      </hd-radio-group>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="籍贯">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="联系电话">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item label="邮箱">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <hd-form-item label="左对齐">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                  <div class="col-sm-6">
                    <hd-form-item  label="右对齐">
                      <hd-input></hd-input>
                    </hd-form-item>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-offset-4 col-lg-8">
                    <hd-button  type="hdprimary" @click="submitForm()">提交</hd-button>
                    <hd-button   @click="resetForm()">重置</hd-button>
                  </div>
                </div>
              </hd-form>
            </div>
          </div>
        </div>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Label API</h5>
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
                          <td width="10%">text</td>
                          <td width="20%">label内容</td>
                          <td width="10%">String</td>
                          <td width="50%">——</td>
                          <td width="10%">——</td>
                      </tr>
                      <tr>
                          <td width="10%">text-align</td>
                          <td width="20%">文字对齐方式(仅限4字以内中文使用justify)</td>
                          <td width="10%">String</td>
                          <td width="50%">right,left,justify</td>
                          <td width="10%">right</td>
                      </tr>
                      <tr>
                          <td width="10%">pull-right</td>
                          <td width="20%">组件在容器内是否靠右对齐</td>
                          <td width="10%">Boolean</td>
                          <td width="50%">true,false</td>
                          <td width="10%">true</td>
                      </tr>
                      <tr>
                          <td width="10%">text-color</td>
                          <td width="20%">text文字颜色</td>
                          <td width="10%">String</td>
                          <td width="50%">
                              black,white,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,darkorange,red,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td width="10%">black</td>
                      </tr>
                      <tr>
                          <td width="10%">bg-graded</td>
                          <td width="20%">渐变色(须有背景色时才有效)</td>
                          <td width="10%">Boolean</td>
                          <td width="50%">true,false</td>
                          <td width="10%">false</td>
                      </tr>
                      <tr>
                          <td width="10%">bg-color</td>
                          <td width="20%">背景色</td>
                          <td width="10%">String</td>
                          <td width="50%">
                              default,snow,white,blue,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,yellow,warning,gold,orange,lightred,red,darkorange,darkpink,pink,danger,magenta,purple,maroon
                          </td>
                          <td width="10%">snow</td>
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
                  <table class="table table-bordered table-hover" style="max-width:75em">
                      <thead>
                      <tr>
                          <th>名字</th>
                          <th>说明</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td width="10%">分隔符插槽</td>
                          <td width="20%">可放置中文/英文冒号等</td>
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
        duiqi:'right'
      }
    },
    methods:{
      leftForm(){
        this.duiqi='left'
      },
      rightForm(){
        this.duiqi='right'
      }
    }
  };
</script>
