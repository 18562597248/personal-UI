<template>
  <div>
    <h5 class="row-title before-sky"><hd-icon type="glyphicon glyphicon-plane sky"></hd-icon>Icon DEMO</h5>
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">input框包含图标的情况</span>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <div class="collapse in">
              <form role="form">
                <span class="widget-caption">默认的icon</span>
                <div class="form-group">
              <span class="input-icon icon-right">
                <input type="text" class="form-control input-xs">
                <hd-icon type="fa fa-times " color="purple"></hd-icon>
              </span>
                </div>
                <span class="widget-caption">带背景色的icon</span>
                <div class="form-group">
              <span class="input-icon icon-right">
                <input type="text" class="form-control">
                <hd-icon type="fa fa-user"  bg-color="blue"></hd-icon>
              </span>
                </div>
                <span class="widget-caption">圆形的icon</span>
                <div class="form-group">
              <span class="input-icon">
                <input type="text" class="form-control input-xl">
                <hd-icon type="glyphicon glyphicon-earphone" circular color="darkpink"></hd-icon>
              </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <div class="widget">
          <div class="widget-header">
            <span class="widget-caption">button包含图标的情况</span>
            <hd-button shape="circle" size="sm"><hd-icon type="glyphicon glyphicon-plane sky"></hd-icon></hd-button>
            <hd-button  size="sm"><hd-icon type="glyphicon glyphicon-plane sky"></hd-icon></hd-button>
          </div>
          <div class="widget-body bordered-top bordered-pink">
            <span class="widget-caption">icon的点击事件</span>
            <form role="form">
              <div class="form-group">
              <span class="input-icon icon-right">
                <input type="text" class="form-control input-xl">
                <hd-icon type="glyphicon glyphicon-search" circular bg-color="blue" @click="search()"></hd-icon>
              </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hd-row>
      <hd-col :cols="[8,12,12]">
        <hd-widget header-bordered-color-bottom="pink">
          <span slot="title">自己公司的字图库</span>
          <hd-row slot="body" class="fontawesome-icon-list">
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-plus"></hd-icon> hd-plus
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-trash"></hd-icon> hd-trash
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-pencil"></hd-icon> hd-pencil
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-search"></hd-icon> hd-search
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-floppy-disk"></hd-icon> hd-floppy-disk
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-th-list"></hd-icon> hd-th-list
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-remove"></hd-icon> hd-remove
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-share"></hd-icon> hd-share
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-repeat"></hd-icon> hd-repeat
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-fullscreen"></hd-icon> hd-fullscreen
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-resize-horizontal"></hd-icon> hd-resize-horizontal
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-arrow-left"></hd-icon> hd-arrow-left
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-arrow-right"></hd-icon> hd-arrow-right
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-save-add"></hd-icon> hd-save-add
            </hd-col>
            <hd-col :cols="[3,4,4]" class="fa-hover">
              <hd-icon type="hd-icon hd-question"></hd-icon> hd-question
            </hd-col>
          </hd-row>
        </hd-widget>
      </hd-col>
    </hd-row>
      </br>
      </br>
      </br>
      </br>
      <h5 class="row-title"><i class="fa fa-tags blue"></i>Icon API</h5>
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
                          <td><code>type(必传参数)</code></td>
                          <td>图标的名称</td>
                          <td>string</td>
                          <td>详见bootstrap模板中图标的class样式</td>
                          <td>———</td>
                      </tr>
                      <tr>
                          <td>color</td>
                          <td>颜色</td>
                          <td>string</td>
                          <td>
                              'blue','sky','azure','palegreen','yellow','darkorange','magenta','purple','red','maroon','lightcarbon'
                          </td>
                          <td>lightcarbon</td>
                      </tr>
                      <tr>
                          <td>bg-color</td>
                          <td>背景色</td>
                          <td>string</td>
                          <td>
                              'darkcarbon','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','white','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'
                          </td>
                          <td>darkcarbon</td>
                      </tr>
                      <tr>
                          <td>circular</td>
                          <td>是否加圆型边框</td>
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
                          <td>click</td>
                          <td>点击图标时触发的事件</td>
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
    methods:{
      search(){
        console.log(JSON.stringify(this.pySegSort(["我","不","懂","爱","啊","按","已","呀","选","张"])))
      },
      pySegSort(arr) {
        if(!String.prototype.localeCompare) return;
        var letters = "*abcdefghjklmnopqrstwxyz".split('');
        var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
        var segs = [];
        var curr;
        letters.forEach(function(letter,i){
          curr = {letter: letter, data:[]};
          arr.forEach(function(val) {
            if((!zh[i-1] || zh[i-1].localeCompare(val) <= 0) && val.localeCompare(zh[i]) == -1) {
              curr.data.push(val);
            }
          });
          if(curr.data.length) {
            segs.push(curr);
            curr.data.sort(function(a,b){
              return a.localeCompare(b);
            });
          }
        });
        return segs;
      }
    }
  }
</script>
<style>
  .fontawesome-icon-list .fa-hover:hover .hd-icon {
    font-size: 28px;
    vertical-align: -6px;
  }
</style>
