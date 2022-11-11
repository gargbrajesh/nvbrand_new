import React from "react";
import WithLayout from "WithLayout";
import ViewPortfolio from "views/OrgViewPortfolio";
import Main from "layouts/BlackHeader";
const OrgViewPortfolio = () => {
  return <WithLayout component={ViewPortfolio} layout={Main} />;
};

export default OrgViewPortfolio;
