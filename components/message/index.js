/**
 * Created by 高春明 on 2017/4/5.
 */
import Vue from 'vue';
import Message from './src/Message.vue';
import popup from 'src/utils/popup/popupManager.js'     //z-index管理
let MessageConstructor = Vue.extend(Message);
//const messageBtnFocusMap = {
//  'confirm': 'confirmRef',
//  'spare': 'spareRef',
//  'cancel': 'cancelRef'
//};

/**
 * 处理options
 * @param options 原options
 * @returns {*|{}} 处理后的options
 */
function handleOptions(options){
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  return options;
}

/**
 * 获取不同类型的message
 * @param type 类型
 * @returns {Function} 返回能通过vm实例调用的方法，如this.$message.type()
 */
function getMessageByType(type){
  return function(options){
    options = handleOptions(options);
    options.type = type;
    showMessage(options);
  }
}

/**
 * 根据配置显示message
 * @param options vue实例选项
 */
function showMessage(options){
  if (Vue.prototype.$isServer) return;
  options = handleOptions(options);
  return new Promise((resolve, reject) => {
    //try {
      options.doubleRe=function(value,action){if(action==undefined||action){
        resolve(value);
      }else {
        reject(value);
      }};
    //}catch(e) {
    //  reject(e);
    //}
    let instance = new MessageConstructor({data: options});
    options.showMessage=true;
    document.body.appendChild(instance.$mount().$el);
    instance.$el.style.zIndex = popup.nextZIndex();     //z-index管理
    //instance.$refs.confirmRef.$el.focus();
    //instance.$refs[(this.messageBtnFocusMap[options.focus])].$el.focus();
    instance.$refs[(options.focus+'Ref')] && instance.$refs[(options.focus+'Ref')].$el.focus();
    if(options.lockScroll && document.getElementsByTagName('html')[0].style.overflow!=='hidden'){
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }
  });

}

showMessage.success = getMessageByType('success');
showMessage.warning = getMessageByType('warning');
showMessage.error = getMessageByType('error');

export default showMessage;
