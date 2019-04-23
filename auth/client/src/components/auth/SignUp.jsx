import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';
import {  clearAuthErrorMessage, signUp } from '../../actions/index.js';

const SIGNUP_REDIRECT_URL_PATH = '/feature';

const SignUp = props => {
  const onSubmit = (formValues) => {
    // console.log(`[debug]<SignUp@onSubmit> formValues: \n`, formValues);
    // console.log(`[debug]<SignUp@onSubmit> props: \n`, props);
    props.signUp(formValues, () => {
      props.history.push(SIGNUP_REDIRECT_URL_PATH);
    });
  };
  
  useEffect(() => {
    return function componentWillUnmount(){
      props.clearAuthErrorMessage();
    };
  }, []);

  let errorMessage = props.errorSignUp && props.errorSignUp !== '' ? props.errorSignUp : null;
  
  return (
    <div>
      <h4>Sign Up</h4>
      <br />    
      <AuthForm onSubmit={ onSubmit } errorMessage={ errorMessage }/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errorSignUp: state.auth.errorMessage
  };
}

export default connect(mapStateToProps, { clearAuthErrorMessage, signUp })(SignUp);
