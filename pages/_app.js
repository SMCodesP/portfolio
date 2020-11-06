import { useContext } from 'react'

import App from 'next/app'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {ThemesProvider} from '../contexts/themes'
import {AuthProvider} from '../contexts/auth'

import dark from '../styles/themes/dark'

function Main(props) {
	const { Component, pageProps } = props

	console.log(pageProps)

	return (
		<ThemesProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ThemesProvider>
	)
}

export default Main
