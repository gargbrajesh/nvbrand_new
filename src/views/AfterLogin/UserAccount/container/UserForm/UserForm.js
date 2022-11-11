import React, { useEffect, useState } from "react";
import styles from "./UserForm.module.css";
import Cookies from "js-cookie";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    "& .MuiFilledInput-root": {
      borderRadius: "30px",
      border: "2px solid #888888",
      background: "#fff",
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
    "& .MuiFilledInput-underline:after": {
      display: "none",
    },
    "& .MuiFilledInput-underline:before": {
      display: "none",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense ": {
      transform: "translate(40px, -7px) scale(0.75)",
      background: "#fff",
      padding: "1px 10px",
      color: "#000",
      fontWeight: "500",
    },
    "& .MuiFilledInput-input": {
      padding: "10px 20px 10px 28px !important",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-marginDense": {
      transform: "translate(30px, 22px) scale(1)",
    },
  },
  formControl: {
    width: "100%",
    "& .MuiFilledInput-root": {
      borderRadius: "30px",
      border: "2px solid #888888",
      background: "#fff",
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
    "& .MuiFilledInput-underline:after": {
      display: "none",
    },
    "& .MuiFilledInput-underline:before": {
      display: "none",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink ": {
      transform: "translate(40px, -7px) scale(0.75)",
      background: "#fff",
      padding: "1px 10px",
      color: "#000",
      fontWeight: "500",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(30px, 13px) scale(1)",
    },
  },
  inputFieldDOB: {
    position: "relative",
    width: "100%",
    margin: 0,
    borderRadius: "30px",
    border: "2px solid #888888",
    background: "#fff",
    padding: "0 10px 3px 0",
    borderBottom: "2px solid #888888",
    "&>button": {
      position: "relative",
      top: "5px",
    },
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

    "& label": {
      background: "#fff",
      borderRadius: "30px",
      position: "absolute",
      top: "-15px",
      padding: "7px",
      left: "30px",
      width: "120px",
    },
    "& input ": {
      padding: "0px 15px 6px 28px !important",
    },
    "& span.MuiIconButton-label": {
      padding: '0px 0px 12px 0px',
    },
  },
}));
function UserForm(props) {
  const classes = useStyles();
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [defName, setDefname] = useState(Cookies.get("name"));
  const [defEmail, setDefEmail] = useState(Cookies.get("email"));
  const [defPhone, setDefPhone] = useState(Cookies.get("phoneNumber"));
  const [defaboutMe, setDefaboutMe] = useState();
  const [defcity, setDefcity] = useState(Cookies.get("city"));
  const [defcountry, setDefcountry] = useState(Cookies.get("country"));
  const [defgender, setDefgender] = useState(Cookies.get("gender"));
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [manageData, setManageData] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=fba41c3e7ffafea7982b486d308d977f96d17f60"
  );
  const userID = Cookies.get("id");
  const accountDetails = async (values) => {
   
    var formdata = new FormData();
    formdata.append("fullName", values.name);
    formdata.append("email", values.email);
    formdata.append("password", values.password);
    formdata.append("phoneNumber", values.phoneNumber);
    formdata.append("dob", selectedDate);
    formdata.append("userType", values.useType);
    formdata.append("gender", values.gender);
    formdata.append("country", values.country);
    formdata.append("city", values.city);
    formdata.append("aboutMe", values.aboutMe);
    formdata.append("userID", userID);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_userDetailSave`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader

        console.log(responseJson);
        if (responseJson.valid == false) {
          setMessage("Please try after some time.");
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          Cookies.set("aboutMe", responseJson.result.data.aboutMe);
          Cookies.set("city", responseJson.result.data.city);
          Cookies.set("country", responseJson.result.data.country);
          Cookies.set("gender", responseJson.result.data.gender);
          Cookies.set("name", responseJson.result.data.name);
          Cookies.set("email", responseJson.result.data.email);
          Cookies.set("phoneNumber", responseJson.result.data.phoneNumber);


        }
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    // accountDetails();
  }, []);
  var getDataHeaders = new Headers();
  getDataHeaders.append("Cookie", "ci_session=6c1d9268a2d7c7d28961d85d2e60a05b21025b4e");

  var formdata = new FormData();
  formdata.append("userID", userID);
  useEffect(() => {
  
    var requestOptions = {
      method: 'POST',
      headers: getDataHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://app.whyuru.com/api/beatnik_userDetails", requestOptions)
      .then(response => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log(responseJson);
        if (responseJson.valid === false) {
          setMessage("data not found.");
        } else {
          // setMessageTrue(responseJson.result.message);
          alert(responseJson.result.data[0].aboutMe)
          setManageData(responseJson.result.data[0]);
          setDefname(updateData.name);
          setDefEmail(updateData.email);
          setDefaboutMe(updateData.aboutMe);
          setDefcity(updateData.city);
          

        }
      })
      .catch(error => console.log('error', error));
  }, []);

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
    <div>
      <div className={styles.div_scroll}>
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
        <Formik
          initialValues={{
            name: defName,
            email: defEmail,
            aboutMe: defaboutMe,
            phoneNumber: defPhone,
            gender: defgender,
            country: defcountry,
            city: defcity,


          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .max(30, "Name should be at greater then  30 characters.")
              .min(3, "Name must be at least 3 characters.")
              .required("Name is required"),
            email: Yup.string()
              .max(50)
              .required("Email ID is required.")
              .email("Email ID is invalid."),
            aboutMe: Yup.string()
              .max(50)
              .required("About Me is required."),
            phoneNumber: Yup.string()
              .matches(new RegExp("[0-9]{7}"))
              .typeError("That doesn't look like a phone number")
              .required("Phone number is required")
              .max(10),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const result = accountDetails(values, null, 2);
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
            <form onSubmit={handleSubmit} autoComplete="off">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <div className="form-outline">
                    <TextField
                      className={classes.inputField}
                      label="Name"
                      variant="filled"
                      id="name"
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      name="name"
                      size="small"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-outline">
                    <TextField
                      className={classes.inputField}
                      label="Email ID"
                      variant="filled"
                      id="name"
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      name="email"
                      size="small"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-outline">
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
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-outline">
                    <TextField
                      id="phoneNumber"
                      type="number"
                      label="Phone Number"
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      name="phoneNumber"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phoneNumber}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      required
                      id="gender"
                      label="Gender"
                      error={Boolean(touched.gender && errors.gender)}
                      helperText={touched.gender && errors.gender}
                      name="gender"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.gender ? null : manageData.country}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel>Country</InputLabel>
                    <Select
                      required
                      id="country"
                      label="Country"
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country && errors.country}
                      name="country"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.country ? null : manageData.country}
                    >
                      <MenuItem value="India">India </MenuItem>
                      <MenuItem value="Pakistan">Pakistan</MenuItem>
                      <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel>City</InputLabel>
                    <Select
                      required
                      id="city"
                      label="City"
                      error={Boolean(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
                      name="city"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.city =='' ?  manageData.city : defcity}
                    >
                      <MenuItem value="Noida">Noida</MenuItem>
                      <MenuItem value="Delhi">Delhi</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <div className="form-outline">
                    <TextField 
                      size="small"
                      variant="filled"
                      label="About Me"
                      multiline
                      rows={4}
                      className={classes.inputField}
                      id="aboutMe"
                      error={Boolean(touched.aboutMe && errors.aboutMe)}
                      helperText={touched.aboutMe && errors.aboutMe}
                      name="aboutMe"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.aboutMe == '0' ? null : manageData.aboutMe}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.createAcc}
                    >
                      Save Change
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: "40px" }}
                      className={styles.createAcc}
                    >
                      Reset Password
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default UserForm;