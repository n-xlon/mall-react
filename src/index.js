import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './style/index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/index"
const ujs = require('ujs_js')

window.ujs = ujs

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
