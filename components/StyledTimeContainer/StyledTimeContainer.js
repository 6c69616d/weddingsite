import { Box, useTheme } from '@mui/material';

const StyledTimeContainer = ({ timeUnit }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5px',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '10px',
        paddingX: '.5rem',
        paddingY: '.75rem',
        [theme.breakpoints.up('mobile')]: {
          fontSize: '1.4rem',
        },
        [theme.breakpoints.up('largeMobile')]: {
          fontSize: '2rem',
        },
        [theme.breakpoints.up('tablet')]: {
          fontSize: '2.5rem',
          marginRight: '8px',
          padding: '1rem',
        },
        [theme.breakpoints.up('laptop')]: {
          fontSize: '3.5rem',
          marginRight: '18px',
        },
      }}
    >
      <div
        data-key={timeUnit.toLowerCase()}
        data-repeat='true'
        data-transform='pad(00) -> split -> delay'
      >
        <span data-view='flip'></span>
      </div>
      <Box
        sx={{
          fontSize: 12,
          [theme.breakpoints.up('tablet')]: {
            fontSize: 16,
          },
          [theme.breakpoints.up('laptop')]: {
            fontSize: 20,
          },
        }}
      >
        <p className='tick-text-inline' style={{ margin: 0, marginTop: '4px' }}>
          {timeUnit.toUpperCase()}
        </p>
      </Box>
    </Box>
  );
};

export default StyledTimeContainer;
