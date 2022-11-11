import React from 'react'
import CookiesCondition from 'views/Cookies';
import Main from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';
function Cookies() {
    return (
        <WithLayout
        component={CookiesCondition}
        layout={Main}
    />
      )
    }
export default Cookies