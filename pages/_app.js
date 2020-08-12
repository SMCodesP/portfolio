import { useContext } from 'react'

import App from 'next/app'
import 'react-medium-image-zoom/dist/styles.css'
import {ThemesProvider} from '../contexts/themes'

import dark from '../styles/themes/dark'

function Main(props) {
	const { Component, pageProps } = props

	return (
		<ThemesProvider>
			<Component {...pageProps} />
		</ThemesProvider>
	)
}

export default Main
