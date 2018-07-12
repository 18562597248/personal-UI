import {objectAssign}  from 'src/utils/assist';
const getValue = function(object, prop) {
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
const getColumn = function(options) {
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
const getRenderCell = function(h, { row, column }) {
  const property = column.field;
  if (column.format) {
    return column.format(row, column);
  }
  if (property && property.indexOf('.') === -1) {
    return row[property];
  }
  return getValue(row, property);
};
export default {
  name: 'hd-table-column',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title:String,
    columnClass:Object,
    field:String,
    align:{
      type: String,
      default: 'left'
    },
    width: {
      type: [Number, String]
    },
    minWidth: {
      type: [Number, String]
    },
    sortable: {
      type:  Boolean,
      default: false
    },
    hidden: {
      type:  Boolean,
      default: false
    },
    showTooltip: {
      type:  Boolean,
      default: false
    },
    format: Function,
    render: Function,
    fixed: [Boolean, String],
    length: {
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
    let column = getColumn({
      title: this.title,
      field: this.field,
      align: this.align,
      width: this.width,
     columnClass: this.columnClass,
      minWidth: this.minWidth,
      length: this.length,
      type:this.type,
      renderCell: null,
      sortable:this.sortable,
      hidden:this.hidden,
      showTooltip:this.showTooltip,
      format: this.format,
      render: this.render,
      fixed: this.fixed === '' ? true : this.fixed
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
        renderCell = getRenderCell;
      }
      return renderCell(h, data)
    };
  },
  mounted() {
    const parent = this.$parent;
    let columnIndex;
    if (!this.isSubColumn) {
      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
    } else {
      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
    }
  this.insertColumn(this.columns, columnIndex, this.isSubColumn ? parent.columns : null);
  },
  methods: {
    insertColumn(column, index, parent) {
      let array = [];
      if (parent) {
        array = parent.children;
        if (!array) array = parent.children = [];
      }
      if (typeof index !== 'undefined') {
        array.splice(index, 0, column);
      } else {
        array.push(column);
      }
    }
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
    sortable(newVal) {
      if (this.columns) {
        this.columns.sortable = newVal;
      }
    }
  }
};

