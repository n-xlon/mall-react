import {createStore} from 'redux'
import {reducer} from "./reducers"
import {userMsg} from "./actions"

export const store = createStore(reducer)

const unsubscrible = store.subscribe(() => store.state = store.getState().state)

window.store = store

store.dispatch(userMsg())