<template>
  <div>
    <hd-row>
      <hd-col :cols="cols4">
        <div class="well with-header with-footer">
          <div class="header bordered-purple">One Handle Upper</div>
          <hd-slider size="sm" orientation="horizontal"   v-model="value1" color="blueberry" reversal  disabled></hd-slider>
          <hd-slider size="xs" orientation="horizontal"   v-model="value2" color="primary" reversal :min=0  :max=100></hd-slider>
          <hd-slider size="lg" orientation="horizontal"   v-model="value3" color="warning" reversal :min=0  :max=100></hd-slider>
          <hd-slider size="xl" orientation="horizontal"   v-model="value4" color="green" reversal :min=0  :max=100></hd-slider>
          <hd-slider size="lg" orientation="horizontal"   v-model="value9" color="sky" reversal :min=0  :max=100></hd-slider>
        </div>
      </hd-col>
      <hd-col :cols="cols4">
        <div class="well with-header with-footer">
          <div class="header bordered-purple">Slider with One Handle</div>
          <hd-slider size="sm" orientation="horizontal"  v-model="value5" color="darkorange" :step=1 :min=0  :max=100></hd-slider>
          <hd-slider size="xs" orientation="horizontal"  v-model="value6" color="success" :step=1  :min=0  :max=100></hd-slider>
          <hd-slider size="xs" orientation="horizontal"  v-model="value7" color="magenta" :step=1  :min=0  :max=100></hd-slider>
          <hd-slider size="lg" orientation="horizontal"  v-model="value8" color="purple"  :step=1  :min=0  :max=100></hd-slider>
          <hd-slider size="xl" orientation="horizontal"  v-model="value10"color="azure"  :step=1 :min=0  :max=100></hd-slider>
        </div>
      </hd-col>
      <hd-col :cols="cols4">
        <div class="well with-header with-footer">
          <div class="header bordered-purple">Sample Color Picker</div>
          <hd-slider size="sm" orientation="vertical"   v-model="value16" color="blue"  :min=0  :max=100></hd-slider>
          <hd-slider size="sm" orientation="vertical"   v-model="value17" color="maroon" :min=0  :max=100 ></hd-slider>
          <hd-slider size="sm" orientation="vertical"   v-model="value18" color="magenta"  :min=0  :max=100></hd-slider>
          <hd-slider size="sm" orientation="vertical"   v-model="value19" color="palegreen" :min=0  :max=100></hd-slider>
          <hd-slider size="sm" orientation="vertical"   v-model="value20" color="orange"  :min=0  :max=100></hd-slider>
        </div>
      </hd-col>
    </hd-row>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Slider API</h5>
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
                          <td width="15%">value</td>
                          <td width="15%">默认取值(当数据类型为Array时，数组长度只能为2，并且两个值一定不相等；当数据类型为Number,数值可以是整数也可以是小数)</td>
                          <td width="20%">[Array,Number]</td>
                          <td width="40%">-</td>
                          <td width="10%">-</td>
                      </tr>
                      <tr>
                          <td>min</td>
                          <td>最小值(数值可为整数，也可为小数)</td>
                          <td>[Number]</td>
                          <td>-</td>
                          <td>0</td>
                      </tr>
                      <tr>
                          <td>max</td>
                          <td>最大值(数值可为整数，也可为小数)</td>
                          <td>[Number]</td>
                          <td>-</td>
                          <td>100</td>
                      </tr>
                      <tr>
                          <td>disabled</td>
                          <td>禁止使用</td>
                          <td>[Boolean]</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>size</td>
                          <td>组件大小</td>
                          <td>[String]</td>
                          <td>sm,xs,lg,xl</td>
                          <td>xs</td>
                      </tr>
                      <tr>
                          <td>color</td>
                          <td>组件颜色</td>
                          <td>[String]</td>
                          <td>
                              darkorange,silver,blue,inverse,sky,azure,palegreen,maroon,purple,magenta,orange,blueberry，warning,info,danger,success,primary
                          </td>
                          <td>primary</td>
                      </tr>
                      <tr>
                          <td>step</td>
                          <td>步长</td>
                          <td>[Number]</td>
                          <td>-</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>reversal</td>
                          <td>滑块区域显示的位置</td>
                          <td>[Boolean]</td>
                          <td>true,false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>orientation</td>
                          <td>滑块显示方向</td>
                          <td>[String]</td>
                          <td> horizontal，vertical</td>
                          <td>horizontal</td>
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
                          <td>事件名称</td>
                          <td>说明</td>
                          <td>回调参数</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td width="45">change</td>
                          <td width="30">值改变时触发</td>
                          <td width="25%">改变后的值</td>
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
    data: function () {
      return {
        value1: 20,
        value2: 30,
        value3: 35,
        value4: 55,
        value5: 20,
        value6: 40,
        value7: 60,
        value8: 45,
        value9: 48,
        value10: 52,
        value11: [38, 76],
        value12: [42, 84],
        value13: [15, 67],
        value14: [25, 69],
        value15: [15, 92],
        value16:30,
        value17:45,
        value18:55,
        value19:67,
        value20:72,
        value21:[45,85],
        cols3: [3],
        cols4: [4],
        cols6: [6]
      }
    }
  }
</script>
