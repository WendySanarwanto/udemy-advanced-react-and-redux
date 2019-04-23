import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../actions';
import requireAuth from '../requireAuth';

const SignOut = props => {
  useEffect(() => {
    props.signOut();
  }, [props]);

  return (
    <div>Sorry to see you go ...</div>
  );
};

export default requireAuth(connect(null, { signOut })(SignOut));
