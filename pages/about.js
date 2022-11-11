import React from 'react';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';
import Check from "views/Checking"
const AboutCover = () => {
    return (
        <WithLayout
        component={Check}
        layout={Minimal}
    />
    )
};

export default AboutCover;