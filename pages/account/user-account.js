import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import UserAccount from "views/AfterLogin/UserAccount";
import DocsLayout from "layouts/DocsLayout";
import WithLayout from "WithLayout";

const Component = () => {
  return (
    <NoSsr>
      <UserAccount />
    </NoSsr>
  );
};

const UserAccountData = () => {
  return (
    <WithLayout className="som" component={Component} layout={DocsLayout} />
  );
};

export default UserAccountData;
