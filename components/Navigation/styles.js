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
	margin-top: 15vh;
`

export const Welcome = styled.h1`
	font-weight: 400;
	color: ${({theme}) => theme.colors.text};
	font-size: 10vh;

	& > strong {
		font-weight: 600 !important;
	}

	@media (max-width: 441px) {
		font-size: 15vw;
	}
`

export const SubWelcome = styled.h2`
	color: ${({theme}) => theme.colors.text};
	font-size: 17pt;
	font-weight: 400;
	line-height: 40px;

	@media (max-height: 392px) {
		display: none;
	}
`

export const WorkLast = styled.a`
	color: ${({theme}) => theme.colors.text};
	border: 1px solid ${({theme}) => theme.colors.text};
	text-decoration: none;
	padding: 10px 25px;
	border-radius: calc(15pt + 10px);
	font-size: 15pt;
	display: inline-block;
	margin-top: 75px;
	cursor: pointer;

	transition: all .2s;

	&:hover {
		text-decoration: underline;
		background: ${({theme}) => theme.colors.text};
		box-shadow: 0 0 5px 0 ${({theme}) => theme.colors.primary};
		color: ${({theme}) => theme.colors.inverseText};
	}

	@media (max-width: 925px) {
		margin-top: 35px;
	}


	@media (max-height: 452px) {
		display: none;
	}

	@media (max-width: 318px) {
		display: none;
	}
`

const DownUp = keyframes`
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(5vw);
	}
	100% {
		transform: translateY(0);
	}
`

export const DownLink = styled.a`
	animation: ${DownUp} 3s linear infinite;
	margin-top: 15vw;
	
	@media (max-height: 676px) {
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
