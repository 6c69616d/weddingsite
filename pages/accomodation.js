import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Accomodation = () => {
  return (
    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
      <Typography variant='h3' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >Accomodation</Typography>
      <Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
        We would love for you to stay and share breakfast with us the next morning please use the information below if you are able.
        </Typography>
      <Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
        There is accomodation available at the venue that can be reserved directly with them. 
        </Typography>
      <Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
        If you contact the venue via the details below and explain you are attending the wedding prices start at a discounted rate of £119 with breakfast included.
      </Typography>
      
      <Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
      <Link href="tel:01977620444"><Button sx={{textDecoration: 'underline'}}>01977 620444</Button></Link>
      
      </Typography><Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
      
      <Link href="mailto:info@wentbridgehouse.co.uk"><Button sx={{textDecoration: 'underline'}}>info@wentbridgehouse.co.uk</Button></Link> 
      </Typography>
      <Typography variant='h6' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >Local Taxi Companies</Typography>
      <Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
        For those who may want to make use of a taxi company the venue have recommended the below
      </Typography>
      <Typography variant='p' sx={{ fontFamily: 'Belleza', fontWeight: 'bold', textAlign: 'center', paddingBottom: '10px' }} >
      Action Cars  ~ <Link href="tel:01977600700"> <Button sx={{textDecoration: 'underline', paddingLeft:'0px'}}>01977 600700</Button></Link>
      </Typography>
     </Box>
  );
};
export default Accomodation;