import React from 'react'
import WithLayout from 'WithLayout';
import ViewPortfolio from "views/OrgPortfolioPreview"
import Main from 'layouts/BlackHeader';
const OrgPortfolioPreview = () => {
  return (
    <WithLayout
    component={ViewPortfolio}
    layout={Main}
/>
  )
}

export default OrgPortfolioPreview