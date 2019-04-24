import { AUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR_MESSAGE } from './types';
import authApi from "../api/auth.axios";  

const SIGNUP_API_PATH = '/signup';
const SIGNIN_API_PATH = '/signin';

const doAuth = async (authApiPath, data, type, dispatch) => {
  const response = await authApi.post(authApiPath, data);
  dispatch({ type, payload: response.data.token });
  localStorage.setItem(`token`, response.data.token);  
}

export const signUp = (formValues, callback) => async (dispatch) => {
  try {
    await doAuth(SIGNUP_API_PATH, formValues, AUTH_USER, dispatch);
    if (callback) { callback() }
  } catch(err) {
    // console.log(`[debug]<action@signUp> err: \n`, err);
    dispatch({ type: AUTH_ERROR, payload: err.response ? err.response.data.error : err.message });
  }
};

export const signIn = (formValues, callback) => async(dispatch) => {
  // let response;
  try {
    await doAuth(SIGNIN_API_PATH, formValues, AUTH_USER, dispatch);
    if (callback) { callback() }
  } catch(err) {
    // console.log(`[debug]<action@signUp> err: \n`, err);
    // dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credenntials.' });
  }
};

export const signOut = (callback) => {
  localStorage.removeItem('token');
  if (callback) {
    callback();
  }
  return {
    type: AUTH_USER,
    payload: ''
  }
};

export const clearAuthErrorMessage = () => {
  return {
    type: CLEAR_AUTH_ERROR_MESSAGE
  };
}

