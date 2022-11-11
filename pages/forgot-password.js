/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ResetPassword from 'views/SetNewPassword';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const ResetPasswordCoverPage = () => {
  return (
    <WithLayout
      component={ResetPassword}
      layout={Minimal}
    />
  )
};

export default ResetPasswordCoverPage;
