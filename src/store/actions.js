import {utils} from "../utils";

export function userMsg() {
  let dt = utils.getCookie({key: 'userLogin'})
  if (dt != null && dt) {
    console.log(dt)
    return {type: 'user', value: {...JSON.parse(dt), ...{isLogin: true}}}
  }
  return {type: ''}
}

export function changeShopAddress({addr, index}) {
  console.log(addr, index)
  return {type: 'changeAddr', data: {addr, index}}
}