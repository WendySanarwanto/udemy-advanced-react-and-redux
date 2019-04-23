import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputField from '../InputField';
import { fieldTopGapStyle, handCursorStyle } from '../styles';

const AuthForm = props => {
  const _onSubmit = (formValues) => {
    props.onSubmit(formValues);
  }

  const renderErrorMessage = () => {
    return (
      <div className="form-group has-error" style={ { marginTop: '4em' } }>
        <span className="help-block"><b>{ props.errorMessage }</b></span>
      </div>
    );
  }

  return (
    <React.Fragment>
      <form className="input-group" onSubmit={ props.handleSubmit( _onSubmit ) }>
        <Field id="inputEmail" name="email" component={ InputField } label="Email" 
               type="email" placeholder="e.g. john.smith@gmail.com" autoComplete="none" />
        <Field id="inputPassword" name="password" component={ InputField } 
               label="Password" type="password" autoComplete="none" style={ fieldTopGapStyle }/>
        { props.errorMessage ? renderErrorMessage() : null }
        <button type="submit" className="btn btn-primary" style={ {...fieldTopGapStyle, ...handCursorStyle} }>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default reduxForm({
  form: 'authForm',
})(AuthForm);

