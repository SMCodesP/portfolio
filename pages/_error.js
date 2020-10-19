import Head from 'next/head'
import Error from 'next/error';
import Link from 'next/link'

import {useContext} from 'react'

import {ThemeContext, createGlobalStyle} from 'styled-components'

import ContainerParticles from '../components/ContainerParticles/'

import {
	Container,
	TextError,
	BackToHome,
} from '../styles/pages/404'

function Error404({ statusCode }) {
	const {colors} = useContext(ThemeContext)

	return (
		<>
			<Head>
					<meta name="theme-color" content={colors.background} />
					<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
					<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>
			<Container>
				<TextError data-text={`Error ${statusCode}`}>Error {statusCode}</TextError>
				<Link href="/"><a style={{
					margin: '25px 0',
				}}><BackToHome>Go to home</BackToHome></a></Link>
			</Container>
			<ContainerParticles />

      		<Error statusCode={404} title="Página não encontrada!"></Error>
		</>
	)
}

Error404.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error404
