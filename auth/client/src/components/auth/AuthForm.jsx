import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { fieldTopGapStyle, handCursorStyle } from '../styles';

const InputField = ({ input, label, id, type, placeholder, autoComplete }) => {
  // console.log(`input: \n`, input);
  return (
    <div className="form-group">
      <label htmlFor={ id }>{ label }</label>
      <input {...input } autoComplete={ autoComplete } placeholder={ placeholder } type={ type } className="form-control" id={ id } />
    </div>
  );
}

const AuthForm = (props) => {
  const _onSubmit = (formValues) => {
    props.onSubmit(formValues);
  }

  return (
    <React.Fragment>
      <form className="input-group" onSubmit={ props.handleSubmit( _onSubmit ) }>
        <Field id="inputEmail" name="email" component={ InputField } label="Email" 
               type="email" placeholder="e.g. john.smith@gmail.com" autoComplete="none" />
        <Field id="inputPassword" name="password" component={ InputField } 
               label="Password" type="password" autoComplete="none" />
        <button type="submit" className="btn btn-primary" style={ {...fieldTopGapStyle, ...handCursorStyle} }>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default reduxForm({
  form: 'authForm',
})(AuthForm);

