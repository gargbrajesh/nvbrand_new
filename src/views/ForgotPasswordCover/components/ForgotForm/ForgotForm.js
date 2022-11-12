import React, { useState } from "react";
import styles from "../../ForgotPassword.module.css";
import Link from "next/link";
// import { Button, TextField, makeStyles, Select } from "@material-ui/core";
import {TextField, Paper, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Router from "next/router";

import MuiAlert from '@mui/material/Alert';
// import Cookies from "js-cookie";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({

  createAcc: {
    backgroundColor: " #faa61a",
    borderRadius: "30px",
    border: " 2px solid #faa61a",
    borderBottom: " 2px solid #faa61a !important",
    padding: "6px 60px",
    "&:hover": {
      backgroundColor: " #faa61a",
    },
    '@media(max-width: 720px)': {
      marginLeft: '50px',
    },
  },
  videoCard: {
    background: '#333 !important',
    borderRadius: '10px',
    padding: '20px',
    margin: '15px 15px 15px 25px !important',
    height: '80vh',
  },
  btn: {
    background: '#004958',
    borderRadius: '10px',
    fontSize: '20px',
    fontStyle: 'normal',
    fontFamily: 'sans-serif',
    border: 'none',
    width: '30%',
    padding: '10px',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer'
  },
  paraStyle: {
    fontFamily: "Nunito Sans",
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    alignItems: 'center',
    paddingLeft: '18px',
    color: '#000000 !important',
  },
  signIn: {
    '& p': {
      color: '#7a797f',
      // marginBottom: 10,
      display: 'flex',
      padding: '0px 10px',
      '& p': {
        color: '#080808',
        fontWeight: '400',
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
    inputField: {
      width: '95%',
      variant:'standard',
      '& label':{
        color:'#004958',
      }
    },
  },
}));
function SignInForm() {
  const classes = useStyles();
  const [email, setEmail] = useState('""');
  const paperStyle = { padding: '2px 20px', height: '72vh', width: '100%', margin: 'auto', alignAtem: 'center', borderRadius: '10px' }
  return (
    <Grid container>
      <Grid item xs={12} md={12} className={classes.videoCard}>
        <Paper elevation={10} style={paperStyle} >
          <div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Grid align='center'><h2>Forgot your Password?</h2>
              <p>Enter your email to recover your Password</p>
              </Grid>
              <div style={{ padding: '20px 20px' }}><TextField id="standard-basic" label="Email" variant="standard" style={{ width: '95%' }} /></div>
              <div style={{ padding: '20px' }}>
                <button className={classes.btn}>Send</button>
              </div>
            </Box>
          </div>
        </Paper>

      </Grid>
    </Grid>
  );
}

export default SignInForm;