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
				<title>SMCodes - Sites</title>
				<meta property="og:title" content="SMCodes - Sites" key="title" />
				<meta name="twitter:title" content="SMCodes - Sites" />
				<meta name="description" content="Venha encomendar e fazer suas contribuições em sites web." />
				<meta property="og:description" content="Venha encomendar e fazer suas contribuições em sites web." />
				<meta name="description" content="Venha encomendar e fazer suas contribuições em sites web." />
				<meta name="Description" content="Venha encomendar e fazer suas contribuições em sites web." />
				<meta name="twitter:description" content="Venha encomendar e fazer suas contribuições em sites web." />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/sites" background={colors.background} />
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
				<Title>Sites</Title>
				<SubTitle>Sites otimizados e seguros de acordo com a usabilidade de seus clientes.</SubTitle>
			</Container>

			{[products[1]].map((category, index) => (
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
