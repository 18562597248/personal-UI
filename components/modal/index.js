import Modal from './src/Modal.vue'

/* istanbul ignore next */
Modal.install = function(Vue) {
    Vue.component(Modal.name, Modal);
};

export default Modal

