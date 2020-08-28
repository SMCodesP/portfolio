import {useContext} from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'

import Products from '../../components/Products'
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

			<Container>
				<ProgressiveImage
					src="/construct.webp"
					placeholder="/construct_min.webp"
				>
					{(src, loading) => (
						<ImageLogo
							loading={loading}
							src={src}
							alt="Construction picture image logo"
						/>
					)}
				</ProgressiveImage>
				<Title>SMPlugins</Title>
				<SubTitle>Plugins otimizados para seu servidor.</SubTitle>
			</Container>

			{[products.find((category) => category.name === "plugin")].map((category, index) => (
				<Products
					key={index}
					items={3}
					category={category}
					id="navigation"
					limit={false}
				/>
			))}
			<Footer />

			<GlobalStyle />

		</div>
	)
}
