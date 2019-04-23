import { SIGN_UP } from './types';
import authApi from "../api/auth.axios";  

const SIGNUP_API_PATH = '/signup'

export const signUp = formValues => async (dispatch) => {
  debugger;
  let response = await authApi.post(SIGNUP_API_PATH, formValues);
  console.log(`[debug]<action@signUp> response: \n`, response);
  dispatch({ type: SIGN_UP, payload: response });
  // TODO: Need to redirect to protected resource.
};

// export { signUp };