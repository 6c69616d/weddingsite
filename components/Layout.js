import { Container, Box } from '@mui/material';
import Header from './Header/';

const Layout = ({ children }) => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Header />
        <Box className='globalContainer' style={{ opacity: 0 }}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export default Layout;
