import Head from 'next/head'

import Navigation from '../components/Navigation/'
import Products from '../components/Products'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/GlobalStyle'

import {
	ContainerLicense,
	Description,
	Title,
} from '../styles/pages/index'

const Home = ({initialTheme}) => {
	const products = [
		{
			title: 'Minecraft plugins',
			link: '/plugins',
			items: [
				{
					title: 'DDL-Furnace',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
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
						large: '/splash.png',
						small: '/splash_min.png'
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
					title: 'DDL-Warps',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
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
					title: 'DDL-Warps',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
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
					title: 'DDL-Warps',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
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
						large: '/splash.png',
						small: '/splash_min.png'
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
						large: '/splash.png',
						small: '/splash_min.png'
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
		{
			title: 'Web',
			link: '/sites',
			items: [
				{
					title: 'DDL-Furnace',
					image: {
						large: '/splash.png',
						small: '/splash_min.png'
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
						large: '/splash.png',
						small: '/splash_min.png'
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
						large: '/splash.png',
						small: '/splash_min.png'
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
						large: '/splash.png',
						small: '/splash_min.png'
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
			<div className="container">
				<Head>
					<title>SMCodes - Início</title>
					<meta property="og:title" content="SMCodes - Início" key="title" />
					<meta name="twitter:title" content="SMCodes - Início" />
				</Head>

				<Navigation page="/" />
				<br />
				{products.map((product, index) => (
					<Products
						key={index}
						items={3}
						product={product}
						id="navigation"
						limit={true}
					/>
				))}
				<ContainerLicense>
					<Title>Sistema de licença</Title>
					<Description>
						Nosso sistema de licença apresenta com uma api focada em performance, todos os plugins de minecraft contém uma versão gratuita, porém caso compre a versão paga você adquiri 3 versões do mesmo plugin dedicado de acordo com sua hospedagem, você também recebe um licença dedicada para otimização do seu plugin, essa licença só pode ser usada em 1 servidor por vez.
					</Description>
				</ContainerLicense>
				<Footer />

				<GlobalStyle />
			</div>
	)
}

export default Home;

