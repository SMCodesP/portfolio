import styled from 'styled-components'

export const ContainerItem = styled.div`
	background: #fafafa;
	border-radius: 5px;
  padding: 10px;
  width: 350px;
`

export const ItemTitle = styled.h1`
	font-size: 14pt;
	color: #333333;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
`

export const ItemDescription = styled.h2`
	font-size: 12pt;
	color: #333333;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	margin: 5px;
`

export const ItemListTechs = styled.ul`
	margin: 0 15px;
	list-style: none;
`

export const ItemTech = styled.li`
	font-size: 10pt;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	color: #111111;

	&:before {
		content: '- ';
	}
`
