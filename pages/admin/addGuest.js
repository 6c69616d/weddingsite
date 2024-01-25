import { useRouter } from 'next/router';
import axios from 'axios';
import GuestForm from '../../components/Form/GuestForm/GuestForm';
import { roboto } from '../../styles/style';
import { useTheme } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';

const AddGuest = () => {
  const router = useRouter();
  const existingTheme = useTheme();

  const createGuest = async (data) => {
    try {
      axios.post('/api/guests', data).then(() => {
        router.push('/admin');
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  const theme = createTheme({
    ...existingTheme,
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  const guest = {
    name: '',
    inviteType: '',
    rsvpCode: '',
    isAttending: false,
    hasRsvpd: false,
    dietryReqs: '',
    additionalGuests: [],
    songRec: {
      title: '',
      artist: '',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GuestForm
        data={guest}
        apiCall={createGuest}
        submitText='Add New Guest'
      />
    </ThemeProvider>
  );
};

export default AddGuest;
