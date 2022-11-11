import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { Footer } from "layouts/Main/components";
import MetaTitle from "components/helper/MetaTitle";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },

  mainCon: {
    marginTop: "130px",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    fontFamily: "Hill House",
    fontStyle: "normal !important",
    fontWeight: "500",
    fontSize: "70px",
    lineHeight: "71px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  para: {
    marginTop: "40px",
    "& p": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "21px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      opacity: "0.5",
    },
  },
}));
function Cookies() {
  const classes = useStyles();

  return (
    <div className="container">
      <MetaTitle
        title={`Cookies Policy | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      <Container>
        <div className={classes.mainCon}>
          <Typography className={classes.title}>Cookies Policy</Typography>
          <div className={classes.para}>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default Cookies;
