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
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  FormGroup,
  IconButton,
  Avatar,

  Box,
} from '@material-ui/core';

import * as Yup from 'yup';
import { Formik,Field } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from '@material-ui/pickers';
import { RadioGroup } from 'formik-material-ui';
import {addFamilyMember} from '../../../components/helper/PatientApi';
import { async } from 'validate.js';
import AlertMassage from '../../../components/helper/AlertMessage';


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
    marginTop:"-20px"
  },
}));

export default function FamilyMembers() {
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
            middle_name:'',
            last_name: '',
            dob: new Date(),
            mobile:'',
            gender:'',
            height: '',
            gender:'',
            weight: '',
            blood_group: '',
            state: '',
            city: '',
            pinCode: '',
            // mobile: editData.mobile,
            address: '',
            // password: editData.password
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(255)
              .required('Title is required'),
            first_name: Yup.string()
              .max(255)
              .required('First Name is required'),
            middle_name: Yup.string()
              .max(255)
              .required('Middle Name is required'),
            last_name: Yup.string()
              .max(255)
              .required('Last Name is required'),
            gender: Yup.string()
              .required(' Gender is Required'),
            // dob: Yup.string()
            //   .max(255)
            //   .required('Date of Birth is required'),
            mobile: Yup.string()
            .min(10, 'Mobile must be in 10 digits')
            .max(10, 'Mobile must be in 10 digits')
            .required('Mobile is required'),
            blood_group: Yup.string()
              .max(255)
              .required('Blood Group is required'),
            height: Yup.string()
              .max(255)
              .required('Height is required'),
             weight: Yup.string()
               .max(255)
              .required('Weight is required'),
            address: Yup.string()
              .max(255)
              .required('Address is required'),
            state: Yup.string()
              .max(255)
              .required('State is required'),
          
            city: Yup.string()
              .max(255)
              .required('City is required'),
            // gender: Yup.string()
            //   .max(255)
            //   .required('Gender is required'),
            pinCode: Yup.string()
            .min(6, 'Pincode must be in 6 digits')
            .max(6, 'Pincode must be in 6 digits')
             .required('Pincode is required')
           

          })}
          // onSubmit={(values, {setSubmitting}) => {
          //   setTimeout(() => {
          //     setSubmitting(false);
          //     alert(JSON.stringify(values, null, 2));
          //   }, 500);
          // }}
          onSubmit={async (values, { setSubmitting, isSubmitting}) => {
          setTimeout(() => {
              setSubmitting(false);
              console.log(JSON.stringify(values, null, 2));
            }, 2000);
 
            const res = await addFamilyMember(values, null, 2);
            // POST request using fetch inside
            // var newData = Object.assign(values, {
            //   id: editData._id,
            //   action: 'update'
            // });
            setSubmitting(true);

            if (res.success) {
              setStatusBase('');
              setStatusBase({
                key: 22,
                status: 'success',
                msg: 'You data has been inserted successfully',
              });
              Router.push("/account/family-member", undefined, {
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
            // alert(JSON.stringify(values, null, 2));
            // alert(isSubmitting)
            // const res = await getEmployeeAction(
            //   JSON.stringify(newData, null, 2)
            // );
            // if (res.success) {
            //   // setSnackValue(res.message);
            //   // setSnackStatus('success');
            //   // handleClick();
            //   setSubmitting(true);
            //   // setTimeout(() => {
            //   //   navigate('/app/view-employee', { replace: true });
            //   // }, 3000);
            // } else {
            //   // console.log(res.message);
            //   // setSnackValue(res.message);
            //   // setSnackStatus('error');
            //   // handleClick();
            //   // setSubmitting(false);
            // }
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
                <Grid item md={12} xs={12}>
                    <div className={classes.profileImage}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="profile_image"
                        type="file"
                        onChange={event => {
                          setFieldValue('file', event.currentTarget.files[0]);
                          document.getElementById(
                            'output',
                          ).src = window.URL.createObjectURL(
                            event.currentTarget.files[0],
                          );

                          setImgPreview(
                            window.URL.createObjectURL(
                              event.currentTarget.files[0],
                            ),
                          );
                        }}
                        hidden
                      />
                      <label htmlFor="profile_image">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {/* <PhotoCamera /> */}
                          <Avatar
                            className={classes.large}
                            id="output"
                            src={imgPreview}
                          />
                        </IconButton>
                      </label>
                    </div>
                  </Grid>
               
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
                    error={Boolean(touched.middle_name && errors.middle_name)}
                    fullWidth
                    helperText={touched.middle_name && errors.middle_name}
                    label="Middle Name *"
                    // margin="normal"
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
                    <div>{ !isValid || isSubmitting ? (values.gender != '' ?  <p></p> : <p style={{color:"red"}}>Gender is Required</p>) : <p></p> }</div>
                  </Field>
                </Grid>

                <Grid item md={6} xs={12}>
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
                </Grid>

                <Grid item md={6} xs={12}>
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

                <Grid item md={6} xs={12}>
                  <TextField
                    id="blood_group"
                    error={Boolean(touched.blood_group && errors.blood_group)}
                    fullWidth
                    helperText={touched.blood_group && errors.blood_group}
                    label="Blood Group *"
                    name="blood_group"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.blood_group}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="6">O negative</MenuItem>
                    <MenuItem value="6">O positive</MenuItem>
                    <MenuItem value="6">B negative</MenuItem>
                  </TextField>
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.height && errors.height)}
                    fullWidth
                    helperText={touched.height && errors.height}
                    label="Height(Ft) *"
                    // margin="normal"
                    name="height"
                    type="number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.height}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.weight && errors.weight)}
                    fullWidth
                    helperText={touched.weight && errors.weight}
                    label="Weight(Kg) *"
                    // margin="normal"
                    name="weight"
                    type="number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.weight}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.address && errors.address)}
                    fullWidth
                    helperText={touched.address && errors.address}
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
                    onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                    }}
                    type="number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pinCode}
                    variant="outlined"
                    
                  />
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    id="city"
                    error={Boolean(touched.city && errors.city)}
                    fullWidth
                    helperText={touched.city && errors.city}
                    label="City *"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="4460">Mumbai</MenuItem>
                    <MenuItem value="4460">Delhi</MenuItem>
                    <MenuItem value="4460">Rajkot</MenuItem>
                  </TextField>
                </Grid>

                <Grid item md={4} xs={12}>
                  <TextField
                    id="state"
                    error={Boolean(touched.state && errors.state)}
                    fullWidth
                    helperText={touched.state && errors.state}
                    label="State *"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                    select
                  >
                    <MenuItem value="32">Delhi</MenuItem>
                    <MenuItem value="32">Haryana</MenuItem>
                    <MenuItem value="32">Sikkim</MenuItem>
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
