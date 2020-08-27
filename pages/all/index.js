import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu/'

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
				<title>SMCodes - Plugins</title>
				<meta property="og:title" content="SMCodes - Plugins" key="title" />
				<meta name="twitter:title" content="SMCodes - Plugins" />
				<meta name="description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta property="og:description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="Description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="twitter:description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/plugins" background={colors.background} />
			</div>





			<Footer />

			<GlobalStyle />

		</div>
	)
}
