import Time from 'components/date/utils/time-picker';

Time.install = function(Vue) {
    Vue.component(Time.name, Time);
};

export default Time;