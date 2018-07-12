<template>
    <div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>multisearch API</h5>
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="well with-header  with-footer">
                    <div class="header bg-blue">
                        下拉选项配置项
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
                            <td>optiondata</td>
                            <td>表格数据对象</td>
                            <td>Array</td>
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
                        Option详解
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
                            <td>label</td>
                            <td>字段名</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>filed</td>
                            <td>字段</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>字段所对应的值</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>鼠标划过时是否显示对应的组件</td>
                            <td>boolean</td>
                            <td>true/false</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>字段所对应组件的类型</td>
                            <td>String</td>
                            <td>default/selected（下拉组件）/daterange（时间组件）/tree（树形组件）</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>option</td>
                            <td>字段对应组件所需参数</td>
                            <td>Object</td>
                            <td>举例：selected(下拉组件) { url: url_api + '/process/bzgl_common',param: {m: "bmbz"}}</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>TreeChild</td>
                            <td>仅仅作用于tree组件，选择节点时的回掉函数</td>
                            <td>Function(node)</td>
                            <td>node为当前结点,回调函数中需要返回异步加载所需参数，如下所示{url: url_api + '/process/bzgl_common',param: {m: "bmbz"}}</td>
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
                        搜藏夹配置项
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
                            <td>favoritedata</td>
                            <td>收藏夹所保存的搜索条件</td>
                            <td>Array</td>
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
                        favoritedata详解
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
                            <td>label</td>
                            <td>收藏夹名称</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>搜索框内的搜索条件</td>
                            <td>Object</td>
                            <td>---</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>