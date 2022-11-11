import React from 'react'
import TermsCondition from 'views/TermsCondition';
import Main from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';
function Tcondition() {
  return (
    <WithLayout
    component={TermsCondition}
    layout={Main}
/>
  )
}

export default Tcondition