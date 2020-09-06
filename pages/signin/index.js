import { useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {ThemeContext} from 'styled-components'
import { RiMapPinUserLine, RiLockPasswordLine } from 'react-icons/ri'
import { FaHome } from 'react-icons/fa'
import ReCAPTCHA from "react-google-recaptcha";

import {
	Container,
	ContainerHeaderLogo,
	ContainerLogin,
	ContainerHeader,
	Title,
	ContainerBody,
	Form,
	LabelInput,
	InputContainer,
	InputForm,
	ForgotPassword,
} from '../../styles/pages/signin'

import GlobalStyle from '../../styles/GlobalStyle'

const About = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className="container">
			<Head>
				<title>SMCodes - SignIn</title>
				<meta property="og:title" content="SMCodes - SignIn" key="title" />
				<meta name="twitter:title" content="SMCodes - SignIn" />
				<meta name="description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta property="og:description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="Description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="twitter:description" content="Acesse sua conta, aqui você pode obter todas as informações disponíveis para o uso dos seus produtos adquiridos." />
				<meta name="theme-color" content={theme.colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.background} />
				<meta name="msapplication-navbutton-color" content={theme.colors.background} />
			</Head>

			<Container>
				<Link href="/">
					<a>
						<ContainerHeaderLogo>
							<FaHome size="52px" color={theme.colors.secundaryBackground} />
						</ContainerHeaderLogo>
					</a>
				</Link>
				<ContainerLogin>
					<ContainerHeader>
						<Title>Acesse sua conta</Title>
					</ContainerHeader>
					<ContainerBody>
						<Form>
							<LabelInput>Informe seu usuário</LabelInput>
							<InputContainer>
								<RiMapPinUserLine style={{marginLeft: "0.5rem", position: "absolute"}} color={theme.colors.background} size="1.5em" />
								<InputForm placeholder="Digite o username de sua conta" />
							</InputContainer>
							<LabelInput>Informe sua senha</LabelInput>
							<InputContainer>
								<RiLockPasswordLine style={{marginLeft: "0.5rem", position: "absolute"}} color={theme.colors.background} size="1.5em" />
								<InputForm placeholder="Digite a senha de sua conta" />
							</InputContainer>
							<Link href="/forgot">
								<ForgotPassword href="/forgot">Esqueceu sua senha?</ForgotPassword>
							</Link>
							<ReCAPTCHA
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '15px'
								 }}
								theme={theme.title.toLowerCase()}
								sitekey="6LeSj8gZAAAAAMhcGwNQOwkGaYJd7wElVYW0Zbeb"
							/>
						</Form>
					</ContainerBody>
				</ContainerLogin>
			</Container>


			<GlobalStyle />

		</div>
	)
}

export default About;
