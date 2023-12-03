import { Box, Typography } from '@mui/material';

const Location = () => {
  return (
    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
      <Box>
      <Typography variant='h3' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
        The Location
      </Typography>
      <Typography variant='h5' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center' }} >
        Wentbridge House Hotel
      </Typography>
      <Typography variant='h5' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px'}} >
        The Great North Road, Wentbridge, Pontefract WF8 3JJ
      </Typography>
      </Box>
      <Box>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.7647821493974!2d-1.2655189229881316!3d53.65116615187206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48796b669b938843%3A0x459c749b409dd821!2sWentbridge%20House%20Hotel!5e0!3m2!1sen!2suk!4v1691949674423!5m2!1sen!2suk'
          width='100%'
          height='300'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </Box>
    </Box>
  );
};
export default Location;
