import React from 'react';

import AuthForm from './AuthForm';

const SignIn = () => {
  const onSubmit = (formValues) => {
    console.log(`[debug]<SignIn@onSubmit> formValues: \n`, formValues);
    // TODO: Call signIn action creator
  };

  return (
    <div>
      <h4>Sign In</h4>
      <br />
      <AuthForm onSubmit={ onSubmit }/>
    </div>
  );
};

export default SignIn;
