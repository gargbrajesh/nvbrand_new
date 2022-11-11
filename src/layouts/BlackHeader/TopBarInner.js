import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Topbar } from './components';
import { ScrollTop } from 'components/atoms';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',

  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 60,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 320,
      paddingTop: 100,
      paddingBottom: 50,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

const TopBarInner = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Topbar
        themeMode={themeMode}
        themeToggler={themeToggler}
        onMobileNavOpen={() => setMobileNavOpen(true)}
      />
    
      
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
   
      <ScrollTop />
    </div>
  );
};

TopBarInner.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default TopBarInner;
