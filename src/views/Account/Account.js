import React from 'react';
import clsx from 'clsx';
import { parse } from 'query-string';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, List, ListItem, Grid, Typography } from '@material-ui/core';
import { SectionAlternate, CardBase } from 'components/organisms';
import {
  Hero,
  General,
  Security,
  Notifications,
  FamilyMembers,
  AddFamilyMember,
  ViewFamilyDoctor,
  Consultations,
  CalenderView,
  OurDoctor,
} from './components';
import Link from 'next/link';
import { Icon } from 'components/atoms';
import AddFamilyDoctor from './components/AddFamilyDoctor';
import MetaTitle from 'components/helper/MetaTitle';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  section: {
    '& .section-alternate__content': {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: 'relative',
      zIndex: 1,
    },
    '& .card-base__content': {
      padding: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
      },
    },
  },
  menu: {
    height: 'auto',
  },
  list: {
    display: 'inline-flex',
    overflow: 'auto',
    flexWrap: 'nowrap',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
    },
  },
  listItem: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    flex: 0,
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: '2px solid transparent',
    },
  },
  listItemActive: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    '& .menu__item': {
      color: theme.palette.text.primary,
    },
  },
}));

const subPages = [
  {
    id: 'Profile',
    href: '/account/?pid=general',
    title: 'Accounts & Profile',
    icon: 'fas fa-user',
  },
  {
    id: 'notifications',
    href: '/account/?pid=notifications',
    title: 'Subscription',
    icon: 'fas fa-handshake',
  },
  {
    id: 'my-family',
    href: '/account/?pid=family-members',
    title: 'Family Members',
    icon: 'fas fa-users',
  },

  {
    id: 'view-family-doctor',
    href: '/account/?pid=view-family-doctor',
    title: 'Family Doctor',
    icon: 'fas fa-user-md',
  },
  {
    id: 'our-doctor',
    href: '/account/?pid=our-doctor',
    title: 'Our Doctor',
    icon: 'fas fa-user-md',
  },

  {
    id: 'consultations',
    href: '/account/?pid=consultations',
    title: 'Consultations',
    icon: 'fas fa-calendar-check',
  },
  {
    id: 'calender-view',
    href: '/account/?pid=calender-view',
    title: 'Calender View',
    icon: 'fas fa-calendar-alt',
  },
  {
    id: 'offers',
    href: '/account/?pid=billing',
    title: 'Offers',
    icon: 'fas fa-percentage',
  },
];

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const Account = (props = {}) => {
  const classes = useStyles();
  const theme = useTheme();
  let pageId = parse(window.location.search).pid || 'general';
  // code for page title =====================================================
  var replaceDash = pageId.split('-').join(' ');
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }
  var pageTitle = titleCase(replaceDash);
  // end Page title =============================================================

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Accounts | ${pageTitle}`}
        metaKeyWord=""
        metaDescription=""
      />
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align="left" className={classes.menu}>
              <List disablePadding className={classes.list}>
                {subPages.map((item, index) => (
                  <ListItem
                    key={index}
                    className={clsx(
                      classes.listItem,
                      pageId === item.id ? classes.listItemActive : {},
                    )}
                    disableGutters
                  >
                    <Link href={item.href}>
                      <Typography
                        variant="subtitle1"
                        noWrap
                        color="textSecondary"
                        className="menu__item"
                      >
                        <Icon
                          fontIconClass={item.icon}
                          size="18px"
                          fontIconColor={theme.palette.text.secondary}
                        />
                        &nbsp; &nbsp;&nbsp;
                        {item.title}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={'general'}>
                <General />
              </TabPanel>
              <TabPanel value={pageId} index={'security'}>
                <Security />
              </TabPanel>
              <TabPanel value={pageId} index={'notifications'}>
                <Notifications />
              </TabPanel>
              <TabPanel value={pageId} index={'family-members'}>
                <FamilyMembers />
              </TabPanel>
              <TabPanel value={pageId} index={'add-family-member'}>
                <AddFamilyMember />
              </TabPanel>
              <TabPanel value={pageId} index={'view-family-doctor'}>
                <ViewFamilyDoctor />
              </TabPanel>
              <TabPanel value={pageId} index={'add-family-doctor'}>
                <AddFamilyDoctor />
              </TabPanel>
              <TabPanel value={pageId} index={'consultations'}>
                <Consultations />
              </TabPanel>
              <TabPanel value={pageId} index={'calender-view'}>
                <CalenderView />
              </TabPanel>
              <TabPanel value={pageId} index={'our-doctor'}>
                <OurDoctor />
              </TabPanel>
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

export default Account;
