import React from 'react'
import AboutMe from 'views/AboutUs';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
function AboutUs() {
  return (
    <WithLayout
        component={AboutMe}
        layout={Main}
    />
  )
}

export default AboutUs