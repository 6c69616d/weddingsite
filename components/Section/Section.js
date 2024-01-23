import { Box } from '@mui/material';

const Section = ({ sectionId, additionalStyle, children }) => {
  const style = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...additionalStyle,
  };

  return (
    <Box id={sectionId} sx={style}>
      {children}
    </Box>
  );
};

export default Section;
