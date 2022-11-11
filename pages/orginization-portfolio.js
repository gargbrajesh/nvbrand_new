
import React from 'react';
import UserOrginizationPortFolio from 'views/UserOrginizationPortFolio';
import Main from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';

const PortfoliosView = () => {
  return <WithLayout component={UserOrginizationPortFolio} layout={Main} />;
};

export default PortfoliosView;

