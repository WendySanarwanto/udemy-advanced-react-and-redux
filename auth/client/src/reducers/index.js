import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth.reducer';

const combinedReducers = combineReducers({
  auth,
  form: formReducer,
});

export default combinedReducers;