export default {
      name: 'hd-table-cell',
      props: {
        row: Object,
        column: Object,
        checked:Boolean,
        index:[Number,String],
        fixed: {
          type: [Boolean, String],
          default: false
        }
      },
    render(h) {
      var _this = this;
      if(this.column.type === 'index'){
        return h(
          'div',
          {
            class: _this.classes()
          },
          [_this.index+1]
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
      if(this.column.type === 'default'){
        return h(
          'div',
          {
            class: _this.classes()
          },
          [_this.column.renderCell.call(_this._renderProxy, h, { row: _this.row, column: _this.column})]
        )
      }
    },
    data () {
        return {
          ischecked:false
        };
      },
      computed: {
      },
      methods: {
        toggleSelect (ev) {
          ev.stopPropagation();
          this.$parent.$parent.toggleSelect(this.index);
        },
        classes () {
          return [
            {
              [`table-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right')
            }
          ];
        }
      },
      mounted () {
        this.ischecked=this.checked
      },
      watch:{
        checked(){
          this.ischecked=this.checked
        }
      }
};
