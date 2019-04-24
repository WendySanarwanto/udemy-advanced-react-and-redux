import React from 'react';
import { Typography } from '@material-ui/core';

 // HoC to kick unauthenticated user away from visiting the Feature component
import requireAuth from './requireAuth';

const Feature = () => {
  return (
    <Typography component="h3" to="/" variant="h6" >This is secured faeture page.</Typography>
  )
};

export default requireAuth(Feature);
