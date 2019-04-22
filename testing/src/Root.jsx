import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';

import reducers from './reducers';

export default ({ children, initialState }) => {
  // console.log(`initialState: `, initialState);
  const appStore = createStore(
    reducers, 
    initialState, 
    // applyMiddleware(reduxPromise)
    applyMiddleware(async, stateValidator)
  );
  
  return (
    <Provider store={appStore}>
      { children }
    </Provider>
  );
}