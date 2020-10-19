import Head from 'next/head'
import Error from 'next/error';
import Link from 'next/link'

import ContainerParticles from '../components/ContainerParticles/'

import {
	Container,
	TextError,
	BackToHome,
} from '../styles/pages/404'

export default function Error404() {
	return (
		<>
			<Head>
				{/* <meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} /> */}
			</Head>
			
			<Container>
				<TextError data-text="Error 404">Error 404</TextError>
				<h1>Página não encontrada</h1>
				<Link href="/"><a style={{
					margin: '25px 0',
				}}><BackToHome>Go to home</BackToHome></a></Link>
			</Container>
			<ContainerParticles />

      		<Error statusCode={404} title="Página não encontrada!"></Error>
		</>
	)
}
