<template>
  <div>
    <h5 class="row-title"><i class="fa fa-tags blue"></i>日期选择器1.0版本</h5>
    <div>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-pink">星期天是第一天</div>
            <div>
              <hd-date-picker format="YYYY-M-D" value="2015-9-5" :weekend="true"></hd-date-picker>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-blue">星期一是第一天</div>
            <div>
              <hd-date-picker format="YYYY-M-D" value="2015-9-5" ></hd-date-picker>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-pink">Bootstrap Date Picker</div>
            <div>
              <hd-date-picker :weekend="true" format="YYYY-MM-DD"  :readonly="true" :value="value" ref="day">
                <button class="applyBtn btn btn-sm btn-success" type="button" @click="show('day',-1)">昨天</button>
                <button class="applyBtn btn btn-sm btn-success" type="button" @click="show('day',1)">明天</button>
              </hd-date-picker>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-blue">Bootstrap Date Picker</div>
            <div>
              <hd-date-picker  format="YYYY-MM-DD"  :readonly="true" ref="week" :value="value">
                <button class="applyBtn btn btn-sm btn-success" type="button" @click="show('week',-7)">一周前</button>
                <button class="applyBtn btn btn-sm btn-success" type="button" @click="show('week',7)">一周后</button>
              </hd-date-picker>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-24">
          <div class="well with-header">
            <div class="header bordered-pink">Bootstrap Date Picker</div>
            <div>
              <hd-date-picker :readonly="true"  name="date" :period="true" :weekend="true"></hd-date-picker>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-24">
          <div class="well with-header">
            <div class="header bordered-pink">Bootstrap Date Picker</div>
            <div>
              <hd-date-picker  name="date" :period="true"   value="2015-04-05至2016-04-05"></hd-date-picker>
            </div>
          </div>
        </div>
      </div>
     <div class="row">
            <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="well with-header">
                    <div class="header bordered-pink">日期时间</div>
                    <div>
                        <hd-date-time-picker  v-model="value1" ref="day">
                            <hd-button type="hdprimary"  @click="show1('day',0)">今天</hd-button>
                        </hd-date-time-picker>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>日期选择器2.0版本</h5>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-pink">星期天是第一天</div>
            <div>
              <date type="date" :options="options1" placeholder="选择日期"></date>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-blue">星期一是第一天</div>
            <div>
              <date type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></date>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-pink">星期天是第一天</div>
            <div>
              <date type="date" :options="options1" placeholder="选择日期" ></date>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-blue">星期一是第一天</div>
            <div>
              <date type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期"></date>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-pink">Bootstrap Date Picker</div>
            <div>
              <date type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）"></date>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="well with-header">
            <div class="header bordered-blue">Bootstrap Date Picker</div>
            <div>
              <date v-model="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期"></date>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-24">
          <div class="well with-header">
            <div class="header bordered-pink">Bootstrap Date Picker</div>
            <div>
              <date type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）"></date>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-24">
          <div class="well with-header">
            <div class="header bordered-pink">Bootstrap Date Picker</div>
            <div>
              <date type="year" placeholder="选择年" placement="top"></date>
            </div>
          </div>
        </div>
      </div>
    </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>日期选择器1.0版本 API</h5>
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
                          <td>时间日期格式化</td>
                          <td>string</td>
                          <td>yyyy-MM-dd/yyyy-M-dd/yyyy-MM-d/yyyy-M-d</td>
                          <td>yyyy-MM-dd</td>
                      </tr>
                      <tr>
                          <td>value</td>
                          <td>用户输入默认显示的日期</td>
                          <td>string</td>
                          <td></td>
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
                          <td>weekend</td>
                          <td>每周显示的第一天</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false（周一是第一天）</td>
                      </tr>
                      <tr>
                          <td>period</td>
                          <td>是否显示时间间隔</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
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
      <div class="row">
          <div class="col-xs-12 col-sm-12">
              <div class="well with-header  with-footer">
                  <div class="header bg-blue">
                      slot
                  </div>
                  <table class="table table-bordered table-hover">
                      <thead>
                      <tr>
                          <th>名字</th>
                          <th>说明</th>
                          <th>类型</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>默认插槽</td>
                          <td>放置快捷方式</td>
                          <td>string</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>日期选择器2.0版本 API</h5>
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
                          <td>时间日期格式化</td>
                          <td>string</td>
                          <td>yyyy年，MM月，dd日可自由组合</td>
                          <td>date||daterange：yyyy-MM-dd；year：yyyy；month：yyyy-MM</td>
                      </tr>
                      <tr>
                          <td>type</td>
                          <td>类型</td>
                          <td>string</td>
                          <td>date、daterange、datetime、datetimerange、year、month、week</td>
                          <td>date</td>
                      </tr>
                      <tr>
                          <td>value</td>
                          <td>用户输入默认显示的日期（使用v-model返回的是日期类型）当用type=daterange时，value应传入数组</td>
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
                      Options详解
                  </div>
                  <table class="table table-bordered table-hover">
                      <thead>
                      <tr>
                          <th>参数</th>
                          <th>说明</th>
                          <th>类型</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>shortcuts</td>
                          <td>快捷内容：
                              text | String：显示的标题
                              value | Function：返回指定的日期
                          </td>
                          <td>Array</td>
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
                          <td>返回日期发生变化后的数据</td>
                          <td>如：2017-06-08（string类型）</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  import date from 'components/date/utils/date-picker';
  export default {
    data(){
      return {
        value:'',
        value1:"2015-09-05 11:29:03",
        value2: ['2016-01-01', '2016-02-15'],
        options1: {
          shortcuts: [
            {
              text: '今天',
              value () {
                return new Date();
              }
            },
            {
              text: '昨天',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              }
            },
            {
              text: '一周前',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              }
            }
          ]
        },
        options2: {
          shortcuts: [
            {
              text: '最近一周',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '最近一个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '最近三个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        }
      }
    },
    components: {
      date
    },
    methods:{
      show(val1,val){
        var now=new Date()
        now.setDate(now.getDate()+val);
        this.value=this.$refs[val1].stringify(now)
      },
        show1(val1,val){
            var now=new Date()
            now.setDate(now.getDate()+val);
            this.value=this.$refs[val1].stringify(now) +' '+now.toLocaleTimeString();
        }
    }
  };
</script>

