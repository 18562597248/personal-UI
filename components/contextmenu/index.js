import  ContextMenu from './src/ContextMenu.vue'

/* istanbul ignore next */
ContextMenu.install = function(Vue) {
    Vue.component(ContextMenu.name, ContextMenu);
};

export default ContextMenu