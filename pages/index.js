import React from 'react';
import LandingPages from 'views/LandingPages';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const IndexPage = () => {
  return <WithLayout component={LandingPages} layout={Main} />;
};

export default IndexPage;
