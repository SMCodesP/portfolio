import { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/Global';
import { ThemeProvider } from 'styled-components';
import dark from '@/themes/dark';
import { ToastContainer } from 'react-toastify';

import 'rc-tooltip/assets/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
