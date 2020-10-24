import styled from 'styled-components'

export const ContainerDetails = styled.ul`
	padding: 35px 5px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

  @media (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 690px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Detail = styled.li`
	margin: 5px;
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
