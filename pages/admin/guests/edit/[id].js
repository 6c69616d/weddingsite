import { useRouter } from 'next/router';
import GuestForm from '../../../../components/Form/GuestForm/GuestForm';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '../../../../utils/utils';
import { roboto } from '../../style';
import axios from 'axios';
import { useTheme } from '@emotion/react';

const EditGuest = () => {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useSWRConfig();
  const existingTheme = useTheme();

  const updateGuest = (data) => {
    try {
      axios.put(`/api/guests/${id}`, data).then((res) => {
        mutate(`/api/guests/${id}`);
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

  const { data, error, isLoading } = useSWR(`/api/guests/${id}`, fetcher);

  return (
    <ThemeProvider theme={theme}>
      {data ? (
        <GuestForm
          data={data}
          apiCall={updateGuest}
          submitText={'Update Guest'}
        />
      ) : null}
    </ThemeProvider>
  );
};

export default EditGuest;
