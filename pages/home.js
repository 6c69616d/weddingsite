import { Box, useMediaQuery, useTheme } from '@mui/material';
import '@pqina/flip/dist/flip.min.css';

import EventCountdown from '../components/EventCountdown';
import Typography from '../components/Typography';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div
      style={{
        backgroundImage: `url(/logo1.png)`,
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent={'center'}
        alignItems='center'
      >
        <Typography variant={isMobile ? 'h3' : 'h2'}>
          You're invited to the Sykes wedding!
        </Typography>
        <EventCountdown value='2024-06-29T13:00:00' />
      </Box>
    </div>
  );
};

export default Home;
