import { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/Global';
import { ThemeProvider } from 'styled-components';
import dark from '@/themes/dark';
import Head from 'next/head';
import 'rc-tooltip/assets/bootstrap.css';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
