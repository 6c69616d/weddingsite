import { Box, Button as MButton } from '@mui/material';
import Link from 'next/link';
import Typography from '../components/Typography';

const Button = ({ children, sx, ...rest }) => (
  <MButton sx={{ textDecoration: 'underline', ...sx }} {...rest}>
    {children}
  </MButton>
);

const Accomodation = () => {
  return (
    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
      <Typography variant='h3'>Accomodation</Typography>
      <Typography>
        We would love for you to stay and share breakfast with us the next
        morning please use the information below if you are able.
      </Typography>
      <Typography>
        There is accomodation available at the venue that can be reserved
        directly with them.
      </Typography>
      <Typography>
        If you contact the venue via the details below and explain you are
        attending the wedding prices start at a discounted rate of £119 with
        breakfast included.
      </Typography>

      <Typography>
        <Link href='tel:01977620444'>
          <Button>01977 620444</Button>
        </Link>
      </Typography>
      <Typography>
        <Link href='mailto:info@wentbridgehouse.co.uk'>
          <Button>info@wentbridgehouse.co.uk</Button>
        </Link>
      </Typography>
      <Typography variant='h6'>Local Taxi Companies</Typography>
      <Typography>
        For those who may want to make use of a taxi company the venue have
        recommended the below
      </Typography>
      <Typography>
        Action Cars ~{' '}
        <Link href='tel:01977600700'>
          {' '}
          <Button sx={{ paddingLeft: '0px' }}>01977 600700</Button>
        </Link>
      </Typography>
    </Box>
  );
};
export default Accomodation;
