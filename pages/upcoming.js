import React from 'react'
import UpcomingFeatureDb from 'views/UpcomingFeatureDb';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

function UpcomingFeaturesDasboard() {
  return (
    <WithLayout
    component={UpcomingFeatureDb}
    layout={Main}
/>
  )
}

export default UpcomingFeaturesDasboard