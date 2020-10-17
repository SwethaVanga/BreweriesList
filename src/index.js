import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import promiseMiddleware from 'redux-promise';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers'

const middleware = applyMiddleware(promiseMiddleware)

const store = createStore(rootReducer, {breweries: []}, middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
