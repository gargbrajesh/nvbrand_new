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

import footerIcon1 from '../../../../../public/assets/Images/image-37.png';
import footerIcon2 from '../../../../../public/assets/Images/image-2.png';
import footerIcon3 from '../../../..//../public/assets/Images/image-3.png';
import footerIcon4 from '../../../../../public/assets/Images/img-4.jpg';
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
      <Container fixed style={{ marginTop: '65%' }}>
        <div>
          <Grid container className={styles.footerInnerContainer2}>
            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p>Avec le soutien de </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <img class="socialicon" src={footerIcon1} />
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <img class="socialicon" src={footerIcon2} />
                  </Link>
                </li>
                <li>
                  <Link href="/terms-condition">
                    <img class="socialicon" src={footerIcon3} />
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <img class="socialicon" src={footerIcon4} />
                  </Link>
                </li>

              </ul>
            </div>

          </Grid>
          <Grid container className={styles.footerInnerContainer2}>
            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p>PRODUIT</p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p>RESOURCES </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p>Entreprise </p>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-condition">
                    <p>Email Us </p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p>Call Us </p>
                  </Link>
                </li>
              </ul>
            </div>

          </Grid>
          <Grid container className={styles.footerInnerContainer2}>
            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p>Débuter un essai</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p>Centre d’aide </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p>À propos </p>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-condition">
                    <p>bonjour@newbrands.fr</p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p>1-234-567-8900 </p>
                  </Link>
                </li>

              </ul>
            </div>

          </Grid>
          <Grid container className={styles.footerInnerContainer2}>
            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p>Fonctionnalités</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p>Newsroom </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p>Press </p>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-condition">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p> </p>
                  </Link>
                </li>

              </ul>
            </div>

          </Grid>

          <Grid container className={styles.footerInnerContainer2}>
            <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p>Tarifs</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p>API </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p>Marques </p>
                  </Link>
                </li>
                          </ul>
            </div>
          </Grid>
          <Grid container className={styles.footerInnerContainer2}> <div className={styles.footer_list}>
            <ul>
              <li>
                <Link href="/">
                  <p>Démo</p>
                </Link>
              </li>
              <li>
                <Link href="/terms-condition">
                  <p> </p>
                </Link>
              </li>
              <li>
                
                <Link href="/Privacy">
                  <p>FAQs </p>
                </Link>
              </li>
              <li>
                <Link href="/terms-condition">
                  <p> </p>
                </Link>
              </li>
              <li>
                <Link href="/Cookies">
                  <p>Partenaires </p>
                </Link>
              </li>
              <li>
                <Link href="/terms-condition">
                  <p> </p>
                </Link>
              </li>
              <li>
                <Link href="/AboutUs">
                  <p> </p>
                </Link>
              </li>

            </ul>
          </div>
            
            </Grid>
          <Grid container className={styles.footerInnerContainer2}> 
          <div className={styles.footer_list}>
              <ul>
                <li>
                  <Link href="/">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p> </p>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-condition">
                    <p> Contacter</p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p> NewBrands™ All Rights Reserved, 2021.</p>
                  </Link>
                </li>

              </ul>
            </div>
            
            </Grid>
        </div>
        <hr />
        <Grid container className={styles.footerInnerContainer3}>
            <div className={styles.footer_list2}>
              <ul>
                <li>
                  <Link href="/">
                    <p>Conditions Générales de Service</p>
                  </Link>
                </li>
                <li>
                  <Link href="/AboutUs">
                    <p> Conditions Générales d’Utilisation</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy">
                    <p>Politique de Confidentialité & RGPD </p>
                  </Link>
                </li>
                <li>
                  <Link href="/Cookies">
                    <p>Mentions légales </p>
                  </Link>
                </li>
               
              </ul>
            </div>

          </Grid>
        <div className={styles.bottom_footer}>

          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '-1%', marginBottom: '10px' }}>
            <header className={styles.header}>
              {/* <a href="https://www.facebook.com/groups/411171767491908/?ref=share" target="new" title="Soundcloud">
                <img class="socialicon" src={faceBookIcon} height="30" width="30" /> </a>
              <a href="" target="new" title="Soundcloud">
                <img class="socialicon" src={twitter} height="30" width="30" /> </a>
              <a href="" target="new" title="Soundcloud">
                <img class="socialicon" src={instagram} height="30" width="30" /> </a>
              <a href="https://www.instagram.com/invites/contact/?i=1ficawmftjf7o&utm_content=n9z355c" target="new" title="Soundcloud">
                <img class="socialicon" src={youtube} height="30" width="30" /> </a>
              <a href="" target="new" title="Soundcloud">
                <img class="socialicon" src={LinkedIn} height="30" width="30" /> </a> */}
            </header>

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
