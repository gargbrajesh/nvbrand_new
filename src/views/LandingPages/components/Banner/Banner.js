import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Typography,
  Box,
  Grid,
  makeStyles,
  useTheme,
  Button,
  TextField,

  useMediaQuery,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../../../../../public/assets/Images/logo/logo.svg";
import BannerImage from "../../../../../public/assets/Images/Banner.png";
import AboutHero from "../../../../../public/assets/Images/About Hero.png";
import styles from "./Banner.module.css";
import Form from "../Form";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme) => ({
  carousel_container: {
    "&.react-multiple-carousel__arrow": {
      color: "black",
      marginLeft: "100px",
    },
    "& ul": {
      position: "relative",
      "& li ": {
        position: "relative",
      },
    },
  },
  card_color: {
    boxShadow: "0 4px 8px rgb(0 0 0 / 12%)",
    borderRadius: "4px",
    marginRight: "30px",
    marginBottom: "20px",
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: "10px",
    borderRadius: "8px",
  },
  sliderimg: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    cursor: "pointer",
  },
  testimonial: {
    fontSize: "22px",
    marginTop: "20px",
  },
  testimonialHeading: {
    fontWeight: "700",
    fontSize: "20px",
  },

  avtr: {
    marginLeft: "200px",
    marginTop: "10px",
  },

  dotCls: {
    position: "absolute",
    display: "flex",
    left: "0",
    /*bottom: "12% !important",*/
    bottom: "6% !important" /*  Added by Ashok */,
    justifyContent: "center",
    margin: "auto",
    padding: "0",
    listStyle: "none",
    textAlign: "center",
    "& .react-multi-carousel-dot button": {
      width: "6px",
      height: "6px",
      // borderColor: '#ff230136',
      background: "white",
      border: "none",
    },
    "& .react-multi-carousel-dot--active button": {
      // background: 'var(--theme-color)',
      background: "black",
    },
  },
  para: {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '32px',
    /* or 178% */
    letterSpacing: '-0.03em',
    color: '#0A071B',
  },
  rightBox: {
    position: 'absolute',
    width: '400px',
    height: '700px',
    left: '740px',
    top: '100px',
    background: '#FFFFFF',
    boxShadow: '0px 0px 144px rgba(43, 29, 103, 0.06)',
  },
  typo: {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontWeight: '500 !important',
    fontSize: '40px',
    lineHeight: '40px',
    letterSpacing: '-0.03em',
    padding: '15px',
    color: '#0A071B',
  }
  ,
  typoPara: {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontWeight: '400 !important',
    fontSize: '18px',
    lineHeight: '32px',
    letterSpacing: '-0.03em',
    padding: '15px',
    color: '#0A071B',
  }
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: 5,
};
const Banner = (props) => {
  const [getCreated, setCreated] = useState();
  const userID = Cookies.get("id");
  const handleClose = (text) => {
    setOpenModel(false);
    if ("create" == text) {
      router.push({
        pathname: "/account",
      });
    } else {
      router.push({
        pathname: "/Organization",
      });
    }
  };
  const [openModel, setOpenModel] = useState(false);
  const router = useRouter();
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();


  // code for slider


  const checkPortfolio = () => {

  };

  return (
    <>
      <div className={styles.banner_container}>

        <div>
          <img src={AboutHero} alt={'subTitle'} />
        </div>
        <Grid container spacing={2} style={{ marginTop: '2%' }}>
          <Grid item xs={6} style={{ padding: '5%', marginTop: '2%', marginBottom: '3%' }}>
            <div><h1 className={classes.typo1}>Pourquoi nous ?</h1></div>
            <div><p className={classes.para}>
              NewBrands accompagne déjà +130 marques textiles dans leurs stratégies de relocalisation et de sourcing alternatifs pour une industrie plus respectueuse de l’environnement et de l’Homme.
            </p></div>
            <div><p
              style={{
                fontFamily: 'Gelion',
                fontStyle: 'normal',
                fontWeight: '600 !important',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.03em',
                color: '#00798C',
              }}>Échangez avec nos équipes</p></div>
            <div style={{
              width: '311px',
              height: '104px',
              background: '#00798C',
              color: 'white',
              padding: '20px 50px'
            }}>
              <p>Contactez-nous</p>
              <p>+33 01 00 00 00 00</p>
            </div>
            <div style={{
              marginTop: '20px',
              width: '311px',
              height: '104px',
              padding: '20px 50px',
              background: 'rgba(0, 121, 140, 0.1)',
              color: '#00798C',
            }}>
              <p>Par e-mail</p>
              <p>supplier+fr@newbrands.fr</p>
            </div>
          </Grid>

          <Grid item xs={6} className={classes.rightBox} >
            <Typography className={classes.typo}>Inscription</Typography>
            <Typography className={classes.typoPara}> We have custom plans to power your video business.
              Tell us your needs, and we’ll contact you shortly.</Typography>
            <div></div>
            <div style={{ padding: '10px' }}>
              <Form />
            </div>
          </Grid>
        </Grid>
        <div style={{
          width: '80%',
          height: '233px',
          marginLeft: '60px',
          top: '64px',
          background: '#00798C',
          fontFamily: 'Gelion',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '24px',
          letterSpacing: '0.04em',
          color: '#00798C',
          padding: '25px 35px',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ padding: '20px 25px' }}>
              <div><p style={{
                fontFamily: 'Gelion',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '-00.04em',
                textTransform: 'uppercase',
                color: '#fff',
              }}>LET’S TRY!</p></div>
              <div>
                <p style={{
                  fontFamily: 'Gelion',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '35px',
                  lineHeight: '48px',
                  letterSpacing: '-0.03em',
                  color: '#fff',
                }}
                >
                  Start your 7-day free trial
                </p></div>
              <p style={{
                fontFamily: 'Gelion',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '24px',
                letterSpacing: '-0.03em',
                color: 'rgba(255, 255, 255, 0.5)',

              }}>Subscribe to the Uscreen newsletter to receive the latest video business insights, strategies and promotions straight to your inbox.</p>
            </Grid>

            <Grid item xs={6}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '440px',
                  position: 'relative',
                  height: '56px',
                  marginTop: '50px',
                  background: '#FFFFFF',
                  boxShadow: '0px 54px 84px rgba(20, 17, 37, 0.06)',
                  borderRadius: '32px',
                }}>
                  <p style={{fontFamily: 'Gelion',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '-0.03em',
                padding:'15px 25px',
                color: '#0A071B',
               
                }}>Email address</p>
                </div>
                <button style={{
                  width: '200px',
                  position: 'absolute',
                  height: '50px',
                 marginTop:'-53px',
                 marginLeft:'235px',
                  background: '#00798C',
                  float:'right !important',
                  boxShadow: '0px 54px 84px rgba(20, 17, 37, 0.06)',
                  borderRadius: '32px',
                 border:'none',
                 color:'#FFFFFF',
                }}>Get Instant Access</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* =================== */}


    </>
  );
};

Banner.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Banner;
