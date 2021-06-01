import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import App from './App';
import reducers from './reducers'

console.log("index before store")
const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
console.log("index after store")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
