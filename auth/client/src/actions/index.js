import { AUTH_USER, AUTH_ERROR } from './types';
import authApi from "../api/auth.axios";  

const SIGNUP_API_PATH = '/signup'
const SIGNUP_REDIRECT_URL_PATH = '/';

export const signUp = (formValues, history) => async (dispatch) => {
  let response;
  try {
    response = await authApi.post(SIGNUP_API_PATH, formValues);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // console.log(`[debug]<action@signUp> response: \n`, response);
  } catch(err) {
    // console.log(`[debug]<action@signUp> err: \n`, err);
    response = err.response;
    dispatch({ type: AUTH_ERROR, payload: response.data.error });
  }

  // TODO: Need to redirect to protected resource.
  history.push(SIGNUP_REDIRECT_URL_PATH);
};
