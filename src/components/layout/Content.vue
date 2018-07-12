<template>
  <div class="page-content">
    <!-- Page Breadcrumb -->
    <div class="page-breadcrumbs">
      <ul class="breadcrumb">
        <li class="active" style="font-size:16px;font-weight: bolder;">合理化建议</li>
        <li>
          <a href="#">班组管理</a>
        </li>
      </ul>
      <div class="page-breadcrumbs-search col-sm-6">
        <!--span class="input-icon">
            <input type="text" class="form-control" data-role="tagsinput" placeholder="请输入查询条件" />
            <i class="glyphicon glyphicon-search lightgray"></i>
        </span-->
        <input type="text" class="form-control" data-role="tagsinput" placeholder="请输入查询条件" />
      </div>
    </div>
    <!-- /Page Breadcrumb -->
    <!-- Page Header -->
    <div class="page-header position-relative">
      <div class="page-header-buttons col-sm-6">
        <a href="#" class="btn btn-primary btn-circle btn-xs" data-toggle="tooltip" data-original-title="Compose">
          <i class="glyphicon glyphicon-plus"></i>
          <span class="button-text">新建</span>
        </a>
        <ul>
          <li>
            <a class="btn btn-circle btn-xs" data-toggle="tooltip" data-original-title="Options">
              <i class="fa fa-angle-down"></i>
              <span class="button-text">更多</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="page-header-views col-sm-5 pull-right">
        <div class="pull-right">
          <ul>
            <li>
              <a class="btn btn-circle btn-xs" href="#">
                <i class="glyphicon glyphicon-arrow-left"></i>
                <span class="button-text">上一条</span>
              </a>
            </li>
            <li>
              <a class="btn btn-circle btn-xs" href="#">
                <i class="glyphicon glyphicon-arrow-right"></i>
                <span class="button-text">下一条</span>
              </a>
            </li>
            <li>
              <a class="btn btn-circle btn-xs" href="#">
                <i class="glyphicon glyphicon-th-large"></i>
                <span class="button-text">卡片</span>
              </a>
            </li>
            <li>
              <a class="btn btn-circle btn-xs" href="#">
                <i class="glyphicon glyphicon-th-list"></i>
                <span class="button-text">列表</span>
              </a>
            </li>
            <li>
              <a class="btn btn-circle btn-xs sidebar-toggler" href="#">
                <i class="glyphicon glyphicon-resize-horizontal"></i>
                <span class="button-text">拉伸</span>
              </a>
            </li>
            <li>
              <a class="btn btn-circle btn-xs refresh" id="refresh-toggler" href="">
                <i class="glyphicon glyphicon-refresh"></i>
                <span class="button-text">刷新</span>
              </a>
            </li>
            <li>
              <a class="btn btn-circle btn-xs fullscreen" id="fullscreen-toggler" href="#">
                <i class="glyphicon glyphicon-fullscreen"></i>
                <span class="button-text">全屏</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <!-- Page Body -->
    <div class="page-body">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="widget margin-left-4">
            <div class="widget-body no-padding">
              <table class="table table-bordered table-hover table-striped collection-table" id="simpledatatable">
                <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </th>
                  <th>
                    编号
                  </th>
                  <th>
                    主题
                  </th>
                  <th>
                    类别
                  </th>
                  <th>
                    部门
                  </th>
                  <th>
                    班组
                  </th>
                  <th>
                    人员
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">W0742016001</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox">
                      <span class="text"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">hlhjy</a>
                  </td>
                  <td>
                    这是个合理化建议的主题
                  </td>
                  <td>
                    这是类别
                  </td>
                  <td>
                    这是部门
                  </td>
                  <td>
                    这是班组
                  </td>
                  <td>
                    这是人员
                  </td>
                </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Body -->
    <!-- Page Footer -->
    <div class="page-footer col-xs-12">
      <p>Copyright <i class="glyphicon glyphicon-copyright-mark"></i><a href="#">青岛华迪科技有限公司</a></p>
    </div>
    <!-- /Page Footer -->
  </div>
</template>
