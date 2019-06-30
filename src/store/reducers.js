import {combineReducers} from 'redux'
import {states} from "./state"
// import {userMsg} from "./actions"

function changeState(state = states, action) {
  if (action.type === 'user') {
    return {...state, ...{isLogin: action.value.isLogin}, user: action.value}
  } else if (action.type === 'changeAddr') {
    let shopAddress = state.shopAddress
    shopAddress.addr = action.data.addr
    shopAddress.index = action.data.index
    console.log(action.data, 222)
    return {...state, ...{shopAddress}}
  }
  return state
}

export const reducer = combineReducers({
  state: changeState
})
