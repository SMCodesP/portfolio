import styled from 'styled-components'

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
	color: ${({theme}) => theme.colors.text};
	height: fit-content;
	padding: 30px 25px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin: 5px;
	}

	& li,
	& ol {
		margin: 10px 25px;
	}

	& p {
		margin: 10px;
	}
`

export const ImageLogo = styled.img`
	${({not_auto}) => not_auto ? '' : `
		max-width: 132px;
		max-height: 132px;
	`}
	background: ${({theme}) => theme.colors.secundaryBackground};
	${({loading}) => (loading == "true") && 'filter: blur(5px);'}
	padding: 15px;
	transition: padding .2s, filter .2s, border-radius .4s;
	cursor: pointer;
	
	&:hover {
		padding: 5px;
		border-radius: 10px;
		filter: brightness(60%);
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
	align-self: flex-start;
	
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
	color: ${({theme}) => theme.colors.text};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
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
	color: ${({theme}) => theme.colors.secundaryText};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 14pt;
`
