import React from 'react'
import WithLayout from 'WithLayout';
import ViewPortfolio from "views/ViewPortfolio"
import Minimal from 'layouts/BlackHeader';
function view() {
  return (
    <WithLayout
    component={ViewPortfolio}
    layout={Minimal}
/>
  )
}

export default view;


