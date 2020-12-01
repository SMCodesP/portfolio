import Head from 'next/head'
import dynamic from 'next/dynamic'

import {useContext} from 'react'
import {ThemeContext} from 'styled-components'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import ResumeListItems from '../../components/ResumeListItems'

import getCategories from '../../utils/getCategories'
import GlobalStyle from '../../styles/GlobalStyle'

function All({categories}) {
	const {colors} = useContext(ThemeContext);

	return (
		<div>
			<Head>
				<title>SMCodes - All</title>
				<meta property="og:title" content="SMCodes - All products" key="title" />
				<meta name="twitter:title" content="SMCodes - All products" />
				<meta name="description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta property="og:description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="Description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="twitter:description" content="SMCodes - Nessa página você irá encontrar todos meus trabalhos idependentes do estilo ou intuito." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/all" categories={categories} background={colors.background} />
			</div>

			<ResumeListItems
				products={[].concat(...categories.map((category) => category.products.map((product) => {
					return {
						...product,
						category
					}
				})))}
			/>

			<Footer />

			<GlobalStyle />

		</div>
	)
}

export async function getStaticProps() {
	const {categories} = await getCategories()

	return {
		props: {
			categories,
		},
		revalidate: 120,
	}
}

export default All