import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import Layout from '../components/Layout';
import createEmotionCache from '../utils/createEmotionCache';
import '../styles/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/amatic-sc/400.css';
import '@fontsource/amatic-sc/700.css';
import '@fontsource/tangerine/400.css';
import '@fontsource/tangerine/700.css';
import '@fontsource/belleza/400.css';

const clientSideEmotionCache = createEmotionCache();

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

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  );
};

export default App;
