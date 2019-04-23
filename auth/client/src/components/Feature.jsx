import React from 'react'

 // HoC to kick unauthenticated user away from visiting the Feature component
import requireAuth from './requireAuth';

const Feature = () => {
  return (
    <div>
      This is the feature !
    </div>
  )
};

export default requireAuth(Feature);
