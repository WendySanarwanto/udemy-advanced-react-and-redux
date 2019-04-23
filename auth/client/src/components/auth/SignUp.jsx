import React from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';
import { signUp } from '../../actions/index.js';

const SignUp = props => {
  const onSubmit = (formValues) => {
    // console.log(`[debug]<SignUp@onSubmit> formValues: \n`, formValues);
    props.signUp(formValues);
  };
  
  return (
    <div>
      <h4>Sign Up</h4>
      <br />    
      <AuthForm onSubmit={ onSubmit }/>
    </div>
  );
};

export default connect(null, { signUp })(SignUp);
