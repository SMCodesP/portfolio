import styled from 'styled-components'

export const ContainerResponsive = styled.div`
	width: 95%;
	height: 65vh;

	@media (max-width: 1100px) {
		height: 100%;
	}
`

export const ContainerItem = styled.div`
	background: ${({theme}) => theme.colors.secundaryBackground};
	border-radius: 5px;
	padding: 10px;
	width: 350px;
`

export const ItemTitle = styled.h1`
	font-size: 14pt;
	color: ${({theme}) => theme.colors.text};
`

export const ItemDescription = styled.h2`
	font-size: 12pt;
	color: ${({theme}) => theme.colors.text};
	margin: 5px;
`

export const ItemListTechs = styled.ul`
	margin: 0 15px;
	list-style: none;
`

export const ItemTech = styled.li`
	font-size: 10pt;
	color: ${({theme}) => theme.colors.secundaryText};

	&:before {
		content: '- ';
	}
`
