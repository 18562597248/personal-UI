import Vue from 'vue';
//import { addClass, removeClass } from 'element-ui/src/utils/dom';

let hasModal = false;   //是否存在遮罩层||遮罩层的状态

const getModal = function() {
  if (Vue.prototype.$isServer) return;
  let modalDom = PopupManager.modalDom;   //记录manager 的遮罩层元素
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');   //不存在遮罩层 则新建一个遮罩层
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function(event) {    //绑定鼠标在其上移动触发的事件
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function() {              //绑定点击触发的事件
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};   //获取当前遮罩层方法

const instances = {};   //z-index需要排序的组件元素

const PopupManager = {
  zIndex: 2000,                        //默认值

  modalFade: true,                    //动画(逐渐消失)

  getInstance: function(id) {
    return instances[id];
  },         //get()方法

  register: function(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },  //注册

  deregister: function(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },          //撤销

  nextZIndex: function() {
    return PopupManager.zIndex++;
  },            //返回z-index值

  modalStack: [],

  doOnModalClick: function() {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];//取最后
    if (!topItem) return;//筛掉不满足（存在&不为空）的

    const instance = PopupManager.getInstance(topItem.id);//取到节点元素
    if (instance && instance.closeOnClickModal) {//是否具有 点击 当前元素[遮罩层] 触发关闭方法的 功能
      instance.close();//触发关闭function
    }
  },    //点击遮罩层时触发的function

  openModal: function(id, zIndex, dom, modalClass, modalFade) {
    if (Vue.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;    //筛掉 空id和没有z-index的
    this.modalFade = modalFade;   //根据参数modalFade值决定 是否添加 动画(逐渐消失)

    const modalStack = this.modalStack;   //记录manager中模态框堆栈 modalStack

    for (let i = 0, j = modalStack.length; i < j; i++) {    //遍历记录的modalStack
      const item = modalStack[i];
      if (item.id === id) {
        return;    // 若是找到 模态框的id和传入的参数id相同则 退出当前function
      }
    }

    const modalDom = getModal();    //得到遮罩层元素

    this.addClass(modalDom, 'v-modal');    //给遮罩层添加 基础样式类
    if (this.modalFade && !hasModal) {
      this.addClass(modalDom, 'v-modal-enter');    //若有动画 添加动画
    }
    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(item => this.addClass(modalDom, item));   //给模态框添加参数传进来的样式类 modalClass
    }
    setTimeout(() => {
      this.removeClass(modalDom, 'v-modal-enter');   //0.2秒后去掉 动画样式类
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {    //参数dom(规定在哪个元素下插入模态框)、dom的parent存在，切dom不为[DocumentFragment]类型
      dom.parentNode.appendChild(modalDom);   // dom下插入模态框
    } else {
      document.body.appendChild(modalDom);    //直接body下插入模态框
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;   //模态框添加z-index
    }
    modalDom.style.display = '';    //模态框display属性为默认值 [inline]

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });   //将这个遮罩层对象 压入modalStack
  },    //打开遮罩层

  closeModal: function(id) {
    const modalStack = this.modalStack;   //记录遮罩层堆栈modalStack
    const modalDom = getModal();    //利用getModal拿到遮罩层对象

    if (modalStack.length > 0) {    //遍历modalStack
      const topItem = modalStack[modalStack.length - 1];    //取最后(最新)一个
      if (topItem.id === id) {    //判断这个元素的id和参数的id是否匹配
        if (topItem.modalClass) {   //判断这个元素是否有modalClass属性
          let classArr = topItem.modalClass.trim().split(/\s+/);    //去掉前后空白，利用空白字符分割modalClass成数组
          classArr.forEach(item => this.removeClass(modalDom, item));    //遍历classArr数组，在modalDom中 删除classArr包含的每一个子元素
        }

        modalStack.pop();   //删除modalStack的最后(最新)一个元素
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;   //如果modalStack中还有值，则将遮罩层对象的z-index修改成新的modalStack中最后一个元素
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {    //如果不匹配则（i-1）
          if (modalStack[i].id === id) {    //直到找出匹配的modalStack[i]
            modalStack.splice(i, 1);    //删除i下标的元素
            break;    //退出当前方法
          }
        }
      }
    }

    if (modalStack.length === 0) {    //modalStack为空时
      if (this.modalFade) {
        this.addClass(modalDom, 'v-modal-leave');    //给modalDom遮罩层元素添加离开样式
      }
      setTimeout(() => {    //在0.2秒之后
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);   //删除当前modalDom遮罩层元素在节点树的节点
          modalDom.style.display = 'none';    //取消展示，改为隐藏
          PopupManager.modalDom = undefined;     //设置modalDom为不可用的undefined状态
        }
        this.removeClass(modalDom, 'v-modal-leave');   //移除'v-modal-leave'样式
      }, 200);
    }
  }   //关闭遮罩层
};    //弹出窗-管理(员)

function addClass(elem, cls) { //Add Classes Function
  var oldCls = elem.className;
  if (oldCls) {
    oldCls += " ";
  }
  elem.className = oldCls + cls;
}

function removeClass(elem, cls) { //Remove Classes Function
  var str = " " + elem.className + " ";
  elem.className = str.replace(" " + cls, "").replace(/^\s+/g, "").replace(/\s+$/g, "");
}

!Vue.prototype.$isServer && window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) { // ESC
    if (PopupManager.modalStack.length > 0) {
      const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
      if (!topItem) return;
      const instance = PopupManager.getInstance(topItem.id);
      if (instance.closeOnPressEscape) {
        instance.handleClose
          ? instance.handleClose()
          : (instance.handleAction ? instance.handleAction('cancel') : instance.close());
      }
    }
  }
});    //ESC事件

export default PopupManager;

