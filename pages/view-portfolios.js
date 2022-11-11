
import React from 'react';
import UserPortFolioView from 'views/UserPortFolioView';
import Main from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';

const PortfoliosView = () => {
  return <WithLayout component={UserPortFolioView} layout={Main} />;
};

export default PortfoliosView;

