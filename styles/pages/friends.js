import styled from 'styled-components';

export const ListFriends = styled.ul`
	width: 97.5%;
	margin: 0 1.25%;
	margin-bottom: 45px;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 925px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
