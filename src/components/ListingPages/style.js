import styled from 'styled-components'
import {shade} from 'polished'

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
