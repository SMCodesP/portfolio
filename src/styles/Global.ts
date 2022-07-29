import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html,
  body {
    line-height: 1.6;
    font-size: 18px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  input,
  button,
  textarea {
    outline: 0;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.comment};
  }
  ::selection {
    background: ${({ theme }) => theme.comment};
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.comment};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => darken(0.1, theme.cyan)};
    border-radius: 5px;
    transition: 0.4s background;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => darken(0.3, theme.cyan)};
  }
`;
