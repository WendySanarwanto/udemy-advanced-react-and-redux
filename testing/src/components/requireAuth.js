import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  const ComposedComponent = props => {
    const onAuthChanged = () => {
      const isSignedIn = props.auth;
      if (!isSignedIn) {
        props.history.push(`/`);
      }
    }
  
    useEffect(onAuthChanged, [props.auth]);

    return ( 
      <ChildComponent {...props} /> 
    );
  };

  const mapStateToProps = ({ auth }) => {
    return { auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
}
