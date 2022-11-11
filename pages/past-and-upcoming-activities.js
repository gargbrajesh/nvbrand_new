import React from 'react'
import InnerHeader from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';
import PastandUpcomingActivities from "views/PastandUpcomingActivities"

function OrgScreenTwo() {
  return (
    <WithLayout
    component={PastandUpcomingActivities}
    layout={InnerHeader}
/>
  )
}

export default OrgScreenTwo;
