<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="well with-header  with-footer">
                    <div class="header bg-blue">
                        事件
                    </div>
                    <hd-timeline>
                        <hd-timeline-item color="green">
                            <hd-icon type="glyphicon glyphicon-plane sky" slot="dot"></hd-icon>
                            <span>发布里程碑版本</span>
                        </hd-timeline-item>
                        <hd-timeline-item color="gold">发布1.0版本</hd-timeline-item>
                        <hd-timeline-item>发布2.0版本</hd-timeline-item>
                        <hd-timeline-item>发布3.0版本</hd-timeline-item>
                    </hd-timeline>
                </div>
            </div>
        </div>
        <h5 class="row-title"><i class="fa fa-tags blue"></i>TimeLine-item API</h5>
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
                            <td>color</td>
                            <td width="10%">圆圈颜色</td>
                            <td>String</td>
                            <td>
                                'carbon','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','white','snow','whitesmoke','seashell','ivory','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','slate-gray','darkcarbon','blue','sky','azure','blueberry','palegreen','success','green','lightyellow','yellow','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'
                            </td>
                            <td>blue</td>
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
                        Slot
                    </div>
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>名字</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>默认插槽</td>
                            <td>表单域中可以放置各种类型的表单控件</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>