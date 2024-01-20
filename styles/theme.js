'use client';

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8C4646',
    },
    secondary: {
      main: '#D9B8B8',
    },
    error: {
      main: '#c7280c',
    },
    text: {
      primary: '#914555',
      secondary: '#b47d85',
    },
    background: {
      primary: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 440,
      largeMobile: 554,
      tablet: 768,
      laptop: 1028,
      desktop: 1200,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
