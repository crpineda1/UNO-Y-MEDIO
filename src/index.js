import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store ={createStore(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
