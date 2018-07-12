import Vue from 'vue'
function DataTransfer (data) {
  if (!(this instanceof DataTransfer)) {
    return new DataTransfer(data, null, null)
  }
}

DataTransfer.treeToArray = function (data, parent, level, expandedAll) {
  let tmp = []
  Array.from(data).forEach(function (record,index) {
      if (!record.isChecked) {
          Vue.set(record, 'isChecked', false)
      } else {
          Vue.set(record, 'isChecked', true)
      }
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', expandedAll)
    }
    if (parent) {
      Vue.set(record, '_parent', parent)
    }
    let _level = 0
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    let spaceHtml = "";
    for(var i=0;i<_level;i++){
      spaceHtml += "hd-tree-space"
    }
    Vue.set(record, 'spaceHtml', spaceHtml)
    tmp.push(record)
    if (record.children) {
      let children = DataTransfer.treeToArray(record.children, record, _level, expandedAll)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}

export default DataTransfer
