import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useContext, useRef, useEffect, useState } from 'react'

import {ThemeContext} from 'styled-components'
import {useAuth} from '../../contexts/auth'

import { RiMapPinUserLine, RiLockPasswordLine } from 'react-icons/ri'
import { FiArrowLeft } from "react-icons/fi";

const ReCAPTCHA = dynamic(
	() => import("react-google-recaptcha"),
	{ ssr: false }
)

import {
	Container,
	BackHome,
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
	ContainerError,
	TextError,
} from '../../styles/pages/signin'

import GlobalStyle from '../../styles/GlobalStyle'

import useWindow from '../../utils/useWindow'
import api from '../../utils/api'

const About = () => {
	const theme = useContext(ThemeContext)
	const {signIn} = useAuth()
	const recaptchaRef = useRef()
	const router = useRouter()
	const window = useWindow()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [captcha, setCaptcha] = useState(null)
	const [error, setError] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()

		signIn({
			username,
			password,
			captcha,
			setError,
			router
		})
	}

	useEffect(() => {
		setError('')
	}, [username, password, captcha])

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
					<a style={{
					    position: 'absolute',
						left: 0,
					    right: 0,
					    margin: 20,
					    width: 'fit-content',
					    textDecoration: 'none',
					}}>
						<BackHome>
							<FiArrowLeft size={32} color={theme.colors.secundary} />
							<p>Voltar para página inicial</p>
						</BackHome>
					</a>
				</Link>
				<ContainerLogin>
					{!!error && (
						<ContainerError>
							<TextError>{error}</TextError>
						</ContainerError>
					)}
					<ContainerHeader>
						<Title>Acesse sua conta</Title>
					</ContainerHeader>
					<ContainerBody>
						<Form onSubmit={handleSubmit}>
							<LabelInput>Informe seu username</LabelInput>
							<InputContainer>
								<RiMapPinUserLine style={{marginLeft: "0.5rem", position: "absolute"}} color={theme.colors.text} size="1.5em" />
								<InputForm
									name="username"
									type="text"
									placeholder="Digite o username de sua conta"
									value={username}
									onChange={(event) => setUsername(event.target.value)}
									required
								/>
							</InputContainer>
							<LabelInput>Informe sua senha</LabelInput>
							<InputContainer>
								<RiLockPasswordLine style={{marginLeft: "0.5rem", position: "absolute"}} color={theme.colors.text} size="1.5em" />
								<InputForm
									name="password"
									type="password"
									placeholder="Digite a senha de sua conta"
									onChange={(event) => setPassword(event.target.value)}
									required
								/>
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
								size={(window.width < 450) ? "compact" : "normal"}
								ref={recaptchaRef}
								onChange={(value) => setCaptcha(value)}
								theme={theme.title.toLowerCase()}
								sitekey="6Lccy98ZAAAAAFqc_m2sG5m29skJ9SwfVAYrPCDx"
								required
							/>
							<ButtonSubmit type="submit">Entrar</ButtonSubmit>
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
