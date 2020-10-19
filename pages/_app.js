import dynamic from 'next/dynamic'
import { useContext } from 'react'

import App from 'next/app'
import 'react-medium-image-zoom/dist/styles.css'

const Themes = dynamic(
  () => import('../styles/themes/'),
  { ssr: false }
)

import '../styles/GlobalStyle.css'

function Main(props) {
	const { Component, pageProps } = props

	return (
		<>
			<Themes />
			<Component {...pageProps} />
		</>
	)
}

export default Main
