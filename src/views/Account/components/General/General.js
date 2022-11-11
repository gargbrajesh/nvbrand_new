import React, { useState } from 'react';
import {
  makeStyles, useTheme,
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
  FormGroup,
  IconButton,
  Avatar,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from '@material-ui/pickers';
import FamilyMembers from '../Reusable/FamilyMembers';

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

// code for Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const General = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // code for tabs and
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [imgPreview, setImgPreview] = useState('');

  return (
    // <div className={className} {...rest}>
    <div className="praveenk">
      <AppBar position="static" color="" className={classes.tabHeader}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Medial" {...a11yProps(1)} />
          <Tab label="Family Members" {...a11yProps(2)} />
          <Tab label="Family Doctor" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
              dob: new Date(),
              age: '',
              height: '',
              weight: '',
              blood_group: '',
              email: '',
              state: '',
              district: '',
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
                .required('Fist Name is required'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              // POST request using fetch inside
              // var newData = Object.assign(values, {
              //   id: editData._id,
              //   action: 'update'
              // });

              console.log(JSON.stringify(values, null, 2));
              // const res = await getEmployeeAction(
              //   JSON.stringify(newData, null, 2)
              // );
              if (res.success) {
                // setSnackValue(res.message);
                // setSnackStatus('success');
                // handleClick();
                setSubmitting(false);
                // setTimeout(() => {
                //   navigate('/app/view-employee', { replace: true });
                // }, 3000);
              } else {
                // console.log(res.message);
                // setSnackValue(res.message);
                // setSnackStatus('error');
                // handleClick();
                setSubmitting(false);
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
              touched,
              values,
              resetForm,
            }) => (
              <form onSubmit={handleSubmit}>
                {/* our custom form */}
                <Grid container className="mobileContainer" spacing={3}>
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
                      <MenuItem value="Ms.">Ms.</MenuItem>
                      <MenuItem value="Mrs.">Mrs.</MenuItem>
                      <MenuItem value="Dr.">Dr.</MenuItem>
                      <MenuItem value="Dr(Mrs)">Dr(Mrs)</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item md={5} xs={12}>
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
                  <Grid item md={5} xs={12}>
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
                    <FormGroup row>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Male"
                      />

                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Female"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Others"
                      />
                    </FormGroup>
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
                        format="dd/MM/yyyy"
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
                      <MenuItem value="O negative">O negative</MenuItem>
                      <MenuItem value="O positive">O positive</MenuItem>
                      <MenuItem value="B negative">B negative</MenuItem>
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

                  <Grid item md={6} xs={12}>
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
                      <MenuItem value="O negative">O negative</MenuItem>
                      <MenuItem value="O positive">O positive</MenuItem>
                      <MenuItem value="B negative">B negative</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      id="district"
                      error={Boolean(touched.district && errors.district)}
                      fullWidth
                      helperText={touched.district && errors.district}
                      label="District *"
                      name="district"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.district}
                      variant="outlined"
                      select
                    >
                      <MenuItem value="O negative">O negative</MenuItem>
                      <MenuItem value="O positive">O positive</MenuItem>
                      <MenuItem value="B negative">B negative</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
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
                      <MenuItem value="O negative">O negative</MenuItem>
                      <MenuItem value="O positive">O positive</MenuItem>
                      <MenuItem value="B negative">B negative</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.pinCode && errors.pinCode)}
                      fullWidth
                      helperText={touched.pinCode && errors.pinCode}
                      label="pinCode(Kg) *"
                      // margin="normal"
                      name="pinCode"
                      type="number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.pinCode}
                      variant="outlined"
                    />
                  </Grid>

                  <Box my={2} ml={1.4}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Save Profile
                    </Button>
                    {isSubmitting && <LinearProgress />}
                  </Box>
                </Grid>
                {/* Custom form end */}
              </form>
            )}
          </Formik>
        </Grid>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <Medical />
      </TabPanel> */}
      <TabPanel value={value} index={2}>
        <FamilyMembers />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
    </div>
    // </div>
  );
};

General.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default General;
