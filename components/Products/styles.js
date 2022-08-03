import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 15px 30px;
	display: flex;
	flex-direction: column;

	@media (max-width: 475px) {
		padding: 15px 0;
	}
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 10px;
`;

export const MoreItem = styled.p`
	text-align: end;
	color: ${({ theme }) => theme.colors.secundary};
	font-size: 21pt;
	font-weight: 600;
	transition: margin-right 0.2s;
	margin-right: 5px;
	align-items: center;
`;

export const ContainerMoreItems = styled.div`
	align-self: flex-end;
	display: flex;
	align-items: center;
	flex-direction: row;
	cursor: pointer;
	transition: filter 0.2s, opacity 0.2s;
	user-select: none;

	&:hover {
		filter: brightness(65%);
	}

	& svg {
		transition: padding-left 0.2s;
		stroke-width: 3px;
	}

	&:hover ${MoreItem} {
		margin-right: 15px;
	}

	&:hover svg {
		padding-left: 3px;
	}

	&:active {
		opacity: 0;
	}
`;

export const ContainerProducts = styled.div`
	overflow-x: auto; /* Hide horizontal scrollbar */
	overflow-y: hidden; /* Add vertical scrollbar */
	padding: 20px;
	margin-top: 5px;
	margin-bottom: 15px;

	column-count: 5;
	column-gap: 10px;

	@media (max-width: 975px) {
		column-count: 2;
	}

	@media (max-width: 615px) {
		column-count: 1;
	}

	@media (max-width: 475px) {
		margin: 0;
		padding: 20px 0;
		justify-content: center;
	}
`;

export const CategoryTitle = styled.p`
	font-weight: 900;
	font-size: 24pt;
	color: ${({ theme }) => theme.colors.text};

	@media (max-width: 475px) {
		text-align: center;
	}
`;
