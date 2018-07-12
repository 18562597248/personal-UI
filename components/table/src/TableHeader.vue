<template>
  <table class="hd-table-header-tag" :style="styles">
    <colgroup>
      <col v-for="column in columns" :width="setWidth(column)" v-if="!column.hidden">
      <col class="hd-table-header-colgroup-col-complement" :width="scrollBarWidth" v-if="sumCellWidth<=bodyWidth && bodyHeight>=bodyRealHeight">
    </colgroup>
    <thead>
    <tr v-for="(columns, index) in allcolumns">
      <th class="hd-table-header-tr-th" v-for="(column, index) in columns"
          v-if="!column.hidden"
          :colspan="column.colSpan"
          :rowspan="column.rowSpan"
          :style="alignStyle"
          :class="column.class"
          @mousemove="handleMouseMove($event,column)"
          @mouseout="handleMouseOut"
          @mousedown="handleMouseDown($event, column)"
      >
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
      <th class="hd-table-width-complement" :width="scrollBarWidth"  v-if="sumCellWidth<=bodyWidth && bodyHeight>=bodyRealHeight"></th>
    </tr>
    </thead>
  </table>
</template>
<script>
  import hdIcon from 'components/icon';
  import hdCheckbox from 'components/checkbox';
  import Mixin from 'src/utils/table';
  import { getStyle, getScrollBarSize } from 'src/utils/assist';
  export default {
    name: 'hd-table-head',
    mixins: [ Mixin ],
    components:{
      hdIcon,hdCheckbox
    },
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
        scrollBarWidth: getScrollBarSize(),
        bodyWidth:0,
        bodyRealHeight:0,
        sumCellWidth:0,
        bodyHeight:0,
        drag:false,
        dragState: {},
        draggingColumn: null
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
    beforeUpdate () {
        var _this = this;
        this.$nextTick(function () {
            var parent = this.$parent.$parent;
            var headerHeight = parseInt(getStyle(_this.$el, 'height'));
            if(isNaN(headerHeight)){
                headerHeight=0
            }
            var height = window.screen.height - 300;
            var width = window.screen.width - 224 - 4;
            if (parent.$options._componentTag === 'hd-modal') {
                _this.sumCellWidth =   parent.$el.firstChild.clientWidth - 30;
            } else if (parent.$options._componentTag === 'hd-col') {
                _this.sumCellWidth = parent.$el.clientWidth - 30;
            } else {
                _this.sumCellWidth = width;
            }
            if(_this.$el.clientWidth===0){
                _this.bodyWidth=_this.sumCellWidth
            }else{
                _this.bodyWidth = _this.$el.clientWidth+17;
            }
            _this.bodyHeight = _this.$parent.$refs.tbody.$el.clientHeight;
            _this.bodyRealHeight = _this.$parent.$el.clientHeight - headerHeight - 17;
        });
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
      },
      handleMouseDown(event, column) {
         if(!this.$parent.drag) return
         if(this.$parent.clonedata.length===0) return
   if (this.draggingColumn) {
        this.drag = true;
        this.$parent.resize = true;
        const table = this.$parent;
        const tableEl = table.$el;
        const tableLeft = tableEl.getBoundingClientRect().left;
        const columnEl = this.$el.querySelector(`th.${column.class}`);
        const columnRect = columnEl.getBoundingClientRect();
        const minLeft = columnRect.left - tableLeft + 30;
        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft
        };
          const deltaLeft = event.clientX - this.dragState.startMouseLeft;
          if(deltaLeft) return
        const resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';
        document.onselectstart = function() { return false; };
        document.ondragstart = function() { return false; };
        const handleMouseMove = (event) => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft;
          const proxyLeft = this.dragState.startLeft + deltaLeft;
          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };
        const handleMouseUp = () => {
          if (this.drag) {
            const {startColumnLeft,startLeft} = this.dragState;
            const finalLeft = parseInt(resizeProxy.style.left, 10);
            const columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            this.$parent.handleResize();
            document.body.style.cursor = '';
            this.drag = false;
            this.dragState = {};
            table.resize = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
      handleMouseMove(event,column) {
        let target = event.target;
        while (target && target.tagName !== 'TH') {
          target = target.parentNode;
        }
        if (!this.drag) {
          let rect = target.getBoundingClientRect();
          const bodyStyle = document.body.style;
          if (rect.width > 12 && rect.right - event.pageX < 8) {
            bodyStyle.cursor = 'col-resize';
              this.draggingColumn = column;
          } else if (!this.drag) {
            bodyStyle.cursor = '';
             this.draggingColumn = null;
          }
        }
      },

      handleMouseOut() {
        document.body.style.cursor = '';
      }
    }
  };
</script>