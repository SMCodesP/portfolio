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
	display: inline-block;
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
		transform: translateY(5vh);
	}
	100% {
		transform: translateY(0);
	}
`

export const DownLink = styled.a`
	animation: ${DownUp} 3s linear infinite;
	margin-top: 15vh;
	
	@media (max-height: 550px) {
		display: none;
	}
`;

export const Down = styled(FiArrowDown)`
	cursor: pointer;
	transition: filter .5s;

	&:hover {
		filter: brightness(60%);
	}
`
