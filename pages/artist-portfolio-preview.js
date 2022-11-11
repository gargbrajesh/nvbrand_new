import React from 'react';
import UserPortFolioView from 'views/ArtistPortfoliosPreView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ArtistPortfoliosPreView = () => {
  return <WithLayout component={UserPortFolioView} layout={Main} />;
};

export default ArtistPortfoliosPreView;