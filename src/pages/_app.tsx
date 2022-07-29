import { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/Global';
import { ThemeProvider } from 'styled-components';
import dark from '@/themes/dark';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
