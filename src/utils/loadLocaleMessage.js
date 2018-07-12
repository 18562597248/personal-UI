/**
 * @fileOverview  加载语言包
 * @author：高春明
 * @date：2016.11.18 11:00:00
 */

/**
 * 加载语言包，此方法加载全部的语言包。
 * 动态加载语言包的方法，i18n的作者正在完善，待完善后，此方法将废弃
 * @param languages 数组，如['zh_CN','en']
 */
export default function loadLocaleMessage (locale, cb) {
  return fetch('../static/language/' + locale, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    return res.json()
  }).then((json) => {
    if (Object.keys(json).length === 0) {
      return Promise.reject(new Error('locale empty !!'))
    } else {
      return Promise.resolve(json)
    }
  }).then((message) => {
    cb(null, message)
  }).catch((error) => {
    cb(error)
  })
}


