import TreeTableColumn from '../treetable/src/TreeTableColumn'

/* istanbul ignore next */
TreeTableColumn.install = function (Vue) {
    Vue.component(TreeTableColumn.name, TreeTableColumn);
};

export default TreeTableColumn
