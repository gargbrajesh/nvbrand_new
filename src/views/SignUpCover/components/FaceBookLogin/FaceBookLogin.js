import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";
import FacebookLogin from "react-facebook-login";
import styles from "../../SignUpCover.module.css";
import Encodr from "encodr";
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  btnFacebook: {
    position: "relative",
    background: "#fff",
    boxShadow: "3px 5px 10px #0000004d",
    // borderRadius: "30px",
    overflow: "hidden",
    width: "100%",
    padding: "17px !important",
    border: "0px",
  },
});
function FaceBookLogin() {
  const classes = useStyles();
  const [login, setLogin] = useState(false);
  const [nameFacebook, setnameFacebook] = useState("");
  const [idFacebook, setidFacebook] = useState("");
  const responseFacebook = (response) => {
    console.log(response);

    if (response.accessToken != null) {
      setnameFacebook(response.name);
      setidFacebook(response.userId);
      apiFacebook();
    }
  };
  const apiFacebook = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=f8d4b339983719043172e8c61fd7f0f6a45bbbfd"
    );

    var formdata = new FormData();
    formdata.append("action", "signup");
    formdata.append("email", idFacebook);
    formdata.append("name", nameFacebook);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_PATIENT_API_URL +
        `socialMediaLoginAndSignup_beatnik`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader

        console.log(responseJson);
        if (responseJson.valid == false) {
          alert("Can't fetch email");
        } else {
          alert(responseJson.result.message);
          const JSON = new Encodr("json");
          Cookies.set("userID", responseJson.result.data.id);
          Cookies.set("userName", responseJson.result.data.name);
          Cookies.set("userEmail", responseJson.result.data.email);

          return router.push({
            pathname: "/dashboard",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };
  const router = useRouter();
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    script.async = false;

    document.body.appendChild(script);

    setTimeout(() => {
      window.google.accounts.id.initialize({
        client_id:
          "332778534265-4n1dhog3fg6j4ol37m3bidepeaqb494e.apps.googleusercontent.com",
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
        } // customization attributes
      );
    }, 1000);
  });
  const onResponse = async (res) => {
    console.log(res.credential);
  };

  return (
    <>
      {!login && (
        <FacebookLogin
          appId="556082989553906"
          autoLoad={false}
          buttonText="Login "
          cssClass={styles.btnFacebook}
          callback={responseFacebook}
          icon={<i className="fa fa-facebook"></i>}
          textButton="&nbsp;&nbsp;Sign In with Facebook"
        />
      )}
      {login &&
        router.push({
          pathname: "/dashboard",
        })}
    </>
  );
}

export default FaceBookLogin;
