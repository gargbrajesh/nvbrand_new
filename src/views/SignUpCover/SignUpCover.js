import React, { useState, useEffect } from "react";
import styles from "./SignUpCover.module.css";
import Link from "next/link";
import Logo2 from "../../../public/assets/images/logo/logo2.png";
import Grid from '@mui/material/Grid';
import Image from "next/image";
import SignUPForm from "./components/SignUpForm/SignUpForm";
import { makeStyles } from '@mui/styles';
import Header from "../../layouts/Header";
import MusicVideo from '../WatchVideo'
const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  containerBox: {
    marginTop: '1px',
    height: '95vh',
    background: '#dee1e6',
    // border:'2px solid green',

  },
  leftSection: {
    background: 'rgb(63, 70, 82)',
    justifyContent: 'center !important',
    color: 'white',
    padding: '34px 0px 0px 10px !important',
  },
  rightSection: {
    background: 'rgb(63, 70, 82)',
    justifyContent: 'center',
    color: 'white',
    padding: '30px 0px 0px 0px !important',

  },
});

function NewSignUpCover() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.containerBox}>
        <Grid item md={6} xs={12} className={classes.leftSection}>
          <MusicVideo />
        </Grid>
        <Grid item md={6} xs={12} className={classes.rightSection}>
          <SignUPForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default NewSignUpCover;
