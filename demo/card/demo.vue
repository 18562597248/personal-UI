<template>
  <div>
    <toolbar></toolbar>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Card DEMO</h5>
    <hd-row>
      </hd-col>
      <hd-col :cols="col">
        <hd-card  dis-hover style="padding:25px;" border border-color="red">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;I have a dream that one day down in Alabama with its
            governor having his lips dripping with the words of interposition and nullification,
            one day right down in Alabama little black boys and black girls will be able to join hands with
            little white boys and white girls as sisters and brothers.  I have a dream that one day this nation will rise up,
            live up to the true meaning of its creed.
          </p>
          <a href="#" slot="extra">
            <hd-icon type="glyphicon glyphicon-cog"></hd-icon>
            查看
          </a>
        </hd-card>
      </hd-col>
      <hd-col :cols="col">
        <hd-card  border border-color="blue" style="padding:20px;">
          <hd-row>
          <hd-col :cols="col6">
          <img src="static/img/avatars/John-Smith.jpg" style="width: 96px">
          </hd-col>
            <hd-col :cols="col6">
          <p>Name:John Smith</p></br>
          <p>job:Actor</p></br>
          <p>company:China</p></br>
            </hd-col>
          </hd-row>
        </hd-card>
      </hd-col>
      <hd-col :cols="col">
        <hd-card  style="padding:20px;" border border-color="white" dis-hover>
          <hd-row>
            <hd-col :cols="col12">
          <img src="static/img/avatars/divyia.jpg">
            </hd-col>
            <hd-col :cols="col12">
          <p>I'm Linda</p></br>
          <p>From America</p></br>
            </hd-col>
          </hd-row>
        </hd-card>
      </hd-col>
    </hd-row>

      <br/>
      <br/>
      <br/>
      <br/>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Card API</h5>

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
                          <td width="10%">border</td>
                          <td width="25%">组件是否显示边框</td>
                          <td width="20%">[Boolean]</td>
                          <td width="35%">true,false</td>
                          <td width="10%">false</td>
                      </tr>
                      <tr>
                          <td>border-color</td>
                          <td>边框的颜色</td>
                          <td>[String]</td>
                          <td>'', 'blue', 'red', 'yellow', 'white', 'themeprimary', 'themesecondary', 'themethirdcolor',
                              'themefourthcolor', 'themefifthcolor', 'snow', 'whitesmoke', 'seashell', 'ivory',
                              'platinum', 'lightgray', 'gray', 'darkgray', 'silver', 'sonic-silver', 'storm-cloud',
                              'lightcarbon', 'carbon', 'slate-gray', 'darkcarbon', 'info', 'sky', 'primary', 'azure',
                              'blueberry', 'palegreen', 'success', 'green', 'lightyellow', 'warning', 'gold', 'orange',
                              'lightred', 'darkorange', 'pink', 'darkpink', 'danger', 'magenta', 'purple', 'maroon'
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>dis-hover</td>
                          <td>禁用鼠标悬停显示阴影</td>
                          <td>[Boolean]</td>
                          <td>true,false</td>
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
                      Slot
                  </div>
                  <table class="table table-bordered table-hover" style="max-width:75em">
                      <thead>
                      <tr>
                          <td>名称</td>
                          <td>说明</td>
                          <td>数据类型</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td width="20%">body</td>
                          <td width="30%">card的内容</td>
                          <td width="50%">[String]</td>
                      </tr>
                      <tr>
                          <td>extra</td>
                          <td>card的额外内容(默认显示在右上角)</td>
                          <td>[String]</td>
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
    data: function () {
      return {
        col:[4],
        col6:[6],
        col12:[12]
      }
    }
  }
</script>
