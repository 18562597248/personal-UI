let currentPageTableEleObj = false;
let fuse = 1;
export function tableHandleResize(obj){   //调整table自适应,接受一个保证是tableElement父级 及及以上的 eleObj参数,建议<page-body>的$parent级
  getCurrentPageTableEleObj(obj);
  if(currentPageTableEleObj && hasClass(currentPageTableEleObj.$el,'hd_data_tables_wrapper_cls')){
    currentPageTableEleObj.handleResize();
  }else{
    fuse++;
  }
}
function getCurrentPageTableEleObj(obj){
  if(obj && obj.$children){
    for(let i=0;i<obj.$children.length;i++){
      if((obj.$children[i].$refs['hd_data_tables_wrapper_ref'])){
        currentPageTableEleObj =  obj.$children[i];
        let fuse_ = fuse;
        if(--fuse_ < 1)return;
      }
    }
    for(let i=0;i<obj.$children.length;i++){
      getCurrentPageTableEleObj(obj.$children[i]);
    }
  }
}
function hasClass(elem, cls) {
  var str = " " + elem.className + " ";
  var testCls = " " + cls + " ";
  return (str.indexOf(testCls) != -1);
}
