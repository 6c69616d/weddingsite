import { Typography as MTypo } from '@mui/material';

const Typography = ({ variant = 'p', sx, children, ...rest }) => (
  <MTypo
    variant={variant}
    sx={{
      fontFamily: 'Belleza',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: '10px',
      ...sx,
    }}
    {...rest}
  >
    {children}
  </MTypo>
);

export default Typography;
