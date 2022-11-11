import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@material-ui/core";
import MetaTitle from "components/helper/MetaTitle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import styles from "./design.module.css";
import Vecter from "../../../public/assets/Images/VectorImg.svg";
import DropFileInput from "./components/drop-file-input/DropFileInput";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Formik } from "formik";
import * as Yup from "yup";
import BasicInfo from "../../../public/assets/Images/common/BasicInfoIcon.svg";
import artWorkIcon from "../../../public/assets/Images/common/artWorkIcon.svg";
import socialLink from "../../../public/assets/Images/common/socialLink.svg";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const selectTags = [
  {
    id: "India",
    name: "India",
  },
  {
    id: "Pakistan",
    name: "Pakistan",
  },
  {
    id: "China",
    name: "China",
  },
];
const selectCity = [
  {
    id: "Delhi",
    name: "Delhi",
  },
  {
    id: "Noida",
    name: "Noida",
  },
  {
    id: "Lucknow",
    name: "Lucknow",
  },
  {
    id: "Pune",
    name: "Pune",
  },
  {
    id: "Mumbai",
    name: "Mumbai",
  },
];
const selectArtForm = [
  {
    id: "Dance",
    name: "Dance",
  },
  {
    id: "Music",
    name: "Music",
  },
  {
    id: "Art Management",
    name: "Art Management",
  },
  {
    id: "Production (Backstage)",
    name: "Production (Backstage)",
  },
  {
    id: "Other",
    name: "Other",
  },
];
const specializationDance = [
  {
    id: "Contemporary",
    name: "Contemporary",
  },
  {
    id: "Ballet",
    name: "Ballet",
  },
  {
    id: "Bharatanatyam",
    name: "Bharatanatyam",
  },
  {
    id: "Kathak",
    name: "Kathak",
  },
  {
    id: "Tap Dance",
    name: "Tap Dance",
  },
  {
    id: "Salsa",
    name: "Salsa",
  },
  {
    id: "Bollywood/Freestyle",
    name: "Bollywood/Freestyle",
  },
  {
    id: "Hip-hop",
    name: "Hip-hop",
  },
  {
    id: "Jazz",
    name: "Jazz",
  },
  {
    id: "Garba",
    name: "Garba",
  },
  {
    id: "Folk Dance",
    name: "Folk Dance",
  },
  {
    id: "Kathakali",
    name: "Kathakali",
  },
  {
    id: "Kuchipudi",
    name: "Kuchipudi",
  },
  {
    id: "Odissi",
    name: "Odissi",
  },
  {
    id: "Bhangra",
    name: "Bhangra",
  },
  {
    id: "Jive",
    name: "Jive",
  },
  {
    id: "Cha-cha",
    name: "Cha-cha",
  },
  {
    id: "Waltz",
    name: "Waltz",
  },
  {
    id: "Modern",
    name: "Modern",
  },
  {
    id: "Flamenco",
    name: "Flamenco",
  },
  {
    id: "Locking/Popping",
    name: "Locking/Popping",
  },
  {
    id: "Breakdance",
    name: "Breakdance",
  },
];
const selectPersona = [
  {
    id: "Performer",
    name: "Performer",
  },
  {
    id: "Teacher",
    name: "Teacher",
  },
  {
    id: "Director",
    name: "Director",
  },
  {
    id: "Manager",
    name: "Manager",
  },
  {
    id: "Backstage",
    name: "Backstage",
  },
];
const selectOtherArtForm = [
  {
    id: "Studio",
    name: "Studio",
  },
  {
    id: "Rehearsal Space",
    name: "Rehearsal Space",
  },
  {
    id: "Performing Venue",
    name: "Performing Venue",
  },
  {
    id: "Performance Company/Troupe/Band",
    name: "Performance Company/Troupe/Band",
  },
  {
    id: "   Art Management Organization",
    name: "   Art Management Organization",
  },
];
const selectLanguage = [
  {
    id: "Mandarin",
    name: "Mandarin",
  },
  {
    id: "Spanish",
    name: "Spanish",
  },
  {
    id: "English",
    name: "English",
  },
  {
    id: "Hindi",
    name: "Hindi",
  },
  {
    id: "Arabic",
    name: "Arabic",
  },
  {
    id: "Portuguese",
    name: "Portuguese",
  },
  {
    id: "Bengali",
    name: "Bengali",
  },
  {
    id: "Russian",
    name: "Russian",
  },
  {
    id: "Japanese",
    name: "Japanese",
  },
  {
    id: "Punjabi",
    name: "Punjabi",
  },
  {
    id: "German",
    name: "German",
  },
  {
    id: "Javanese",
    name: "Javanese",
  },
  {
    id: "Wu (inc. Shanghainese)",
    name: "Wu (inc. Shanghainese)",
  },
  {
    id: "Malay/Indonesian",
    name: "Malay/Indonesian",
  },
  {
    id: "Telugu",
    name: "Telugu",
  },
  {
    id: "Vietnamese",
    name: "Vietnamese",
  },
  {
    id: "Korean",
    name: "Korean",
  },
  {
    id: "Marathi",
    name: "Marathi",
  },
  {
    id: "Tamil",
    name: "Tamil",
  },
  {
    id: "Urdu",
    name: "Urdu",
  },
];
const selectSocialMedia = [
  {
    id: "Facebook",
    name: "Facebook",
  },
  {
    id: "Twitter",
    name: "Twitter",
  },
  {
    id: "Instagram",
    name: "Instagram",
  },
];
const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    border: " 2px solid #888888 !important",
    borderBottom: "2px solid #888888 !important",
    borderRadius: "30px",
    "&:active": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:focus": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:focus-within": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:visited": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:focus-visible": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:target": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "& label ": {
      fontSize: ".8rem !important",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(36px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 10px",
    },

    "& .MuiFilledInput-root": {
      backgroundColor: " #fff",
      borderRadius: "30px",
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        transition: "none",
        borderBottom: "none",
      },
      "&:after": {
        transition: "none",
        borderBottom: "none",
      },
      transition: "none",
      borderBottom: "none",
    },
    "& .MuiFilledInput-input": {
      padding: "10px 20px 12px 25px !important",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 12px) scale(1)",
    },
  },
  accordionTop: {
    marginTop: "40px",
    marginBottom: "15px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  accordionTopTb: {
    marginBottom: "15px",
    width: "100%",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  MuiInputBaseInput: {
    border: "2px solid #888888",
    "&:active": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:focus": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:focus-within": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:visited": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:focus-visible": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
    "&:target": {
      border: " 2px solid #FAA61A !important",
      borderBottom: " 2px solid #FAA61A !important",
    },
  },
  formControl: {
    width: "100%",
    "& label ": {
      fontSize: ".8rem !important",
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },

      transition: "none",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 15px) scale(1)",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
    },

    "& .MuiInputLabel-filled.MuiInputLabel-shrink": {
      transform: "translate(37px, -8px) scale(1)",
      background: "#fff",
      padding: "0px 5px",
    },
  },
  inputFieldDOB: {
    position: "relative",
    width: "100%",
    margin: 0,
    borderRadius: "30px",
    border: "2px solid #888888",
    borderBottom: "2px solid #888888",
    background: "#fff",
    padding: "0 10px",

    "& label": {
      background: "#fff",
      borderRadius: "30px",
      position: "absolute",
      top: "-15px",
      padding: "7px",
      left: "30px",
      width: "116px",
      fontSize: ".8rem !important",
    },
    "& input ": {
      padding: "10px 12px 13px 28px !important",
    },
    "& .MuiInput-formControl": {
      marginTop: "3px",
    },
  },
  genderGroupLabel: {
    "& .MuiSvgIcon-root": {
      fill: "#000 !important",
      "& path": {
        fill: "red",
      },
    },
  },
  saveDataBtn: {
    background: "#ffa900",
    borderRadius: "30px",
    padding: "9px 30px",
    color: "#fff",
    margin: "0 10px ",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px ",
    "&:hover ": {
      background: "#ffa900",
    },
  },
  btnAddDes: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "27px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: " 0.02em",
    color: "#FAA61A",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease 0s",
    cursor: "pointe",
    borderRadius: "20px",
    padding: "12px 35px",
    display: "inline-block",
    marginBottom: "30px",
  },
  typo_design: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "50px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
  },
  bottomContainer: {
    justifyContent: "center",
  },
  btnBottomG: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "20px 0",
    "& p": {
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.02em",
      color: "#000000",
      margin: "30px 0",
    },
  },
}));
const Artist = (props) => {
  const setPastedURL = props.setPastedURL;
  const classes = useStyles();
  const router = useRouter();

  const [name, setName] = useState();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [country, setCountry] = useState('');
  const [city, setCity] = useState("");
  const [engagement, setEngagement] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [artForm, setArtForm] = useState("");
  const [persona, setPersona] = useState();
  const [specialization, setSpecialization] = useState();
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState([]);
  const [otherArtForm, setOtherArtForm] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState("");
  let profileImgArr = [];
  const [gender, setGender] = useState("");

  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [image64, setImage64] = useState();
  const [orgImage, setOrgImage] = useState([]);
  const handleServiceRemove = (index) => {
    const list = [...socials];
    list.splice(index, 1);
    setSocials(list);
  };
  const userID = Cookies.get("id");
  const [country2, setCountry2]= useState([]);
  const [state, setState]= useState([]);
  // Country api code start here
  var myHeaderCountry = new Headers();
  myHeaderCountry.append("X-CSCAPI-KEY", "eWFzdmJ1cUtDMk9pMUN2U2ZyOW9wM2VmTEJUYkQ0TktjQXJvb0RhRg==");
  
  useEffect(() => {
   
    var requestOptions = {
      method: 'GET',
      headers: myHeaderCountry,
      redirect: 'follow'
    };
  
    const getcountry = async () => {
      const rescountry = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
      const rescon = await rescountry.json();
      console.log(rescon);
      setCountry2(await rescon);
    }
    getcountry();
  }, []);
console.log('id',country);
 
// State api code start here

var myHeaderState = new Headers();
  myHeaderState.append("X-CSCAPI-KEY", "eWFzdmJ1cUtDMk9pMUN2U2ZyOW9wM2VmTEJUYkQ0TktjQXJvb0RhRg==");

useEffect(() => {
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaderState,
    redirect: 'follow'
  };

 
  const getstate = async () => {
    const responseState = await fetch(`https://api.countrystatecity.in/v1/states/${country}`, requestOptions);
    const resState = await responseState.json();
    console.log(resState);
    setState(await resState);
    
  }
  getstate();
}, [country]);


  const handleServiceRemoveworkDetails = (index) => {
    const list = [...workDetails];
    list.splice(index, 1);
    setWorkDetails(list);
  };
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=ace8339c674e65c00c2f5732d2a0749bca2a9e43"
  );


  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeEngagement = (event) => {
    setEngagement(event.target.value);
  };
  const handleChangeArtForm = (event) => {
    setArtForm(event.target.value);
  };
  const handleChangeSpecialization = (event) => {
    setSpecialization(event.target.value);
  };
  const handleChangeTags = (event) => {
    setTags(event.target.value);
  };
  const handleChangePersona = (event) => {
    setPersona(event.target.value);
  };
  const handleChangeOtherArtForm = (event) => {
    setOtherArtForm(event.target.value);
  };
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  // const [workDetails, setWorkDetails] = useState();

  let workDetailTemplate = {
    title: "",
    event: "",
    venue: "",
    artForm: "",
    year: "",
    collaborators: "",
    social_link: "",
    description: "",
    image: orgImage,
  };

  const [workDetails, setWorkDetails] = useState([workDetailTemplate]);
  const addWorkDetails = () => {
    setWorkDetails([...workDetails, workDetailTemplate]);
  };
  const changeWorkDetails = (e, index) => {
    const updatedWorkDetails = workDetails.map((workDetail, i) =>
      index == i
        ? Object.assign(workDetail, { [e.target.name]: e.target.value })
        : workDetail
    );

    setWorkDetails(updatedWorkDetails);
  };

  const socialTemplate = { choosePlatform: "", link: "" };
  const [socials, setSocials] = useState([socialTemplate]);
  const addUser = () => {
    setSocials([...socials, socialTemplate]);
  };
  const changeSocialLink = (e, index) => {
    const updatedSocials = socials.map((social, i) =>
      index == i
        ? Object.assign(social, { [e.target.name]: e.target.value })
        : social
    );
    setSocials(updatedSocials);
  };

  const handleClose = (text) => {
    if ("create" == text) {
      router.push({
        pathname: "/artist-other-work-portfolio",
      });
    } else {
      console.log("fail");
    }
  };

  // Base64 function code start here
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  //end here

  const onFileChange = (files) => {
    // console.log(files[0].size)
    // if(files[0].size / 1024 > 300){
    //     alert("Please upload file less than 300kb")
    // }
    const base64File = toBase64(files[0]);
    base64File.then((data) => {
      setImage64(data);
      // console.log(setOrgImage);
    });
  };

  const onFileChangeWorkDetail = (files, index) => {
    const base64File = toBase64(files[0]);
    base64File.then((data) => {
      workDetails.map(function (val, i) {
        if (index == i) {
          workDetails[index].image = data;
        }
      });
      // setOrgImage(data);
      console.log(setOrgImage);
    });
  };

  // end here
  const mydata = JSON.stringify(socials);
  const DataPost = (text) => {
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("name", name);
    formdata.append("gender", gender);
    formdata.append("dob", selectedDate);
    // formdata.append("userType", useType);
    formdata.append("currentWorkLocation", currentlyWorking);
    formdata.append("city", city);
    formdata.append("country", country);
    formdata.append("bio", aboutMe);
    formdata.append("art_form", artForm);
    formdata.append("persona", persona);
    formdata.append("specialization", specialization);
    // formdata.append("profile_media_one",JSON.stringify(bannerImage));
    formdata.append("profile_media_one", image64);
    formdata.append("tags", tags);
    formdata.append("language", language);
    formdata.append("other_art_form", otherArtForm);
    formdata.append("add_flag", "save");
    formdata.append("action", "screenOne");
    formdata.append("featured_art_work", JSON.stringify(workDetails));
    formdata.append("socialLink", JSON.stringify(socials));
    formdata.append("profile_media_two", JSON.stringify(orgImage));
    formdata.append("profile_media_three", "base 64");
    formdata.append("profile_media_one_type", "audio");
    formdata.append("profile_media_two_type", "video");
    formdata.append("profile_media_three_type", "image");
    formdata.append("age", "23");
    formdata.append("engagement_type", engagement);
    formdata.append("profileFileBase64Data", "ajdshkashdkahsd");
    formdata.append("pastedURL", setPastedURL);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +
      `/beatnik_portfolio_artist_add_edit`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log(responseJson.valid);
        if (responseJson.valid == false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          router.push({
            pathname: "/artist-other-work-portfolio",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // end here
  const handleCloseFalse = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFalse(false);
  };
  const handleCloseTrue = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenTrue(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={openFalse}
        autoHideDuration={6000}
        onClose={handleCloseFalse}
      >
        <Alert onClose={handleCloseFalse} severity="error">
          {getMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openTrue}
        autoHideDuration={6000}
        onClose={handleCloseTrue}
      >
        <Alert onClose={handleCloseTrue} severity="success">
          {getMessageTrue}
        </Alert>
      </Snackbar>
      <MetaTitle
        title={`Artist Portfolio | Beatnik`}
        metaKeyWord="Artist Portfolio | Beatnik"
        metaDescription="Artist Portfolio | Beatnik"
      />
      <Container>
        <Formik
          initialValues={{}}
          validationSchema={Yup.object().shape({})}
          onSubmit={async (values, { setSubmitting }) => {
            const result = DataPost(values, null, 2);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            isValid,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit} id="my-form" autocomplete="off">
              <div className={styles.artistSam}>
                <Grid container>
                  <Grid item md={12}>
                    <div className={styles.titleContainer}>
                      <div className={styles.titleCon}>
                        <span className={styles.spanDesignTitle}>
                          Artist Portfolio
                        </span>
                      </div>
                      <div className={styles.formButton}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={isSubmitting}
                          className={classes.saveDataBtn}
                        >
                          Save as Draft
                        </Button>

                        <Button
                          className={classes.saveDataBtn}
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Preview & Publish
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Accordion className={classes.accordionTop}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className={styles.titleCon}>
                        <span
                          className={styles.span_design}
                          style={{ width: "100%", display: "flex" }}
                        >
                          <img src={BasicInfo} alt="Basic Info" /> Basic Details
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        <Grid item xs={6} style={{ marginTop: "50px" }}>
                          <div className={styles.uploadFileSec}>
                            <DropFileInput
                              onFileChange={(files) => onFileChange(files)}
                              setPastedURL={setPastedURL}
                            />
                          </div>
                        </Grid>
                        <Grid item md={6} style={{ marginTop: "50px" }}>
                          <div className={styles.formDataCon}>
                            <div className={styles.basicForm}>
                              <Grid
                                container
                                spacing={4}
                                className={styles.basicFormData}
                              >
                                <Grid item md={6}>
                                  <TextField
                                    required
                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Name"
                                    variant="filled"
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={6}>
                                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                      required
                                      className={classes.inputFieldDOB}
                                      id="filled-basic"
                                      label="Date of Birth"
                                      variant="filled"
                                      margin="normal"
                                      format="dd/mm/yyyy"
                                      value={selectedDate}
                                      onChange={handleDateChange}
                                      KeyboardButtonProps={{
                                        "aria-label": "change date",
                                      }}
                                    />
                                  </MuiPickersUtilsProvider>
                                </Grid>

                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Country</InputLabel>
                                    <Select
                                      required
                                      id="country"
                                      name="country"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) =>
                                        setCountry(e.target.value) 
                                      }   
                                      value={country}
                                    >
                                      {country2.map((option,index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.id}
                                        >
                                         {option.name }
                                        </MenuItem>
                                      ))}


                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select State</InputLabel>
                                    <Select
                                      required
                                      id="city"
                                      name="city"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => setCity(e.target.value)}
                                      value={city}
                                    >
                                      {state.map((option,index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                  <FormControl
                                    component="fieldset"
                                    className={styles.genderGroup}
                                  >
                                    <FormLabel component="legend">
                                      Select Gender
                                    </FormLabel>
                                    <RadioGroup
                                      required
                                      className={styles.genderGroupLabel}
                                      aria-label="gender"
                                      name="gender1"
                                      value={gender}
                                      onChange={handleChangeGender}
                                    >
                                      <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                      />
                                      <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                      />
                                      <FormControlLabel
                                        value="other"
                                        control={<Radio />}
                                        label="Other"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                  <FormControl
                                    component="fieldset"
                                    className={styles.genderGroup}
                                  >
                                    <FormLabel component="legend">
                                      Engagement Type <small>(Optional)</small>
                                    </FormLabel>
                                    <RadioGroup
                                      className={styles.genderGroupLabel}
                                      aria-label="engagement"
                                      name="ngagement"
                                      value={engagement}
                                      onChange={handleChangeEngagement}
                                    >
                                      <FormControlLabel
                                        value="Full Time"
                                        control={<Radio />}
                                        label="Full Time"
                                      />
                                      <FormControlLabel
                                        value="Part Time"
                                        control={<Radio />}
                                        label="Part Time"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Art Form</InputLabel>
                                    <Select
                                      required
                                      id="artForm"
                                      name="artForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) =>
                                        setArtForm(e.target.value)
                                      }
                                      value={artForm}
                                    >
                                      {selectArtForm.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>
                                      Specialization-Dance
                                    </InputLabel>
                                    <Select
                                      required
                                      id="specialization"
                                      name="specialization"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) =>
                                        setSpecialization(e.target.value)
                                      }
                                      value={specialization}
                                    >
                                      {specializationDance.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Tags</InputLabel>
                                    <Select
                                      required
                                      multiple
                                      id="tags"
                                      name="tags"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={tags}
                                      onChange={(e) => setTags(e.target.value)}
                                    >
                                      {selectTags.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Persona</InputLabel>
                                    <Select
                                      required
                                      id="persona"
                                      name="persona"
                                      size="small"
                                      variant="filled"
                                      value={persona}
                                      onChange={(e) =>
                                        setPersona(e.target.value)
                                      }
                                      className={classes.inputField}
                                    >
                                      {selectPersona.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>
                                      Select Other Art form{" "}
                                      <small>(Optional)</small>
                                    </InputLabel>
                                    <Select
                                      id="otherArtForm"
                                      name="otherArtForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={otherArtForm}
                                      onChange={(e) =>
                                        setOtherArtForm(e.target.value)
                                      }
                                    >
                                      {selectOtherArtForm.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>
                                      Language <small>(Optional)</small>
                                    </InputLabel>
                                    <Select
                                      id="language"
                                      name="language"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={language}
                                      onChange={(e) =>
                                        setLanguage(e.target.value)
                                      }
                                    >
                                      {selectLanguage.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item md={12}>
                                  <TextField
                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Currently Working at (optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      setCurrentlyWorking(e.target.value)
                                    }
                                    name="name"
                                    size="small"
                                    value={currentlyWorking}
                                  />
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Grid>
                        <Grid item md={12}>
                          <div className={styles.basicForm}>
                            <h4>Bio</h4>
                            <TextField
                              id="name"
                              type="text"
                              multiline
                              required
                              rows={4}
                              className={classes.inputField}
                              label="Bio"
                              variant="filled"
                              value={aboutMe}
                              onChange={(e) => setAboutMe(e.target.value)}
                              name="name"
                              size="small"
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion className={classes.accordionTopTb}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className={styles.titleCon}>
                        <span
                          className={styles.span_design}
                          style={{ width: "100%", display: "flex" }}
                        >
                          <img src={artWorkIcon} alt="" /> Featured Art Works{" "}
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        {workDetails.map((user, index) => (
                          <Grid
                            container
                            item
                            spacing={3}
                            style={{ marginBottom: "20px" }}
                            key={index}
                          >
                            <Grid item xs={6}>
                              <div
                                className={styles.uploadFileSecFearureArtWork}
                              >
                                <DropFileInput
                                  onFileChange={(files) =>
                                    onFileChangeWorkDetail(files, index)
                                  }
                                />
                              </div>
                            </Grid>

                            <Grid item xs={6} key={index}>
                              <Grid container spacing={3}>
                                <Grid item md={12}>
                                  <TextField
                                    required
                                    id="title"
                                    type="text"
                                    className={classes.inputField}
                                    label="Title"
                                    variant="filled"

                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="title"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={12}>
                                  <TextField
                                    id="eventName"
                                    type="text"
                                    className={classes.inputField}
                                    label="Event Name (Optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="eventName"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={6}>
                                  <TextField
                                    required
                                    id="venue"
                                    type="text"
                                    className={classes.inputField}
                                    label="Venue"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="venue"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={6}>
                                  <TextField
                                    required
                                    id="featureArtForm"
                                    type="text"
                                    className={classes.inputField}
                                    label="Art Form"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="featureArtForm"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={6}>
                                  <TextField
                                    id="featureYear"
                                    type="text"
                                    className={classes.inputField}
                                    label="Year (Optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="featureYear"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={6}>
                                  <TextField
                                    id="collaborators"
                                    type="text"
                                    className={classes.inputField}
                                    label="Collaborators (optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="collaborators"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={12}>
                                  <TextField
                                    required
                                    id="addSocilaLink"
                                    type="text"
                                    className={classes.inputField}
                                    label="Add Social Link"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="addSocilaLink"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={12}>
                                  <TextField
                                    required
                                    id="featureDescription"
                                    type="text"
                                    className={classes.inputField}
                                    label="Description"
                                    placeholder="Minimum 50 words."
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="featureDescription"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={12}>
                                  <FormGroup>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          icon={
                                            <CheckBoxOutlineBlankIcon fontSize="small" />
                                          }
                                          checkedIcon={
                                            <CheckBoxIcon fontSize="small" />
                                          }
                                          name="checkedI"
                                        />
                                      }
                                      label="Work in progress"
                                    />
                                  </FormGroup>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                              {workDetails.length - 1 === index &&
                                workDetails.length < 4 && (
                                  <Button
                                    type="button"
                                    className={styles.btnAddDes}
                                    onClick={addWorkDetails}
                                  >
                                    + Add 1 More
                                  </Button>
                                )}
                              &nbsp;&nbsp;
                              {workDetails.length !== 1 && (
                                <Button
                                  type="button"
                                  className={styles.btnAddDes}
                                  onClick={() =>
                                    handleServiceRemoveworkDetails(index)
                                  }
                                >
                                  <span>Remove</span>
                                </Button>
                              )}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.accordionTopTb}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className={styles.titleCon}>
                        <span
                          className={styles.span_design}
                          style={{ width: "100%", display: "flex" }}
                        >
                          <img src={socialLink} alt="" /> Social Link{" "}
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        {socials.map((user, index) => (
                          <Grid
                            item
                            container
                            spacing={3}
                            style={{ marginBottom: "20px" }}
                            key={index}
                          >
                            <Grid item xs={4}>
                              <FormControl
                                variant="filled"
                                className={classes.formControl}
                              >
                                <InputLabel>Choose Platform</InputLabel>
                                <Select
                                  required
                                  id="useType"
                                  label="User Type"
                                  name="choosePlatform"
                                  size="small"
                                  variant="filled"
                                  onChange={(e) => changeSocialLink(e, index)}
                                  className={classes.inputField}
                                >
                                  {selectSocialMedia.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item md={8}>
                              <TextField
                                required
                                id="name"
                                type="text"
                                className={classes.inputField}
                                label="Paste the link"
                                variant="filled"
                                onChange={(e) => changeSocialLink(e, index)}
                                name="link"
                                size="small"
                              />
                            </Grid>

                            <Grid item xs={12} style={{ textAlign: "center" }}>
                              {socials.length - 1 === index &&
                                socials.length < 3 && (
                                  <Button
                                    type="button"
                                    className={styles.btnAddDes}
                                    onClick={addUser}
                                  >
                                    + Add 1 More
                                  </Button>
                                )}
                              &nbsp;&nbsp;&nbsp;
                              {socials.length !== 1 && (
                                <Button
                                  type="button"
                                  onClick={() => handleServiceRemove(index)}
                                  className={styles.btnAddDes}
                                >
                                  Remove
                                </Button>
                              )}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <section className={styles.wrap}>
                  <Grid container className={classes.bottomContainer}>
                    <Grid item md={8}>
                      <Typography className={classes.typo_design}>
                        Do you want to add more details ?
                      </Typography>
                    </Grid>
                    <Grid item md={8}>
                      <div className={classes.btnBottomG}>
                        <Grid item md={4}>
                          <Button
                            className={classes.saveDataBtn}
                            onClick={() => {
                              handleClose("create");
                            }}
                          >
                            Yes, I want to
                          </Button>
                          <p>Look at other fields and publish</p>
                        </Grid>
                        <Grid item md={4}>
                          <Button
                            className={classes.saveDataBtn}
                            onClick={() => router.push("/")}
                          >
                            No, will do that later
                          </Button>
                          <p>
                            Preview and Publish, you can add more details later{" "}
                          </p>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </section>
              </div>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Artist;