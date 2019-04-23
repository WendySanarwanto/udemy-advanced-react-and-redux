import React from 'react';

import AuthForm from './AuthForm';

const SignUp = () => {
  const onSubmit = (formValues) => {
    console.log(`[debug]<SignUp@onSubmit> formValues: \n`, formValues);
    // TODO: Call signup action creator
  };
  
  return (
    <div>
      <h4>Sign Up</h4>
      <br />    
      <AuthForm onSubmit={ onSubmit }/>
    </div>
  );
};

export default SignUp;
