<template>
  <hd-table-for-transfer class="hd-transfer-table-tag" :tableData="t_Data" hover bordered titleAlign="center"
             @select="tabSelect"
             @select-all="tabAllSelect"
             @selection-change="tabChange"
             @row-click="tabRowClick"
             @row-dblclick="tabRowDClick">
    <hd-table-column
      :type="(col.type!=undefined?col.type:'default')"
      :title="(col.title!=undefined?col.title:'')"
      :field="(col.field!=undefined?col.field:'')"
      :width="(col.width!=undefined?col.width:'')"
      :align="(col.align!=undefined?col.align:'left')"
      :sortable="(col.sortable!=undefined)"
      v-for="(col, index) in t_Columns">
    </hd-table-column>
  </hd-table-for-transfer>
</template>
<script>
  import hdTableForTransfer from 'components/tablefortransfer'
  import hdTableColumn from 'components/tablecolumn'
  export default {
    name:'hd-table-transfer',
    components: {
      hdTableForTransfer,
      hdTableColumn
    },
    componentName: 'hdTableTransfer',
    props:{
      t_Data:[Array],
      t_Columns:[Array]
    },
    data(){
      return {
        value_:this.value
      }
    },
    computed: {},
    mounted(){},
    methods:{
      tabSelect(s,r){
        this.$emit('tabSelect',s);
      },
      tabAllSelect(s){
        this.$emit('tabAllSelect',s);
      },
      tabChange(s,i){
        if(s.length>0){
          this.hasSelection(s);
        }else{
          this.noSelection(s);
        }
        this.$emit('checkChange',s,i);
      },
      tabRowClick(e,r,i){
        this.$emit('itemClick',e,r,i);
      },
      tabRowDClick(e,r,i){
        if(e.target.tagName!='SPAN'){
          this.$emit('itemDClick',e,r,i);
        }
      },
      hasSelection(s){
        this.$emit('valid',s);
      },
      noSelection(s){
        this.$emit('unvalid',s);
      }
    },
    watch:{
    }
  }
</script>
