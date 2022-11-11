import React from "react";
import SigninCover from "views/SignInCover";
import Minimal from "layouts/Minimal";
import WithLayout from "WithLayout";

const SigninCoverPage = () => {
  return <WithLayout component={SigninCover} layout={Minimal} />;
};

export default SigninCoverPage;
