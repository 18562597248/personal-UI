import Widget from './src/Widget.vue'

/* istanbul ignore next */
Widget.install = function(Vue) {
    Vue.component(Widget.name, Widget);
};

export default Widget
