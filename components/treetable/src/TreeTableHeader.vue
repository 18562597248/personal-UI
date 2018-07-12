<template>
  <table  :style="styles" style="table-layout: fixed;">
    <colgroup>
      <col v-for="column in columns" :width="setWidth(column)">
    </colgroup>
    <thead>
    <tr>
      <th v-for="(column, index) in columns"   :style="alignStyle">
              <template v-if="column.type === 'selection'"><hd-checkbox v-model="selection" @change="selectAll"></hd-checkbox></template>
              <span v-else>{{column.title}}</span>
      </th>
    </tr>
    </thead>
  </table>
</template>
<script>
    import hdCheckbox from 'components/checkbox';
  import Mixin from 'src/utils/table';
  export default {
    name: 'hd-tree-table-head',
    mixins: [Mixin],
    components:{
        hdCheckbox
     },
    props: {
      headstyles: Object,
      columns: Array,
      colwidth: Object,
      data: Array
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
      methods: {
          selectAll (ev,status) {
              ev.stopPropagation();
              this.$parent.selectAll(status);
          }
      }
  };
</script>
