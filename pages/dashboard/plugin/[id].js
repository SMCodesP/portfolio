import Head from 'next/head'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Loader from 'react-loader-spinner'
import { getLuminance } from 'polished'

import { FiDownloadCloud } from 'react-icons/fi'
import { FaUsers, FaDownload, FaClipboardList } from 'react-icons/fa'
import { AiFillCopy } from 'react-icons/ai'
import { RiFolderDownloadFill } from 'react-icons/ri'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'
import { BiRefresh } from 'react-icons/bi'

import {getColor} from 'get-color-sm'

import GlobalStyle from '../../../styles/GlobalStyle'

import {
	Container,
	ContainerInformations,
} from '../../../styles/pages/dashboard'

import {
	ContainerDetails,
	Detail,
	Icons,
	Icon,
	ContainerManagment,
} from '../../../styles/pages/dashboard/plugin'

import MenuBarDashboard from '../../../components/MenuBarDashboard'
import products from '../../../utils/products'
import ImageLoading from '../../../components/ImageLoading'

function Plugin({readme, product, ...params}) {
	const theme = useContext(ThemeContext)

	return (

		<div className="container">
			<Head>
				<title>Dashboard - {product.title}</title>
				<meta property="og:title" content={`Dashboard - Plugin | ${product.title}`} key="title" />
				<meta name="twitter:title" content={`Dashboard - Plugin | ${product.title}`} />
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
					<div style={{
						display: 'flex',
						alignItems: 'center',
					}}>
						<ImageLoading image={product.image} defaultSize={56} />
						<h1 style={{
							marginLeft: 10
						}}>{product.title}</h1>
					</div>

					<ContainerDetails>
						<Detail color={getColor()}>
							<span title="Baixar plugin em .jar">
								<FiDownloadCloud
									size={46}
									color={theme.colors.fourthText}
								/>
							</span>
							<span title="Baixar todas as dependências">
								<RiFolderDownloadFill
									size={46}
									color={theme.colors.fifthText}
								/>
							</span>
							<span title="Baixar arquivo de configuração padrão">
								<BsFileEarmarkArrowDown
									size={46}
									color={theme.colors.darkTwo}
								/>
							</span>
							<span title="Clique para copiar token do plugin">
								<AiFillCopy
									size={46}
									color={theme.colors.secundaryText}
								/>
							</span>
							<span title="Gerar um novo token, caso clique o token anterior será desabilitado">
								<BiRefresh
									size={46}
									color={theme.colors.fourthText}
								/>
							</span>
						</Detail>
						<Detail color={getColor()} style={{
							justifyContent: 'space-between'
						}}>
							{(() => {
								let color = getColor()

								return (
									<div style={{
										display: 'flex',
										color: `#${color}`
									}}>
										<span title="Utilizadores">
											<FaUsers
												size={46}
												color={color}
											/>
										</span>
										<h4 style={{
											marginLeft: 10,
											alignSelf: 'center',
											color: `#${color}`
										}}>1 / 10</h4>
									</div>
								)
							})()}
							{(() => {
								let color = getColor()

								return (
									<div style={{
										display: 'flex',
										color: `#${color}`
									}}>
										<span title="Baixados">
											<FaDownload
												size={46}
												color={color}
											/>
										</span>
										<h4 style={{
											marginLeft: 10,
											alignSelf: 'center',
											color: `#${color}`
										}}>46</h4>
									</div>
								)
							})()}
						</Detail>
						{(() => {
							let color = getColor()

							return (
								<Detail color={color}>
									<span title="Logs de registro">
										<FaClipboardList
											size={46}
											color={color}
										/>
										<h4 style={{
											marginLeft: 10,
											alignSelf: 'center',
											color: `#${color}`
										}}>854</h4>
									</span>
								</Detail>
							)
						})()}
					</ContainerDetails>

					<h1>Informações</h1>
					<ContainerManagment>
						<Loader
							type="Rings"
							color={theme.colors.fifthText}
							secondaryColor="#00BFFF"
							height={160}
							width={160}
						/>
						<h3>Carregando...</h3>
					</ContainerManagment>
				</ContainerInformations>
			</Container>

			<GlobalStyle />
		</div>

	)

}

export async function getStaticProps({params}) {
	const product = products.find((category) => category.name === "plugin").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[Number(params.id)]

	const res = await fetch(product.text)
	const readme = await res.text()

	return {
		props: {
			readme,
			product,
			quantity: products.find((category) => category.name === "plugin").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).length,
			id: Number(params.id)
		}
	}
}

export async function getStaticPaths() {
	const paths = products.find((category) => category.name === "plugin").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((product, index) => {
		return {
			params: {
				id: index.toString()
			},
		}
	})

	return {
		paths: paths,
		fallback: false,
	}
}

export default Plugin
