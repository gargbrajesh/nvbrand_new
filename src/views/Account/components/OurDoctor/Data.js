import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import TableIcons from 'components/helper/TableIcons';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogCtm: {
    '& > .MuiBackdrop-root': {
      backgroundColor: 'rgb(0 0 0 / 12%) !important',
    },
  },
  detailPanel: {
    padding: '20px',
    display: 'flex',
    '& tr td': {
      padding: '0px 29px',
    },
    th: {
      fontWeight: 'bold',
    },
  },
}));

const Data = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const consultData = [
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. Prakash Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Harvinder Ahuja',
      bookingId: '4308403',
    },
    {
      name: 'Dr. kk Singh',
      photo: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
      specialist: 'Dentist',
      address: 'Preet Vihar New Delhi',
      consultType: 'Video',
      time: '04 june 2020 - 8:00 AM to 9:00 AM',
      bookingFor: 'Mandeep Ahuja',
      bookingId: '4308403',
    },
  ];

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item md={12}>
          <MaterialTable
            icons={TableIcons}
            title="Our Doctor List"
            columns={[
              {
                title: 'Image',
                field: 'photo',
                render: rowData => (
                  <img
                    style={{ height: 60, borderRadius: '50%' }}
                    src={rowData.photo}
                  />
                ),
              },
              {
                title: 'Doctor Name',

                render: rowData =>
                  rowData.name + '(' + rowData.specialist + ')',
              },
              // { title: 'Booking For', field: 'bookingFor' },
              // { title: 'Booking Id', field: 'bookingId' },

              // { title: 'Address', field: 'address' },
              // { title: 'Date/Time', field: 'time' },
              { title: 'Consult Type', field: 'consultType' },
              {
                field: 'Action',
                render: rowData => (
                  <div>
                    <Button variant="outlined" color="primary">
                      {/* <PlayArrowIcon /> Resume */}
                      Book Appointment
                    </Button>
                    {/* Resume Consultation */}
                  </div>
                ),
              },
            ]}
            // data={query =>
            //   new Promise((resolve, reject) => {
            //     let url = 'https://reqres.in/api/users?';
            //     url += 'per_page=' + query.pageSize;
            //     url += '&page=' + (query.page + 1);
            //     console.log('qSize', query.pageSize, 'url', url);
            //     fetch(url)
            //       .then(response => response.json())
            //       .then(result => {
            //         resolve({
            //           data: result.data,
            //           page: result.page - 1,
            //           totalCount: result.total,
            //         });
            //       });
            //   })
            // }
            data={consultData}
            options={
              {
                // exportButton: true,
                // exportAllData: true,
                // showTitle: false,
              }
            }
            detailPanel={rowData => {
              return (
                <div className={classes.detailPanel}>
                  <tr>
                    <td>
                      <label>Address :</label>
                      <span> {rowData.address}</span>
                    </td>
                    <td>
                      <label>Address :</label>
                      <span> {rowData.address}</span>
                    </td>
                    <td>
                      <label>Address :</label>
                      <span> {rowData.address}</span>
                    </td>
                  </tr>
                </div>
              );
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Data.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Data;
