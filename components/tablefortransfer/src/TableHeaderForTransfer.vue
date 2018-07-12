<template>
  <table  :style="styles" >
    <colgroup>
      <col v-for="column in columns" :width="setWidth(column)">
    </colgroup>
    <thead>
    <tr v-for="(columns, index) in allcolumns">
      <th v-for="(column, index) in columns"  :colspan="column.colSpan" :rowspan="column.rowSpan" :style="alignStyle">
        <div :class="cellClass(column)">
          <template v-if="column.type === 'selection'"><hd-checkbox v-model="selection" @change="selectAll"></hd-checkbox></template>
          <template v-else>
            <span v-html="renderHeader(column)"></span>
            <div class="caret-wrapper" v-if="column.sortable">
                  <hd-icon type="fa fa-angle-up pull-right"  @click="handleSort(index, 'asc')"></hd-icon>
                  <hd-icon type="fa fa-angle-down pull-right"  @click="handleSort(index, 'desc')"></hd-icon>
            </div>
          </template>
          </div>
      </th>
    </tr>
    </thead>
  </table>
</template>
<script>
  import Mixin from 'src/utils/table';
  import hdIcon from 'components/icon';
  import hdCheckbox from 'components/checkbox';
  export default {
    name: 'hd-table-head',
    components:{
      hdIcon,hdCheckbox
    },
    mixins: [Mixin],
    props: {
      headstyles: Object,
      columns: Array,
      allcolumns:Array,
      colwidth: Object,
      data: Array,
      fixed: {
        type: [Boolean, String],
        default: false
      }
    },
    data(){
      return{
      }
    },
    computed: {
      styles () {
        const style = Object.assign({}, this.headstyles); //方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象
        const width =  parseInt(this.headstyles.width);
        style.width = `${width}px`;
        return style;
      },
      alignStyle(){
        let style = {verticalAlign: 'middle'};
        style.textAlign =this.$parent.titleAlign
        return style;
      },
      selection () {
        let selection=true;
        if (!this.data.length) selection = false;
        for (let i = 0; i < this.data.length; i++) {
          if (!this.data[i].isChecked) {
            selection = false;
            break;
          }
        }
        return selection;
      }
    },
    created(){

    },
    mounted () {

    },
    methods: {
      selectAll (ev,status) {
        ev.stopPropagation();
        this.$parent.selectAll(status);
      },
      renderHeader(column) {
        if (column.title) {
          return column.title
        } else {
          return  '#';
        }
      },
      cellClass (column) {
        return [
          {
            [`table-hidden`]: !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
          }
        ];
      },
      handleSort (index, type) {
        this.$parent.handleSort(index, type);
      }
    }
  };
</script>
<style>
   .caret-wrapper {
    cursor: pointer;
    display: inline-block;
    margin-left: 10px;
    width: 2px;
     vertical-align: middle;
     background:  no-repeat center right
  }
   .table-hidden {
     visibility: hidden;
   }
</style>
