import styled from 'styled-components';
import { darken } from 'polished';
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'
import { FaDiscord } from "react-icons/fa";

export const Container = styled.footer`
	width: 100%;
	height: 75px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	position: relative;
	left: 0;
	bottom: 0;
	border-top: 3px solid ${({theme}) => darken(0.2, theme.colors.secundaryBackground)};
	display: flex;
	justify-content: center;
`

export const FooterContainer = styled.div`
	position: absolute;
	display: flex;
	height: 65px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${({theme}) => theme.colors.text};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 14pt;
`

export const Title = styled.p`
	font-weight: 600;
`

export const SubTitle = styled.p`
	font-size: 10pt;
`

export const SocialNetworking = styled.div`
	flex: 1;
	padding: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`

export const Github = styled(AiOutlineGithub).attrs(({theme}) => ({
	color: theme.colors.text,
	size: 32
}))`
	cursor: pointer;
	transition: filter .2s;
	margin: 0 5px;

	&:hover {
		filter: brightness(40%);
	}
`

export const LinkedIn = styled(AiFillLinkedin).attrs(({theme}) => ({
	color: '#0e76a8',
	size: 32
}))`
	cursor: pointer;
	transition: filter .2s;
	margin: 0 5px;

	&:hover {
		filter: brightness(60%);
	}
`

export const ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Discord = styled(FaDiscord).attrs(({theme}) => ({
	color: '#7289DA',
	size: 32
}))`
	cursor: pointer;
	transition: filter .2s;
	margin: 0 5px;

	&:hover {
		filter: brightness(60%);
	}
`

export const Link = styled.a`
	all: unset;
`

export const GoTo = styled.p`
	cursor: pointer;
	color: ${({theme}) => theme.colors.text};
	transition: filter .2s, border-bottom .4s;

	&:hover {
		filter: brightness(75%);
		border-bottom: 1px solid ${({theme}) => theme.colors.text};
	}
`
