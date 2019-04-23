import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const UNAUTHENTICATED_REDIRECT_URL_PATH = '/';

export default ChildComponent => {
  const ComposedComponent = props => { 
    const onAuthChanged = () => {
      if (props.auth || ((typeof props.auth.token) !== 'string') || props.auth.token === '') {
        props.history.push(UNAUTHENTICATED_REDIRECT_URL_PATH);
      }
    };
    
    useEffect( onAuthChanged , [props.auth]);

    return <ChildComponent {...props} />
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent);
}
