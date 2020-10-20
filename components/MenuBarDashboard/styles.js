import styled from 'styled-components'

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

	filter: brightness(${({selected}) => (selected) ? '75%' : '100%'});

	transition: filter .5s;

	&:hover {
		filter: brightness(75%);
	}
`
