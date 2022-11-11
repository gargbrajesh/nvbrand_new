import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import Data from './Data';

const useStyles = makeStyles(theme => ({
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const CalenderView = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Calender View
            </Typography>
            {/* <Button variant="outlined" color="primary">
              Reset all
            </Button> */}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={12}>
          <Data />
        </Grid>
      </Grid>
    </div>
  );
};

CalenderView.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default CalenderView;
