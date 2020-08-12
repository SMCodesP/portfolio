import { useContext } from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'

import Menu from '../../components/Menu/'
import AboutComponent from '../../components/About/'
import OwnerInfos from '../../components/OwnerInfos/'
import Histories from '../../components/Histories/'
import Footer from '../../components/Footer/'

import GlobalStyle from '../../styles/GlobalStyle'

const About = () => {
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
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/about" background={colors.background} />
			</div>

			<AboutComponent />
			<OwnerInfos />
			<Histories />
			<Footer />

			<GlobalStyle />

		</div>
	)
}

export default About;
