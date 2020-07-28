import { useContext } from 'react'

import App from 'next/app'
import 'react-medium-image-zoom/dist/styles.css'

import dark from '../styles/themes/dark'

function Main(props) {
	const { Component, pageProps } = props

	return (
		<Component {...pageProps} />
	)
}

export default Main