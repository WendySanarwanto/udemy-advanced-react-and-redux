import { AUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
  token: '',
  errorMessage: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case AUTH_USER:
      return { ...state, token: action.payload };    
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_AUTH_ERROR_MESSAGE:
      return { ...state, errorMessage: ''}   
    default:
      return state;
  }
};

export default authReducer;
