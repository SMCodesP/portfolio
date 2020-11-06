import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	${({theme}) => `background-image: url('http://api.thumbr.it/whitenoise-361x370.png?background=${theme.colors.background.substring(1, toString(theme.colors.background).length)}ff&noise=${theme.colors.text.substring(1, toString(theme.colors.text).length)}&density=1&opacity=40');`}
`

export const BackHome = styled.div`
	display: flex;
	align-items: center;
	justify-self: initial;
	cursor: pointer;
	transition: filter .3s, opacity .3s;
	user-select: none;

	& p {
		color: ${({theme}) => theme.colors.secundary};
		transition: margin-left .3s;
		margin-left: 5px;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 600;
	}

	&:hover {
		filter: brightness(65%);
	}

	& svg {
		transition: padding-right .3s;
		stroke-width: 3px;
	}

	&:hover p {
		margin-left: 15px;
	}

	&:hover svg {
		padding-right: 3px;
	}

	&:active {
		opacity: 0;
	}
`

export const ContainerLogin = styled.div`
	width: 35%;
	min-height: 80vh;

	background: ${({theme}) => theme.colors.secundaryBackground};
	position: absolute;
	bottom: 0;

	border-top-right-radius: 10px;
	border-top-left-radius: 10px;

	box-shadow: ${({theme}) => theme.colors.primary}CC 0px 20px 35px -40px, ${({theme}) => theme.colors.primary}CC 0px 20px 20px -10px;
	transition: width .2s;

	@media(max-width: 1240px) {
		width: 40%;
	}

	@media(max-width: 900px) {
		width: 65%;
	}


	@media(max-width: 650px) {
		width: 85%;
	}

	@media(max-width: 440px) {
		width: 95%;
	}
`

export const ContainerHeader = styled.div`
	width: 100%;
	height: 54px;

	display: flex;
	align-items: flex-end;
	justify-content: center;
`

export const Title = styled.h1`
	font-size: 1.75rem;
`

export const ContainerBody = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
`

export const Form = styled.form`
	width: 85%;

	display: flex;
	flex-direction: column;
`

export const LabelInput = styled.label`
	margin: 25px 0 0 0;
	padding: 0 .5rem;
	font-size: 13pt;
	color: ${({theme}) => theme.colors.fifthText};
`

export const InputContainer = styled.div`
	padding: .5rem;
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
`

export const InputForm = styled.input`
	width: 97.5%;
	height: 50px;
	padding: 1rem 1rem 1rem 2.5rem;
	align-self: flex-end;

	background: ${({theme}) => theme.colors.background};
	border-radius: 5px;
	border: 0;

	color: ${({theme}) => theme.colors.text};

	transition: border .2s, box-shadow .2s;

	&:focus {
		box-shadow: 0 0 9px -5px ${({theme}) => theme.colors.primary};
	}

	&::-webkit-input-placeholder {
		color: ${({theme}) => theme.colors.text};
	}

	&:-moz-placeholder {
		font-size: 14pt;
		color: ${({theme}) => theme.colors.text};
	}

	&::-moz-placeholder {
		font-size: 14pt;
		color: ${({theme}) => theme.colors.text};
	}

	&:-ms-input-placeholder {
		font-size: 14pt;
		color: ${({theme}) => theme.colors.text};
	}
`

export const ForgotPassword = styled.a`
	width: fit-content;
	align-self: flex-end;

	transition: filter .5s;

	&:hover {
		filter: brightness(75%);
	}
`

export const ButtonSubmit = styled.button`
	width: 80%;
	height: 55px;
	align-self: center;
	margin-top: 15px;
	background: ${({theme}) => theme.colors.background};

	border-radius: 5px;
	border: 0;

	cursor: pointer;

	font-size: 15pt;

	transition: filter .5s;

	&:hover {
		filter: brightness(75%);
	}
`

export const NotHaveAccount = styled(ForgotPassword)`
	align-self: initial;
	margin: 5px;
`

export const ContainerError = styled.div`
	background: red;
	border: 2px solid #e02041;
	padding: 10px;
	margin: 5px 5px 0 5px;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
`

export const TextError = styled.p`
	text-align: center;
	color: #fff;
	font-weight: bold;
`
