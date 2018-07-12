/**
 * 判断value是否在validList中
 * @param {*} value 需要验证的值
 * @param {Array(*)} validList 验证列表
 * @returns {boolean}
 */
export function isOneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * 判断value是否是正整数数组
 * @param { Array(*) } value 需要验证的值
 * @param { Array(*) } exception 例外，不验证exception中的值
 * @returns {boolean}
 */
export function isIntegerArray(value,exception) {
  let re = /^[1-9]+[0-9]*$/
  if( Array.isArray(value) ){
    for (let i = 0; i < value.length; i++){
      if(exception && Array.isArray(exception) && isOneOf(value[i],exception)){    // 例外中的值不验证
        continue
      }else if(!re.test(value[i])){
        return false
      }
    }
    return true
  }else {
    return false
  }
}

/**
 * 判断value是否是字符串数组
 * @param { Array(*) } value 需要验证的值
 * @param { Array(*) } exception 例外，不验证exception中的值
 * @returns {boolean}
 */
export function isStringArray(value,exception) {
  if( Array.isArray(value) ){
    for (let i = 0; i < value.length; i++){
      if(exception && Array.isArray(exception) && isOneOf(value[i],exception)){    // 例外中的值不验证
        continue
      }else if(!(value[i].constructor === String)){
        return false
      }
    }
    return true
  }else {
    return false
  }
}
