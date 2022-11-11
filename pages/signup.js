import React from "react";
import SignupCover from "views/SignUpCover";
import Minimal from "layouts/Minimal";
import WithLayout from "WithLayout";

const SignupCoverPage = () => {
  return <WithLayout component={SignupCover} layout={Minimal} />;
};

export default SignupCoverPage;
