import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import General from './General';
const BasicInfo = props => {

  return (
    <div className="praveenk">
        <Grid container spacing={3}>
        <General/>
        </Grid>
    </div>
  );
};

BasicInfo.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default BasicInfo;
