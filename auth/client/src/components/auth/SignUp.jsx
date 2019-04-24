import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AuthFormMaterial from './AuthFormMaterial';
import {  clearAuthErrorMessage, signUp } from '../../actions/index.js';

const SIGNUP_REDIRECT_URL_PATH = '/feature';

const SignUp = props => {
  const onSubmit = (formValues) => {
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
      {/* <h4>Sign Up</h4>
      <br /> */}
      <AuthFormMaterial onSubmit={ onSubmit } title="Sign up" errorMessage={ errorMessage }/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errorSignUp: state.auth.errorMessage
  };
}

export default connect(mapStateToProps, { clearAuthErrorMessage, signUp })(SignUp);
