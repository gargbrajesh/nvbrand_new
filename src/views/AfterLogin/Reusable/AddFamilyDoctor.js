import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  LinearProgress,
  FormLabel, 
  FormControl,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  IconButton,
  Avatar,
  Radio,
  Box,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik,Field, Form } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from '@material-ui/pickers';
import { updateNonNullChain } from 'typescript';
import {addFamilyDoctorDetail} from '../../../components/helper/PatientApi';
import { async } from 'validate.js';
import AlertMassage from '../../../components/helper/AlertMessage';
// import Router from 'next/router';
import { RadioGroup } from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    // left: '100px',
  },
  tabHeader: {
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
    backgroundColor: theme.palette.background.white,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  profileImage: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
}));

export default function AddFamilyDoctor() {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [imgPreview, setImgPreview] = useState('');

 // Alert message code 
  const [status, setStatusBase] = React.useState('');
  
  return (
    <div>
      {status ? (
        <AlertMassage
          key={status.key}
          message={status.msg}
          status={status.status}
        />
      ) : null}
      <Grid container spacing={isMd ? 4 : 2}>
        {/* <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary">
                Basic Information for Profile
              </Typography>
            </Grid>
            <br></br>
            <br></br> */}
        <Formik
          initialValues={{
            title: '',
            first_name: '',
            last_name: '',
            middle_name:'',
            email:'',
            mobile:'',
            gender:'',
            specialist:'',
            dob: new Date(),
            experience:'',
            state: '',
            city: '',
            pinCode: '',
            // mobile: editData.mobile,
            address: '',
            // password: editData.password
          }}

          // validate={(values) => {
          //   const errors = {};
      
          //   if (!values.gender) {
          //     errors.gender = 'Required';
          //     // alert('Gender Required');
          //   } 
          //   return errors;
          // }}

          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(255)
              .required('Title is required'),
            first_name: Yup.string()
              .max(255)
              .required('Fist Name is required'),
            last_name: Yup.string()
              .max(255)
              .required('Last Name is required'),
            gender: Yup.string()
              .required(' Gender is Required'),
          //  middle_name: Yup.string()
          //     .max(255)
          //     .required('Middle Name is required'),  
          //  email: Yup.string()
          //     .max(255)
          //     .required('Email is required'),  
           mobile: Yup.string()
                .min(10, 'Mobile must be in 10 digits')
                .max(10, 'Mobile must be in 10 digits')
                .required('Mobile is required'),
            // experience: Yup.string()
            //   .max(255)
            //   .required('Experience is required'),    
            // specialist: Yup.string()
            //   .max(255)
            //   .required('Specialization is required'),  
            // dob: Yup.string()
            //   .max(255)
            //   .required('Date of Birth is required'),
            // age: Yup.string()
            //   .max(255)
            //   .required('Age is required'),
           
            // address: Yup.string()
            //   .max(255)
            //   .required('Address is required'),
            // state: Yup.string()
            //   .max(255)
            //   .required('State is required'),
            // city: Yup.string()
            //   .max(255)
            //   .required('City is required'),
            // gender: Yup.string()
            //   .max(255)
            //   .required('Gender is required'),
            // pinCode: Yup.string()
            //  .min(6, 'Must be exactly 6 digits')
            //  .max(6, 'Must be exactly 6 digits')
            //  .required('Pincode is required')
           

          })}
          // onSubmit={(values, {setSubmitting}) => {
          //   setTimeout(() => {
          //     setSubmitting(false);
          //     alert(JSON.stringify(values, null, 2));
          //   }, 500);
          // }}
          onSubmit={async (values, { setSubmitting, isSubmitting}) => {
            // console.log(JSON.stringify(values, null, 2));
            // return;

          setTimeout(() => {
              setSubmitting(false);
              console.log(JSON.stringify(values, null, 2));
            }, 2000);
            const res = await addFamilyDoctorDetail(values, null, 2);

            // POST request using fetch inside
            // var newData = Object.assign(values, {
            //   id: editData._id,
            //   action: 'update'
            // });
            setSubmitting(true);
            // alert(JSON.stringify(values, null, 2));
            // alert(isSubmitting)
            // const res = await getEmployeeAction(
            //   JSON.stringify(newData, null, 2)
            // );
            if (res.success) {
              setStatusBase('');
              setStatusBase({
                key: 22,
                status: 'success',
                msg: 'You data has been inserted successfully',
              });
              Router.push("/account/family-doctor", undefined, {
                shallow: true,
              });
            } else {
              setStatusBase('');
              setStatusBase({
                key: 22,
                status: 'error',
                msg: res.message,
              });
            }
            // console.log(res);
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
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* our custom form */}
              <Grid
                container
                className="mobileContainer"
                spacing={3}
                style={{ paddingTop: 10 }}
                > 
               
                <Grid item md={2} xs={12}>
                  <TextField
                    id="select"
                    error={Boolean(touched.title && errors.title)}
                    fullWidth
                    helperText={touched.title && errors.title}
                    label="Title *"
                    name="title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="Dr.">Dr.</MenuItem>
                    <MenuItem value="Mr.">Mr.</MenuItem>
                  </TextField>
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    error={Boolean(touched.first_name && errors.first_name)}
                    fullWidth
                    helperText={touched.first_name && errors.first_name}
                    label="First Name *"
                    // margin="normal"
                    name="first_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.first_name}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={3} xs={12}>
                  <TextField
                   // error={Boolean(touched.middle_name && errors.middle_name)}
                    fullWidth
                   // helperText={touched.middle_name && errors.middle_name}
                    label="Middle Name *"
                    name="middle_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.middle_name}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    error={Boolean(touched.last_name && errors.last_name)}
                    fullWidth
                    helperText={touched.last_name && errors.last_name}
                    label="Last Name *"
                    name="last_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.last_name}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                
                   {/* <Field component={RadioGroup} name="gender">
                    <Grid container>
                      <label>
                        <Field   type="radio" name="gender" value="f" />
                        Male
                      </label>
                      <label>
                        <Field  type="radio" name="gender" value="m" />
                        Female
                      </label>
                        

                   
                    </Grid>
                  </Field>
                  <div>{ !isValid || isSubmitting ? (values.gender != '' ?  <p></p> : <p style={{color:"red"}}>Gender is Required</p>) : <p></p> }</div>
                  */}
                
                   <Field component={RadioGroup} name="gender">
                   <Grid container>
                    <FormControlLabel
                      value="m"
                      control={<Radio color="primary" disabled={isSubmitting} />}
                      disabled={isSubmitting}
                      label="Male"
                    />
                    <FormControlLabel
                      value="f"
                      control={<Radio color="primary" disabled={isSubmitting} />}
                      disabled={isSubmitting}
                      label="Female"
                    />
                    <FormControlLabel
                      value="o"
                      control={<Radio color="primary" disabled={isSubmitting} />}
                      label="Other"
                    />
                    </Grid>
                  </Field>

                 <div>{ !isValid || isSubmitting ? (values.gender != '' ?  <p></p> : <p style={{color:"red"}}>Gender is Required</p>) : <p></p> }</div>
                </Grid>

                {/* <Grid item md={6} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      error={Boolean(touched.dob && errors.dob)}
                      fullWidth
                      helperText={touched.dob && errors.dob}
                      label="Date of Birth"
                      name="dob"
                      format="dd-MM-yyyy"
                      onBlur={handleBlur}
                      onChange={value => setFieldValue('dob', value)}
                      value={values.dob}
                      inputVariant="outlined"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid> */}

                <Grid item md={6} xs={12}>
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    //helperText={touched.email && errors.email}
                    label="Email*"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    error={Boolean(touched.mobile && errors.mobile)}
                    fullWidth
                    helperText={touched.mobile && errors.mobile}
                    label="Mobile *"
                    name="mobile"
                    type="number"
                    onBlur={handleBlur}
                    onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }}
                    onChange={handleChange}
                    value={values.mobile}
                    variant="outlined"
                  />
                </Grid>


                <Grid item md={4} xs={5}>
                  <TextField
                    id="experience"
                    //error={Boolean(touched.experience && errors.experience)}
                    fullWidth
                    //helperText={touched.experience && errors.experience}
                    label="Experience *"
                    name="experience"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.experience}
                    variant="outlined"
                    select
                  >
                    <MenuItem  value="1">1 Year</MenuItem>
                    <MenuItem  value="1">2 Years</MenuItem>
                    <MenuItem  value="1">3 Years</MenuItem>
                    <MenuItem  value="1">4 Years</MenuItem>
                    <MenuItem  value="1">5 Years</MenuItem>
                    <MenuItem  value="1">6 Years</MenuItem>
                   
                  </TextField>
                </Grid>

                <Grid item md={4} xs={5}>
                  <TextField
                    id="specialist"
                   // error={Boolean(touched.specialist && errors.specialist)}
                    fullWidth
                   // helperText={touched.specialist && errors.specialist}
                    label="Specialization*"
                    name="specialist"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.specialist}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="1">Dentist</MenuItem>
                    <MenuItem value="2">Orthopedic</MenuItem>
                    <MenuItem value="3">Paediatrician</MenuItem>
                    <MenuItem value="4">Psychiatrists</MenuItem>
                    <MenuItem value="5">Veterinarian</MenuItem>
                    <MenuItem value="6">Radiologist</MenuItem>
                   
                  </TextField>
                </Grid>


                {/* <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.age && errors.age)}
                    fullWidth
                    helperText={touched.age && errors.age}
                    label="Age *"
                    name="age"
                    type="number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                    variant="outlined"
                  />
                </Grid> */}

                
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                   // error={Boolean(touched.address && errors.address)}
                    fullWidth
                   // helperText={touched.address && errors.address}
                    label="Address"
                    // margin="normal"
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    error={Boolean(touched.pinCode && errors.pinCode)}
                    fullWidth
                    helperText={touched.pinCode && errors.pinCode}
                    label="Pincode *"
                    // margin="normal"
                    name="pinCode"
                    type="number"
                    onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pinCode}
                    variant="outlined"
                    
                  />
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    id="city"
                   // error={Boolean(touched.city && errors.city)}
                    fullWidth
                   // helperText={touched.city && errors.city}
                    label="City *"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="32">Mumbai</MenuItem>
                    <MenuItem value="32">Delhi</MenuItem>
                    <MenuItem value="32">Rajkot</MenuItem>
                  </TextField>
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    id="state"
                    //error={Boolean(touched.state && errors.state)}
                    fullWidth
                   // helperText={touched.state && errors.state}
                    label="State *"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="4460">Delhi</MenuItem>
                    <MenuItem value="4460">Haryana</MenuItem>
                    <MenuItem value="4460">Sikkim</MenuItem>
                  </TextField>
                </Grid>
                <Grid container justify = "center">
                 <Box my={2} ml={1.4}>
                  <Button
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Save Profile
                  </Button>
                  {/* <h3>{isSubmitting ? isSubmitting : 'Dheeraj'}</h3> */}
                 
                  {isSubmitting &&   <LinearProgress /> }
                  {/* <LinearProgress /> */}
                </Box>
                </Grid>
              </Grid>
              {/* Custom form end */}
            </form>
          )}
        </Formik>
      </Grid>
    </div>
  );
}
