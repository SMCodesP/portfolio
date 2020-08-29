import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import ResumeListItems from '../../components/ResumeListItems'

import GlobalStyle from '../../styles/GlobalStyle'

import products from '../../utils/products'

import {
	Container,
	ImageLogo,
	Title,
	SubTitle
} from '../../styles/pages/plugins'

export default () => {
	const {colors} = useContext(ThemeContext);

	return (
		<div>
			<Head>
				<title>SMCodes - All</title>
				<meta property="og:title" content="SMCodes - All products" key="title" />
				<meta name="twitter:title" content="SMCodes - All products" />
				<meta name="description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta property="og:description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="Description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="twitter:description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/all" background={colors.background} />
			</div>


			<ResumeListItems />


			<Footer />

			<GlobalStyle />

		</div>
	)
}
