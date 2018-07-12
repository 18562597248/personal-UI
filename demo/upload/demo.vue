<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-button @click="sfl">开关显示列表</hd-button>
        <hd-upload text="上传" :action="action" singled :showFileList="showfl"></hd-upload>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-button @click="sfl1">开关显示列表</hd-button>
        <hd-upload btn-bg-color="blue" :action="action" :showFileList="showfl1"></hd-upload>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-upload type="drop" text="上传" :action="action" @fileRemove="fileRemove" @fileClick="fileDownload" @uploadSuccess="test" :beforeUpload="test1" @message="upload_message"></hd-upload>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <hd-upload btn-bg-color="blue" :action="action" disabled></hd-upload>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Upload API</h5>
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
                          <td width="10%"><code>action（必传）</code></td>
                          <td width="20%">上传的地址</td><td width="10%">[string]</td>
                          <td width="50%">-</td><td width="10%">-</td>
                      </tr>
                      <tr>
                          <td>show-file-list</td>
                          <td>是否显示已上传文件列表</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>true</td>
                      </tr>
                      <tr>
                          <td>type</td>
                          <td>上传控件类型</td>
                          <td>[string]</td>
                          <td>button,drop</td>
                          <td>button</td>
                      </tr>
                      <tr>
                          <td>uploadedFiles</td>
                          <td>已上传文件（说明：此项为数组类型，数组中的每个值为对象，对象的key中必需有name）</td>
                          <td>[array]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>disabled</td>
                          <td>是否禁用</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>singled</td>
                          <td>是否单选</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>width</td>
                          <td>文件列表的宽度</td>
                          <td>[number,string]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>beforeUpload</td>
                          <td>文件上传之前的钩子函数（参数：上传的文件），返回值为true则继续上传，否则不会执行上传</td>
                          <td>[function]</td>
                          <td>-</td>
                          <td>function(){return true}</td>
                      </tr>
                      <tr>
                          <td>listDisabled</td>
                          <td>附件列表disabled效果可单独控制</td>
                          <td>Boolean</td>
                          <td>false，true</td>
                          <td>true</td>
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
                      type = "button"时可用的配置项
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
                          <td width="10%">shiny</td>
                          <td width="20%">按钮是否带光泽样式</td>
                          <td width="10%">[boolean]</td>
                          <td width="50%">true,false</td>
                          <td width="10%">false</td>
                      </tr>
                      <tr>
                          <td>btn-bg-color</td>
                          <td>按钮背景色（默认不传，显示白色）</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>btn-color</td>
                          <td>按钮文字颜色（默认不传，显示黑色）</td>
                          <td>[string]</td>
                          <td>
                              blue,red,yellow,white,themeprimary,themesecondary,themethirdcolor,themefourthcolor,themefifthcolor,snow,whitesmoke,seashell,ivory,platinum,lightgray,gray,darkgray,silver,sonic-silver,storm-cloud,lightcarbon,carbon,slate-gray,darkcarbon,info,sky,primary,azure,blueberry,palegreen,success,green,lightyellow,warning,gold,orange,lightred,darkorange,pink,darkpink,danger,magenta,purple,maroon
                          </td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>blocked</td>
                          <td>按钮是否显示为块样式（按钮宽度占据一整行）</td>
                          <td>[boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>text</td>
                          <td>按钮文字</td>
                          <td>[string]</td>
                          <td>-</td>
                          <td>upload</td>
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
                      type = "drop"时可用的配置项
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
                          <td width="10%">drop-width</td>
                          <td width="20%">可拖放区域的宽度（若传此参数，宽度显示为传入值；若不传，宽度显示为与列表宽度值一样）</td>
                          <td width="10%">[string]</td>
                          <td width="50%">-</td>
                          <td width="10%">-</td>
                      </tr>
                      <tr>
                          <td>drop-height</td>
                          <td>可拖放区域的高度（最低限高86px）</td>
                          <td>[string]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>text</td>
                          <td>可拖放区域显示的文字</td>
                          <td>[string]</td>
                          <td>-</td>
                          <td>upload</td>
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
                          <td>fileClick</td>
                          <td>文件列表中的文件点击事件</td>
                          <td></td>
                      </tr>
                      <tr>
                          <td>fileRemove</td>
                          <td>文件列表中文件的删除按钮点击事件</td>
                          <td></td>
                      </tr>
                      <tr>
                          <td>uploadSuccess</td>
                          <td>文件上传成功后触发的事件</td>
                          <td></td>
                      </tr>
                      <tr>
                          <td>message</td>
                          <td>文件上传后返回服务器的成功或失败的信息</td>
                          <td></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        showfl:true,
        showfl1:true,
        action:url_api+'/process/common_upload?m=test'
      }
    },
    methods:{
      fileRemove(file){
        $.ajax({
          url:url_api+'/process/test1_qmy',
          type: 'post',
          cache: false,
          dataType: 'json',
          data: {
            m: 'delete', name: file.name
          }
        })
      },
      fileDownload(file){
        console.log(file);
      },
      sfl(){
        if(this.showfl === true){
          this.showfl = false
        }else{
          this.showfl = true
        }
      },
      sfl1(){
        if(this.showfl1 === true){
          this.showfl1 = false
        }else{
          this.showfl1 = true
        }
      },
      test(v){
        console.log('上传结束后执行此方法。');
        console.log(v)
      },
      test1(files){
        console.log('上传之前执行此方法。');
        console.log(files);
        if(files["0"].type !== 'image/jpeg'){
          return false
        }
      },
      upload_message(val){
        console.log('返回的上传结果。');
        console.log(val)
      }
    }
  }
</script>
