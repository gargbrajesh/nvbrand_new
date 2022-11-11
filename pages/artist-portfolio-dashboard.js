import React from 'react';
import UserPortFolioDashboard from 'views/ArtistPortfoliosDashboard';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ArtistPortfoliosDashboard = () => {
  return <WithLayout component={UserPortFolioDashboard} layout={Main} />;
};

export default ArtistPortfoliosDashboard;