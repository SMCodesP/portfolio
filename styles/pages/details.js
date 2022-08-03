import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 5% 1%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const ProductPurchase = styled.div`
	flex: 1;
	height: 100%;
	margin: 10px;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.secundaryBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 10px;
`;

export const ProductInformations = styled.div`
	flex: 2;
	margin: 10px;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.secundaryBackground};
	height: fit-content;
	padding: 25px 15px;
	line-height: 20pt;
	display: flex;
	flex-direction: column;

	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin: 10px 15px;
	}

	& li,
	& ol {
		margin: 15px 20px;
	}

	& p {
		margin: 15px 25px;
	}

	& code {
		word-wrap: break-word;
	}

	& img {
		align-self: center;
		max-width: 95%;
		cursor: pointer;
		transition: filter 0.4s;
	}

	& img:hover {
		filter: brightness(60%);
	}
`;

export const ImageLogo = styled.img`
	max-width: 50%;
	background: ${({ theme }) => theme.colors.secundaryBackground};
	${({ loading }) => loading == "true" && "filter: blur(5px);"}
	transition: padding .4s, filter .4s, border-radius .4s;
	cursor: pointer;

	&:hover {
		border-radius: 15px;
		filter: brightness(60%);
	}
`;

export const DescriptionList = styled.ul`
	padding: 25px 25px 10px 25px;
	user-select: text !important;
	font-size: 16px;
	list-style-position: inside;
	line-height: 18px;
	align-self: flex-start;
	line-height: 20pt;
	white-space: pre-wrap;

	& div {
		padding: 4px;
	}

	@media (max-width: 400px) {
		padding: 25px 0 5px 5px;
	}
`;

export const ContainerButton = styled.div`
	width: 55%;
	margin: 15px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

export const PurchaseButton = styled.button`
	background: #ff79c6;
	border: 0;
	border-radius: 5px;
	height: 46px;
	width: 100%;
	font-size: 15pt;
	font-weight: 500;
	cursor: pointer;
	margin: 10px 0;
	border-right: 3px solid ${shade(0.2, "#ff79c6")};
	border-bottom: 3px solid ${shade(0.2, "#ff79c6")};
	position: relative;
	transition: filter 0.2s, top 0.2s;

	&:hover {
		filter: brightness(75%);
	}

	&:active {
		position: relative;
		top: 3px;
		left: 3px;
		border: 0;
		margin-right: 3px;
		margin-bottom: 3px;
	}
`;

export const Price = styled.p`
	font-size: 14pt;
`;

export const ProductTitle = styled.h1`
	font-size: 22pt;
	line-height: 36pt;
	padding: 5px;
`;
