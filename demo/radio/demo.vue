<template>
  <div>
    <toolbar></toolbar>
    <div>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-purple">basic</div>
            <hd-radio v-model="a1" name="a" type="basic"  initvalue="Basic1">R</hd-radio>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">反向选择</div>
            <hd-radio  v-model="a2" name="b" type="inverted" initvalue="Inverted1">A</hd-radio>
          </div>
        </hd-col>
        </hd-row>
        <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-yellow">默认</div>
            <hd-radio  v-model="a3" name="c"  initvalue="Black1" >D</hd-radio>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-pink">colored-danger</div>
            <hd-radio v-model="a4" name="d" selected-color="danger" initvalue="Danger1">I</hd-radio>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blue">colored-blue</div>
            <hd-radio v-model="a5"name="e" selected-color="blue" initvalue="Blue1">O</hd-radio>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-green">colored-success</div>
            <hd-radio v-model="a6" name="f" selected-color="success" initvalue="Success1">ONE</hd-radio>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blueberry">colored-blueberry</div>
            <hd-radio  v-model="qq" name="g" selected-color="blueberry" initvalue="Bluebfgg">TWO</hd-radio>
          </div>
        </hd-col>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-pink">disabled</div>
            <hd-radio  v-model="ceshi" name="h" type="disabled"   initvalue="1" ></hd-radio>
          </div>
        </hd-col>
      </hd-row>
      <hd-row>
        <hd-col :cols="cols6">
          <div class="well with-header with-footer">
            <div class="header bordered-blueberry">colored-blueberry</div>
            <hd-radio-group   v-model="ss" color="blueberry">
              <hd-radio name="1"  initvalue="Blueberry1" >F</hd-radio>
              <hd-radio name="1"  initvalue="Blueberry2" >L</hd-radio>

              <hd-radio name="1"  initvalue="Blueberry4" >O</hd-radio>
              <hd-radio name="1"  initvalue="Blueberry5" >W</hd-radio>
              <hd-radio name="1"  initvalue="Blueberry6" >E</hd-radio>
              <hd-radio name="1"  initvalue="Blueberry7" >R</hd-radio>
            </hd-radio-group>
          </div>
        </hd-col>
      </hd-row>
        <hd-row>
            <hd-col :cols="cols6">
                <hd-widget flat>
                    <p slot="title">水平(默认排列)</p>
                    <p slot="body">
                        <hd-form type="default"  ref="ruleForm1">
                            <hd-row>
                                <hd-col :cols="cols6">
                                    <hd-form-item   label="Email">
                                        <hd-radio-group v-model="q1">
                                            <hd-radio  name="1"type="basic"    initvalue="blue1">r</hd-radio>
                                            <hd-radio  name="1"type="inverted" initvalue="blue2">a</hd-radio>
                                            <hd-radio  name="1"type="inverted" initvalue="blue3">d</hd-radio>
                                            <hd-radio  name="1"type="inverted" initvalue="blue4">i</hd-radio>
                                            <hd-radio  name="1"type="inverted" initvalue="blue5">o</hd-radio>
                                        </hd-radio-group>
                                    </hd-form-item>
                                </hd-col>
                                <hd-col :cols="cols6">
                                    <hd-form-item   label="Email">
                                        <hd-radio-group v-model="q2"  color="blue">
                                            <hd-radio  name="2" initvalue="Invertedq">g</hd-radio>
                                            <hd-radio  name="2" initvalue="Invertedw">r</hd-radio>
                                            <hd-radio  name="2" initvalue="Invertede">o</hd-radio>
                                            <hd-radio  name="2" initvalue="Invertedf">u</hd-radio>
                                            <hd-radio  name="2" initvalue="Invertedg">p</hd-radio>
                                        </hd-radio-group>
                                    </hd-form-item>
                                </hd-col>
                            </hd-row>
                        </hd-form>
                        <code>1、(1):inline="true" 水平显示;2、(2):inline="true"、 默认情况为垂直显示</code>
                        <code>3、 color="danger"用来控制整个按钮组的颜色;color的可选值包括:danger,success,black,blue,blueberry</code>
                    </p>
                </hd-widget>
            </hd-col>
            <hd-col :cols="cols6">
                <hd-widget flat>
                    <p slot="title">垂直排列</p>
                    <p slot="body">
                        <hd-form type="horizontal">
                            <hd-row>
                                <hd-col :cols="cols6">
                                    <hd-form-item >
                                        <hd-radio-group :inline="true" v-model="radio2" disabled="disabled">
                                            <hd-radio  name="7"  initvalue ="Inv23">7</hd-radio>
                                            <hd-radio  name="7"  initvalue="a33da">8</hd-radio>
                                            <hd-radio  name="7"  initvalue="Inveeerte" >9</hd-radio>
                                        </hd-radio-group>
                                    </hd-form-item>
                                </hd-col>
                                <hd-col :cols="cols6">
                                    <hd-form-item>
                                        <hd-radio-group :inline="true" v-model="radio1">
                                            <hd-radio  name="6" selectedColor="danger" initvalue ="Inverted">4</hd-radio>
                                            <hd-radio  name="6" selectedColor="danger" initvalue="ada">5</hd-radio>
                                            <hd-radio  name="6" selectedColor="danger" initvalue="Inverte" >6</hd-radio>
                                        </hd-radio-group></hd-form-item>
                                </hd-col>
                            </hd-row>
                        </hd-form>
                    </p>
                </hd-widget>
            </hd-col>
        </hd-row>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>RadioGroup API</h5>
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
                            <td width="15%">id</td>
                            <td width="15%">当前组件唯一的id</td>
                            <td width="20%">[String,Number]</td>
                            <td width="40%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td width="15%">inline</td>
                            <td>按钮组的排列方式</td>
                            <td>[Boolean]</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>按钮组中被选中按钮的颜色</td>
                            <td>[String]</td>
                            <td>blue,blueberry,danger,black,success</td>
                            <td>black</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Radio API</h5>
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
                            <td width="40%">basic,inverted,disabled</td>
                            <td width="10%">basic</td>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>当前组件唯一的id</td>
                            <td>[String,Number]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>selected-color</td>
                            <td>当前按钮被选中的颜色</td>
                            <td>[String]</td>
                            <td>blue,blueberry,danger,black,success</td>
                            <td>black</td>
                        </tr>
                        <tr>
                            <td>initvalue</td>
                            <td>当前组件的值(选中状态的值，相当于input里的value属性)</td>
                            <td>[String,Number]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>使用 name 属性定义的单选按钮组 (具有相同名称的单选按钮 属于同一组)。</td>
                            <td>[String]</td>
                            <td>-</td>
                            <td>-</td>
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
  export default {
    data:function() {
      return{
        ss:"Blueberry5",
        ceshi:"1",
        qq:'',
        qw:'',
        a1:'',
        a2:'',
        a3:'',
        a4:'',
        a5:'',
        a6:'',
        cols6:[6],
       radio1:'ada',
        radio2:'Inv23',
        q1:[],
        q2:[]
      }
    }
  }
</script>

