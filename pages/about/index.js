import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useContext } from 'react'
import {ThemeContext} from 'styled-components'

import Menu from '../../components/Menu/'
import AboutComponent from '../../components/About/'
import OwnerInfos from '../../components/OwnerInfos/'
const Histories = dynamic(() => import('../../components/Histories/'))
const Footer = dynamic(() => import('../../components/Footer/'))

import getCategories from '../../utils/getCategories'

import GlobalStyle from '../../styles/GlobalStyle'

const About = ({categories}) => {
	const {colors} = useContext(ThemeContext);

	return (
		<div className="container">
			<Head>
				<title>SMCodes - Sobre</title>
				<meta property="og:title" content="SMCodes - Sobre" key="title" />
				<meta name="twitter:title" content="SMCodes - Sobre" />
				<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta property="og:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="Description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="twitter:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/about" categories={categories} background={colors.background} />
			</div>

			<AboutComponent />
			<OwnerInfos />
			<Histories />
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

export default About;
