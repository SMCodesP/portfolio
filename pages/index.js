import { useRef } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { shade } from 'polished'

import {ThemesProvider} from '../contexts/themes'

import Navigation from '../components/Navigation/'
import Products from '../components/Products'
import Footer from '../components/Footer'

import {parseCookies} from '../utils/parseCookies'

import GlobalStyle from '../styles/GlobalStyle'
import light from '../styles/themes/light'

export const ContainerLicense = styled.div`
	display: flex;
	flex-direction: column;
	margin: 25px 2% 100px 2%;
	border-radius: 10px;
	background-color: ${({theme}) => theme.colors.secundaryBackground};
	background-image: linear-gradient(-135deg, ${({theme}) => theme.colors.primary}, ${({theme}) => shade(0.2, theme.colors.primary)});
	color: ${({theme}) => shade(0.7, theme.colors.tertiary)};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	padding: 25px;
`;

export const Title = styled.p`
	font-size: 22px;
	font-weight: 600;
`

export const Description = styled.p`
	padding: 15px;
`

const Home = ({initialTheme = JSON.stringify(light) }) => {

	return (
		<ThemesProvider initialTheme={JSON.parse(initialTheme)}>
			<div className="container">
				<Head>
					<title>SMCodes - Início</title>
					<meta property="og:title" content="SMCodes - Início" key="title" />
					<meta name="twitter:title" content="SMCodes - Início" />
				</Head>

				<Navigation page="/" />
				<Products items={3} id="navigation" />
				<ContainerLicense>
					<Title>Sistema de licença</Title>
					<Description>
						Nosso sistema de licença apresenta com uma api focada em performance, todos os plugins de minecraft contém uma versão gratuita, porém caso compre a versão paga você adquiri 3 versões do mesmo plugin dedicado de acordo com sua hospedagem, você também recebe um licença dedicada para otimização do seu plugin, essa licença só pode ser usada em 1 servidor por vez.
					</Description>
				</ContainerLicense>
				<Footer />

				<GlobalStyle />
			</div>
		</ThemesProvider>
	)
}

Home.getInitialProps = ({ req }) => {
	const cookies = parseCookies(req);

	return {
		initialTheme: cookies.theme
	};
}

export default Home;
