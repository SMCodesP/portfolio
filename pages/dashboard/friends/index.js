import { useContext } from 'react'
import Head from 'next/head'

import { ThemeContext } from 'styled-components'

import GlobalStyle from '../../../styles/GlobalStyle'
import {
	Container,
	ContainerInformations,
} from '../../../styles/pages/dashboard'
import {
	ListFriends,
} from '../../../styles/pages/friends'

import MenuBarDashboard from '../../../components/MenuBarDashboard'
import Friend from '../../../components/Friend'

const Friends = () => {
	const theme = useContext(ThemeContext)

	return (
		<div className="container">
			<Head>
				<title>Dashboard - Friends</title>
				<meta property="og:title" content="Dashboard - Friends" key="title" />
				<meta name="twitter:title" content="Dashboard - Friends" />
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
				<MenuBarDashboard />
				<ContainerInformations>
					<h1>Seus amigos</h1>
					<ListFriends>
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
						<Friend />
					</ListFriends>
				</ContainerInformations>
			</Container>

			<GlobalStyle />

		</div>
	)
}

export default Friends
