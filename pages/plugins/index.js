import {useContext} from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'

import {ThemesProvider} from '../../contexts/themes'

import Products from '../../components/Products'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu/'

import GlobalStyle from '../../styles/GlobalStyle'

import {
	Container,
	ImageLogo
} from '../../styles/pages/plugins'

function Sites() {
	const {colors} = useContext(ThemeContext);

	const products = [
		{
			title: 'Minecraft plugins',
			items: [
				{
					title: 'DDL-Furnace',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
					},
					descriptionList: [
						'Minecraft version » 1.8.x',
						'API » Bukkit Spigot',
						'Funcionalidade » Esquentar minérios',
						'Inovação » Construir fornalhas com dificuldade',
						'Criador » SMCodes',
						'A pedido de » Ninguém'
					],
					price: 4.99
				},
				{
					title: 'DDL-Warps',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
					},
					descriptionList: [
						'Minecraft version » 1.8.x',
						'API » Bukkit Spigot',
						'Funcionalidade » Gerenciamento de warps',
						'Inovação » Sistema em GUI automatizado',
						'Criador » SMCodes',
						'A pedido de » Ninguém'
					],
					price: 4.99
				},
				{
					title: 'DDL-Economy',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
					},
					descriptionList: [
						'Minecraft version » 1.8.x',
						'API » Bukkit Spigot',
						'Funcionalidade » Sistema de economia',
						'Inovação » Uma api inovadora e com gerenciamento web',
						'Criador » SMCodes',
						'A pedido de » Ninguém'
					],
					price: 4.99
				},
				{
					title: 'DDL-Tags',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
					},
					descriptionList: [
						'Minecraft version » 1.8.x',
						'API » Bukkit Spigot',
						'Funcionalidade » Sistema de tags',
						'Inovação » Uma api robusta e um gerenciamento web',
						'Criador » SMCodes',
						'A pedido de » Ninguém'
					],
					price: 4.99
				}
			]
		},
	]

	return (
		<div>
			<Head>
				<title>SMCodes - Plugins</title>
				<meta property="og:title" content="SMCodes - Plugins" key="title" />
				<meta name="twitter:title" content="SMCodes - Plugins" />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/sites" background={colors.secundaryBackground} color={colors.text} />
			</div>

			<Container>
				<ProgressiveImage
					src='/splash.png'
					placeholder='/splash_min.png'
				>
					{(src, loading) => (
						<ImageLogo
							src={src}
							loading={loading}
							alt='Purchase minecraft plugin logo image'
						/>
					)}
				</ProgressiveImage>
			</Container>

			{products.map((product, index) => (
				<Products
					key={index}
					items={3}
					product={product}
					id="navigation"
					limit={false}
				/>
			))}
			<Footer />

			<GlobalStyle />

		</div>
	)
}

export default () => {
	return (
		<ThemesProvider>
			<Sites />
		</ThemesProvider>
	)
}
