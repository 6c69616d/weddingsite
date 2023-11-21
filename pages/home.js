import { Box, Typography } from '@mui/material';

const Home = () => {
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
      <Box display='flex' justifyContent={'center'}>
        <Typography
          variant='h2'
          sx={{
            fontFamily: 'Belleza',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          You're invited to the Sykes wedding!
        </Typography>
      </Box>
      {/* <h1 style={{ textAlign: 'center' }}>
        YOU'RE INVITED TO CELEBRATE THE SYKES WEDDING!
      </h1> */}
      {/* <FlipCountdown
            size='medium'
            theme='dark'
            yearTitle=' '
            monthTitle=' '
            dayTitle=' '
            hourTitle=' '
            minuteTitle=' '
            secondTitle=' '
            endAt={'2024-06-29 00:00:00'} // Date/Time
          /> */}
    </div>
  );
};

export default Home;
