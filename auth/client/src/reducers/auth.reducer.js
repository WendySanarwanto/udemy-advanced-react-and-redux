import { SIGN_UP } from '../actions/types';

const INITIAL_STATE = {
  token: '',
  errorMessage: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SIGN_UP:
      let token = '';
      if (action.payload.code === 200) {
        token = action.payload.data.token;
        return {...state, token};
      }

      // TODO: Handle error message 

      return {state};
    default:
      return state;
  }
};

export default authReducer;
