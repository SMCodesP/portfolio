import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
`

export const MenuBar = styled.div`
	width: 75px;
	height: 100vh;
	background: ${({theme}) => theme.colors.secundaryBackground};

	position: fixed;
	display: flex;
	flex-direction: column;
`

export const ListPages = styled.ul`
	height: 100%;
	margin-top: 25px;

	display: flex;
	flex-direction: column;
`

export const Page = styled.li`
	width: 100%;
	padding-top: 15px;
	padding-bottom: 15px;
	background: ${({theme}) => theme.colors.secundaryBackground};

	display: flex;
	justify-content: center;
	cursor: pointer;

	transition: filter .5s;

	&:hover {
		filter: brightness(75%);
	}
`
