import { Box, useMediaQuery } from '@mui/material';

const StyledTimeContainer = ({ timeUnit }) => {
  const isLarge = useMediaQuery('(min-width: 1024px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '10px',
        padding: '1rem',
        fontSize: isLarge ? '3.5rem' : '2.5rem',
      }}
    >
      <div
        data-key={timeUnit.toLowerCase()}
        data-repeat='true'
        data-transform='pad(00) -> split -> delay'
      >
        <span data-view='flip'></span>
      </div>
      <p className='tick-text-inline' style={{ margin: 0, fontSize: 20 }}>
        {timeUnit.toUpperCase()}
      </p>
    </Box>
  );
};

export default StyledTimeContainer;
