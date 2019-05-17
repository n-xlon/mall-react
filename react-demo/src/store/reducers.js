import {combineReducers} from 'redux'
import {states} from "./state"
// import {userMsg} from "./actions"

function changeState(state = states, action) {
  if (action.type === 'user') {
    return {...state, ...{isLogin: action.value}}
  }
  return state
}

export const reducer = combineReducers({
  state: changeState
})
