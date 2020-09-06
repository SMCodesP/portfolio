import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	${({theme}) => `background-image: url('http://api.thumbr.it/whitenoise-361x370.png?background=${theme.colors.background.substring(1, toString(theme.colors.background).length)}ff&noise=${theme.colors.text.substring(1, toString(theme.colors.text).length)}&density=1&opacity=40');`}
`

export const ContainerHeaderLogo = styled.div`
	width: 12.5vh;
	height: 12.5vh;
	margin-top: 4vh;
	cursor: pointer;
	border-radius: 5px;
	box-shadow: 0 0 2px 0 ${({theme}) => theme.colors.primary};

	display: flex;
	justify-content: center;
	align-items: center;

	background: ${({theme}) => theme.colors.text};

	transition: filter .2s;

	& svg {
		transition: transform .2s;
		transform: scale(0.95);
	}

	&:hover {
		filter: brightness(75%);
	}

	&:hover svg {
		transform: scale(1.10);
	}
`

export const ContainerLogin = styled.div`
	width: 35%;
	height: 80vh;

	background: ${({theme}) => theme.colors.secundaryBackground};
	position: absolute;
	bottom: 0;

	border-top-right-radius: 10px;
	border-top-left-radius: 10px;

	box-shadow: ${({theme}) => theme.colors.primary}CC 0px 20px 35px -40px, ${({theme}) => theme.colors.primary}CC 0px 20px 20px -10px;
`

export const ContainerHeader = styled.div`
	width: 100%;
	height: 72px;

	display: flex;
	align-items: flex-end;
`

export const Title = styled.h1`
	margin-left: 28px;
`

export const ContainerBody = styled.div`
	width: 100%;

	margin: 25px 0;

	display: flex;
	justify-content: center;
`

export const Form = styled.form`
	width: 85%;

	display: flex;
	flex-direction: column;
`

export const LabelInput = styled.label`
	margin: 20px 0 5px 0;
	font-size: 15pt;
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
	box-shadow: 0 0 10px -5px ${({theme}) => theme.colors.text};

	color: ${({theme}) => theme.colors.text};

	transition: border .2s, box-shadow .2s;

	&:focus {
		border: 1px solid ${({theme}) => theme.colors.text};
		box-shadow: 0 0 9px -5px ${({theme}) => theme.colors.text};
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
