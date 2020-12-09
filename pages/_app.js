import App from "next/app";
import Head from 'next/head'
import cookies from "next-cookies";

import 'react-medium-image-zoom/dist/styles.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {ThemesProvider} from '../contexts/themes'
import {AuthProvider} from '../contexts/auth'
import {CartProvider} from '../contexts/cart'

import themes from '../styles/themes'

export default class Main extends App {
	static async getInitialProps({ Component, ctx }) {
	  	let pageProps = {};
  
	  	if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
	  	}
  
	  	return { pageProps, cookiesCtx: cookies(ctx) };
	}
  
	render() {
		const { Component, pageProps, cookiesCtx } = this.props;

		return (
			<>
				<ThemesProvider initialTheme={themes[cookiesCtx.theme.toLowerCase() || 'light'] || themes['light']}>
					<AuthProvider>
						<CartProvider>
							<Component {...pageProps} />
						</CartProvider>
					</AuthProvider>
				</ThemesProvider>
			</>
	  	);
	}
}