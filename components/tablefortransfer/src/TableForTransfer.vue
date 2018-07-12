<template>
  <div class="hd_data_tables_wrapper_cls dataTables_wrapper form-inline" :style="styles">
    <div class="hd-table">
      <div ref="hiddenColumns"><slot></slot></div>
      <div   ref="header" class="table-header">
        <table-head
          v-if="showHeader"
          :class="classes"
          :headstyles="tableStyle"
          :columns="this.initColumns()"
          :allcolumns="this.columnRows"
          :colwidth="columnsWidth"
          :data="this.clonedata"
          style="border-bottom-width: 0px;"
        >
        </table-head>
      </div>
      <table v-show="(!this.clonedata || this.clonedata.length === 0)"  :class="classes" :style="tableStyle">
        <tbody>
        <tr >
          <td style=" height: 100px;vertical-align: middle; text-align: center ">
            <span v-if="!this.clonedata || this.clonedata.length === 0">暂无数据</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="table-body" :style="bodyStyle" @scroll="handleBodyScroll">
        <table-body
          ref="tbody"
          :class="classes"
          :badystyles="tableStyle"
          :colwidth="columnsWidth"
          :columns="this.initColumns()"
          :data="this.clonedata"
        >
        </table-body>
      </div>
      <div class="table-fixed" :style="tablefixed" v-if="leftFixed">
        <div  v-if="showHeader" class="table-fixed-header">
          <table-head
            fixed="left"
            :headstyles="tablefixed"
            :columns="leftFixedColumns"
            :allcolumns="this.columnRows"
            :colwidth.sync="columnsWidth"
            :data="this.clonedata"
            style="border-bottom-width: 0px;"
          >
          </table-head>
        </div>
        <div  :style="fixedBodyStyle" ref="fixedBody" class="table-fixed-body">
          <table-body
            fixed="left"
            :badystyles="tablefixed"
            :colwidth="columnsWidth"
            :columns="leftFixedColumns"
            :data="this.clonedata">
          </table-body>
        </div>
      </div>
      <div class="table-fixed-right" :style="tablefixedright" v-if="rightFixed" >
        <div  v-if="showHeader" class="table-fixed-header">
          <table-head
            fixed="right"
            :headstyles="tablefixedright"
            :columns="rightFixedColumns"
            :allcolumns="this.columnRows"
            :colwidth.sync="columnsWidth"
            :data="this.clonedata"
            style="border-bottom-width: 0px;"
          >
          </table-head>
        </div>
        <div  :style="fixedBodyStyle" ref="fixedRightBody" class="table-fixed-body">
          <table-body
            fixed="right"
            :badystyles="tablefixedright"
            :colwidth="columnsWidth"
            :columns="rightFixedColumns"
            :data="this.clonedata"
          >
          </table-body>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import tableHead from './TableHeaderForTransfer.vue';
  import tableBody from './TableBodyForTransfer.vue';
  import { getStyle, deepCopy, getScrollBarSize } from 'src/utils/assist';
  const prefixCls = 'table';
  const getAllColumns = (columns) => {
    const result = [];
    columns.forEach((column) => {
      if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
    return result;
  }; //得到所有的列
  const getChildColumns = (columns) => {
    const result = [];
    columns.forEach((column) => {
      if (column.children) {
      result.push.apply(result, getChildColumns(column.children));
    } else {
      result.push(column);
    }
  });
    return result;
  };//得到没有child 和所有child的列
  const ColumnsToRows = (columns) => {
    let maxLevel = 1;
    const traverse = (column, parent) => {
      if (parent) {
        column.level = parent.level + 1;
        if (maxLevel < column.level) {
          maxLevel = column.level;
        }
      }
      if (column.children) {
        let colSpan = 0;
        column.children.forEach((subColumn) => {
          traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
        column.colSpan = colSpan;
      } else {
        column.colSpan = 1;
      }
    };
    columns.forEach((column) => {
      column.level = 1;
      traverse(column);
  });

    const rows = [];
    for (let i = 0; i < maxLevel; i++) {
      rows.push([]);
    }

    const allColumns = getAllColumns(columns);
    allColumns.forEach((column) => {
      if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });
    return rows;
  }; //列变为行同时追加参数
  export default {
    name: 'hd-table-for-transfer',
    components: { tableHead, tableBody },
    props: {
      tableData: {
        type: Array,
        default () {
          return [];
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
        default: true
      },
      striped: {
        type: Boolean,
        default: true
      },  //斑马线
      bordered: {
        type: Boolean,
        default: true
      },  //垂直边框
      showHeader: {
        type: Boolean,
        default: true
      } , //是否显示表头
      highlight: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        tableWidth: 0,
        columnRows:[],
        clonedata:this.initData (),
        columnsWidth: {},
        cloneColumns: [],
        columns:[],
        bodyHeight: 0,
        bodyRealHeight: 0,
        scrollBarWidth: getScrollBarSize()
      };
    },
    computed: {
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
          const height = (this.rightFixed || this.leftFixed) ? parseInt(this.height) + this.scrollBarWidth : parseInt(this.height);
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
          const height = (this.isLeftFixed || this.isRightFixed) ? this.bodyHeight + this.scrollBarWidth : this.bodyHeight;
          style.height = `${height}px`;
        }
        return style;
      } , //固定表头时起作用
      leftFixed () {
        return this.columns.some(col => col.fixed && col.fixed === 'left');
      },
      rightFixed () {
        return this.columns.some(col => col.fixed && col.fixed === 'right');
      },
      tablefixed () {
        let style = {};
        let width = 0;
        this.leftFixedColumns.forEach((col) => {
          if (col.fixed && col.fixed === 'left') width += col._width;
      });
        style.width = `${width}px`;
        return style;
      },
      tablefixedright () {
        let style = {};
        let width = 0;
        this.rightFixedColumns.forEach((col) => {
          if (col.fixed && col.fixed === 'right') width += col._width;
      });
        style.width = `${width}px`;
        return style;
      },
      fixedBodyStyle () {
        let style = {};
        if (this.bodyHeight !== 0) {
          let height = this.bodyHeight + this.scrollBarWidth - 1;

          if (this.width && this.width < this.tableWidth){
            height = this.bodyHeight;
          }
          style.height = this.scrollBarWidth > 0 ? `${height}px` : `${height - 1}px`;
        }
        return style;
      },
      leftFixedColumns () {
        let left = [];
        let other = [];
        this.initColumns().forEach((col) => {
          if (col.fixed && col.fixed === 'left') {
          left.push(col);
        } else {
          other.push(col);
        }
      });
        return left.concat(other);
      },
      rightFixedColumns () {
        let right = [];
        let other = [];
        this.initColumns().forEach((col) => {
          if (col.fixed && col.fixed === 'right') {
          right.push(col);
        } else {
          other.push(col);
        }
      });
        return right.concat(other);
      }
    },
    methods: {
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
        if (this.tableData.length) {
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
      fixedHeight () {
        if (this.height) {
          this.$nextTick(() => {
            const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0;
            this.bodyHeight = this.height-headerHeight
        });
        } else {
          this.bodyHeight = 0;
        }
      },
      initData () {
        let data=[]
        data = deepCopy(this.tableData);
        data.forEach((row, index) =>{
          if (row.checked) {
          row.isChecked = true;
        } else {
          row.isChecked = false;
        }
        if (row.highlight) {
          row.is_highlight = true;
        } else {
          row.is_highlight = false;
        }
        row.index = index
      });
        return data;
      },   //初始化数据
      initColumns () {
        let columns = deepCopy(this.columns);
        let left = [];
        let right = [];
        let center = [];
        columns.forEach((column, index) => {
          column.index = index;
          column._width = column.width ? column.width : '';
        if (column.fixed && column.fixed === 'left') {
          left.push(column);
        } else if (column.fixed && column.fixed === 'right') {
          right.push(column);
        } else {
          center.push(column);
        }
      });
        return left.concat(center).concat(right);
      } , //初始化表头
      selectAll (status) {
        for(let i in this.clonedata){
          this.clonedata[i].isChecked = status;
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
      toggleSelect (index) {
        let data = {};
        for (let i in this.clonedata) {
          if (parseInt(i) === index) {
            data = this.clonedata[i];
          }
        }
        const status = !data.isChecked;
        this.clonedata[index].isChecked = status;
        const selections = this.getSelections();
        //add by cjp strat
        let checkIndex=[];
        if(selections.length>0){
          for (let i in this.clonedata) {
            if (this.clonedata[i].isChecked) {
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
          this.$emit('select', selections, this.tableData[index]);
        }
        this.$emit('selection-change', selections,checkIndex);
      },
      getSelections () {
        let selections = [];
        let obj=[];
        for (let i in this.clonedata) {
          if (this.clonedata[i].isChecked) {
            obj.push(parseInt(i))
          }
        }
        selections=this.tableData.filter((data, index) => obj.indexOf(index) > -1);//过滤掉下标为NaN
        return selections;
      },
      highlightCurrentRow (index) {
        if (!this.highlight || this.clonedata[index].is_highlight) return;
        let oldIndex = -1;
        for (let i in this.clonedata) {
          if (this.clonedata[i].is_highlight) {
            oldIndex = parseInt(i);
            this.clonedata[i].is_highlight = false;
          }
        }
        this.clonedata[index].is_highlight = true;
        var newValue=this.clonedata[index]
        this.$emit('current-change', newValue);
      },
      sortData (data, type, index) {
        const key = this.cloneColumns[index].field;
        data.sort((first, second) => {
          if (type === 'asc') {
            return first[key] > second[key] ? 1 : -1;
          } else if (type === 'desc') {
            return first[key] < second[key] ? 1 : -1;
          }
      });
        return data;
      },
      handleSort (index, type) {
        this.clonedata = this.sortData(this.clonedata, type, index);
      },
      clickRow (event,index) {
        this.$emit('row-click',event,this.tableData[index],index);//edit by cjp end
      },
      dbclickRow (event,index) {
        this.$emit('row-dblclick',event,this.tableData[index],index);//edit by cjp end
      },
      handleBodyScroll (event) {
        if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft;
        if (this.leftFixed) this.$refs.fixedBody.scrollTop = event.target.scrollTop;
        if (this.rightFixed) this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
      }
    },
    mounted () {
      var self = this
      this.$slots.default.forEach((col) => {
        if (col.tag !== undefined) {
        this.cloneColumns.push(col.componentInstance.columns);
      }
    });
      this.columns =getChildColumns(this.cloneColumns);  //共有几列
      this.columnRows =ColumnsToRows(this.cloneColumns,this.columns);  //所有的列（一级加二级等等）
      this.handleResize();
      this.fixedHeight()
      window.addEventListener('resize', this.handleResize, false);
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize, false);
    },
    watch: {
      tableData: {
        handler () {
          this.clonedata=this.initData()
          this.handleResize();
        },
        deep: true  //深度观察
      },
      height () {
        this.fixedHeader();
      }
    }
  };
</script>
