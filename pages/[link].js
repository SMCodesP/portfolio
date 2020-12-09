import {useContext} from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'

import Products from '../components/Products'
import Footer from '../components/Footer'
import Menu from '../components/Menu/'

import GlobalStyle from '../styles/GlobalStyle'
import getCategories from '../utils/getCategories'

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
				<meta name="description" content={category.description} />
				<meta property="og:description" content={category.description} />
				<meta name="description" content={category.description} />
				<meta name="Description" content={category.description} />
				<meta name="twitter:description" content={category.description} />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/plugins" categories={categories} background={colors.background} />
			</div>

			<Container>
					<ImageLogo
						src={category.banner_url}
						loading={false}
						alt="Construction picture image logo"
					/>
				<Title>{category.title}</Title>
				<SubTitle>{category.description}</SubTitle>
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

	return {
		props: {
			categories,
			category: categories.find((category) => category.link === `/${params.link}`),
		},
		revalidate: 120,
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

	return {
		paths: data,
		fallback: false,
	}
}

export default Plugins
