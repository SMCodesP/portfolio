import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { ThemeContext } from 'styled-components'

import GlobalStyle from '../../../styles/GlobalStyle'
import {
	Container,
	ContainerInformations,
} from '../../../styles/pages/dashboard'
import {
	ListPlugins,
	ContainerInput,
	SearchBar,
} from '../../../styles/pages/dashboard/plugins'
import {
	ContainerLicense,
	Description,
	Title,
} from '../../../styles/pages/index'

import MenuBarDashboard from '../../../components/MenuBarDashboard'
import Plugin from '../../../components/Plugin'
import products from '../../../utils/products'

const Plugins = () => {
	const [search, setSearch] = useState('')
	const theme = useContext(ThemeContext)

	return (
		<div className="container">
			<Head>
				<title>Dashboard - Plugins</title>
				<meta property="og:title" content="Dashboard - Plugins" key="title" />
				<meta name="twitter:title" content="Dashboard - Plugins" />
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
					<ContainerLicense
						style={{
							marginTop: 0,
							marginBottom: '10px'
						}}
					>
						<Title>Alerta</Title>
						<Description>Essa área é exclusiva para clientes que tem plugins de minecraft comprados, nessa área é possível visualizar e gerenciar informações como configuração de mensagens, uso de dados, armazenamento e trafego de dados</Description>
					</ContainerLicense>
					<h1>Seus plugins</h1>

					<ContainerInput>
						<SearchBar
							type="text"
							placeholder="Pesquise um de seus plugin"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</ContainerInput>

					<ListPlugins>
						{products[2].items.filter((product) => {
								const product_title = product.title.toLowerCase()

								return product_title.includes(search.toLowerCase())
							})
							.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
							.map((product, index) => (
								<Link href={`/dashboard/plugin/[id]`} as={`/dashboard/plugin/${index}`}>
									<a>
										<Plugin
											key={index.toString()}
											plugin={product}
										/>
									</a>
								</Link>
						))}
					</ListPlugins>
				</ContainerInformations>
			</Container>

			<GlobalStyle />

		</div>
	)
}

export default Plugins
