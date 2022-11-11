import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Container,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import MenuIcon from '@material-ui/icons/Menu';
import Cookies from 'js-cookie';
import { checkToken } from '../../../../components/helper/LoginCheck';
import BrandLogo from './../../../../../public/assets/Images/logo/LogoDashboard.svg';
import Avatar from './../../../../../public/assets/Images/logo/avtar.jpg';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 4,
  },
  listName: {
    marginRight: '10px',
    '&  $lastChild': { marginRight: '0px' },
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    width: '100%',
  },

  toolbar: {
   
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    height: '55px',
    padding: theme.spacing('10px', 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing('10px', 0),
    },
  },

  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
     
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },

  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    fontWeight: 600,
    fontSize: '14px',
    color:'black'
  },
  listItemTextMenu: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    fontWeight: 600,
    fontSize: '15px',
    color:'black'
  },
  listName: {
    height: '65px',
    verticalAlign: 'middle',
    margin: '0 auto',
    textAlign: 'center',
    alignItems: 'center',
    display: 'grid',
    padding: '12px 10px',
    '&> p': {
      color: '#000000',
      fontSize: '12px',
    },
  },

  listItemIcon: {
    minWidth: 'auto',
  },

  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoImage: {
    position: 'relative',
    height: 'auto',
    width: '100px',
    display: 'block',
    top: '0',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  pointer: {
    cursor: 'pointer',
  },
  header_main: {
    background: 'red',
    position: 'relative',
  },
  header_container: {
    // background: '#010101cc',
    // background: '#58afb4',
    position: 'relative',
    zIndex: '999',
    padding: '5px',
    color:'black',
    // borderBottom:'2px solid grey',
    // boxShadow: '0 2px 2px -2px rgba(0,0,0,.2)'
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // Sticky Menu Area
  useEffect(() => {
    // window.addEventListener('scroll', isSticky);
    // return () => {
    //   window.removeEventListener('scroll', isSticky);
    // };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = e => {
    const header = document.querySelector('.toolbar');
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  const namMenuBar = [
    {
      _id: 1,
      navTitle: 'Home',
      navPath: '#',
    },
    {
      _id: 2,
      navTitle: 'Browse Portfolio',
      navPath: 'viewPortfolio',
    },
    {
      _id: 3,
      navTitle: 'Videos',
      navPath: '/#',
    },
    {
      _id: 4,
      navTitle: 'Upcomming Features',
      navPath: '/#',
    },
  ];

  const myToken = Cookies.get('id');
  const userName = Cookies.get('userName');
  //var userName = Cookies.get('userName'); 
  // Code for Right Dropdown menu ends

  const logoutData = () => {
    Cookies.remove('token');
    const loginToken = checkToken();
    if (loginToken) {
      alert('Login Set');
    } else {
      Cookies.set('userID','');
      Cookies.set('userName','');
      Cookies.set('userEmail','');
      Cookies.set('userPhoneNo','');
      router.push('/', undefined, { shallow: true });
    }
  };

  // Load Avatar URL

  const [userAvtar, setAvatar] = React.useState('');

  // const loadData = async () => {
  //   const res = await getPatientProfile();
  //   setAvatar(res.patient_info);
  // };
  // Dropdown After Login
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  // React.useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div>
      <div className={classes.header_container}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            className={clsx(classes.toolbar, 'toolbar')}
            {...rest}
          >
            <div className={classes.logoContainer}>
              <Link href="/">
                <Image
                  className={classes.logoImage}
                  src={BrandLogo}
                  alt="Beatnik Logo"
                  lazy={false}
                />
              </Link>
            </div>
            <div className={classes.flexGrow} />
            <Hidden smDown>
              <List disablePadding className={classes.navigationContainer}>
                <div className="left_portion">
                  {namMenuBar.map(menuName => (
                    <Link
                      href={menuName.navPath}
                      key={menuName._id}
                      color="textPrimary"
                      variant="body1"
                      className={clsx(classes.listItemTextMenu, 'menu-item')}
                    >
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        className={clsx(
                          classes.listItemTextMenu,
                          'menu-item',
                          classes.pointer,
                        )}
                      >
                        {router.pathname == `${menuName.navPath}` ? (
                          <p
                            className={clsx(classes.listName)}
                            style={{
                              borderBottom: '2px solid blue',
                              padding: '12px 10px ',
                              color: 'black',
                            }}
                          >
                            {menuName.navTitle}
                          </p>
                        ) : (
                          <p
                            className={clsx(classes.listName)}
                            style={{ color: 'black' }}
                          >
                            {menuName.navTitle}
                            {menuName.navSubTitle}
                          </p>
                        )}
                      </Typography>
                    </Link>
                  ))}
                </div>

                {/* Show user name if user logged in */}

                {myToken ? (
                  <div
                    className="after_login"
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    onClickAway={handleClickAway}
                  >
                    <Typography
                      style={{ color: 'black' }}
                      className={clsx(
                        classes.listItemTextMenu,
                        'menu-item',
                        classes.pointer,
                      )}
                      onClick={handleClick}
                    >
                      <IconButton>
                        <img src={Avatar} alt={userName} />
                      </IconButton>
                      {userName}
                    </Typography>
                    {open ? (
                      <List className="after_login_list" component="nav">
                        <Link href="/account">
                          <p className="user_feature">
                            <PermIdentityIcon className="user_icon" />
                            <span>Profile </span>
                          </p>
                        </Link>
                        <Link href="/medifiles">
                          <p className="user_feature">
                            <DashboardIcon className="user_icon" />
                            <span>Dashboard</span>
                          </p>
                        </Link>
                        <Link href="/medifiles">
                          <p className="user_feature">
                            <TabletMacIcon className="user_icon" />
                            <span>Appointments</span>
                          </p>
                        </Link>
                        <ListItem
                          className="user_feature"
                          button
                          onClick={logoutData}
                        >
                          <ListItemIcon className="user_icon">
                            <ExitToAppIcon />
                          </ListItemIcon>
                          <ListItemText
                            className="user_f_title"
                            primary="Log Out"
                          />
                        </ListItem>
                      </List>
                    ) : null}
                  </div>
                ) : (
                  <div className="right_side">
                    <Link
                      href="#"
                      color="textPrimary"
                      variant="body1"
                      className={clsx(classes.listItemTextMenu, 'menu-item letsTalk')}
                    >
                      <Typography
                        className={clsx(
                          classes.listItemTextMenu,
                          'menu-item letsTalk',
                          classes.pointer,
                        )}
                      >
                        Let's Talk
                      </Typography>
                    </Link>
                    <Link
                      href="dashboard"
                      color="textPrimary"
                      variant="body1"
                      className={clsx(classes.listItemTextMenu, 'menu-item')}
                    >
                    <Typography
                    className={clsx(
                      classes.listItemTextMenu,
                      'menu-item login_Header',
                      classes.pointer,
                    )}
                  >
                    Dashboard
                  </Typography>
                    </Link>
                  </div>
                )}
              </List>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                onClick={onSidebarOpen}
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;