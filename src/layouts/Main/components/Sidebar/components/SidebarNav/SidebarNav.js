import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  Divider,
  ListItemText,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  console.log('pages', pages);
  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            Title
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            hello
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
          <MenuGroup item={company} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={contact} />
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem button>
        <Link href="/">
          <ListItemText primary="Find Doctors" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/">
          <ListItemText primary="Video Consultation" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/">
          <ListItemText primary="In-Clinic Consultation" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/">
          <ListItemText primary="Packages" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/">
          <ListItemText primary="Medi-files" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/">
          <ListItemText primary="Contact-us" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/">
          <ListItemText primary="Log In / Sign Up" />
        </Link>
      </ListItem>

      <Divider />

      <ListItem button>
        <Link href="coming-soon">
          <ListItemText primary="For Corporates" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="coming-soon">
          <ListItemText primary="For Doctors" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="coming-soon">
          <ListItemText primary="For Patients" />
        </Link>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
