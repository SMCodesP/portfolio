import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useContext } from 'react'

import {ThemeContext} from 'styled-components'

import Navigation from '../components/Navigation/'
const Products = dynamic(() => import('../components/Products'))
const Footer = dynamic(() => import('../components/Footer'))

import GlobalStyle from '../styles/GlobalStyle'

import {
	ContainerLicense,
	Description,
	Title,
} from '../styles/pages/index'

const Home = ({ categoriesOptimze }) => {
	const theme = useContext(ThemeContext)

	return (
			<div className="container">
				<Head>
					<title>SMCodes - Início</title>
					<meta property="og:title" content="SMCodes - Início" key="title" />
					<meta name="twitter:title" content="SMCodes - Início" />
					<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta property="og:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="Description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="twitter:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="theme-color" content={theme.colors.background} />
					<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.background} />
					<meta name="msapplication-navbutton-color" content={theme.colors.background} />
				</Head>

				<Navigation page="/" />

				<br />
				<div id="products" />
				{categoriesOptimze.map((category, index) => (
					<Products
						key={index}
						items={3}
						category={category}
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

Home.getInitialProps = async () => {
	const moment = (await import('moment')).default
	const categories = (await import('../utils/products')).default
	const newCategoryOfSetIsNewProduct = categories.map((category) => {
		return {
			...category,
			items: category.items.map((product) => {
				return {
					...product,
					isNew: moment.unix(moment().unix()).diff(moment.unix(product.timestamp), 'days') <= 7
				}
			})
		}
	})

	return {
		categoriesOptimze: newCategoryOfSetIsNewProduct
	}
}

export default Home;
