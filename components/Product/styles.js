import styled from 'styled-components';
import { getColor } from 'get-color-sm';

export const ContainerPurchase = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 15px 0;
	padding: 10px 115px;
	opacity: 0;
	height: 0;
	transition: height .2s, opacity .4s;
`

export const Container = styled.div`
	background: #fafafa;
	border-radius: 10px;
	transition: margin .2s, height .2s;
	padding-bottom: 10px;
	border-bottom: 1px solid #bbb;
	border-left: 1px solid #bbb;
	border-right: 1px solid #bbb;
	border-top: 4px solid #${getColor};

	&:hover {
		margin: -20px 0 0 0;
	}

	&:hover ${ContainerPurchase} {
		opacity: 1;
		height: 50px;
	}
`;

export const Image = styled.img`
	margin: -5px 0 5px 0;
	border-radius: 15px;
	max-width: 128px;
	max-height: 128px;
	transition: transform .2s;
	cursor: none;

	&:hover {
		transform: scale(1.25) !important;
	}
`

export const ContainerImage = styled.div`
	display: flex;
	flex-direction: column-reverse;
	width: 100%;
	background: #eee;
	justify-content: center;
	align-items: center;
	padding: 10px 0 0 0;
	border-bottom: 1px solid #aaaaaa;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	&:hover ${Image} {
		transform: scale(1.1);
	}
`

export const NewInfo = styled.p`
	color: #fafafa;
	align-self: flex-end;
	background: #e02041;
	padding: 6px 6px 6px 10px;
	border-bottom-left-radius: 10px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 700;
	border-bottom: 4px solid #c00020;
	transition: filter .2s, padding-right .2s;
	cursor: pointer;

	&:hover {
		padding-right: 20px;
		filter: brightness(70%);
	}
`

export const Title = styled.p`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 18px;
	color: #fafafa;
	background: #7159c1;
	border-radius: 50px;
	line-height: 20px;
	padding: 5px 25px;
	position: relative;
	top: 15px;
	cursor: default;
	transition: filter .2s;

	&:hover {
		filter: brightness(70%);
	}
`

export const DescriptionList = styled.ul`
	padding: 25px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 16px;
	color: #333333;
	list-style-position: inside;
	line-height: 22px;
`

export const DescriptionItem = styled.li``

export const PriceTitle = styled.p`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 20px;
	color: #222;
	padding: 5px;
	align-self: flex-end;
`

export const PurchaseButton = styled.button`
	background: #4ed359;
	border-radius: 10px;
	width: 100%;
	padding: 10px 0;
	border: 0;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 16px;
	color: #fafafa;
	cursor: pointer;
	transition: filter .4s;
	border-bottom: 3px solid #2cb137;

	&:hover {
		filter: brightness(70%);
	}

	&:active {
		position: relative;
		top: 3px;
		border-bottom: 0 !important;
	}
`

