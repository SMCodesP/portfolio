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
	ImageLogo,
	Title,
	SubTitle
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
						large: '/furnace.png',
						small: '/furnace_min.png'
					},
					descriptionList: [
						'**Minecraft version »** 1.8.x',
						'**API »** Bukkit Spigot',
						'**Funcionalidade »** Esquentar minérios',
						'**Inovação »** Construir fornalhas com dificuldade',
						'**Criador »** SMCodes',
						'**A pedido de »** Ninguém'
					],
					price: 4.99
				},
				{
					title: 'DDL-Warps',
					image: {
						large: '/barrier.png',
						small: '/barrier_min.png'
					},
					descriptionList: [
						'**Minecraft version »** 1.8.x',
						'**API »** Bukkit Spigot',
						'**Funcionalidade »** Gerenciamento de warps',
						'**Inovação »** Sistema em GUI automatizado',
						'**Criador »** SMCodes',
						'**A pedido de »** Ninguém'
					],
					price: 4.99
				},
				{
					title: 'DDL-Economy',
					image: {
						large: '/gold.png',
						small: '/gold_min.png'
					},
					descriptionList: [
						'**Minecraft version »** 1.8.x',
						'**API »** Bukkit Spigot',
						'**Funcionalidade »** Sistema de economia',
						'**Inovação »** Uma api inovadora e com gerenciamento web',
						'**Criador »** SMCodes',
						'**A pedido de »** Ninguém'
					],
					price: 4.99
				},
				{
					title: 'DDL-Tags',
					image: {
						large: '/name_tag.png',
						small: '/name_tag_min.png'
					},
					descriptionList: [
						'**Minecraft version »** 1.8.x',
						'**API »** Bukkit Spigot',
						'**Funcionalidade »** Sistema de tags',
						'**Inovação »** Uma api robusta e um gerenciamento web',
						'**Criador »** SMCodes',
						'**A pedido de »** Ninguém'
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
				<Menu page="/plugins" background={colors.secundaryBackground} color={colors.text} />
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
