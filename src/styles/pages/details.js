import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 25px;
	
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`

export const ProductPurchase = styled.div`
	flex: 1;
	height: 100%;
	margin: 10px;
	border-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
`

export const ProductInformations = styled.div`
	flex: 2;
	margin: 10px;
	border-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	height: fit-content;
	padding: 30px 25px;
	line-height: 20pt;
	display: flex;
	flex-direction: column;
	
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin: 10px 15px;
	}

	& li,
	& ol {
		margin: 15px 20px;
	}

	& p {
		margin: 15px 25px;
	}

	& img {
		align-self: center;
		max-width: 95%;
		cursor: pointer;
		transition: filter .4s;
	}

	& img:hover {
		filter: brightness(60%);
	}
`

export const ImageLogo = styled.img`
	${({not_auto}) => not_auto ? '' : `
		max-width: 132px;
		max-height: 132px;
	`}
	background: ${({theme}) => theme.colors.secundaryBackground};
	${({loading}) => (loading == "true") && 'filter: blur(5px);'}
	padding: 10px;
	transition: padding .4s, filter .4s, border-radius .4s;
	cursor: pointer;
	
	&:hover {
		padding: 5px;
		border-radius: 15px;
		filter: brightness(60%);
	}
`

export const DescriptionList = styled.ul`
	padding: 25px 25px 10px 25px;
	user-select: text !important;
	font-size: 16px;
	list-style-position: inside;
	line-height: 18px;
	align-self: flex-start;
	line-height: 20pt;
	
	& div {
		padding: 4px;
	}
`

export const ContainerButton = styled.div`
	width: 55%;
	margin: 15px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`

export const PurchaseButton = styled.button`
	background: #e02041;
	border: 0;
	border-radius: 5px;
	height: 46px;
	width: 100%;
	font-size: 15pt;
	font-weight: 500;
	cursor: pointer;
	margin: 10px 0;
	transition: filter .2s;
	
	&:hover {
		filter: brightness(75%);
	}
`

export const Price = styled.p`
	font-size: 14pt;
`

export const ProductTitle = styled.h1`
	font-size: 22pt;
	line-height: 36pt;
	padding: 5px;
`

export const ContainerNextPrevious = styled.div`
	width: 100%;
	padding: 50px 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`

export const TextPrevNext = styled.a`
	font-size: 16pt;
	font-weight: 600;
	margin: 0 10px;
	cursor: pointer;
	text-decoration: none;

	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	justify-self: center;
	transition: filter .2s;
	user-select: none;

	& svg {
		stroke-width: 3px;
		margin: 0 5px;
		transition: margin .2s, padding .2s, stroke-width .4s;
	}

	&:hover {
		filter: brightness(50%);
	}

	&:hover svg {
		stroke-width: 5px;
		margin: 0 12px;
		padding: 0 3px;
	}
`

export const ContainerListPages = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ListProductsPages = styled.ul`
	padding: 0 15px;
	display: grid;
	grid-auto-flow: column;
	gap: 0 10px;

	& a {
		text-decoration: none;
	}
`

export const ProductPage = styled.li`
	font-size: 14pt;
	background: ${({theme}) => shade(0.1, theme.colors.background)};
	box-shadow: 0 0 2px 1px ${({theme}) => shade(0.1, theme.colors.secundaryBackground)};
	cursor: pointer;
	transition: filter .4s;

	list-style: none;
	user-select: none;

	padding: 7.5px;
	border-radius: 4px;

	&:hover {
		filter: brightness(75%);
	}
`
