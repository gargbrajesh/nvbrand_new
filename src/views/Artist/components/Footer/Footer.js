import React from 'react';
import styles from './footer.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTheme,useMediaQuery, Grid, Container } from '@material-ui/core';
import LOGO from './../../../../../public/assets/Images/logo/logoFooter.svg';

const Footer = props => {
  const { pages, themeMode, className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  console.log('theme', props);

  return (
    <div
      container
      {...rest}
      className={styles.footerContainer}
    >
      <Container fixed>
        <div>
          <Grid container spacing={4} className={styles.footerInnerContainer}>
            <div className={styles.brand_logo}>
              <img src={LOGO} alt="#"/>
            </div>

            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/home">
                    <p>Home</p>
                  </Link>
                </li>
                    <li>
                  <Link href="/home">
                    <p>Privacy Policy </p>
                  </Link>
                </li>
                    <li>
                  <Link href="/home">
                    <p>Cookie Policy</p>
                  </Link>
                </li>
                    <li>
                  <Link href="/home">
                    <p>Terms and Conditions</p>
                  </Link>
                </li>
                    <li>
                  <Link href="/home">
                    <p>About Us</p>
                  </Link>
                </li>
                   
              </ul>
            </div>
          </Grid>
        </div>
      </Container>
      <div className={styles.bottom_footer}>
        <Grid item xl={12}>
          <p>All rights reserved to Beatnik Community @ 2022</p>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
