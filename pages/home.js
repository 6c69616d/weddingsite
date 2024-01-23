import Image from 'next/image';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import '@pqina/flip/dist/flip.min.css';

import EventCountdown from '../components/EventCountdown';
import Typography from '../components/Typography';
import logo from '../public/logo1-cropped.png';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent={'center'}
        alignItems='center'
        gap={6}
        zIndex={2}
      >
        <Typography variant={'h1'}>
          You're invited to the Sykes wedding!
        </Typography>
        <EventCountdown value='2024-06-12:30:00' />
        <Image
          src={logo}
          alt={'Sykes wedding logo'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            height: 'auto',
            maxWidth: isMobile ? '75%' : '100%',
          }}
        />
      </Box>
    </>
  );
};

export default Home;
