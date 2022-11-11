/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import InnerHeader from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';
import Organization from "views/ArtSpacePortfolio";

const Checking = () => {
    return (
        <WithLayout
            component={Organization}
            layout={InnerHeader}
        />
    )
};

export default Checking;
