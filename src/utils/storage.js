/**
 * 设置cookie
 * @param name [String] 标签key
 * @param value [String] 值
 * @param time [Number] 过期时间
 */
export function setCookie (key, value, time) {
  let tm = new Date()
  tm.setTime(tm.getTime() + time * 1)
  document.cookie = `${key}=${escape(value)};expires=${tm.toUTCString()}`
}

/**
 * 获取cookie
 * @param name {string} 标签key
 * @returns {string|null} 返回key对应的value
 */
export function getCookie ({key}) {
  let reg = new RegExp("(^|)" + key + "=([^;]*)(;|$)")
  let arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}
