import Vue from 'vue';
import Notice from './src/Notice.vue';
import Notification from './src/Notification.vue';
import popup from 'src/utils/popup/popupManager.js'     //z-index管理
let NoticeConstructor = Vue.extend(Notice);
let NotificationConstructor = Vue.extend(Notification);

function handleOptions(options){
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  return options;
}

function getNoticeByType(type){
  return function(options){
    options = handleOptions(options);
    options.type = type;
    showNotice(options);
  }
}

/**
 * 根据配置显示Notice
 * @param options vue实例选项
 */
function showNotice(options){
  if (Vue.prototype.$isServer) return;
  options = handleOptions(options);
  let instanceOfNotice = new NoticeConstructor({data: options});
  let instanceOfNotification ;
  if(document.getElementById('theOnlyHdNotifications')){
    let classNameOfNotification = document.getElementById('theOnlyHdNotifications').className.split(' ');
    let position_ ='',mode_='';
    for(let i=0,len=classNameOfNotification.length;i<len;i++){
        switch(classNameOfNotification[i]){
            case 'toast-top-left':position_ = 'leftTop';break;
            case 'toast-top-right':position_ = 'rightTop';break;
            case 'toast-bottom-left':position_ = 'leftBottom';break;
            case 'toast-bottom-right':position_ = 'rightBottom';break;
            case 'notice-mode-up':mode_ = 'up';break;
            case 'notice-mode-down':mode_ = 'down';break;
            default:break;
        }
      //if(classNameOfNotification[i]==='toast-top-left'){position_ = 'leftTop';}
      //if(classNameOfNotification[i]==='toast-top-right'){position_ = 'rightTop';}
      //if(classNameOfNotification[i]==='toast-bottom-left'){position_ = 'leftBottom';}
      //if(classNameOfNotification[i]==='toast-bottom-right'){position_ = 'rightBottom';}
      //if(classNameOfNotification[i]==='notice-mode-up'){mode_ = 'up';}
      //if(classNameOfNotification[i]==='notice-mode-down'){mode_ = 'down';}
    }
    if((typeof options.position==='object'?options.position.default!==position_:options.position!==position_)||(typeof options.mode==='object'?options.mode.default!==mode_:options.mode!==mode_)){
      document.body.removeChild(document.getElementById('theOnlyHdNotifications'));
    }
  }
  if(document.getElementById('theOnlyHdNotifications')){
    instanceOfNotification = document.getElementById('theOnlyHdNotifications');
    if(options.mode==='down'){
      instanceOfNotification.appendChild(instanceOfNotice.$mount().$el);
      instanceOfNotice.$el.style.zIndex = popup.nextZIndex();     //z-index管理
      sound();
    }else{
      instanceOfNotification.insertBefore(instanceOfNotice.$mount().$el,instanceOfNotification.childNodes[0]);
      instanceOfNotice.$el.style.zIndex = popup.nextZIndex();     //z-index管理
      sound();
    }
  } else {
    instanceOfNotification = new NotificationConstructor({data: options});
    document.body.appendChild(instanceOfNotification.$mount().$el);
    instanceOfNotification.$el.style.zIndex = popup.nextZIndex();     //z-index管理
    instanceOfNotification.$mount().$el.appendChild(instanceOfNotice.$mount().$el);
    instanceOfNotice.$el.style.zIndex = popup.nextZIndex();     //z-index管理
    sound();
  }
}

function sortObj(obj) {
  var arr = [];
  for (let i=0;i<obj.length;i++) {
    arr.push([obj[i],i]);
  };
  arr.reverse();
  return arr;
}

function sound(){
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "/static/sound/alert.mp3");
  audioElement.play();
}

showNotice.success = getNoticeByType('success');
showNotice.warning = getNoticeByType('warning');
showNotice.error = getNoticeByType('error');

export default showNotice;
