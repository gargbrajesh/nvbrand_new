/* eslint-disable react/jsx-no-undef */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';
// import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import '../css/styles.css';


const progress = new ProgressBar({
  size: 2,
  color: '#ec3832',
  className: 'bar-of-progress',
  delay: 100,
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      
      <Component {...pageProps} />
    </React.Fragment>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
