import React from 'react'
import PrivacyCondition from 'views/Privacy';
import Main from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';
function Privacy() {
    return (
        <WithLayout
        component={PrivacyCondition}
        layout={Main}
    />
      )
    }

export default Privacy