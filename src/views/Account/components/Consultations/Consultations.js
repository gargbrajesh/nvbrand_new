import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paused from './paused';
import Completed from './Completed';
import Upcoming from './Upcoming';
const useStyles = makeStyles(theme => ({
  tabHeader: {
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
    backgroundColor: theme.palette.background.white,
  },
}));

const Consultations = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // code for Tabs =======================================
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        <Box>{children}</Box>
      </Typography>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  // code for tabs and
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  // End tab ======================================================

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <AppBar position="static" color="" className={classes.tabHeader}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Upcoming " {...a11yProps(0)} />
            <Tab label="Paused " {...a11yProps(1)} />
            <Tab label="Completed " {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Upcoming />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paused />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Completed />
        </TabPanel>
      </Grid>
    </div>
  );
};

Consultations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Consultations;
