import Error from 'next/error';
import Link from 'next/link'
import {createGlobalStyle} from 'styled-components'
import ContainerParticles from '../components/ContainerParticles/'

import GlobalStyle from '../styles/GlobalStyle'
import {
	Container,
	TextError,
	BackToHome,
} from '../styles/pages/404'

const CustomStyles = createGlobalStyle`
	body, html {
		overflow: hidden;
	}
`

export default function Error404() {
	return (
		<>
			<Container>
				<TextError data-text="Error 404">Error 404</TextError>
				<h1>Página não encontrada</h1>
				<Link href="/"><a style={{
					margin: '25px 0',
				}}><BackToHome>Go to home</BackToHome></a></Link>
			</Container>
			<ContainerParticles />

      <Error statusCode={404} title="Página não encontrada!"></Error>
			<CustomStyles />
			<GlobalStyle />
		</>
	)
}
