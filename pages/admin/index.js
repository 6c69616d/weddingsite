import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  CircularProgress,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';

import Dialog from '../../components/Dialog/Dialog';
import DialogActions from '../../components/Dialog/DialogActions';
import DataTable from '../../components/DataTable';
import { getColumnData } from '../../utils/columnData';
import { fetcher } from '../../utils/utils';
import { roboto } from '../../styles/style';
import { useTheme } from '@emotion/react';

const Admin = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const [dialogProps, setDialogProps] = useState({
    open: false,
    title: '',
  });

  const handleDialogClose = () =>
    setDialogProps({
      ...dialogProps,
      open: false,
    });

  const { data, error, isLoading } = useSWR('api/guests', fetcher);

  const deleteGuest = (id) => {
    axios
      .delete(`/api/guests/${id}`)
      .then((res) => {
        mutate('api/guests');
      })
      .catch((err) => console.log(err));
  };

  const deleteCallback = (row) => {
    setDialogProps({
      ...dialogProps,
      open: true,
      title: 'Are you sure you want to delete this user?',
      content: `This will permanently delete ${row.name}. Are you sure you wish to continue?`,
      onClose: handleDialogClose,
      dialogActions: (
        <DialogActions
          close={handleDialogClose}
          declineText={'No'}
          confirm={() => deleteGuest(row.id)}
          confirmText={'Yes'}
        />
      ),
    });
  };

  const columns = getColumnData(deleteCallback);
  const existingTheme = useTheme();

  const theme = createTheme({
    ...existingTheme,
    typography: {
      fontFamily: 'roboto.style.fontFamily',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box mt={3} className={roboto.className}>
        {data ? (
          <>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <Button
                variant='contained'
                onClick={() => router.push(`admin/addGuest/`)}
              >
                Add New Guest
              </Button>
            </Box>
            <Box mt={2}>
              <DataTable rows={data} columns={columns} />
            </Box>
          </>
        ) : isLoading ? (
          <Box
            display='flex'
            justifyContent='center'
            sx={{ marginTop: '4rem' }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <div>Error!</div>
        ) : null}
      </Box>
      <Dialog {...dialogProps} />
    </ThemeProvider>
  );
};

export default Admin;
