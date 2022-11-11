import React from 'react';
import ResetPassword from 'views/ResetPassword';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const SetNewPasswordCoverPage = () => {
  return (
    <WithLayout
      component={ResetPassword}
      layout={Minimal}
    />
  )
};

export default SetNewPasswordCoverPage;