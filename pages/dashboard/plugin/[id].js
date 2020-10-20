import Head from 'next/head'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import GlobalStyle from '../../../styles/GlobalStyle'

import {
	Container,
	ContainerInformations,
} from '../../../styles/pages/dashboard'
import MenuBarDashboard from '../../../components/MenuBarDashboard'
import products from '../../../utils/products'
import ImageLoading from './ImageLoading'

function Plugin({readme, product, ...params}) {
	const theme = useContext(ThemeContext)

	console.log(product)

	return (

		<div className="container">
			<Head>
				<title>Dashboard - Plugin</title>
				<meta property="og:title" content={`Dashboard - Plugin | ${product.title}`} key="title" />
				<meta name="twitter:title" content={`Dashboard - Plugin | ${product.title}`} />
				<meta name="description" content="Área restrita para membros que tenha uma conta em nosso sistema." />
				<meta property="og:description" content="Área restrita para membros que tenha uma conta em nosso sistema." />
				<meta name="description" content="Área restrita para membros que tenha uma conta em nosso sistema." />
				<meta name="Description" content="Área restrita para membros que tenha uma conta em nosso sistema." />
				<meta name="twitter:description" content="Área restrita para membros que tenha uma conta em nosso sistema." />
				<meta name="theme-color" content={theme.colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.background} />
				<meta name="msapplication-navbutton-color" content={theme.colors.background} />
			</Head>

			<Container>
				<MenuBarDashboard location="plugins" />

				<ContainerInformations>
					<div style={{
						display: 'flex',
						alignItems: 'center',
					}}>
						<ImageLoading image={product.image} defaultSize={56} />
						<h1 style={{
							marginLeft: 10
						}}>{product.title}</h1>
					</div>
				</ContainerInformations>
			</Container>

			<GlobalStyle />
		</div>

	)

}

export async function getStaticProps({params}) {
	const product = products.find((category) => category.name === "plugin").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[Number(params.id)]

	const res = await fetch(product.text)
	const readme = await res.text()

	return {
		props: {
			readme,
			product,
			quantity: products.find((category) => category.name === "plugin").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).length,
			id: Number(params.id)
		}
	}
}

export async function getStaticPaths() {
	const paths = products.find((category) => category.name === "plugin").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((product, index) => {
		return {
			params: {
				id: index.toString()
			},
		}
	})

	return {
		paths: paths,
		fallback: false,
	}
}

export default Plugin
