import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-top: 50px;
	padding: 30px;
	display: flex;
	flex-direction: column;
`

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const ContainerMoreItems = styled.div`
	align-self: flex-end;
	display: flex;
	flex-direction: row;
	cursor: pointer;
	transition: filter .5s;

	&:hover {
		filter: brightness(65%);
	}
`

export const MoreItem = styled.p`
	text-align: end;
	color: #e02041;
	font-size: 22px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 600;
	padding: 0 15px 0 0;
`

export const ContainerProducts = styled.div`
	width: 100%;
	padding: 20px;
	margin-top: 5px;
	display: grid;
	grid-template-columns: repeat(${({ items = 2 }) => items}, 1fr);
	gap: 30px 10px;
	position: relative;
`

export const CategoryTitle = styled.p`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 900;
	font-size: 32px;
	color: #333;
`

