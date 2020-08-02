import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 25px;
`

export const ProductPurchase = styled.div`
	height: 100%;
	margin: 0 10px;
	border-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
`

export const ProductInformations = styled.div`
	flex: 2;
	margin: 0 10px;
	border-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	color: ${({theme}) => theme.colors.text};
	padding: 30px 25px;
	
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin: 5px;
	}
	
	
	
	& p {
		margin: 10px;
	}
`

export const ImageLogo = styled.img`
	width: 152px;
	height: 152px;
	border-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	${({loading}) => loading && 'filter: blur(5px);'}
	padding: 15px;
	transition: padding .2s, filter .2s;
	cursor: pointer;
	
	&:hover {
		padding: 10px;
		filter: brightness(75%);
	}
`

export const DescriptionList = styled.ul`
	padding: 25px 25px 10px 25px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	user-select: text !important;
	font-size: 16px;
	color: ${({theme}) => theme.colors.text};
	list-style-position: inside;
	line-height: 18px;
	
	& div {
		padding: 4px;
	}
`

export const ContainerButton = styled.div`
	width: 100%;
	margin: 15px 0;
	display: flex;
	justify-content: center;
`

export const PurchaseButton = styled.button`
	background: #e02041;
	border: 0;
	border-radius: 5px;
	width: 55%;
	height: 46px;
	color: ${({theme}) => theme.colors.text};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 14pt;
	font-weight: 500;
	cursor: pointer;
	transition: filter .2s;
	
	&:hover {
		filter: brightness(75%);
	}
`
