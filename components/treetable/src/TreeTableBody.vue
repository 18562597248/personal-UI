<template>
  <table  :style="badystyles" style="table-layout: fixed;">
    <colgroup>
      <col v-for="(column, index) in columns" :width="setWidth(column)">
    </colgroup>
    <tbody>
    <tr v-for="(row,index) in data" v-show="show(row)"
        @click.stop="clickRow($event,index)"
        @dblclick.stop="dbclickRow($event,index)"
    >
      <td v-for="column in columns"  :style="styles(column)">
        <cell :row="row" :column="column" :index="index" :checked="rowChecked(index)"></cell>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import Mixin from 'src/utils/table';
  import cell from './TreeTableCell';
  export default {
    name: 'hd-tree-table-body',
    mixins: [ Mixin ],
    components: { cell },
    props: {
      badystyles: Object,
      colwidth: Object,
      columns: Array,
      data: Array
    },
    methods: {
        rowChecked (index) {
            return  this.data[index].isChecked;
        },
      styles (column) {
        let style = {};
        if(column.align){
          style.textAlign = `${column.align}`;
        }
        return style;
      },
      show(row){
        let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
        row._show = show
        return show ? true: false
      },
        clickRow (event,index) {
            let target = event.target;
            if(target.tagName==='INPUT') return
            this.$parent.clickRow(event,index)
        },
        dbclickRow (event,index){
            let target = event.target;
            if(target.tagName==='INPUT') return
            this.$parent.dbclickRow(event,index)
        }
    }
  };
</script>

