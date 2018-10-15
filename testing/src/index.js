import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/app';
import { appStore } from './stores';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,   
  document.querySelector('#root'));
