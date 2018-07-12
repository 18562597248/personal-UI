<template>
    <div>
        <div class="row" style="margin: 0">
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <hd-widget>
                    <p slot="title">多选可查询</p>
                    <hd-select :multipled="multipled" placeholder="请选择" :readonly="readonly" v-model="value1" slot="body">
                        <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                    </hd-select>
                </hd-widget>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <hd-widget>
                    <p slot="title">单选可查询</p>
                    <hd-select :multipled="multipled1" placeholder="请选择" :readonly="readonly" width="200" v-model="value2" slot="body">
                        <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                    </hd-select>
                </hd-widget>
            </div>
        </div>
        <div class="row" style="margin: 0">
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <hd-widget>
                    <p slot="title">多选不可查询</p>
                    <hd-select :multipled="multipled" placeholder="请选择" width="90%" v-model="value3" slot="body">
                        <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                    </hd-select>
                </hd-widget>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <hd-widget>
                    <p slot="title">单选不可查询</p>
                    <hd-select :multipled="multipled1" placeholder="请选择" v-model="value4" slot="body">
                        <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                    </hd-select>
                </hd-widget>
            </div>
        </div>
        <div class="row" style="margin: 0">
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <hd-widget>
                    <p slot="title">多选disabled</p>
                    <hd-select :multipled="multipled" placeholder="请选择" v-model="value5" disabled slot="body">
                        <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                    </hd-select>
                </hd-widget>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <hd-widget>
                    <p slot="title">单选disabled</p>
                    <hd-select :multipled="multipled1" placeholder="请选择" v-model="value6" disabled slot="body">
                        <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
                    </hd-select>
                </hd-widget>
            </div>
        </div>
        <!-- <div class="row" style="margin: 0">
           <div class="col-lg-6 col-sm-6 col-xs-6">
             <hd-widget>
               <p slot="title">分组</p>
               <hd-select :multipled="multipled1" placeholder="请选择" v-model="value5"  slot="body">
                 <hd-option-group
                   v-for="group in options3"
                   :label="group.label">
                    <hd-option v-for="(item,index) in group.options" :item="item" :index="index"></hd-option>
                 </hd-option-group>
               </hd-select>
             </hd-widget>
           </div>
           <div class="col-lg-6 col-sm-6 col-xs-6">
             <hd-widget>
               <p slot="title">分组</p>
               <hd-select :multipled="multipled1" placeholder="请选择" v-model="value6" disabled slot="body">
                 <hd-option v-for="(item,index) in options" :item="item" :index="index"></hd-option>
               </hd-select>
             </hd-widget>
           </div>
         </div>-->
        <div class="row" style="margin: 0">
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <div>多选可查询选中的值为：{{value1}}</div>
                <div>多选不可查询选中的值为：{{value3}}</div>
                <div>多选disabled选中的值为：{{value5}}</div>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-6">
                <div>单选可查询选中的值为：{{value2}}</div>
                <div>单选不可查询选中的值为：{{value4}}</div>
                <div>单选disabled选中的值为：{{value6}}</div>
            </div>
        </div>

        <h5 class="row-title"><i class="fa fa-tags blue"></i>Select API</h5>
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
                            <td width="10%">[string，number]</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>multipled</td>
                            <td>选择器是否多选</td>
                            <td>[boolean]</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>选择器中的input是否为只读</td>
                            <td>[boolean]</td>
                            <td>true,false</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>radiused</td>
                            <td>选择器是否为圆角</td>
                            <td>[boolean]</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>选择器是否禁用</td>
                            <td>[boolean]</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>选择器input的name属性</td>
                            <td>[string]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位符</td>
                            <td>[string]</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>选择器的宽度</td>
                            <td>[number，string]</td>
                            <td>-</td>
                            <td>100%</td>
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
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回参数</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width="25%">change</td>
                            <td width="50%">当选择或删除选项时触发的事件</td>
                            <td width="25%">value</td>
                        </tr>
                        <tr>
                            <td>remove</td>
                            <td>当删除选项时触发的事件</td>
                            <td>被删除的value值</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>Option API</h5>
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
                            <td width="10%">value</td>
                            <td width="20%">选择器选项的值</td>
                            <td width="10%">[string，number，object]</td>
                            <td width="50%">-</td>
                            <td width="10%">-</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>选择器选项显示的文本</td>
                            <td>[string，number]</td>
                            <td>-</td>
                            <td>-</td>
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
        data(){
            return{
                multipled:true,
                multipled1:false,
                readonly:false,
                options:[
                    {text:'选项1',value:'1',color:'yellow'},
                    {text:'五四广场',value:'2'},
                    {text:'李村',value:'3'},
                    {text:'李家庄',value:'4'},
                    {text:'火车站',value:'5'},
                    {text:'火车北站',value:'6'},
                    {text:'鲁迅公园',value:'7'},
                    {text:'选择2',value:'8'},
                    {text:'鲁迅广场',value:'9'}
                ],
                options3: [{
                    label: '热门城市',
                    options: [{
                        value: 'Shanghai',
                        label: '上海'
                    }, {
                        value: 'Beijing',
                        label: '北京'
                    }]
                }, {
                    label: '城市名',
                    options: [{
                        value: 'Chengdu',
                        label: '成都'
                    }, {
                        value: 'Shenzhen',
                        label: '深圳'
                    }, {
                        value: 'Guangzhou',
                        label: '广州'
                    }, {
                        value: 'Dalian',
                        label: '大连'
                    }]
                }],
                value1:[],
                value2:['8'],
                value3:['2','4','5'],
                value4:['8'],
                value5:['1','4','7'],
                value6:['9']
            }
        }
    }
</script>
