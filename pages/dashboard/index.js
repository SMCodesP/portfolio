import { useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends, FaGlobeAmericas } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { CgLogOut } from 'react-icons/cg';
import { MdSettings } from 'react-icons/md';
import { ThemeContext } from 'styled-components'

import GlobalStyle from '../../styles/GlobalStyle'
import {
	Container,
	MenuBar,
	ListPages,
	Page,
} from '../../styles/pages/dashboard'

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
				<MenuBar>
					<GiHamburgerMenu
						size={32}
						color={theme.colors.text}
						style={{
							margin: 12,
							cursor: 'pointer'
						}}
					/>
					<ListPages>
						<Page>
							<AiFillHome
								size={28}
								color={theme.colors.text}
							/>
						</Page>
						<Page>
							<FaUserFriends
								size={28}
								color={theme.colors.text}
							/>
						</Page>
						<Page>
							<VscDebugDisconnect
								size={28}
								color={theme.colors.text}
							/>
						</Page>
						<Page>
							<FaGlobeAmericas
								size={28}
								color={theme.colors.text}
							/>
						</Page>
						<Page>
							<MdSettings
								size={28}
								color={theme.colors.text}
							/>
						</Page>
					</ListPages>
					<Page>
						<CgLogOut
							size={32}
							color="#e02041"
							styled={{
								marginBottom: 25
							}}
						/>
					</Page>
				</MenuBar>
			</Container>

			<GlobalStyle />

		</div>
	)
}

export default Dashboard
