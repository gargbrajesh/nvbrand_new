import React from 'react'
import WithLayout from 'WithLayout';
import ViewPortfolio from "views/OrgPreview"
import Main from 'layouts/BlackHeader';
const OrgPreview = () => {
  return (
    <WithLayout
    component={ViewPortfolio}
    layout={Main}
/>
  )
}

export default OrgPreview