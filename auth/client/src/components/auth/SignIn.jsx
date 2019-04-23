import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';
import { clearAuthErrorMessage, signIn } from '../../actions/index.js';

const SIGNIN_REDIRECT_URL_PATH = '/feature';

const SignIn = props => {
  const onSubmit = (formValues) => {
    // console.log(`[debug]<SignIn@onSubmit> formValues: \n`, formValues);
    props.signIn(formValues, () => {
      props.history.push(SIGNIN_REDIRECT_URL_PATH);
    });
  };

  useEffect(() => {
    return function componentWillUnmount(){
      props.clearAuthErrorMessage();
    };
  });
    
  let errorMessage = props.errorSignIn && props.errorSignIn !== '' ? props.errorSignIn : null;

  return (
    <div>
      <h4>Sign In</h4>
      <br />
      <AuthForm onSubmit={ onSubmit } errorMessage={ errorMessage }/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errorSignIn: state.auth.errorMessage
  };
}

export default connect(mapStateToProps, { clearAuthErrorMessage, signIn })(SignIn);
