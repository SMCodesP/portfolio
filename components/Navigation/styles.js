import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'
import { FiArrowDown } from 'react-icons/fi'

export const Container = styled.header`
	width: 100%;
	height: 100vh;
	background: ${({theme}) => lighten(0.2, theme.colors.background)};
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Libre Franklin', sans-serif;
`

export const ContainerWelcome = styled.div`
	width: 80%;
	margin-top: 100px;

	@media (max-width: 500px) {
		margin-top: 10px;
	}
`

export const Welcome = styled.h1`
	font-weight: 400;
	color: ${({theme}) => theme.colors.text};
	font-size: 40pt;

	& > strong {
		font-weight: 600 !important;
	}
`

export const SubWelcome = styled.h2`
	color: ${({theme}) => theme.colors.text};
	font-size: 17pt;
	font-weight: 400;
	line-height: 40px;
`

export const WorkLast = styled.a`
	color: ${({theme}) => theme.colors.text};
	font-size: 15pt;
	display: block;
	margin-top: 75px;

	@media (max-width: 925px) {
		margin-top: 35px;
	}
`

const DownUp = keyframes`
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(25px);
	}
	100% {
		transform: translateY(0);
	}
`

export const Down = styled(FiArrowDown)`
	animation: ${DownUp} 2s linear infinite;
	height: 15vh;
	margin-top: 175px;
	cursor: pointer;
	transition: filter .5s;

	&:hover {
		filter: brightness(60%);
	}

	@media (max-width: 925px) {
		display: none;
	}
`