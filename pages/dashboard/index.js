import { useContext } from 'react'
import Head from 'next/head'

import { darken } from 'polished'
import { ThemeContext } from 'styled-components'

import GlobalStyle from '../../styles/GlobalStyle'
import {
	Container,
	ContainerShape,
	ContainerInformations,
	ContainerInfo,
} from '../../styles/pages/dashboard'

import MenuBarDashboard from '../../components/MenuBarDashboard'

const Dashboard = () => {
	const theme = useContext(ThemeContext)

	return (
		<div className="container">
			<Head>
				<title>SMCodes - Dashboard</title>
				<meta property="og:title" content="SMCodes - Dashboard" key="title" />
				<meta name="twitter:title" content="SMCodes - Dashboard" />
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
				<ContainerShape>
					<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
						<defs>
							<linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
							<stop offset="0%"   stop-color={darken(-0.005, theme.colors.secundaryBackground)} />
							<stop offset="100%" stop-color={darken(0.04, theme.colors.background)} />
							</linearGradient>
						</defs>
						<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill: 'url(#gradient)'}}></path>
					</svg>
				</ContainerShape>
				<MenuBarDashboard />
				<ContainerInformations>
					<ContainerInfo>

					</ContainerInfo>
				</ContainerInformations>
			</Container>

			<GlobalStyle />

		</div>
	)
}

export default Dashboard
