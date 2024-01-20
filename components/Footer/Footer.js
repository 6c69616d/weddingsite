import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '../Typography';

const Footer = () => {
  return (
    <Box
      sx={{
        color: 'white',
        paddingY: '1.5rem',
        borderTop: '1px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ paddingBottom: 0, marginRight: '5px' }}>
        Made with
      </Typography>
      <FavoriteBorderIcon />
      <Typography sx={{ paddingBottom: 0, marginLeft: '5px ' }}>
        by Liam
      </Typography>
    </Box>
  );
};

export default Footer;
