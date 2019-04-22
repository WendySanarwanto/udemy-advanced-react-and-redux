import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Root from './Root';

ReactDOM.render(  
  <BrowserRouter>
    <Root>
      <Route path="/" component={ App } />    
    </Root>
  </BrowserRouter>,
  document.querySelector('#root'));
