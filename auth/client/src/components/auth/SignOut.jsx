import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { signOut } from '../../actions';
import requireAuth from '../requireAuth';

const SignOut = props => {
  useEffect(() => {
    props.signOut();
  }, [props]);

  return (
    <Typography component="h3" to="/" variant="h6" >Sorry to see you go ...</Typography>
  );
};

export default requireAuth(connect(null, { signOut })(SignOut));
