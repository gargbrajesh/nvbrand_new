import React, { useState, useEffect } from "react";
import styles from "./aboutUs.module.css";
import { Container, makeStyles, Typography } from "@material-ui/core";
import LetsTalkBg from "../../../public/assets/Images/aboutdB.svg";
import titileBg from "../../../public/assets/Images/logo/logoWhite.svg";
import MetaTitle from "components/helper/MetaTitle";
import Link from "next/link";
import Spinner from "components/organisms/Spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  mainCon: {
    position: "relative",
  },
  title: {
    fontFamily: "Hill House !important",
    fontStyle: "normal !important",
    fontWeight: "500",
    fontSize: "70px",
    lineHeight: "71px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  para: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "27px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    textAlign: "justify",
    marginBottom: "10px",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "150vh",
    top: "0",
    left: "0",
    right: "0",
    backgroundSize: "100%",
  },
  contactBtn: {
    background: "#FAA61A",
    borderRadius: "20px",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
    display: "inline-block",
    letterSpacing: "0.02em",
    padding: "10px 20px",
    alignItems: "center",
    textAlign: "center",
    margin: "20px 0 0 0",
    color: "#FFFFFF",
  },
}));
function AboutUs() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  },[]);
  return (
    <>
      <MetaTitle
        title={`About US | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      {loading ? (
        <>
          <Container>
            <div
              style={{
                backgroundImage: `url(${LetsTalkBg})`,
                backgroundRepeat: "no-repeat",
              }}
              className={classes.backgroundImage}
            ></div>
            <div className={classes.mainCon}>
              <div className={styles.titleBox}>
                <Typography className={styles.typo1}>
                  <img
                    src={titileBg}
                    alt=""
                    style={{
                      width: "510px",
                      height: "auto",
                      marginBottom: "20px",
                    }}
                  />
                </Typography>
                <div className={styles.divSpan}>CREATE</div>
                <div class="d-inline p-2">
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.divSpan}>CONNECT</div>
                <div class="d-inline p-2">
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.divSpan}>ACCESS</div>
              </div>

              <div className={styles.inner_form_page}>
                <Typography className={classes.para}>
                  The name Beatnik is inspired by the 'Beat' generation which
                  characterized being far out of the mainstream of society. It
                  stresses the importance of exploring one's inner self and
                  finding the things that make you laugh, make you cry, make you
                  love, make you connect.. and that's what is art! We are on
                  this journey to explore the art world together and try to make
                  it discoverable and sustainable. Please write to us or call us
                  for any queries, suggestions or comments. We would love to
                  hear from you! !
                </Typography>
                <Typography className={classes.para}>
                  The name Beatnik is inspired by the 'Beat' generation which
                  characterized being far out of the mainstream of society.
                </Typography>

                <Link href="/">
                  <p className={classes.contactBtn}>Contact Us</p>
                </Link>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
}

export default AboutUs;
