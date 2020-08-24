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
		font-family: 'Roboto', sans-serif !important;
	}
`

function Error404({ statusCode }) {
	return (
		<>
			<Container>
				<TextError data-text={`Error ${statusCode}`}>Error {statusCode}</TextError>
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

Error404.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error404
