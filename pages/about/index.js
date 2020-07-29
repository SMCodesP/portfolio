import { useContext } from 'react'
import Head from 'next/head'
import { ThemeContext } from 'styled-components'

import {ThemesProvider} from '../../contexts/themes'

import Menu from '../../components/Menu/'
import AboutComponent from '../../components/About/'
import OwnerInfos from '../../components/OwnerInfos/'
import Histories from '../../components/Histories/'
import Footer from '../../components/Footer/'

import GlobalStyle from '../../styles/GlobalStyle'
import light from '../../styles/themes/light'

import {parseCookies} from '../../utils/parseCookies'

function RenderInThemes() {
	const { colors } = useContext(ThemeContext);

	return (
		<div className="container">
			<Head>
				<title>SMCodes - Sobre</title>
				<meta property="og:title" content="SMCodes - Sobre" key="title" />
				<meta name="twitter:title" content="SMCodes - Sobre" />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/about" background={colors.secundaryBackground} color={colors.text} />
			</div>

			<AboutComponent />
			<OwnerInfos />
			<Histories />
			<Footer />

			<GlobalStyle />

		</div>
	)
}

const About = () => {
	return (
		<ThemesProvider>
			<RenderInThemes />
		</ThemesProvider>
	)
}

export default About;
