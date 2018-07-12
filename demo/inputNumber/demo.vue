<template>
  <div class="">
    <div class="page-body">
      <h5 class="row-title"><i class="fa fa-tags blue"></i>InputNmuber DEMO</h5>
      <hd-row>
        <hd-col :cols="cols12">
          <hd-row>
            <hd-col :cols="cols6">
              <hd-widget flat>
                <p slot="title">Input Number In Form</p>
                <p slot="body">
                  <hd-form type="default" >
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="Number">
                          <hd-input-number :value="0" :max="Number.POSITIVE_INFINITY" :min="Number.NEGATIVE_INFINITY" :step="1" :readonly="false" :disabled="false"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="Time">
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                  </hd-form>
                </p>
              </hd-widget>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols6">
              <hd-widget flat>
                <p slot="title">Input Number</p>
                <p slot="body">
                  <hd-form type="default" >
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="value=1024">
                          <hd-input-number :value="1024" :max="Number.POSITIVE_INFINITY" :min="Number.NEGATIVE_INFINITY" :step="1" :readonly="false" :disabled="false"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="step=123">
                          <hd-input-number :value="0" :max="Number.POSITIVE_INFINITY" :min="Number.NEGATIVE_INFINITY" :step="123" :readonly="false" :disabled="false"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                  </hd-form>
                </p>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols6">
              <hd-widget flat>
                <p slot="title">Input Number</p>
                <p slot="body">
                  <hd-form type="default" >
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="max=99">
                          <hd-input-number :value="0" :max="99" :min="Number.NEGATIVE_INFINITY" :step="1" :readonly="false" :disabled="false"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="min=-99">
                          <hd-input-number :value="0" :max="Number.POSITIVE_INFINITY" :min="-99" :step="1" :readonly="false" :disabled="false"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                  </hd-form>
                </p>
              </hd-widget>
            </hd-col>
          </hd-row>
          <hd-row>
            <hd-col :cols="cols6">
              <hd-widget flat>
                <p slot="title">Input Number</p>
                <p slot="body">
                  <hd-form type="default" >
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="readonly">
                          <hd-input-number :value="0" :max="99" :min="Number.NEGATIVE_INFINITY" :step="1" readonly :disabled="false"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="disabled">
                          <hd-input-number :value="0" :max="Number.POSITIVE_INFINITY" :min="-99" :step="1" :readonly="false" disabled></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                  </hd-form>
                </p>
              </hd-widget>
            </hd-col>
            <hd-col :cols="cols6">
              <hd-widget flat>
                <p slot="title">Input Number</p>
                <p slot="body">
                  <hd-form type="default" >
                    <hd-row>
                      <hd-col :cols="cols12">
                        <hd-form-item   rule="undefined" label="@change">
                          <hd-input-number :value="0" :max="Number.POSITIVE_INFINITY" :min="-99" :step="1" :readonly="false" :disabled="false" @change="console_result"></hd-input-number>
                        </hd-form-item>
                      </hd-col>
                    </hd-row>
                  </hd-form>
                </p>
              </hd-widget>
            </hd-col>
          </hd-row>
        </hd-col>
      </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>InputNumber API</h5>
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
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>默认值</td>
                            <td>[Number]</td>
                            <td>浮点数</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>设置计数器允许的最小值</td>
                            <td>[Number]</td>
                            <td>浮点数</td>
                            <td>NEGATIVE_INFINITY</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>设置计数器允许的最大值</td>
                            <td>[Number]</td>
                            <td>浮点数</td>
                            <td>POSITIVE_INFINITY</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>计数器步长</td>
                            <td>[Number]</td>
                            <td>浮点数</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用计数器</td>
                            <td>[Boolean]</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>当前组件是否能手动输入。readonly=true时不能手动输入</td>
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
                        事件
                    </div>
                    <table class="table table-bordered table-hover" style="max-width:75em">
                        <thead>
                        <tr>
                            <th>事件说明</th>
                            <th>说明</th>
                            <th>回调参数</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="10%">change</td>
                            <td width="20%">当绑定值变化时触发的事件</td>
                            <td width="10%">newVal；oldVal</td>
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
        cols1:[1],
        cols2:[2],
        cols3:[3],
        cols4:[4],
        cols5:[5],
        cols6:[6],
        cols7:[7],
        cols8:[8],
        cols9:[9],
        cols10:[10],
        cols11:[11],
        cols12:[12],
        tpAry:[1],
        tpAry1_:[10]
      }
    },
    computed:{
      tpAry1(){
        return this.tpAry1_
      }
    },
    mounted() {
//      this.initEvent();
    },
    methods:{
      tiao(){
        this.tiao_=!this.tiao_;
        if(this.tiaopi_){if(0<this.tpAry1_[0]){this.tpAry1_[0]-=1;}}
        if(this.tiao_&&this.pi_){this.tiaopi_=true;}else{this.tiaopi_=false;}
      },
      pi(){
        this.pi_=!this.pi_;
        if(this.tiaopi_){if(this.tpAry1_[0]<11){this.tpAry1_[0]+=1;}}
        if(this.tiao_&&this.pi_){this.tiaopi_=true;}else{this.tiaopi_=false;}
      },
      leftclick(){
        this.$refs.aaa.hide();
      },
      rightclick(){
        this.$refs.aaa.show();
      },
      console_result(val,oldval){
        console.log('change事件: 当前值='+val);
      }
    }
  }
</script>
