import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './searchDoctor.module.css';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  TextField,
  FormControl,
  Box,
  Grid,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  fullWidth: {
    maxWidth: '100%',
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the sections
 *
 * @param {Object} props
 */
const SearchDoctor = props => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Code For Search Doctor According to Patient


  // Code to get Current LOcation Name

  const [getLatitude, setLatitude] = React.useState('');
  const [getLongitutde, setLongitutde] = React.useState('');
  const [myresult, setResult] = React.useState([]);



  const [getLocation, setSetLocation] = React.useState('');

  const [getLoc, setSetLoc] = React.useState();




  const [value, setValue] = useState();
  const [myvaues, setMyValues] = useState();
  const [data, setData] = useState("");
  const [addressObj, setAddressObj] = useState();

  const [myLocation, setMyLocation] = React.useState();

  const router = useRouter();
  const [searchdoctors, setSearchDoctors] = useState('');



  ///  Get Latitude with 


  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  // On Search button click move to another page with search namr name lattitude and longitute
  const searchDoctor = () => {
    router.push({
      pathname: '/doctor-search/',
      query: {
        name: searchdoctors,
        latitudePos: coordinates.lat,
        longitutePos: coordinates.lng
      }
    })
  }

  return (
    <section
      className={clsx(
        'section',

        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        className,
      )}
      {...rest}
    >
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCea7use-zSkFZxumDrado3k8WSHPbUlk&libraries=places&callback=myCallbackFunc"></script>
      <Grid
        container
        className="search_form"
      >
        <Grid style={isMd ? { padding: '0px' } : { padding: '0px' }}>
          {isMd ? (
            <Box
              display="flex"
              mb={2}
              className="search"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl>
                <TextField
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '-18px',
                    marginLeft: '0px',
                    overflow: 'hidden',
                    zIndex: '999',
                  }}
                  name={'text'}
                  className={styles.txf}
                  InputProps={{
                    startAdornment: (
                      <LocationOnIcon onClick={() => 0}>x</LocationOnIcon>
                    ),
                  }}
                />
              </FormControl>
            </Box>
          ) : (
            <></>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          //             md={5}
          className={styles.container_location_input}
          style={isMd ? { padding: '0px' } : { padding: '50px' }}
        ><div>

          </div>
          <FormControl fullWidth className={styles.input_form_control1}>
            {/* 
          <GooglePlacesAutocomplete
            
            selectProps={{ isClearable: true }}
            apiKey='AIzaSyBCea7use-zSkFZxumDrado3k8WSHPbUlk'
            selectProps={{
              myLocation,
            
            }} 
          /> */}
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
              googleCallbackName="myCallbackFunc"
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className={styles.location_field}>
                  {/* <p>Latitude: {coordinates.lat}</p>
                  <p>Longitude: {coordinates.lng}</p> */}

                  <input className={styles.location_input} {...getInputProps({ placeholder: "Type address" })} />

                  <div className={styles.location_list}>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map(suggestion => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                      };

                      return (
                        <div className={styles.location_List_l} {...getSuggestionItemProps(suggestion)}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          className={styles.container_location_input}
          style={isMd ? { padding: '0px' } : { padding: '0px' }}
        >
          <FormControl fullWidth className={styles.input_form_control2}>
            <TextField
              className={styles.input_field_control2}
              onChange={e => setSearchDoctors(e.target.value)}
              name={'text'}
              variant="outlined"
              placeholder="Doctor, Specialization, Doctor Clinic, Symptoms"
              InputProps={{
                classes: {
                  root: styles.inputs,
                },
              }}
            />
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          className={styles.container_location_input}
          style={isMd ? { padding: '0px' } : { padding: '10px' }}
        >
          {isMd ? (
            <Box>
              <Button
                onClick={searchDoctor}
                variant="contained"
                style={{
                  height: '3.8em',
                  width: '150px',
                  borderRadius: '0px 15px 15px 0',
                  position: 'absolute',
                  right: '0px',
                }}
                size="large"
                color="primary"
              >
                {' '}
                Search
              </Button>
            </Box>
          ) : (
            <Grid container justifyContent="center">
              <Button
                onClick={searchDoctor}
                variant="contained"
                style={{
                  height: '3.8em',
                  width: '100%',
                  borderRadius: '0px 15px 15px 0',
                }}
                size="large"
                color="primary"
              >
                Search
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
      {children}
    </section>
  );
};

SearchDoctor.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  narrow: PropTypes.bool,
  /**
   * Should the section be full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Should the section render with no padding
   */
  disablePadding: PropTypes.bool,
};

export default SearchDoctor;
