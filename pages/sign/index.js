import { useContext } from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'

import {
	Container
} from '../../styles/pages/sign'

import GlobalStyle from '../../styles/GlobalStyle'

const About = () => {
	const {colors} = useContext(ThemeContext);

	return (
		<div className="container">
			<Head>
				<title>SMCodes - Sign</title>
				<meta property="og:title" content="SMCodes - Sign" key="title" />
				<meta name="twitter:title" content="SMCodes - Sign" />
				<meta name="description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta property="og:description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="Description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="twitter:description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<Container />

			<GlobalStyle />

		</div>
	)
}

export default About;
