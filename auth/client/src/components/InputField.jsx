import React from 'react';

const InputField = ({ input, label, id, type, placeholder, autoComplete, style }) => {
  // console.log(`input: \n`, input);
  return (
    <div className="form-group">
      <label htmlFor={ id } style={ style } >{ label }</label>
      <input className="form-control" {...input } 
             autoComplete={ autoComplete } 
             placeholder={ placeholder } 
             type={ type } 
             id={ id } />
    </div>
  );
}

export default InputField;