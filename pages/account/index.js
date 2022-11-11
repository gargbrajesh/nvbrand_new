import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import UserProfile from "views/AfterLogin/UserProfile";
import DocsLayout from "layouts/DocsLayout";
import WithLayout from "WithLayout";

const Component = () => {
  return (
    <NoSsr>
      <UserProfile />
    </NoSsr>
  );
};

const UserProfileData = () => {
  return (
    <WithLayout component={Component} layout={DocsLayout} />
  );
};

export default UserProfileData;
