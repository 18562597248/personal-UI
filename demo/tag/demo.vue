<template>
  <div>
    <h5 class="row-title before-sky">Tags</h5>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">加边框的tag</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="collapse in">
              <hd-tag
                v-for="tag in tags"
                :type="tag.type"
                :border="true"
                @close="handleClose(tag)"
              >
                {{tag.name}}
              </hd-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">不加边框的tag</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="collapse in">
              <hd-tag
                v-for="tag in tags"
                :closable="true"
                :type="tag.type"
                @close="handleClose(tag)"
              >
                {{tag.name}}
              </hd-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">加底色的tag</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="collapse in">
              <hd-tag
                v-for="tag in tags1"
                :type="tag.type"
                :border="true"
                :bg-color="tag.bgcolor"
                @close="handleClose(tag)"
              >
                {{tag.name}}
              </hd-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">不能删除的tag</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="collapse in">
              <hd-tag
                v-for="tag in tags"
                :type="tag.type"
                @close="handleClose(tag)"
              >
                {{tag.name}}
              </hd-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">边框加粗</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="collapse in">
              <hd-tag
                v-for="tag in tags"
                :type="tag.type"
                :border="true"
                :border-heavy="true"
                border-color-gg="yellow"
                @close="handleClose(tag)"
              >
                {{tag.name}}
              </hd-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">input框内显示tag</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="bootstrap-tagsinput">
              <hd-tag
                v-for="tag in tags"
                :type="tag.type"
                :border-heavy="true"
                bg-color="blue"
                :closable="true"
                @close="handleClose(tag)"
              >
                {{tag.name}}
              </hd-tag>
              <span class="tag label label-info">Amsterdam<span data-role="remove"></span></span>
              <input size="8" type="text" placeholder="Add tags">
            </div>
        </div>
        </div>
      </div>
    </div>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Tag API</h5>
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
                          <td>type</td>
                          <td>主题</td>
                          <td>string</td>
                          <td>default/primary/gray/success/warning/danger</td>
                          <td>default</td>
                      </tr>
                      <tr>
                          <td>color</td>
                          <td>字体颜色</td>
                          <td>string</td>
                          <td>
                              'white','blue','sky','azure','palegreen','yellow','darkorange','magenta','purple','red','maroon'
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>bg-color</td>
                          <td>背景色</td>
                          <td>string</td>
                          <td>
                              'azure','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','white','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'
                          </td>
                          <td>white</td>
                      </tr>
                      <tr>
                          <td>border</td>
                          <td>是否加边框</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>border-color</td>
                          <td>边框色</td>
                          <td>string</td>
                          <td>'blue','sky','azure','palegreen','yellow','darkorange','magenta','purple','red','maroon'
                          </td>
                          <td>blue</td>
                      </tr>
                      <tr>
                          <td>border-heavy</td>
                          <td>是否给边框加粗</td>
                          <td>boolean</td>
                          <td>true/false</td>
                          <td>false</td>
                      </tr>
                      <tr>
                          <td>closable</td>
                          <td>是否可关闭</td>
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
                      事件
                  </div>

                  <table class="table table-bordered table-hover">
                      <thead>
                      <tr>
                          <th>事件名称</th>
                          <th>说明</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>close</td>
                          <td>关闭tag时触发的事件</td>
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
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }
        ],
        tags1: [
          { name: '标签一', type: 'default',bgcolor:'blue' },
          { name: '标签二', type: 'gray', bgcolor:'blue'},
          { name: '标签三', type: 'primary' ,bgcolor:'yellow'},
          { name: '标签四', type: 'success',bgcolor:'red' },
          { name: '标签五', type: 'warning',bgcolor:'blue' },

          { name: '标签六', type: 'danger',bgcolor:'blue' }
        ]
      };
    },
    methods:{
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      }
    }

  }
</script>

