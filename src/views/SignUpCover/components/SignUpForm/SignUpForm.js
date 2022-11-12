import React, { useState } from "react";
// import styles from "../../SignUpCover.module.css";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
// import { Button, TextField, makeStyles, Select } from "@material-ui/core";
import { Button, TextField, Select, Paper, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
// import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  createAcc: {
    backgroundColor: `gradient(125.25deg, #50E0A9 6.14%, #26B9E9 108.72%)`,
    borderRadius: "10px",
    border: " 2px solid #888888",
    borderBottom: " 2px solid #888888 !important",
    padding: "15px 15px",
    marginTop: "35px",
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
    color:'#fff',
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

  },

}));
function SignUpForm() {
  const classes = useStyles();
  const router = useRouter();

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
              <Grid align='center'><h2>Sign Up</h2></Grid>
              <div style={{ padding: '0px 20px' }}><TextField id="standard-basic" label="What’s your Email?" variant="standard" style={{ width: '95%' }} /></div>
              <div style={{ padding: '0px 20px' }}><TextField id="standard-basic" label="Create you password" variant="standard" style={{ width: '95%' }} /></div>

              <div style={{ padding: '20px' }}>
                <button className={classes.btn}>Signup</button>
              </div>

              <div className={classes.signIn}>
                <p className={classes.paraStyle}>
                  Already have an account?
                  <Link href ="/signin">
                    <p>Sign In</p>
                  </Link>
                </p>
              </div>

            </Box>
          </div>
        </Paper>

      </Grid>
    </Grid>

  );
}

export default SignUpForm;
