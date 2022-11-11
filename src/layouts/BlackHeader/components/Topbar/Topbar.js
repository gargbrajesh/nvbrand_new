import React from "react";
import clsx from "clsx";
import Link from "next/link";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  List,
  ListItem,
  Button,
  makeStyles,
  ListItemText,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  MenuItem,
  MenuList,
  Popper,
  Typography,
} from "@material-ui/core";
import { Image } from "components/atoms";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import BrandLogo from "./../../../../../public/assets/Images/logo/logo_black.svg";
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
  root_som: {
    padding: "10px",
    height: "70px",
    boxShadow:
      "0px 1px 5px -30px rgb(0 0 0 / 2%), 0px 8px 10px 2px rgb(0 0 0 / 2%), 0px 6px 10px 5px rgb(0 0 0 / 6%)",
  },
  accountAction: {
    position: "relative",
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#212427 !important ",
    cursor: "pointer",
    background: "#fff",
    "&:hover ": {
      background: "#fff",
      boxShadow: "none !important",
    },
  },
  pointer: {
    marginRight: "25px",
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#212427 !important ",
    cursor: "pointer",
  },
  btnG: {
    position: "relative",
    boxShadow: "none !important",
    "& .MuiButtonGroup-groupedContainedHorizontal:not(:last-child)": {
      borderRight: "none !important",
    },
  },
  nav_link: {
    position: "relative",
    width: "auto",
    padding: "0 10px",
    "& p": {
      margin: "0px",
      "& span ": {
        fontFamily: "Nunito Sans !important",
        fontStyle: "normal !important",
        fontWeight: "400 !important",
        fontSize: "18px",
        lineHeight: "25px",
        color: "#212427",
        cursor: "pointer",
      },
    },
  },
  loginAvatar: {
    marginLeft: "9px",
    width: "30px",
    height: "30px",
    borderRadius: 4,
    "& img ": {
      objectFit: "contain !important",
    },
  },
  MenuContainer: {
    position: "relative",
  },
  list_item: {
    display: "flex",
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    position: "relative",
    height: "auto",
    top: "-6px",
    width: "120px",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    paddingRight: 0,
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  iconButton: {
    paddingRight: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  inner_header: {
    position: "relative",
    height: "50px",
    minHeight: "50px",
    width: "92%",
    margin: "0 auto",
  },
  notification: {
    width: ".55em",
    height: ".55em",
  },
  userIcon: {
    fill: "#ffae00",
  },
}));

const Topbar = ({
  className,
  onMobileNavOpen,
  themeToggler,
  themeMode,
  ...rest
}) => {
  const classes = useStyles();
  //Code For Dashboard
  // Code for Right Dropdown  Menu
  const router = useRouter();

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));
  const name = Cookies.get("name");
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Code for Right Dropdown menu ends
  const userAccountID = Cookies.get("id");
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
    if (userAccountID) {
      router.push("/", undefined, { shallow: true });
    } else {
      const userName = Cookies.get("name");
      router.push("/", undefined, { shallow: true });
    }
  };

  return (
    <AppBar
      className={clsx(classes.root_som, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      <Toolbar className={classes.inner_header}>
        <div className={classes.logoContainer}>
          <a href="/" title="Beatnik">
            <Image
              className={classes.logoImage}
              src={BrandLogo}
              alt="Beatnik"
              lazy={false}
            />
          </a>
        </div>
        <div className={classes.MenuContainer}>
          <List className={classes.list_item}>
            <ListItem className={classes.nav_link}>
              <Link href="/" title="Beatnik">
                <p className={classes.dashboard_data}>
                  <div className={classes.active}>
                    <ListItemText
                      className={classes.page_title}
                      primary="Home"
                    />
                  </div>
                </p>
              </Link>
            </ListItem>
            <ListItem className={classes.nav_link}>
              <Link href="/browse-portfolio" title="Beatnik">
                <p className={classes.dashboard_data}>
                  <div className={classes.active}>
                    <ListItemText
                      className={classes.page_title}
                      primary="Portfolios"
                    />
                  </div>
                </p>
              </Link>
            </ListItem>
            <ListItem className={classes.nav_link}>
              <Link href="/upcoming" title="Beatnik">
                <p className={classes.dashboard_data}>
                  <div className={classes.active}>
                    <ListItemText
                      className={classes.page_title}
                      primary="Upcoming Features"
                    />
                  </div>
                </p>
              </Link>
            </ListItem>
          </List>
        </div>
        <Box flexGrow={4} />
        <Hidden smDown>
          {userAccountID != undefined ? (
            <>
              <Link
                href="/letTalk"
                color="textPrimary"
                variant="body1"
                className={clsx(classes.listItemTextMenu, "menu-item letsTalk")}
              >
                <Typography
                  className={clsx(
                    classes.listItemTextMenu,
                    "menu-item letsTalk",
                    classes.pointer
                  )}
                >
                  Let's Talk
                </Typography>
              </Link>
              <ButtonGroup
                variant="contained"
                color="primary"
                ref={anchorRef}
                aria-label="split button"
                className={classes.btnG}
              >
                <Button onClick={handleClick} className={classes.accountAction}>
                  <AccountCircleIcon className={classes.userIcon} /> &nbsp;{" "}
                  {name}
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
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                          <MenuItem
                            onClick={(event) => handleMenuItemClick(event)}
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
            </>
          ) : (
            <>
              <div className="right_side">
                <Link
                  href="/letTalk"
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
                    Let's Talk
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
                    Sign Up
                  </Typography>
                </Link>
              </div>
            </>
          )}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            className={classes.iconButton}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
