import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from './reducers';

const Root = ({ children, initialState }) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  
  const appStore = createStore(
    combinedReducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  return (
    <Provider store={ appStore }>
      { children }
    </Provider>
  );
}
export default Root;