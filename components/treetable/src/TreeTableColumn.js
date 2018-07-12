import {objectAssign}  from 'src/utils/assist';
const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};
const getDefaultColumn = function(options) {
  const column = {};
  objectAssign(column);
  for (let name in options) {
    if (options.hasOwnProperty(name)) {
      const value = options[name];
      if (typeof value !== 'undefined') {
        column[name] = value;
      }
    }
  }
  return column;
};
const DEFAULT_RENDER_CELL = function(h, { row, column }) {
  const property = column.field;
  if (property && property.indexOf('.') === -1) {
    return row[property];
  }
  return getValueByPath(row, property);
};
export default {
  name: 'hd-tree-table-column',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title:String,
    field:String,
    align:{
      type: String,
      default: 'left'
    },
    width: {
      type: [Number, String]
    }
  },
  data(){
    return{
      isSubColumn: false,
      columns:[]
    }
  },
  computed: {
    owner() {
      let parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  created(){
    this.$options.render = h => h('div', this.$slots.default);
    let parent = this.$parent;
    let owner = this.owner;
    this.isSubColumn = owner !== parent;
    let column = getDefaultColumn({
      title: this.title,
      field: this.field,
      align: this.align,
      width: this.width,
      type:this.type,
      renderCell: null
    }); //所有参数打包成一个对象
    objectAssign(column || {});
    this.columns= column;
    let renderCell = column.renderCell;
    let _self = this;
    column.renderCell = function (h, data) {
      if (_self.$scopedSlots.default) {
        renderCell = function renderCell() {
          return _self.$scopedSlots.default(data);
        };
      }
      if (!renderCell) {
        renderCell = DEFAULT_RENDER_CELL;
      }
      return renderCell(h, data)
    };
  },
  watch: {
    title(newVal) {
      if (this.columns) {
        this.columns.title = newVal;
      }
    },
    field(newVal) {
      if (this.columns) {
        this.columns.field = newVal;
      }
    },
    width(newVal) {
      if (this.columns) {
        this.columns.width = newVal;
      }
    },
    align(newVal) {
      if (this.columns) {
        this.columns.align = newVal;
      }
    },
    type(newVal) {
      if (this.columns) {
        this.columns.type = newVal;
      }
    }
  }
};

