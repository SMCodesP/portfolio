import { useContext, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {ThemeContext} from 'styled-components'
import { RiMapPinUserLine, RiLockPasswordLine } from 'react-icons/ri'
import { FaHome } from 'react-icons/fa'
import ReCAPTCHA from "react-google-recaptcha"

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
	ButtonSubmit,
	NotHaveAccount,
} from '../../styles/pages/signin'

import GlobalStyle from '../../styles/GlobalStyle'

const About = () => {
	const theme = useContext(ThemeContext)
	const recaptchaRef = useRef()

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
							<LabelInput>Informe seu username</LabelInput>
							<InputContainer>
								<RiMapPinUserLine style={{marginLeft: "0.5rem", position: "absolute"}} color={theme.colors.text} size="1.5em" />
								<InputForm name="username" type="text" placeholder="Digite o username de sua conta" />
							</InputContainer>
							<LabelInput>Informe sua senha</LabelInput>
							<InputContainer>
								<RiLockPasswordLine style={{marginLeft: "0.5rem", position: "absolute"}} color={theme.colors.text} size="1.5em" />
								<InputForm name="password" type="password" placeholder="Digite a senha de sua conta" />
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
								 ref={recaptchaRef}
								theme={theme.title.toLowerCase()}
								sitekey="6LeeksgZAAAAAMl-CX7LZSZ_wDopPC2zQDKRtefa"
							/>
							<ButtonSubmit>Entrar</ButtonSubmit>
							<Link href="signup">
								<NotHaveAccount href="/signup">Não tem uma conta?</NotHaveAccount>
							</Link>
						</Form>
					</ContainerBody>
				</ContainerLogin>
			</Container>

			<GlobalStyle />

		</div>
	)
}

export default About
