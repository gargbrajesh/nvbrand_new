import React, { useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Toolbar,
  Hidden,
  List,
  Typography,
  IconButton,
  Container,
  makeStyles,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  MenuItem,
  MenuList,
  Popper,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BannerImage from "../../../../../public/assets/Images/Banner.png";
import AboutHero from "../../../../../public/assets/Images/About Hero.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Image } from "components/atoms";
import MenuIcon from "@material-ui/icons/Menu";
import Cookies from "js-cookie";
import { checkToken } from "../../../../components/helper/LoginCheck";
import BrandLogo from "./../../../../../public/assets/Images/Logo.png";

const options = [
  {
    id: 1,
    name: "Dashboard",
    href: "/account",
  },
  {
    id: 2,
    name: "Log Out",
    href: "",
  },
];
const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 4,
  },
  accountAction: {
    position: "relative",
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px",
    lineHeight: "25px",
    color: "black !important ",
    cursor: "pointer",
    background: "transparent",
    "&:hover ": {
      background: "transparent",
      boxShadow: "none !important",
    },
  },
  btnG: {
    position: "relative",
    boxShadow: "none !important",
    "& .MuiButtonGroup-groupedContainedHorizontal:not(:last-child)": {
      borderRight: "none !important",
    },
  },
  listName: {
    marginRight: "10px",

    "&  $lastChild": { marginRight: "0px" },
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
    width: "100%",
    marginTop: "20px",
  },

  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    height: "55px",
    padding: theme.spacing("10px", 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing("10px", 0),
    },
  },
  toolbar1: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    height: "55px",
    marginTop: "10px",
    padding: theme.spacing("10px", 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing("10px", 0),
    },
  },

  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark,
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0,
    },
  },

  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
    fontWeight: 600,
    fontSize: "14px",
  },
  listItemTextMenu: {
    flex: "0 0 auto",
    // marginRight: theme.spacing(2),
    marginRight: "10px",
    whiteSpace: "nowrap",
    fontWeight: 600,
    fontSize: "15px",
  },
  listName: {
    height: "65px",
    verticalAlign: "middle",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight:'25px',
    margin: "0 auto",
    textAlign: "center",
    alignItems: "center",
    display: "grid",
    padding: "12px 10px",
    "&> p": {
      color: "#000000",
      fontSize: "18px",
    },
  },

  listItemIcon: {
    minWidth: "auto",
  },

  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    color: 'white',
    "&:hover": {
      background: "transparent",
    },
  },
  logoImage: {
    position: "relative",
    height: "auto",
    display: "block",
    top: "0",
    marginTop: "25px",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  pointer: {
    cursor: "pointer",
  },
  header_main: {
    background: "red",
    position: "relative",
  },
  header_container: {
    position: "relative",
    zIndex: "999",
    justifyContent: "center",
    height: "80px",
    marginBottom:'20px',
   
  },
  userIcon: {
    fill: "#ffae00",
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

  // Sticky Menu Area

  /* Method that will fix header after a specific scrollable */

  const namMenuBar = [
    {
      _id: 1,
      navTitle: "Accueil",
      navPath: "/",
    },
    {
      _id: 2,
      navTitle: "A propos",
      navPath: "/apropos",
    },

    {
      _id: 3,
      navTitle: "Tarifs",
      navPath: "/tarifs",
    },
    {
      _id: 4,
      navTitle: "Newsroom",
      navPath: "/newsroom",
    },
    {
      _id: 5,
      navTitle: "Contact",
      navPath: "/contact",
    },
  ];

  const myToken = Cookies.get("id");
  const userName = Cookies.get("name");
  // Code for Right Dropdown menu ends
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const logoutData = () => {
    Cookies.remove("id");
    Cookies.remove("aboutMe");
    Cookies.remove("city");
    Cookies.remove("country");
    Cookies.remove("createdAt");
    Cookies.remove("dob");
    Cookies.remove("email");
    Cookies.remove("fromSocial");
    Cookies.remove("gender");
    Cookies.remove("id");
    Cookies.remove("isActive");
    Cookies.remove("joinAs");
    Cookies.remove("name");
    Cookies.remove("phoneNumber");
    const loginToken = checkToken();
    if (loginToken) {
      router.push("/", undefined, { shallow: true });
    } else {
      router.push("/", undefined, { shallow: true });
    }
  };

  return (
    <div>
      <div className={classes.header_container} style={{marginBottom:'150px'}}>
      <img src={BannerImage} alt={BannerImage.subTitle} />
        <Container maxWidth="xl" >
          <Toolbar
            disableGutters
            className={clsx(classes.toolbar, "toolbar")}
            {...rest}
          >
            <div className={classes.logoContainer}>
              
              <Link href="/">
                <Image
                  className={classes.logoImage}
                  src={BrandLogo}
                  alt="Logo"
                  lazy={false}
                />
              </Link>
            </div>
            <div className={classes.flexGrow} />
            <Hidden smDown>
              <List disablePadding className={classes.navigationContainer}>
                <div className="left_portion">
                  {namMenuBar.map((menuName) => (
                    <Link
                      href={menuName.navPath}
                      key={menuName._id}
                      color="textPrimary"
                      variant="body1"
                      className={clsx(classes.listItemTextMenu, "menu-item")}
                    >
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        className={clsx(
                          classes.listItemTextMenu,
                          "menu-item",
                          classes.pointer
                        )}
                      >
                        {router.pathname == `${menuName.navPath}` ? (
                          <p
                            className={clsx(classes.listName)}
                            style={{
                              padding: "12px 10px ",
                              color: "black",
                            }}
                          >
                            {menuName.navTitle}
                          </p>
                        ) : (
                          <p
                            className={clsx(classes.listName)}
                            style={{ color: "black" }}
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

                {myToken != undefined ? (
                  <div
                    className="after_login"
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    // onClickAway={handleClickAway}
                  >
                    <Link
                      href="/Connexion"
                      color="textPrimary"
                      variant="body1"
                      className={clsx(
                        classes.listItemTextMenu,
                        "menu-item letsTalk"
                      )}
                    >
                      <Typography
                        className={clsx(
                          classes.listItemTextMenu,
                          "menu-item letsTalk",
                          classes.pointer
                        )}
                      >
                        Connexion
                      </Typography>
                    </Link>
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      ref={anchorRef}
                      aria-label="split button"
                      className={classes.btnG}
                    >
                      <Button
                        onClick={handleClick}
                        className={classes.accountAction}
                      >
                        <AccountCircleIcon className={classes.userIcon} />{" "}
                        &nbsp; {userName}
                      </Button>
                      <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? "split-button-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                        className={classes.accountAction}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList id="split-button-menu">
                                <MenuItem
                                  onClick={(event) =>
                                    handleMenuItemClick(event)
                                  }
                                >
                                  <Link href="/account">
                                    <Typography>Dashboard</Typography>
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={logoutData}>
                                  <Link href="">
                                    <Typography>Log Out</Typography>
                                  </Link>
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                ) : (
                  <div className="right_side">
                    <Link
                      href="/Connexion"
                      color="textPrimary"
                      variant="body1"
                      className={clsx(
                        classes.listItemTextMenu,
                        "menu-item letsTalk"
                      )}
                    >
                      <Typography
                        className={clsx(
                          classes.listItemTextMenu,
                          "menu-item letsTalk",
                          classes.pointer
                        )}
                      >
                       Connexion
                      </Typography>
                    </Link>
                    <Link
                      href="signup"
                      color="textPrimary"
                      variant="body1"
                      className={clsx(classes.listItemTextMenu, "menu-item")}
                    >
                      <Typography
                        className={clsx(
                          classes.listItemTextMenu,
                          "menu-item login_Header",
                          classes.pointer
                        )}
                      >
                        Créer un projet
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
