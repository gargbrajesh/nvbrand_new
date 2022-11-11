import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Box,
  Modal,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import Breadcrumb from "../Reusable/MediBreadcrumb";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MetaTitle from "../../../components/helper/MetaTitle";
import ShareIcon from "@material-ui/icons/Share";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Logo from "../../../../public/assets/Images/logo/logo.svg";
import copy from "copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Spinner from "components/organisms/Spinner";
import Updateportfolio from "../../../../public/assets/Images/updateportfolio.png";
import Dashboardviewport from "../../../../public/assets/Images/dashboardviewport.png";

const accountCard = [
  {
    id: 1,
    title: "View Portfolio",
    subTitle: `View your portfolio information`,
    cardIcon: "",
    cardColor: "#6B705A",
    cardHref: "view-portfolios",
    image: Dashboardviewport,
  },
  {
    id: 2,
    title: "Update Portfolio",
    image: Updateportfolio,
    subTitle: `Update your portfolio information and manage it`,
    cardIcon: "",
    cardColor: "#C74C00",
    cardHref: "update-artist",
  },
  // {
  //   id: 3,
  //   title: "Hide Portfolio",
  //   subTitle: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`,
  //   cardIcon: <VisibilityOffIcon />,
  //   cardColor: "#C4C4C4",
  //   cardHref: "#",
  // },
  {
    id: 4,
    title: "Share Portfolio",
    subTitle: `Share your portfolio with peers/friends or while applying to opportunities`,
    cardIcon: <ShareIcon />,
    cardColor: "#F47B20",
    cardHref: "#",
  },
  
];
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  portfolio: {
    padding: "0px 30px 80px 30px",
  },
  modelBox: {
    background: "#00000052",
    height: "100vh",
  },
  dialogLink: {
    position: "relative",
    width: "100%",
    padding: "10px",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    fontWeight: "600",
    color: "#212427",
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "rgb(0 0 0 / 25%) 0px 4px 10px",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    textAlign: "center",
  },
  dialogContainer: {
    top: "50%",
    position: "absolute",
    left: "50%",
    background: "#fff",
    transform: "translate(-50%, -50%)",
    borderBottom: "40px solid rgb(250, 166, 26)",
    padding: "25px",
  },
  cardData: {
    padding: "10px",
    borderRadius: "30px",
    boxShadow:
      "0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1)",
    display: "flex",
    width: "100%",
    border: "1px solid #d1d1d185",
    cursor: "pointer",
    alignItems: "center",
  },
  cover: {
    width: "32%",
  },
  imageviewPortfolio:{
    position: "relative",
    width: "70px",
    height: " 70px",
    borderRadius: "50%",
  },
  imagePortfolio:{
    position: "relative",
    width: "70px",
    height: " 70px",
    borderRadius: "50%",
    border : "0px solid #fff",
  },
  circleArea: {
    position: "relative",
    width: "70px",
    height: " 70px",
    borderRadius: "50%",
    textAlign: "center",
    alignItems: "center",
    verticalAlign: " middle",
    display: "flex",
    margin: "0 auto",
    margin: " 35% auto",
    "& svg": {
      fill: "#fff",
      textAlign: "center",
      margin: " 0 auto",
      width: "65px",
      height: "35px",
    },
  },
  cardContent: {
    position: "relative",
    width: "68%",
    padding: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#000",
  },
  subTitle: {
    fontSize: "18px",
    fontWeight: 300,
    textAlign: "justify",
  },
  cardDataCon: {
    border: "none",
  },
  cardHolder: {
    padding: " 0 40px 40px",
  },
  createPortfolioButton: {
    border: "2px solid #faa61a",
    padding: "6px 60px",
    borderBottom: "2px solid #faa61a !important",
    borderRadius: "30px",
    backgroundColor: "#faa61a",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#faa61a",
    },
  },
  paraDesign:{
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '27px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.02em',
    marginBottom: '74px',
    color: '#212427',
  },

}));
function UserProfile(props) {
  const classes = useStyles();
  const [openModel, setOpenModel] = useState(false);
  const userID = Cookies.get("id");
  const userName = Cookies.get("name");
  const joinAs = Cookies.get("joinAs");
  const [getCreated, setCreated] = useState();
  const router = useRouter();
  const [copyText, setCopyText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

 
  const handleClose = (text) => {
    setOpenModel(false);
  };
  const handleChange = () => {
    setOpenModel(true);
  };
  //  to check portfolio created or not

  const checkPortfolio = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c54b269aecb51b724e6e9f364d58830b80e72584"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_artist_status`,
      requestOptions
    )
      .then((response) => response.json())

      .then((responseJson) => {
        if (responseJson.valid == true) {
          setCreated(responseJson.result.message);
        } else {
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    checkPortfolio();
    setLoading(true);
  },[]);
  const orderDetails = (id) => {
  

    setCopyText(router.push({
      pathname: "/share/artist",
      query: {
        n: userName,
        id: userID,
        type: joinAs,
      },
    }));
  };

  // const copyToClipboard = () => {
  //   copy(copyText);
  //   alert(`You have copied "${copyText}"`);
  // };
  
  return (
    <div className="medifile_profie">
      <MetaTitle
        title={`Dashboard | Beatnik`}
        metaKeyWord="Dashboard | Beatnik"
        metaDescription="Dashboard | Beatnik"
      />
      {loading ? (
        <>
          {" "}
          <div className="inner_container">
            <div className="medifiles_pannel">
              <div className="medifile_dashboard">
                <h3 className="medifile_head">Portfolio </h3>
                {/* <Breadcrumb url="Dashboard" /> */}
              </div>
            </div>
            <Grid container style={{ justifyContent: "space-between" }}>
              <Grid item lg={12}>
                {getCreated == "Portfolio already filled!" ? (
                  <div className={classes.cardHolder}>
                    <Grid container spacing={3}>
                      {accountCard.map((card, index) => (
                        <Grid item xs={6}>
                          <Card
                            className={classes.cardDataCon}
                            variant="outlined"
                          >
                            <Link href={card.cardHref}>
                              <p className={classes.cardData}>
                                <div className={classes.cover}>
                                  <div
                                    className={classes.circleArea}
                                    style={{ background: `${card.cardColor}` }}
                                  >
                                    {/* {card.cardIcon} */}
                                    {card.id === 2? (<>
                                    <img className= { classes.imageviewPortfolio} src={card.image} alt="..."/>
                                    </>) : card && card.cardIcon}

                                    {card.id === 1? (<>
                                    <img className= { classes.imagePortfolio} src={card.image} alt="..."/>
                                    </>) : card && card.cardIcon}
                                  </div>
                                </div>
                                <CardContent className={classes.cardContent}>
                                  <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                  >
                                    {card.title}
                                  </Typography>
                                  <Typography className={classes.subTitle}>
                                    {card.subTitle}
                                  </Typography>
                                  {card.id === 4 ? (
                                    <>
                                      <input
                                        type="text"
                                        value={copyText}
                                        onChange={handleCopyText}
                                        style={{ display: "none" }}
                                      />

                                      <Button
                                        onClick={orderDetails}
                                        style={{
                                          position: "absolute",
                                          top: "-18px",
                                          right: "0",
                                        }}
                                      >
                                        <FileCopyIcon />
                                      </Button>
                                    </>
                                  ) : null}
                                </CardContent>
                              </p>
                            </Link>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                ) : (
                  <>
                    <div className={classes.portfolio}>
                      <p className={classes.paraDesign}>
                      Create a professional portfolio to showcase your work and share your artistic practice with thousands of artists around the world
                      </p>
                      <Button
                        variant="contained"
                        onClick={handleChange}
                        className={classes.createPortfolioButton}
                      >
                        Create Portfolio
                      </Button>
                    </div>
                  </>
                )}
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}

      <Modal
        className={classes.modelBox}
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={12} className={classes.dialogInner}>
          <div className={classes.dialogContainer}>
            <div className={classes.cp_modal_body}>
              <div className="d-flex justify-content-center">
                <div>
                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "10%" }}
                  >
                    {" "}
                    <img src={Logo} alt="logo" />
                  </div>
                  <Typography
                    className={classes.typo_design}
                    style={{
                      fontFamily: "Nunito Sans",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "119%",
                      padding: "25px",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      color: "#000000",
                    }}
                  >
                    You want to create portfolio as ?
                  </Typography>

                  <div
                    className="row justify-content-center p-4"
                    style={{ marginBottom: "10%" }}
                  >
                    <div
                      className="col-md-5"
                      style={{ marginRight: "25px", marginBottom: "10%" }}
                    >
                      <Link
                        href="/artist-portfolio"
                        className={classes.dialogPath}
                      >
                        <p className={classes.dialogLink}>Artist</p>
                      </Link>
                    </div>

                    <div
                      className="col-md-5"
                      style={{ marginRight: "25px", marginBottom: "10%" }}
                    >
                      <Link
                        href="/art-space-portfolio"
                        className={classes.dialogPath}
                      >
                        <p className={classes.dialogLink}> Organization</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default UserProfile;
