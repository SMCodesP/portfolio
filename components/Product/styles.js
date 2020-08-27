import styled, { keyframes } from 'styled-components';
import { shade, getLuminance } from 'polished';

export const ContainerPurchase = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px 70px;
	transition: height 2s, opacity 1s;
`

export const Title = styled.p`
	font-weight: 500;
	font-size: 18px;
	border-radius: 50px;
	line-height: 20px;
	padding: 5px 25px;
	position: relative;
	top: 25px;
	cursor: default;
	transition: filter .2s;

	&:hover {
		filter: brightness(70%);
	}
`

export const Container = styled.div`
	background: ${({theme}) => theme.colors.background};
	height: fit-content;
	max-width: 100%;
	min-width: 300px;
	border-radius: 10px;
	transition: box-shadow .3s, transform .3s, border .3s;
	padding-bottom: 10px;
	border: 1px solid ${({theme}) => theme.colors.primary};
	--color-var: #${(props) => props.color};
	border-top: 4px solid var(--color-var);
	box-shadow: 0;
	
	${Title} {
		background: var(--color-var);
		color: ${(props) => (getLuminance(`#${props.color}`) < 0.4)
			? props.theme.colors.light
			: props.theme.colors.dark} !important;
	}

	&:hover {
		border: 0;
		box-shadow: 0 0 5px 0 ${({theme}) => theme.colors.primary};
		transform: scale(1.025);
	}
`;

export const Image = styled.img`
	margin: 5px 0 5px 0;
	${({not_auto}) => not_auto ? '' : `
		max-width: 132px;
		max-height: 132px;
	`}
	border-radius: 5px;
	cursor: none;
	filter: brightness(85%);
`

export const ContainerImage = styled.div`
	display: flex;
	flex-direction: column-reverse;
	width: 100%;
	background: ${({theme}) => theme.colors.secundaryBackground};
	justify-content: center;
	align-items: center;
	padding: 20px 0 10px 0;
	border-bottom: 1px solid ${({theme}) => theme.colors.primary};
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	z-index: -1;
`

export const NewInfo = styled.p`
	color: ${({theme}) => theme.colors.background};
	align-self: flex-end;
	background: ${({theme}) => theme.colors.primary};
	padding: 6px 6px 6px 10px;
	border-bottom-left-radius: 10px;
	font-size: 14px;
	font-weight: 700;
	border-bottom: 4px solid ${({theme}) => shade(0.4, theme.colors.primary)};
	transition: filter .2s, padding-right .2s;
	cursor: pointer;

	&:hover {
		padding-right: 20px;
		filter: brightness(70%);
	}
`

export const DescriptionList = styled.ul`
	padding: 40px 40px 20px 40px;
	user-select: text !important;
	font-size: 16px;
	color: ${({theme}) => theme.colors.text};
	list-style-position: inside;
	line-height: 22px;

	& div {
		padding: 4px;
	}
`

export const PriceTitle = styled.p`
	font-weight: 500;
	font-size: 20px;
	color: ${({theme}) => theme.colors.text};
	padding: 5px;
	align-self: flex-end;
`

export const PurchaseButton = styled.button`
	background: ${({theme}) => theme.colors.secundaryBackground};
	border: 0;
	border-radius: 5px;
	height: 46px;
	width: 100%;
	color: ${({theme}) => theme.colors.text};
	font-size: 15pt;
	font-weight: 500;
	cursor: pointer;
	border-bottom: 3px solid ${({theme}) => shade(0.3, theme.colors.secundaryBackground)};
	position: relative;
	transition: filter .2s, top .2s;
	
	&:hover {
		filter: brightness(75%);
	}

	&:active {
		border-bottom: 0;
		top: 3px;
	}
`

export const Details = styled.p`
	cursor: pointer;
	color: ${({theme}) => theme.colors.text};
	font-size: 14pt;
	transition: filter .5s, text-decoration .5s;
	display: flex;
	filter: brightness(125%);
	flex-direction: column;

	&:after {
		width: 0;
		height: 2px;
		background: ${({theme}) => theme.colors.text};
		content: '';
		transition: width .3s;
		margin-top: -1px;
	}

	&:hover {
		filter: brightness(50%);
	}

	&:hover:after {
		width: 100%;
	}
`

export const DetailsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 5px 15px;

	& a {
		text-decoration: none;
	}
`
