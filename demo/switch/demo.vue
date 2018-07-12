<template>
  <div>
    <div>
      <hd-row>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">默认不带颜色类型</div>
            <hd-switch v-model="value1" type="default" ></hd-switch>
            <hd-switch v-model="value2" type="default" ></hd-switch>
            <hd-switch type="default" ></hd-switch>
            <hd-switch type="default" ></hd-switch>
          </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">默认带颜色类型</div>
              <hd-switch v-model="value3" type="default" color="blue" ></hd-switch>
              <hd-switch v-model="value4" type="default" color="danger"></hd-switch>
              <hd-switch type="default" color="purple"></hd-switch>
              <hd-switch type="default" color="palegreen"></hd-switch>
            </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">icon带颜色类型</div>
              <hd-switch type="slider-icon"  color="success"></hd-switch>
              <hd-switch type="slider-icon"  color="warning"></hd-switch>
              <hd-switch type="slider-icon"  color="magenta"></hd-switch>
              <hd-switch type="slider-icon"  color="darkorange"></hd-switch>
            </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">toggle带颜色类型</div>
              <hd-switch type="toggle" color="success"></hd-switch>
              <hd-switch type="toggle" color="warning"></hd-switch>
              <hd-switch type="toggle" color="magenta"></hd-switch>
              <hd-switch type="toggle" color="black"></hd-switch>
            </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">yesno带颜色类型</div>
              <hd-switch type="default" on-text="yes" off-text="no" color="purple"></hd-switch>
              <hd-switch type="slider-icon" on-text="yes" off-text="no" color="danger"></hd-switch>
              <hd-switch type="toggle" on-text="yes" off-text="no" color="blue"></hd-switch>
              <hd-switch on-text="yes" off-text="no" color="palegreen"></hd-switch>
            </div>
        </hd-col>
        <hd-col :cols="cols3">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">disabled类型</div>
              <hd-switch  v-model="value5" type="default" disabled color="warning"></hd-switch>
              <hd-switch  v-model="value6" type="slider-icon" disabled color="danger"></hd-switch>
              <hd-switch  type="toggle" disabled ></hd-switch>
              <hd-switch disabled></hd-switch>
            </div>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Switches API</h5>
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
                            <td>参数值</td>
                            <td>默认值</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="15%">type</td>
                            <td width="15%">标签页按钮的类型</td>
                            <td width="20%">[String]</td>
                            <td width="40%">'checkbox-slider','checkbox-slider slider-icon','checkbox-slider
                                toggle','checkbox-slider yesno','checkbox-slider slider-icon yesno','checkbox-slider
                                toggle yesno'
                            </td>
                            <td width="10%">checkbox-slider</td>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>当前组件唯一的id</td>
                            <td>[String,Number]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>selectedcolor</td>
                            <td>当前按钮被选中的颜色</td>
                            <td>[String]</td>
                            <td>blue,danger,palegreen,black,success,purple,warnning,magenta,darkorange</td>
                            <td>black</td>
                        </tr>
                        </thread></tbody>
                    </table>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Switch API</h5>
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
                            <td width="40%">default,slider-icon,toggle</td>
                            <td width="10%">default</td>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>当前组件唯一的id</td>
                            <td>[String,Number]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>当前组件处于无效状态时为true</td>
                            <td>[Boolean]</td>
                            <td>true/false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>当前组件的颜色</td>
                            <td>[String]</td>
                            <td>blue,danger,palegreen,black,success,purple,warnning,magenta,darkorange,primary</td>
                            <td>black</td>
                        </tr>
                        <tr>
                            <td>on-text</td>
                            <td>switch打开时的文字(需注意：on-text和off-text必须成对出现！)</td>
                            <td>[String]</td>
                            <td>yes</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>off-text</td>
                            <td>switch关闭时的文字(需注意：on-text和off-text必须成对出现！)</td>
                            <td>[String]</td>
                            <td>no</td>
                            <td>-</td>
                        </tr>
                        </thread></tbody>
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
                            <td>change</td>
                            <td>绑定的值发生变化后的触发此事件</td>
                            <td>event事件对象</td>
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
    data:function(){
      return{
        value1:true,
        value2:true,
        value3:true,
        value4:true,
        value5:true,
        value6:true,
        cols3:[3],
        cols4:[4],
        cols6:[6]
      }
    }
  }

</script>
