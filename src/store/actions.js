import {utils} from "../utils";

export function userMsg() {
  let dt = utils.getCookie({key: 'userLogin'})
  if (dt != null && dt) {
    return {type: 'user', value: true}
  }
  return {type: ''}
}