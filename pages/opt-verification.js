import React from 'react';
import Otpverification from 'views/Otpverification';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const OtpVerificationCoverPage = () => {
  return (
    <WithLayout
      component={Otpverification}
      layout={Minimal}
    />
  )
};

export default OtpVerificationCoverPage;