import  Progress from './src/Progress.vue'

/* istanbul ignore next */
Progress.install = function (Vue) {
    Vue.component(Progress.name, Progress);
};

export default Progress
