import styled from 'styled-components'

export const Container = styled.main`
	margin: 65px 32px;
`

export const ContainerList = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: 1256px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 850px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
