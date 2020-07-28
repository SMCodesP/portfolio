import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-top: 50px;
	padding: 90px 30px;
	display: flex;
	flex-direction: column;
`

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 10px;
`

export const MoreItem = styled.p`
	text-align: end;
	color: ${({theme}) => theme.colors.secundary};
	font-size: 22px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 600;
	transition: margin-right .2s;
	margin-right: 5px;
`

export const ContainerMoreItems = styled.div`
	align-self: flex-end;
	display: flex;
	flex-direction: row;
	cursor: pointer;
	transition: filter .5s, opacity .2s;
	user-select: none;

	& svg {
		transition: padding-left .2s;
		stroke-width: 3px;
	}

	&:hover ${MoreItem} {
		margin-right: 10px;
	}

	&:hover svg {
		padding-left: 5px;
	}

	&:active {
		opacity: 0;
	}
`

export const ContainerProducts = styled.div`
	width: 100%;
	overflow-y: auto;
	padding: 20px;
	margin-top: 5px;
	display: grid;
	grid-template-columns: repeat(${({ items = 2 }) => items}, 1fr);
	gap: 30px 10px;
	position: relative;
	margin-bottom: 15px;
`

export const CategoryTitle = styled.p`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 900;
	font-size: 24pt;
	color: ${({theme}) => theme.colors.text};
`

