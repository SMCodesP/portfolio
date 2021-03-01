import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
		font-family: 'Roboto', sans-serif !important;
		transition: background .2s, background-color .2s, color .2s;
	}

	html, body {
		background: ${({ theme }) => theme.colors.background};
		width: 100%;
		height: 100vh;
		scroll-behavior: smooth;
		color: ${({ theme }) => theme.colors.text};
	}

	::-webkit-scrollbar {
		width: 7px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.tertiary};
	}

	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.secundary};
		border-radius: 7px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => shade(0.3, theme.colors.secundary)};
	}

	.ReactModal__Overlay {
	    opacity: 0;
	    transition: opacity 500ms ease-in-out;
	}

	.ReactModal__Overlay--after-open{
	    opacity: 1;
	}

	.ReactModal__Overlay--before-close{
	    opacity: 0;
	}
`;

export default GlobalStyle;
