<template>
  <table  :style="badystyles">
    <colgroup>
      <col v-for="(column, index) in columns" :width="setWidth(column)">
    </colgroup>
    <tbody>
    <tr  v-for="(row, index) in data"
         :class="rowClass(row.index)"
         @click.stop="clickRow($event,row.index)"
         @dblclick.stop="dbclickRow($event,row.index)"
    >
      <td v-for="column in columns"  :style="styles(column)" :class="cellClass(column)">
        <cell :row="row" :column="column"  :checked="rowChecked(row.index)"  :index="row.index"  :fixed="fixed"></cell>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import cell from './TableCellForTransfer';
  import Mixin from 'src/utils/table';
  export default {
    name: 'hd-table-body',
    mixins: [ Mixin ],
    components: { cell },
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

      };
    },
    computed: {},
    mounted(){
    },
    methods: {
      rowClass (index) {
        return [
          {
            [`active`]:  this.data[index].is_highlight
          }
        ];
      },
      styles (column) {
        let style = {};
        if(column.align){
          style.textAlign = `${column.align}`;
        }
        return style;
      },
      rowChecked (index) {
        return  this.data[index].isChecked;
      },
      clickRow (event,index) {
        let target = event.target;
        if(target.tagName==='INPUT') return
        this.$parent.highlightCurrentRow(index);
        this.$parent.clickRow(event,index)
      },
      dbclickRow (event,index){
        let target = event.target;
        if(target.tagName==='INPUT') return
        this.$parent.highlightCurrentRow(index)
        this.$parent.dbclickRow(event,index)
      },
      cellClass (column) {
        return [
          {
            [`table-hidden`]: !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
          }
        ];
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
