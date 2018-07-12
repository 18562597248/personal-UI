import Date from './utils/date-picker';

Date.install = function(Vue) {
    Vue.component(Date.name, Date);
};

export default Date;