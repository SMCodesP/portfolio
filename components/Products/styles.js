import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-top: 50px;
	padding: 30px;
	display: flex;
	flex-direction: column;
`

export const ContainerProducts = styled.div`
	width: 100%;
	margin-top: 5px;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(${({ items = 2 }) => items}, 1fr);
	gap: 30px 10px;
	position: relative;
`

export const CategoryTitle = styled.h1`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-weight: 900;
	font-size: 32px;
	color: #333;
`

