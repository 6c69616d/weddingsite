import Image from 'next/image';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import '@pqina/flip/dist/flip.min.css';

import EventCountdown from '../components/EventCountdown';
import Typography from '../components/Typography';
import logo from '../public/logo1-cropped.png';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {/* <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(/logo1-cropped.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'inherit',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            zIndex: 0,
          }}
        />
      </Box> */}
      <Box
        display='flex'
        flexDirection='column'
        justifyContent={'center'}
        alignItems='center'
        gap={4}
        zIndex={2}
      >
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          // style={{ marginBottom: '20px' }}
        >
          You're invited to the Sykes wedding!
        </Typography>
        <EventCountdown value='2024-06-29T13:00:00' />
        <Image
          src={logo}
          alt={'Sykes wedding logo'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            height: 'auto',
            maxWidth: '100%',
          }}
        />
      </Box>
    </>
  );
};

export default Home;
