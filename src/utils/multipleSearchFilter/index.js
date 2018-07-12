/**
 * Created by 高春明 on 2017/3/14.
 */

/**
 * 模糊查询、通过首字母查询
 * @param searchArray 被筛选的内容
 * @param condition 筛选条件
 * @returns {Array} 返回符合筛选条件的数组
 */
export default function multipleSearchFilter(source,condition,type) {
  let strCons;
  if('string' === typeof condition){
    strCons = arrayWithOutBlack(condition.split(' '));
  }

  //首字母查询
  if(type === 'f'){

  }

  //被筛选内容为数组，查询条件是字符串
  if(Array.isArray(source) && 'string' === typeof condition){
    return source.filter(function(item){
      return multipleConditionsValidator(item,strCons,true);
    })
  }

  // 被筛选内容和查询条件都为字符串
  if('string' === typeof source && 'string' === typeof condition){
    return multipleConditionsValidator(source,strCons,true);
  }

  /**
   * 去除数组中的空元素
   * @param source 原数组
   * @returns {Array} 去除空元素后的数组
   */
  function arrayWithOutBlack(source){
    let result =[];
    for(const item of source){
      if('' != item.trim()){
        result.push(item);
      }
    }
    return result;
  }

  /**
   * 多个条件筛选字符串
   * @param strSource 被匹配的字符串
   * @param strConditions 条件数组
   * @param any true，只要有一个条件匹配成功就为true；false，所有条件都匹配成功才返回true
   * @returns {boolean}
   */
  function multipleConditionsValidator(strSource,strConditions,any){
    let reg;
    if(any){
      for(const con of strConditions){
        reg = new RegExp(`.*${con}.*`,'i');
        if(reg.test(strSource))
          return true;
      }
      return false;
    }else{
      for(const con of strConditions){
        reg = new RegExp(`.*${con}.*`,'i');
        if(!reg.test(strSource))
          return false;
      }
      return true;
    }
  }
}
