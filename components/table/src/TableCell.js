const prefixCls = 'table-cell';
export default {
      name: 'hd-table-cell',
      props: {
        row: Object,
          colwidth: Object,
        column: Object,
        checked:Boolean,
          disabled:Boolean,
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
              value:_this.ischecked,
              disabled:_this.isdisabled
            },
            on: {
              'change': _this.toggleSelect
            }
          }
        )
      }
      if(this.column.type === 'default'){
          if(this.row.edit){
              if (typeof _this.column.renderCell.call(_this._renderProxy, h, { row: _this.row, column: _this.column})!=='object'){
                  return h(
                      'input',
                      {
                          style:_this.inputstyles,
                          domProps: {
                              "value": _this.row[_this.column.field]
                          },
                          directives: [
                              {
                                  name: "model",
                                  rawName: "v-model",
                                  value: ( _this.row[_this.column.field]),
                                  expression: "data"
                              }],
                          on: {
                              "input": function($event) {
                                  _this.row[_this.column.field]=$event.target.value
                              },
                              "change": function() {
                                  _this.$parent.$parent.dispatchdata(_this.$parent.data)
                              }
                          }
                      }
                  )
              }else{
                  return h(
                      'div',
                      {
                          class: _this.classes(),
                          on: {
                              "click": function input($event) {
                                  _this.$parent.$parent.dispatchdata(_this.$parent.data,$event);
                              },
                              "input": function input($event) {
                                  _this.$parent.$parent.dispatchdata(_this.$parent.data,$event);
                              },
                              "change": function change($event) {
                                  _this.$parent.$parent.dispatchdata(_this.$parent.data,$event);
                              }
                          }
                      },
                      [_this.column.renderCell.call(_this._renderProxy, h, { row: _this.row, column: _this.column})]
                  )
              }
          }else {
              return h(
                  'div',
                  {
                      class: _this.classes(),
                      on: {
                          "change": function($event) {
                              _this.$parent.$parent.dispatchdata(_this.$parent.data,$event)
                          }
                      }
                  },
                  [_this.column.renderCell.call(_this._renderProxy, h, { row: _this.row, column: _this.column})]
              )
          }
      }
    },
    data () {
        return {
          ischecked:false,
            isdisabled:false
        };
      },
      computed: {
          inputstyles(){
              if(this.row.edit){
                  let style = {};
                  style.height = `34px`;
                  style.width=`${this.setWidth(this.column)-30}px`
                  return style;
              }
          }
      },
      methods: {
          setWidth (column) {
              let width = '';
              if (column.width) {
                  width = column.width;
              } else if (this.colwidth[column.index]) {
                  width = this.colwidth[column.index].width;
              }
              return width;
          },
        toggleSelect (ev) {
          ev.stopPropagation();
          this.$parent.$parent.toggleSelect(this.index);
        },
        classes () {
          return [
              `${prefixCls}`,
                {
                    [`table-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right')
                }
          ];
        }
      },
      mounted () {
        this.ischecked=this.checked
        this.isdisabled=this.disabled
      },
      watch:{
        checked(){
          this.ischecked=this.checked
        },
          disabled(){
          this.isdisabled=this.disabled
        }
      }
};
