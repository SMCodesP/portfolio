import styled from 'styled-components'

export const ListingPage = styled.ul`
	height: auto;
	opacity: 1;
	display: flex;
	transition: all .2s;

	@media(max-width: 750px) {
		flex-direction: column;
	}
`

export const Title = styled.p`
	height: auto;
	opacity: 1;

	color: ${({ color = "#fff" }) => color};
	font-size: 26px;
	font-weight: 600;
	line-height: 26px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	transition: all .2s;
	user-select: none;
`

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
		content:"";
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
	& span::before, & span::after {
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

	${props => props.closed ? `
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
	` : ``}
`

export const Page = styled.li`
	height: auto;
	opacity: 1;

	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	line-height: 26px;
	user-select: none;
	list-style: none;
	cursor: pointer;
	color: ${({ color = "#fff" }) => color};
	font-size: 18px;
	font-weight: ${(props) => props.locate
		? '900'
		: ''};
	margin: 0 8px 0 8px !important;
	transition: all .2s;

	&:hover {
		transform: ${(props) => props.locate
			? 'scale(1)'
			: 'scale(1.1)'};
	}
`

export const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	background: ${({ background = "transparent" }) => background};
	transition: all .2s;
	padding: 25px 90px;

	@media(max-width: 750px) {
		flex-direction: column;
		padding: 10px 70px 10px 70px;
		z-index: 999;
		transition: all .2s;

		${(props) => props.actived && `
			position: fixed;
			top: 0;
			background-color: #7159c1;
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

			${Page}:hover {
				filter: brightness(80%);
			}
		`}

		${ListingPage},
		${Title},
		${Page} {
			${(props) => props.actived ? `
				margin: 15px;
			` : `
				height: 0;
				opacity: 0;
			`}
		}
  }

	@media(max-width: 530px) {
		padding: 15px 25px 15px 25px !important;

		${Title} {
			display: none;
		}
	}

	@media(max-width: 430px) {
		padding: 5px 10px 5px 10px !important;

		${ListingPage} {
			margin: 20px 5px !important;
		}
	}
`

export const OpenIsMenuMobile = styled.div`
	width: 100%;
`

export const OptionsFixed = styled.div`
	width: 100%;
	transition: height .4s;
	height: ${(props) => props.fixed
		? '80px'
		: '0'
	};
	display: flex;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	background: #e7daff;
	padding: 0 80px;
	z-index: 2;

	${IconMenu} {
		align-self: center !important;
	}

	${Title} {
		color: #333333 !important;
		display: ${(props) => props.fixed
			? 'flex'
			: 'none'
		};
	}

	${Page} {
		color: #333333 !important;
		display: ${(props) => props.fixed
			? 'flex'
			: 'none'
		};
	}

	@media(max-width: 530px) {
		justify-content: center;
		${Title} {
			display: none;
		}
	}
`

export const HeadMenuFixed = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
`
