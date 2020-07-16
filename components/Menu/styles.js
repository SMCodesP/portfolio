import styled from 'styled-components'

export const Options = styled.div`
	width: 100%;
	padding: 25px 90px;
	display: flex;
	justify-content: space-between;
	background: ${({ background = "transparent" }) => background};
`

export const Title = styled.h1`
	color: ${({ color = "#fff" }) => color};
	font-size: 26px;
	font-weight: 600;
	line-height: 26px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
`

export const ListingPage = styled.ul`
	display: flex;
`

export const Page = styled.li`
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
	margin: 0 8px 0 8px;
	transition: font-weight .2s, transform .2s;

	&:hover {
		transform: ${(props) => props.locate
			? 'scale(1)'
			: 'scale(1.1)'};
	}
`

export const OptionsFixed = styled.div`
	width: 100%;
	transition: height .4s;
	height: ${(props) => props.fixed
		? '80px'
		: '0'
	};
	display: ${(props) => props.fixed
		? 'flex'
		: 'none'
	};
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #e7daff;
	padding: 0 10%;
	z-index: 2;

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
`
