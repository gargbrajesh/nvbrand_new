import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Banner, Topbar, Footer } from './components';
const useStyles = makeStyles(theme => ({
  root: {
    height: '70vh !important',
   
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner />
    </div>
  );
};

export default IndexView;
