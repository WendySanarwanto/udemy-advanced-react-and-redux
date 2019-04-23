import { AUTH_USER, AUTH_ERROR } from './types';
import authApi from "../api/auth.axios";  

const SIGNUP_API_PATH = '/signup'

export const signUp = (formValues, callback) => async (dispatch) => {
  let response;
  try {
    response = await authApi.post(SIGNUP_API_PATH, formValues);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // console.log(`[debug]<action@signUp> response: \n`, response);
    localStorage.setItem(`token`, response.data.token);
    if (callback) { callback() }
  } catch(err) {
    // console.log(`[debug]<action@signUp> err: \n`, err);
    response = err.response;
    dispatch({ type: AUTH_ERROR, payload: response.data.error });
  }
};
