<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="well with-header  with-footer">
                    <div class="header bg-blue">
                        默认效果
                    </div>
                    <hd-page-bar ref="page"  style="position: relative;"></hd-page-bar>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="well with-header  with-footer">
                    <div class="header bg-blue">
                        menu，调整不显示
                    </div>
                    <hd-page-bar  :noJump="true" :noMenu="true" style="position: relative;"></hd-page-bar>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>PageBar API</h5>
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
                            <td>url</td>
                            <td width="10%">业务流路径</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>param</td>
                            <td width="10%">业务流分支</td>
                            <td>Object</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>action</td>
                            <td width="10%">要分发的action</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>action</td>
                            <td width="10%">要分发的action</td>
                            <td>String</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>perSize</td>
                            <td width="10%">显示分页数</td>
                            <td>Number</td>
                            <td>--</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>menu</td>
                            <td width="10%">每页显示记录数下拉配置</td>
                            <td>Array</td>
                            <td>--</td>
                            <td>[10, 20, 50,100]</td>
                        </tr>
                        <tr>
                            <td>noJump</td>
                            <td width="10%">配置跳转是否显示</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>noMenu</td>
                            <td width="10%">配置每页显示下拉配置是否显示</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>fixed</td>
                            <td width="10%">分页组件是否显示在浏览器底部</td>
                            <td>Boolean</td>
                            <td>true,false</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>pageLimit</td>
                            <td width="10%">分页组件默认显示条数</td>
                            <td>Number</td>
                            <td>--</td>
                            <td>20</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>