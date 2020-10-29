import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'

import { darken } from 'polished'
import { ThemeContext } from 'styled-components'

import GlobalStyle from '../../styles/GlobalStyle'
import {
	Container,
	ContainerShape,
	ContainerInformations,
	ContainerInfos,
	ContainerInfo,
	ImageLogo,
	ContainerInformationList,
	InformationList,
	InformationItem,
	ItemKey,
	ItemValue,
	ContainerAlert,
	AlertTitle,
	AlertDescription,
	ContainerError,
	ErrorTitle,
	ErrorDescription,
} from '../../styles/pages/dashboard'

import MenuBarDashboard from '../../components/MenuBarDashboard'
import api from '../../utils/api'

const Dashboard = () => {
	const theme = useContext(ThemeContext)
	const [username, setUsername] = useState('')
	const [localUsername, setLocalUsername] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		const storageLocalUsername = localStorage.getItem('discord_username')

		if (storageLocalUsername) {
			setLocalUsername(storageLocalUsername)
		}
	}, [])

	async function handleUsername(event) {
		event.preventDefault()

		try {
			await api.put('/user/discord', {
				username,
			})
			
			localStorage.setItem('discord_username', username)
			setLocalUsername(username)
		} catch (error) {
			console.log(error)
			console.log(error.response)
			setError(`${error.response.status} - ${error.response.statusText}`)
		}
	}

	return (
		<div className="container">
			<Head>
				<title>Dashboard - Início</title>
				<meta property="og:title" content="Dashboard - Início" key="title" />
				<meta name="twitter:title" content="Dashboard - Início" />
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
				{localUsername && (
					<ContainerShape>
						<svg viewBox="0 0 500 150" preserveAspectRatio="xMinYMin meet">
							<defs>
								<linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
								<stop offset="0%"   stop-color={darken(-0.005, theme.colors.secundaryBackground)} />
								<stop offset="100%" stop-color={darken(0.04, theme.colors.background)} />
								</linearGradient>
							</defs>
							<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill: 'url(#gradient)'}}></path>
						</svg>
					</ContainerShape>
				)}
				
				<MenuBarDashboard location="dashboard" />
				<ContainerInformations>
					{error && (
						<ContainerError>
							<ErrorTitle>
								Houve um erro
							</ErrorTitle>
							<ErrorDescription>
								{error}
							</ErrorDescription>
				    </ContainerError>
					)}
					{!localUsername && (
						<ContainerAlert>
							<AlertTitle>
								Sincronização com discord
							</AlertTitle>
							<AlertDescription>
								Sua conta ainda não está ativada com nenhuma conta do discord, pedimos que sincronize sua conta do discord com nossso sistema para gerenciar suas vantagens como comprador.
							</AlertDescription>
							<form onSubmit={handleUsername}>
								<input type="text" placeholder="Usuário do discord. Ex: SMCodes#4207" value={username} onChange={(e) => {
										if (error) {
											setError('')
										}
										setUsername(e.target.value)
									}} />
								<button>Sincronizar agora</button>
							</form>
				    </ContainerAlert>
					)}
					<h1>Informações</h1>
					<ContainerInfos>
						<ContainerInfo>
							<ImageLogo src="/favicon.jpg" />
							<h1>Suas compras</h1>

							<ContainerInformationList>
								<InformationList>
									<InformationItem>
										<ItemKey>Quantidade de compras feitas » </ItemKey>
										<ItemValue>17</ItemValue>
									</InformationItem>
									<InformationItem>
										<ItemKey>Plugins de minecraft » </ItemKey>
										<ItemValue>8</ItemValue>
									</InformationItem>
									<InformationItem>
										<ItemKey>Sites » </ItemKey>
										<ItemValue>4</ItemValue>
									</InformationItem>
									<InformationItem>
										<ItemKey>Aplicativo mobile » </ItemKey>
										<ItemValue>3</ItemValue>
									</InformationItem>
									<InformationItem>
										<ItemKey>Bot discord » </ItemKey>
										<ItemValue>2</ItemValue>
									</InformationItem>
								</InformationList>
							</ContainerInformationList>
						</ContainerInfo>
					</ContainerInfos>
					<h1 style={{
						marginTop: 25
					}}>Histórico</h1>
					<h2 style={{
						margin: '0 15px',
            textIndent: '0.75em'
					}}>Sem nenhuma alteração feita até o momento.</h2>
				</ContainerInformations>
			</Container>

			<GlobalStyle />

		</div>
	)
}

export default Dashboard
