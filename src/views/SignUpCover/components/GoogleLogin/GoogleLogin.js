import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  googleBtn: {
    position: "relative",
    background: "#fff",
    boxShadow: "3px 5px 10px #0000004d",
    borderRadius: "30px",
    overflow: "hidden",
    padding: "8px",
    '& > div > div > div ': {
      // position: 'relative !important',
    border: 'none !important',
    textAlign: 'center !important',
    width: '100% !important',
    margin: '0 auto !important',
    },
    '@media (min-width: 320px) and (max-width:375px)': {
     width:'70%',
     padding:'0px',
     fontSize:'12px',
     marginLeft: '40px',
    },
    '@media (min-width: 376px) and (max-width:458px)': {
      width:'60%',
      padding:'0px 0px',
      marginLeft: '60px',
     },
     '@media(min-width: 667px) and (max-width: 1024px)': {
      width:'100%',
      padding:'0px 0px !important',
      
     },
     '@media(min-width: 1025px) and (max-width: 1440px)': {
      width:'90%',
      padding:'0px 0px !important',
      
     },
  },
  
}));
function GoogleLogin() {
  const classes = useStyles();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.GOOGLE_URL_API;
    script.async = false;

    document.body.appendChild(script);

    setTimeout(() => {
      window.google.accounts.id.initialize({
        client_id: process.env.Google_client_id,
        callback: onResponse,
        auto_select: false,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("showLoginButton"),

        {
          theme: "outline",
          size: "large",
          text: "",
          width: "180",
          redius: "0",
        }
      );
    }, 1000);
  });
  const onResponse = async (res) => {
    console.log(res.credential);
  };

  return (
    <>
      <div id="showLoginButton"></div>
    </>
  );
}

export default GoogleLogin;
