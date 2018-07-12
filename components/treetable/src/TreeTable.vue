<template>
    <div ref="hd_data_tables_wrapper_ref" class="hd_data_tables_wrapper_cls dataTables_wrapper form-inline" :style="styles">
        <div class="hd-table">
            <div ref="hiddenColumns"><slot></slot></div>
            <div   ref="header" class="table-header">
                <table-head
                    :class="classes"
                    :headstyles="tableStyle"
                    :columns="this.initColumns()"
                    :colwidth="columnsWidth"
                    :data="this.data"
                    style="border-bottom-width: 0px;"
                >
                </table-head>
            </div>
            <div  :style="bodyStyle" ref="tablebody" class="table-body" @scroll="handleBodyScroll">
                <table-body
                    ref="tbody"
                    :class="classes"
                    :badystyles="tableStyle"
                    :colwidth="columnsWidth"
                    :columns="this.initColumns()"
                    :data="this.data"
                >
                </table-body>
            </div>
        </div>
    </div>
</template>
<script>
  import tableHead from './TreeTableHeader.vue';
  import tableBody from './TreeTableBody.vue';
  import Utils from './handeldata.js'
  import { getStyle, deepCopy, getScrollBarSize } from 'src/utils/assist';
  const prefixCls = 'table';
  export default {
    components: { tableHead, tableBody },
    name:'hd-tree-table',
    props: {
      TreeTableData: {
        type: Array,
        default () {
          return [];
        }
      },
      // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
      treeStructure: {
        type: Boolean,
        default: function () {
          return true
        }
      },
      // 是否默认展开所有树
      defaultExpandAll: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      width: {
        type: [Number, String]
      },
      height: {
        type: [Number, String]
      },
      titleAlign:{
        type: String,
        default: 'left'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },  //斑马线
      bordered: {
        type: Boolean,
        default: false
      }  //垂直边框
    },
    data () {
      return {
        items:[],
        tableWidth: 0,
        columnsWidth: {},
        cloneColumns: [],
        columns:[],
        bodyHeight: 0,
        bodyRealHeight: 0
      };
    },
    computed: {
      // 格式化数据源
      data: function () {
        let _this = this
        if (_this.treeStructure) {
          let data = Utils.treeToArray(_this.TreeTableData, null, null, _this.defaultExpandAll)
          return data
        }
        return _this.TreeTableData
      },
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-bordered`]: this.bordered,
            [`${prefixCls}-striped`]: this.striped,
            [`${prefixCls}-hover `]: this.hover
          }
        ];
      },     // 表格的样式
      styles () {
        let style = {};
        if (this.height) {
          const height =  parseInt(this.height);
          style.height = `${height}px`;
        }
        if (this.width) style.width = `${this.width}px`;
        return style;
      },     // 表格外层div的style
      tableStyle () {
        let style = {};
        if (this.tableWidth !== 0) {
          let width = '';
          if (this.bodyHeight === 0) {
            width = this.tableWidth;
          } else {
            const height =  this.bodyHeight;
            style.height = `${height}px`;
            if (this.bodyHeight > this.bodyRealHeight) {
              width = this.tableWidth;
            } else {
              width = this.tableWidth - this.scrollBarWidth;
            }
          }
          style.width = `${width}px`;
        }
        return style;
      }, //表格的style
      bodyStyle () {
        let style = {};
        if (this.bodyHeight !== 0) {
          const height =  this.bodyHeight;
          style.height = `${height}px`;
        }
        return style;
      }  //固定表头时起作用
    },
    mounted(){
      this.$slots.default.forEach((col) => {
        if (col.tag !== undefined) {
        this.cloneColumns.push(col.componentInstance.columns);
      }
    });
      this.handleResize();
      window.addEventListener('resize', this.handleResize, false);
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize, false);
    },
    methods:{
      handleResize () {
        this.$nextTick(() => {
          const allWidth = !this.initColumns().some(cell => !cell.width);
        if (allWidth) {
          this.tableWidth = this.initColumns().map(cell => parseInt(cell.width)).reduce((a, b) => a + b);
        } else {
          this.tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
        }
        this.columnsWidth = {};
        this.$nextTick(() => {
          let columnsWidth = {};
        let autoWidthIndex = -1;
        if (allWidth) autoWidthIndex = this.initColumns().findIndex(cell => !cell.width);
        if (this.TreeTableData.length) {
          const $td = this.$refs.tbody.$el.querySelectorAll('tbody tr')[0].querySelectorAll('td');
          for (let i = 0; i < $td.length; i++) {
            const column = this.initColumns()[i];
            let width = parseInt(getStyle($td[i], 'width'));
            if (i === autoWidthIndex) {
              width = parseInt(getStyle($td[i], 'width')) - 1;
            }
            if (column.width) width = column.width;
            this.initColumns()[i]._width = width;
            columnsWidth[column.index] = {
              width: width
            };
          }
          this.columnsWidth = columnsWidth;
        }
      });
        this.bodyRealHeight = parseInt(getStyle(this.$refs.tbody.$el, 'height'));
      });
      },  //调整表格大小
      initColumns () {
        let columns = deepCopy(this.cloneColumns);
        let center = [];
        columns.forEach((column, index) => {
          column.index = index;
          column._width = column.width ? column.width : '';
          center.push(column);
      });
        return center;
      } , //初始化表头
        toggleSelect (index) {
            let data = {};
            for (let i in this.data) {
                if (parseInt(i) === index) {
                    data = this.data[i];
                }
            }
            const status = !data.isChecked;
            this.data[index].isChecked = status;
            const selections = this.getSelections();
            //add by cjp strat
            let checkIndex=[];
            if(selections.length>0){
                for (let i in this.data) {
                    if (this.data[i].isChecked) {
                        if(!isNaN(parseInt(i))){
                            checkIndex.push(parseInt(i));
                        }
                    }
                }
            }else{
                checkIndex=[];
            }
            //add by cjp end
            if (status) {
                this.$emit('select', selections, this.data[index]);
            }
            this.$emit('selection-change', selections,checkIndex);
        },
        getSelections () {
            let selections = [];
            let obj=[];
            for (let i in this.data) {
                if (this.data[i].isChecked) {
                    obj.push(parseInt(i))
                }
            }
            selections=this.data.filter((data, index) => obj.indexOf(index) > -1);//过滤掉下标为NaN
            return selections;
        },
        selectAll (status) {
            for(let i in this.data){
                this.data[i].isChecked = status;
            }
            const selections = this.getSelections();
            //add by cjp strat
            let checkIndex=[];
            if(status){
                for(let i=0;i<selections.length;i++){
                    checkIndex[i]=i;
                }
            }else{
                checkIndex=[];
            }
            //add by cjp end
            if (status) {
                this.$emit('select-all', selections);
            }
            this.$emit('selection-change', selections,checkIndex);
        },
        clickRow (event,index) {
            this.$emit('row-click',event,this.data[index],index);
        },
        dbclickRow (event,index) {
            this.$emit('row-dblclick',event,this.data[index],index);
        },
        handleBodyScroll (event) {
            this.$refs.header.scrollLeft = event.target.scrollLeft;
        },
      toggle(trIndex) {
        let _this = this
        let row = _this.data[trIndex]
        row._expanded = !row._expanded
        if(!row.children){
          _this.$emit('selected',row)
        }
      }   // 展开下级
    }
  }
</script>
<style>
  .hd-tree-space{
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 14px;
    height: 14px;
  }
  .hd-tree-space:before{content:""}
</style>
