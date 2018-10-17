import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import 'index.css';
import App from 'components/app';
import Root from './root';
// import { appStore } from 'stores';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'));
