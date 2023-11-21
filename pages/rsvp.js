import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Snackbar } from '@mui/material';
import Dialog from '../components/Dialog';
import RsvpForm from '../components/Form/RsvpForm/RsvpForm';
import DialogActions from '../components/Dialog/DialogActions';
import axios from 'axios';

const RSVP = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDialogClose = () => {
    setDialogProps({
      ...dialogProps,
      open: false,
    });
  };

  const [dialogProps, setDialogProps] = useState({
    open: false,
    onClose: handleDialogClose,
  });

  const handleSnackClose = (evt, reason) => {
    if (reason === 'clickaway') return;
    setSnackProps((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const [snackProps, setSnackProps] = useState({
    open: false,
    autoHideDuration: 3000,
    onClose: handleSnackClose,
  });

  const onSuccessCallback = () => {
    setDialogProps({
      open: true,
      title: 'Thank you for your response',
      content: <Typography>Ta very much like</Typography>,
      onClose: handleDialogClose,
      dialogActions: <Button onClick={handleDialogClose}>Close</Button>,
    });
  };

  const validateCode = async () => {
    axios
      .post('/api/rsvp/validate', { rsvpCode: value })
      .then((res) => {
        handleResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
        setSnackProps((prev) => ({
          ...prev,
          open: true,
          severity: 'error',
          message: 'Code not found. Please contact us if you need assistance.',
        }));
        setButtonDisabled(false);
      });
  };

  const parseData = (data, token) => ({
    ...data,
    token,
    isAttending: data.hasRsvpd ? data.isAttending : true,
  });

  const handleResponse = (data) => {
    if (data.success) {
      const parsedData = parseData(data.guest, data.token);
      setDialogProps({
        ...dialogProps,
        title: "RSVP for Liam and Leah's wedding",
        titleProps: {
          sx: {
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: '1',
            fontFamily: 'Tangerine, sans-serif',
          },
        },
        open: true,
        fullWidth: true,
        maxWidth: 'lg',
        onClose: () => {},
        content: (
          <RsvpForm
            data={parsedData}
            handleClose={handleDialogClose}
            onSuccessCallback={onSuccessCallback}
          />
        ),
      });
    }
    setButtonDisabled(false);
  };

  const handleChange = ({ target }) => {
    setError('');
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    if (!value) {
      setError('RSVP Code is required');
      setButtonDisabled(false);
      return;
    }
    validateCode(value);
  };

  return (
    <>
      <Box
        mt={3}
        component='form'
        onSubmit={handleSubmit}
        display='flex'
        flexDirection={'column'}
        alignItems={'center'}
      >
        <TextField
          sx={{ minWidth: '250px', marginBottom: '1rem' }}
          label='Please enter your RSVP Code'
          value={value}
          onChange={handleChange}
          helperText={error}
          error={Boolean(error)}
        />
        <Button type='submit' variant='contained' disabled={buttonDisabled}>
          Submit
        </Button>
      </Box>
      <Dialog {...dialogProps} />
      <Snackbar {...snackProps} />
    </>
  );
};

export default RSVP;
