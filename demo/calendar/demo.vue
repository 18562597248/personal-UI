<template>
  <div>
      <hd-calendar  @click="handelClick" @getYearMonth="handelYearMonth"></hd-calendar>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>calendar API</h5>

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
                          <td>renderDate</td>
                          <td>未完成的日期</td>
                          <td>[Array]</td>
                          <td>---</td>
                          <td>---</td>
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
                          <th>事件名</th>
                          <th>事件说明</th>
                          <th>返回值</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td width="15%">click事件</td>
                          <td width="40%">日期被点击时触发</td>
                          <td width="45%">点击时当前日期</td>
                      </tr>
                      <tr>
                          <td width="15%">getYearMonth事件</td>
                          <td width="40%">日期被点击时触发</td>
                          <td width="45%">第一个面板的年月份</td>
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
          renderDate:['2017-10-04','2017-09-15','2017-09-25']
      }
    },
      methods:{
          handelClick(){
              alert('开始你的表演')
          },
          handelYearMonth(val){
              alert(val)
          }
      }
  }
</script>
