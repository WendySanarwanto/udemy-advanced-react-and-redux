import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Root from './Root';

const loadTokenFromLocalStorage = () => {
  return { 
    auth: { 
      token: localStorage.getItem('token') 
    } 
  };
}

ReactDOM.render(
  <BrowserRouter>
    <Root initialState={ loadTokenFromLocalStorage() } >
      <Route path="/" component={ App } />>
    </Root>
  </BrowserRouter>,
document.querySelector('#root'));
