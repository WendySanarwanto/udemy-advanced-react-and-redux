import { combineReducers } from 'redux';

const dummy = (state={}, action) => state;

const combinedReducers = combineReducers({
  dummy
});

export default combinedReducers;