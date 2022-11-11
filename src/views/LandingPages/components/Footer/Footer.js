import React from 'react';
import styles from './footer.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTheme, useMediaQuery, Grid, Container } from '@material-ui/core';
import LOGO from './../../../../../public/assets/Images/logo/logoFooter.svg';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import faceBookIcon from '../../../../../public/assets/Images/socialmedia1/facebook.svg';
import twitter from '../../../../../public/assets/Images/socialmedia1/twitter.svg';
import LinkedIn from '../../../../../public/assets/Images/socialmedia1/LinkedIn.svg';
import youtube from '../../../../../public/assets/Images/socialmedia1/youtube.svg';
import instagram from '../../../../../public/assets/Images/socialmedia1/instagram.svg';

const Footer = props => {
  const router = useRouter();

  if (Cookies.get('id') != null) {
    // return router.push({
    //           pathname: '/dashboard',
    //         })
  }

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
              <img src={LOGO} alt="#" />
            </div>

            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p>Privacy Policy </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p>Cookie Policy</p>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-condition">
                    <p>Terms and Conditions</p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p>About Us</p>
                  </Link>
                </li>

              </ul>
            </div>
          </Grid>
        </div>
        <div className={styles.bottom_footer}>

          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '-1%', marginBottom: '10px' }}>
            <header className={styles.header}>
              <a href="https://www.facebook.com/groups/411171767491908/?ref=share" target="new" title="Soundcloud">
                <img class="socialicon" src={faceBookIcon} height="30" width="30" /> </a>
              <a href="" target="new" title="Soundcloud">
                <img class="socialicon" src={twitter} height="30" width="30" /> </a>
              <a href="" target="new" title="Soundcloud">
                <img class="socialicon" src={instagram} height="30" width="30" /> </a>
              <a href="https://www.instagram.com/invites/contact/?i=1ficawmftjf7o&utm_content=n9z355c" target="new" title="Soundcloud">
                <img class="socialicon" src={youtube} height="30" width="30" /> </a>
              <a href="" target="new" title="Soundcloud">
                <img class="socialicon" src={LinkedIn} height="30" width="30" /> </a>
            </header>
            <p>All rights reserved to Beatnik Community @ 2022</p>
          </div>

        </div>
      </Container>

    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
