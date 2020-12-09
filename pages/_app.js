import Head from 'next/head'

import 'react-medium-image-zoom/dist/styles.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import GlobalStyle from '../styles/GlobalStyle'

import {ThemesProvider} from '../contexts/themes'
import {AuthProvider} from '../contexts/auth'
import {CartProvider} from '../contexts/cart'

function Main(props) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ThemesProvider>
				<AuthProvider>
					<CartProvider>
						<Component {...pageProps} />

						<GlobalStyle />
					</CartProvider>
				</AuthProvider>
			</ThemesProvider>
		</>
	)
}

export default Main
