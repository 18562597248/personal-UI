<template>
  <div >
    <h5 class="row-title"><i class="fa fa-tags blue"></i>时间选择器1.0版本</h5>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-pink">24小时制不带秒针</div>
          <div>
            <hd-time-picker></hd-time-picker>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-blue">24小时制带秒针</div>
          <hd-time-picker   format="HH:m:ss"></hd-time-picker>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-pink">12小时制带秒针</div>
          <div>

            <hd-time-picker  format="hh:mm:ss"></hd-time-picker>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-blue">12小时制不带秒针</div>
          <hd-time-picker  format="hh:mm"></hd-time-picker>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-blue">固定时间</div>
          <hd-time-picker :fixation="true" start="06:00" step="00:15" ></hd-time-picker>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-pink">固定时间间隔（起）</div>
          <hd-time-picker :fixation="true" @selected="Selection"></hd-time-picker>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-6">
        <div class="well with-header">
          <div class="header bordered-pink">固定时间间隔（止）</div>
          <hd-time-picker :fixation="true"  :minTime="this.startTime"></hd-time-picker>
        </div>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>时间选择器2.0版本</h5>
      <div class="row">
          <div class="col-lg-6 col-sm-6 col-xs-12">
              <div class="well with-header">
                  <div class="header bordered-pink">时间</div>
                  <hd-timepicker type="time" placeholder="选择时间" ></hd-timepicker>
              </div>
          </div>
          <div class="col-lg-6 col-sm-6 col-xs-6">
              <div class="well with-header">
                  <div class="header bordered-pink">时间间隔</div>
                  <hd-timepicker type="timerange" placement="bottom-end" placeholder="选择时间"></hd-timepicker>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>时间选择器1.0版本 API</h5>
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
                          <td>format</td>
                          <td>时间格式化；若时间格式为HH：mm：ss显示24小时制，若时间格式为hh：mm：ss显示12小时制，若时间格式为hh:mm时间只显示到分钟（如 06：33）</td>
                          <td>string</td>
                          <td>HH:mm:ss/HH:m:ss/HH:mm/hh：mm：ss/hh：mm等</td>
                          <td>HH:mm</td>
                      </tr>
                      <tr>
                          <td>value</td>
                          <td>用户输入的默认时间</td>
                          <td>string</td>
                          <td>——</td>
                          <td>——</td>
                      </tr>
                      <tr>
                          <td>readonly</td>
                          <td>input输入框只读</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>fixation</td>
                          <td>是否显示固定时间</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>start</td>
                          <td>固定时间开始位置</td>
                          <td>string</td>
                          <td>---</td>
                          <td>08:30</td>
                      </tr>
                      <tr>
                          <td>end</td>
                          <td>固定时间结束位置</td>
                          <td>string</td>
                          <td>---</td>
                          <td>20:30</td>
                      </tr>
                      <tr>
                          <td>step</td>
                          <td>固定时间增长步长</td>
                          <td>string</td>
                          <td>---</td>
                          <td>00:30</td>
                      </tr>
                      <tr>
                          <td>minTime</td>
                          <td>最小时间，小于该时间的时间段将被禁用</td>
                          <td>string</td>
                          <td>---</td>
                          <td>---</td>
                      </tr>
                      <tr>
                          <td>disabled</td>
                          <td>禁用</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>时间选择器2.0版本 API</h5>
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
                          <td>format</td>
                          <td>时间格式化</td>
                          <td>string</td>
                          <td></td>
                          <td>HH:mm:ss</td>
                      </tr>
                      <tr>
                          <td>type</td>
                          <td>类型</td>
                          <td>string</td>
                          <td>time、timerange</td>
                          <td>time</td>
                      </tr>
                      <tr>
                          <td>value</td>
                          <td>用户输入默认显示的日期（使用v-model返回的是日期类型）当用type=timerange时，value应传入数组</td>
                          <td>String/Array</td>
                          <td>——</td>
                          <td>——</td>
                      </tr>
                      <tr>
                          <td>readonly</td>
                          <td>只读（input框）</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>placement</td>
                          <td>日期选择器出现的位置</td>
                          <td>String</td>
                          <td>
                              top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end
                          </td>
                          <td>bottom-start</td>
                      </tr>
                      <tr>
                          <td>options</td>
                          <td>快捷方式配置项（见详解）</td>
                          <td>Object</td>
                          <td>--</td>
                          <td>--</td>
                      </tr>
                      <tr>
                          <td>disabled</td>
                          <td>禁用</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>placeholder</td>
                          <td>信息提示</td>
                          <td>string</td>
                          <td>--</td>
                          <td>--</td>
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
                          <td>change</td>
                          <td>返回时间发生变化后的数据</td>
                          <td>已经格式化后的时间，比如 09:41:00</td>
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
        startTime:'',
        endTIme:''
      }
    },
    methods: {
      Selection(val){
        this.startTime=val
      },
      end(val){
        this.startTime=val
      },
      start(val){
        this.startTime=val
      }
    }
  };
</script>

