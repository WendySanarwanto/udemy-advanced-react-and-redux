import React from 'react';

import { fieldTopGapStyle, handCursorStyle } from '../styles';

const AuthForm = () => {
  return (
    <React.Fragment>
      <form className="input-group">
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="e.g. john.smith@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword" style={ fieldTopGapStyle } >Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="<your secret>" />        
        </div>
        <button type="submit" className="btn btn-primary" style={ {...fieldTopGapStyle, ...handCursorStyle} }>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default AuthForm;

