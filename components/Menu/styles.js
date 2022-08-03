import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import Switch from "react-switch";
import { shade } from "polished";

export const ListingPage = styled.ul`
	height: auto;
	opacity: 1;
	display: flex;
	transition: all 0.2s;

	@media (max-width: 890px) {
		flex-direction: column;
	}

	& a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.text};
		margin: 8px !important;
	}
`;

export const Title = styled.p`
	display: flex;
	align-items: center;
	height: auto;
	opacity: 1;

	color: ${({ color, theme }) => color || theme.colors.text};
	font-size: 26px;
	font-weight: 600;
	transition: all 0.2s;
	user-select: none;
	margin: 0 10px;
`;

export const IconMenu = styled.button`
	position: relative;
	float: left;
	overflow: hidden;
	margin: 0;
	padding: 0;
	top: -5px;
	width: 96px;
	height: 56px;
	font-size: 0;
	text-indent: -9999px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	box-shadow: none;
	border-radius: none;
	border: none;
	cursor: pointer;
	-webkit-transition: background 0.3s;
	transition: background 0.3s;

	& span {
		display: block;
		position: absolute;
		left: 18px;
		right: 18px;
		height: 8px;
		background: #e02041;
		border-radius: 0.57143rem;
	}

	& span::before,
	& span::after {
		position: absolute;
		display: block;
		left: 0;
		width: 100%;
		height: 8px;
		background-color: #e02041;
		border-radius: 0.57143rem;
		content: "";
	}

	& span::before {
		top: -15px;
	}
	& span::after {
		bottom: -15px;
	}

	& {
		background: none;
	}
	& span {
		-webkit-transition: background 0s 0.3s;
		transition: background 0s 0.3s;
	}
	& span::before,
	& span::after {
		-webkit-transition-duration: 0.3s, 0.3s;
		transition-duration: 0.3s, 0.3s;
	}
	& span::before {
		-webkit-transition-property: top, -webkit-transform;
		transition-property: top, transform;
	}
	& span::after {
		-webkit-transition-property: bottom, -webkit-transform;
		transition-property: bottom, transform;
	}

	${(props) =>
		props.closed
			? `
		& {
			background: none;
		}
		& span {
			visibility: hidden;
		}
		& span::before {
			top: 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
			visibility: visible;
		}
		& span::after {
			bottom: 0;
			-webkit-transform: rotate(-45deg);
			-ms-transform: rotate(-45deg);
			transform: rotate(-45deg);
			visibility: visible;
		}
	`
			: ``}

	@media (min-width:890px) {
		display: none;
	}
`;

export const Page = styled.li`
	opacity: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	user-select: none;
	list-style: none;
	cursor: pointer;
	color: ${({ color, theme }) => color || theme.colors.text};
	font-size: 18px;
	font-weight: ${(props) => (props.locate ? "900" : "")};
	transition: transform 0.2s, filter 0.2s;

	@media (min-width: 890px) {
		&:hover {
			filter: brightness(75%);
			transform: ${(props) => (props.locate ? "scale(1)" : "scale(1.1)")};
		}
	}
`;

export const PageCustom = styled(Page)`
	padding: 5px 20px;
	border: 1px solid ${({ theme }) => theme.colors.text};
	border-radius: 23px;

	&:hover {
		transform: ${(props) => (props.locate ? "scale(1)" : "scale(1.05)")};
		text-decoration: underline;
		background: ${({ theme }) => theme.colors.text};
		box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.inverseText};
	}
`;

export const User = styled(IoMdSettings).attrs(({ theme }) => ({
	color: theme.colors.text,
	size: 20,
}))`
	stroke-width: 3px;
	box-sizing: content-box;
	border-radius: 50%;
	transition: transform 1s;

	&:hover {
		transform: none;
		transform: rotate(180deg);
	}
`;

export const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: ${({ background = "transparent" }) => background};
	${({ background, theme }) =>
		background
			? `
		background-image : url('/menu_${theme.title.toLowerCase()}.webp');
	`
			: ``}
	box-shadow: 0 0 2px 1px ${({ theme }) => shade(0.5, theme.colors.background)};
	transition: all 0.2s;
	padding: 25px 90px;

	@media (max-width: 890px) {
		flex-direction: column;
		padding: 10px 70px 10px 70px;
		z-index: 999;
		transition: all 0.2s;

		${(props) =>
			props.actived
				? `
			position: fixed;
			top: 0;
			background: #7159c1 !important;
			justify-content: flex-start !important;
			height: 100vh;

			${ListingPage} {
				margin: 30px !important;
			}

			${Page} {
				color: #333333;
				text-align: center;
				background-color: #7159c1;
				filter: brightness(110%);
				margin: 2px !important;
				padding: 15px;
				border-radius: 5px;
			}

			a:hover ${Page} {
				filter: brightness(75%);
			}
		`
				: `
			a {
				display: none;
			}
		`}

		${ListingPage},
		${Title},
		${Page} {
			${(props) =>
				props.actived
					? `
				margin: 15px;
			`
					: `
				height: 0;
				opacity: 0;
			`}
		}
	}

	@media (max-width: 530px) {
		padding: 15px 25px 15px 25px !important;

		${Title} {
			display: none;
		}
	}

	@media (max-width: 430px) {
		padding: 5px 10px 5px 10px !important;
	}
`;

export const OpenIsMenuMobile = styled.div`
	width: 100%;
`;

export const OptionsFixed = styled.div`
	width: 100%;
	transition: height 0.4s;
	height: ${(props) => (props.fixed ? "80px" : "0")};
	display: flex;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.colors.primary};
	border-bottom: ${(props) =>
		props.fixed ? `2px solid ${shade(0.2, props.theme.colors.primary)}` : ""};
	padding: 0 80px;
	z-index: 2;

	${IconMenu} {
		align-self: center !important;
	}

	${Title} {
		color: #333333 !important;
		display: ${(props) => (props.fixed ? "flex" : "none")};
	}

	${Page} {
		color: #333333 !important;
		display: ${(props) => (props.fixed ? "flex" : "none")};
	}

	@media (max-width: 530px) {
		justify-content: center;
		${Title} {
			display: none;
		}
	}
`;

export const HeadMenuFixed = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
`;

export const UserMenu = styled.div`
	border-radius: 5px;
	background: ${({ theme }) => theme.colors.background};
	width: 100%;
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
`;

export const UserIcon = styled.img`
	width: 64px;
	height: 64px;
	cursor: pointer;
	transition: filter 0.3s;

	&:hover {
		filter: brightness(80%);
	}
`;

export const Username = styled.p`
	color: ${({ theme }) => theme.colors.text};
	font-size: 14pt;
	font-weight: medium;
	margin: 5px 0;
`;

export const Line = styled.hr`
	display: block;
	height: 1px;
	border: 0;
	border-top: 2px solid ${({ theme }) => shade(0.4, theme.colors.background)};
	filter: blur(1px);
	margin: 1em 0;
	padding: 0;
	width: 100%;
`;

export const ListOptions = styled.ul`
	margin: 25px;
	width: 100%;
	padding: 0 15px;
`;

export const Option = styled.li`
	padding: 10px;
	border-radius: 5px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.colors.secundaryBackground};
`;

export const OptionTitle = styled.p`
	color: ${({ theme }) => theme.colors.secundaryText};
	font-size: 14pt;
	line-height: 15pt;

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const OptionSelect = styled(Switch)``;
