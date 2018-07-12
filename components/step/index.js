import Step from './src/Step.vue'

/* istanbul ignore next */
Step.install = function (Vue) {
    Vue.component(Step.name, Step);
};

export default Step
