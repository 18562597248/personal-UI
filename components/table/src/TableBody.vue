<template>
  <table  :style="badystyles" style="table-layout: fixed;">
    <colgroup>
      <col v-for="(column, index) in columns" :width="setWidth(column)" v-if="!column.hidden">
    </colgroup>
    <tbody>
    <tr  v-for="(row, index) in data"
         :class="rowClass(row.index)"
         :style="rowstyles(row.index)"
         @click="clickRow($event,row.index)"
         @dblclick.stop="dbclickRow($event,row.index)"
         @contextmenu.capture.prevent="contextmenuRow($event,row.index)"
    >
     <template v-for="column in doubleArray[index]">
      <td   :style="styles(row,column,index)"
            :class="cellClass(column)"
            v-if="!column.hidden"
            :rowSpan="column.cellrowSpan"
            :colSpan="column.cellcolSpan"
            v-show="column.hide != 1"
            @mousemove="handleCellMouseEnter($event,column,row)"
      >
          <hd-tooltip  v-if="showTooltip" :text="tooltipContent" placement="top" ref="tooltip"  >
              <cell :row="row" :column="column"  :checked="rowChecked(row.index)"  :disabled="rowDisabled(row.index)"  :index="row.index"  :fixed="fixed" :colwidth="colwidth"></cell>
          </hd-tooltip>
          <cell :row="row" :column="column"  :checked="rowChecked(row.index)"  :index="row.index" :disabled="rowDisabled(row.index)" :fixed="fixed" :colwidth="colwidth" v-else></cell>
      </td>
     </template>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import cell from './TableCell';
  import Mixin from 'src/utils/table';
  import hdToolTip from 'components/tooltip/src/Tooltips.vue'
  export default {
    name: 'hd-table-body',
    mixins: [ Mixin ],
    components: { cell, hdToolTip},
    props: {
      badystyles: Object,
      colwidth: Object,
      columns: Array,
      data: Array,
      fixed: {
        type: [Boolean, String],
        default: false
      }
    },
    data () {
      return {
          tooltipContent: '',
          showTooltip:false,
          doubleArray:[]
      };
    },
    computed: {},
    mounted(){
            var _this = this;
            this.$nextTick(function () {
                _this.doubleArray = _this.getdoubleArray();
                _this.load()
            });
    },
    methods: {
       getdoubleArray(){
           var  pos = [];
            for(let i = 0; i< this.data.length; i++){
                pos.push(this.getNewColumn(this.columns));
            }
            return pos;
        },
       getNewColumn (columns){
            var pos = [];
            columns.forEach((n,i) =>{
            var m =  Object.assign(Object.create(null),n);
            pos.push(m);
        })
            return pos;
        },
        load(){
            var _this=this
            this.columns.forEach((column,i) =>{
                if (column.render) {
                _this.data.forEach(function (item, index) {
                    var cell = column.render(item, _this.columns, index);
                    if (cell.rowSpan || cell.colSpan) {
                        _this.handelCellSpan(index, i, cell);
                    }
                });
            }
        });
        },
        handelCellSpan(dataIndex,colIndex,cell){
            var rowSpan=cell.rowSpan?cell.rowSpan:1
            var colSpan=cell.colSpan?cell.colSpan:1
            this.$set(this.doubleArray[dataIndex][colIndex],'cellrowSpan',rowSpan)
            this.$set(this.doubleArray[dataIndex][colIndex],'cellcolSpan',colSpan)
            let rowSpanNum = 0;
            let colSpanNum = 0;
            if((colIndex + colSpan) <= this.columns.length){
                colSpanNum = colSpan
            }else{
                colSpanNum = this.columns.length - colIndex;
            }
            var  colspanIndex=colSpan>1?1:0
            var  rowspanIndex=rowSpan>1?1:0
            for(let i = colspanIndex; i < colSpanNum; i++){
                    if((dataIndex + rowSpan) <= this.data.length){
                        rowSpanNum = rowSpan
                    }else{
                        rowSpanNum = this.data.length - dataIndex;
                    }
                    for(let t = rowspanIndex; t < rowSpanNum ; t++){
                        this.doubleArray[dataIndex+t][colIndex+i].hide = 1;
                    }
            }
        },
        handleCellMouseEnter(event,column) {
            if(event.target.offsetWidth<event.target.scrollWidth&&column.showTooltip) {
               this.showTooltip=true
            }else{
               this.showTooltip=false
            }
            const cellChild = event.target.innerText;
            this.tooltipContent=cellChild
        },
        rowClass (index) {
        return [
          {
            [`active`]:  this.data[index].is_highlight
          }
        ];
      },
      styles (row,column,index) {
          let _this=this
          let style = {};
           if (column.render) {
               var cell = column.render(row, _this.columns, index);
               if(cell.cellClass){
                   style=cell.cellClass
               }
          }
          if(column.columnClass){
              style= column.columnClass
          }
        if(column.align){
          style.textAlign = `${column.align}`;
        }
        return style;
      },
        rowstyles (index) {
            let style = {};
            if(this.$parent.getRowClass(this.data[index], index)){
                style= this.$parent.getRowClass(this.data[index], index)
            }
            return style;
        },
      rowChecked (index) {
        return  this.data[index].isChecked;
      },
        rowDisabled (index) {
        return  this.data[index].isDisabled;
      },
      clickRow (event,index) {
        let target = event.target;
        if(target.tagName !== 'TD' && target.tagName !== 'DIV') return
        this.$parent.highlightCurrentRow(index);
        this.$parent.clickRow(event,index)
      },
      dbclickRow (event,index){
        let target = event.target;
        if(target.tagName !== 'TD' && target.tagName !== 'DIV') return
        this.$parent.highlightCurrentRow(index)
        this.$parent.dbclickRow(event,index)
      },
      contextmenuRow (event,index){
        let target = event.target;
        if(target.tagName==='INPUT') return
        this.$parent.highlightCurrentRow(index)
        this.$parent.contextmenuRow(event,index)
      },
      cellClass (column) {
        return [
          {
            [`table-hidden`]: !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
          }
        ];
      }
    },
      watch: {
          data: {
              handler: function handler(val) {
                  this.data=val
                  this.doubleArray = this.getdoubleArray();
                  this.load();
              },
              deep: true
          }
      }
  };
</script>
<style>
  .table>tbody>tr>td{
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    vertical-align: middle;
  }
</style>
