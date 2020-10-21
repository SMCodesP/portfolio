import styled from 'styled-components'

export const ContainerDetails = styled.ul`
	padding: 35px 5px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`

export const Detail = styled.li`
	margin: 0 5px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	display: flex;
	align-items: center;
	border-radius: 5px;
	padding: 10px 15px;
	border-bottom: 2px solid #${({color}) => color};
	transition: filter .2s;

	& svg {
		background: ${({theme}) => theme.colors.background};
		padding: 10px;
		border-radius: 64px;
		margin: 0 5px;
		cursor: pointer;
		transition: filter .2s;
	}

	& svg:hover {
		filter: brightness(85%);
	}

	& svg::after {
		content: '<span></span>';
	}

	& svg:hover span::after {
		content: 'Baixar plugin em .jar';
	}

	&:hover {
		filter: brightness(95%);
	}
`

export const ContainerManagment = styled.div`
	margin: 0 10px;
	padding: 5px;
	border-radius: 5px;
	height: 85vh;
	background: ${({theme}) => theme.colors.secundaryBackground};
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
