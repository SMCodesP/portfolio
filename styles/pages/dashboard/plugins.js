import styled from 'styled-components'

export const ListPlugins = styled.ul`
	width: 97.5%;
	margin: 0 1.25%;
	margin-bottom: 45px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);

	& a {
		text-decoration: none;
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
