import React from 'react'
import NoInterNet from 'views/NoInterNet';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
function NoInternet() {
  return (
    <WithLayout
    component={NoInterNet}
    layout={Main}
/>)
}

export default NoInternet