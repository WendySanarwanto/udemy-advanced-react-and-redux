import React from 'react';
import { Provider } from 'react-redux';
import { appStore } from './stores';

export default (props) => {
  return (
    <Provider store={appStore}>
      {props.children}
    </Provider>
  );
}