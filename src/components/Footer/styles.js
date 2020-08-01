import styled from 'styled-components';
import { darken } from 'polished';

export const FooterContainer = styled.footer`
	width: 100%;
	height: 75px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	position: relative;
	left: 0;
	bottom: 0;
	border-top: 3px solid ${({theme}) => darken(0.2, theme.colors.secundaryBackground)};

	display: flex;
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
