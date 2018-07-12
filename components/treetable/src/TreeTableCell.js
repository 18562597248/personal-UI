export default {
  name: 'hd-tree-table-cell',
  props: {
    treedata:Object,
    row: Object,
    column: Object,
    checked:Boolean,
    index:[Number,String]
  },
    data () {
        return {
            ischecked:false
        };
    },
  render(h) {
    var _this = this;
    if(this.column.type === 'start'){
      return h(
        'div', [(_this.row.spaceHtml) ? _this._l(_this.row.spaceHtml.split('hd-tree-space').length-1, function () {
        return  h('i', {
          staticClass: 'hd-tree-space'
        })}): _this._e(), h('i',
          {
            style: {
              'cursor': 'pointer'
            },
            class: {
              'fa fa-folder':!_this.row._expanded,
              'fa fa-folder-open':_this.row._expanded
            },
            on: {
              "click": function() {
                _this.toggle(_this.index,_this.row)
              }
            }
          },
          ' '+ [_this.column.renderCell.call(_this._renderProxy, h, { row: _this.row, column: _this.column})]
        )]
      )
    }
    if(this.column.type === 'default'){
      return h(
        'div',
        [_this.column.renderCell.call(_this._renderProxy, h, { row: _this.row, column: _this.column,index:_this.index})]
      )
    }
    if(this.column.type === 'selection'){
          return h(
              'hd-checkbox',
              {
                  attrs: {
                      value:_this.ischecked
                  },
                  on: {
                      'change': _this.toggleSelect
                  }
              }
          )
      }
  },
    mounted () {
        this.ischecked=this.checked
    },
    watch:{
        checked(){
            this.ischecked=this.checked
        }
    },
  methods: {
    toggle(index){
      this.$parent.$parent.toggle(index)
    },
    toggleSelect (ev) {
          ev.stopPropagation();
          this.$parent.$parent.toggleSelect(this.index);
    }
  }
};
