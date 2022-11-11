import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

export default function AlertMessage({ message, status }) {
  const [open, setOpen] = React.useState(true);
  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={status}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
