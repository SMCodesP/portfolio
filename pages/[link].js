import {useContext} from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'

import Products from '../components/Products'
import Footer from '../components/Footer'
import Menu from '../components/Menu/'

import GlobalStyle from '../styles/GlobalStyle'

import products from '../utils/products'
import getCategories from '../utils/getCategories'
import getCategorie from '../utils/getCategorie'

import {
	Container,
	ImageLogo,
	Title,
	SubTitle
} from '../styles/pages/plugins'

function Plugins({ categories, category }) {
	const {colors} = useContext(ThemeContext);

	return (
		<div>
			<Head>
				<title>{`SMCodes - ${category.title}`}</title>
				<meta property="og:title" content={`SMCodes - ${category.title}`} key="title" />
				<meta name="twitter:title" content={`SMCodes - ${category.title}`} />
				<meta name="description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta property="og:description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="Description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="twitter:description" content="Venha comprar meus plugins, contamos com alto desempenho, sistemas inovadores, suporte rápido e api fácil para novas integrações." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/plugins" categories={categories} background={colors.background} />
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
				<Title>{category.title}</Title>
				<SubTitle>Plugins otimizados para seu servidor.</SubTitle>
			</Container>

			<Products
				items={3}
				category={category}
				id="navigation"
				limit={false}
			/>

			<Footer />

			<GlobalStyle />

		</div>
	)
}

export async function getStaticProps({params}) {
	const {categories} = await getCategories()

	console.log(categories)

	return {
		props: {
			categories,
			category: categories.find((category) => category.link === `/${params.link}`),
		}
	}
}

export async function getStaticPaths() {
	let data = await getCategories()

	data = data.categories.map((category, index) => {
		return {
			params: {
				link: category.link.substring(1),
			},
		}
	})

	console.log(data)

	return {
		paths: data,
		fallback: false,
	}
}

export default Plugins
