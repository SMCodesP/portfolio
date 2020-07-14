import styled from 'styled-components'

export const Options = styled.div`
	width: 80%;
	margin-top: 88px;
	display: flex;
	justify-content: space-between;
`

export const Title = styled.h1`
	color: #fff;
	font-size: 26px;
	font-weight: 600;
	line-height: 26px;
`

export const ListingPage = styled.ul`
	display: flex;
`

export const Page = styled.li`
	line-height: 26px;
	user-select: none;
	list-style: none;
	cursor: pointer;
	color: #fff;
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
	background: #EDEDED;
	padding: 0 10%;
	
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
