import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import Layout from '../components/Layout';
import '../styles/global.css';
import Head from 'next/head';
import { Belleza } from 'next/font/google';

const belleza = Belleza({ weight: '400', subsets: ['latin'] });

let theme = createTheme({
  palette: {
    primary: {
      main: '#8C4646',
    },
    secondary: {
      main: '#D9B8B8',
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
  typography: {
    fontFamily: belleza.style.fontFamily,
  },
});

theme.typography.h1 = {
  fontSize: 32,
  lineHeight: 1.2,
  [theme.breakpoints.up('mobile')]: {
    fontSize: 42,
  },
  [theme.breakpoints.up('largeMobile')]: {
    fontSize: 50,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: 60,
  },
};

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppCacheProvider {...pageProps}>
          <Head>
            <title>The Sykes Wedding</title>
            <meta property='og:title' content='The Sykes Wedding' key='title' />
          </Head>
        </AppCacheProvider>
        <div className={belleza.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
