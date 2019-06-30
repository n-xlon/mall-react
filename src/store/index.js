import {applyMiddleware, createStore} from 'redux'
import {reducer} from "./reducers"
import {userMsg} from "./actions"
import thunk from "redux-thunk";

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const unsubscrible = store.subscribe(() => store.state = store.getState().state)

window.store = store

console.log(store.dispatch(userMsg()), unsubscrible)