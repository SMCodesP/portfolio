import Head from 'next/head'
import dynamic from 'next/dynamic'

import {useContext} from 'react'
import {ThemeContext} from 'styled-components'

const Footer = dynamic(() => import('../../components/Footer'))
const Menu = dynamic(() => import('../../components/Menu'))
const ResumeListItems = dynamic(() => import('../../components/ResumeListItems'))

import getCategories from '../../utils/getCategories'
import GlobalStyle from '../../styles/GlobalStyle'

function All({categories}) {
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
				<Menu page="/all" categories={categories} background={colors.background} />
			</div>

			<ResumeListItems />

			<Footer />

			<GlobalStyle />

		</div>
	)
}

All.getInitialProps = getCategories

export default All