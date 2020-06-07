import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 100vh;
	background: url('/hello.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Title = styled.h1`
	color: #fff;
	display: block;
	font-family: 'Libre Franklin', sans-serif;
	font-size: 26px;
	font-weight: 600;
	line-height: 26px;
`

export const ListingPage = styled.ul`
	display: flex;
`

export const Options = styled.div`
	width: 80%;
	position: relative;
	margin-top: 88px;
	display: flex;
	justify-content: space-between;
`

export const Page = styled.li`
	line-height: 26px;
	user-select: none;
	list-style: none;
	cursor: pointer;
	color: #fff;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 18px;
	font-weight: ${(props) => props.locate
		? '600'
		: '400'};
	margin: 0 8px 0 8px;
	transition: font-weight .2s, transform .2s;

	&:hover {
		font-weight: ${(props) => props.locate
			? '600'
			: '900'
		};
		transform: ${(props) => props.locate
			? 'scale(1)'
			: 'scale(1.2)'
		};
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

export const ContainerWelcome = styled.div`
	width: 80%;
	margin-top: 100px;
`

export const Welcome = styled.h1`
	font-weight: 400;
	color: #fff;
	font-size: 64px;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;

	& > strong {
		font-weight: 600 !important;
	}
`

export const SubWelcome = styled.h2`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	color: #fff;
	font-size: 24px;
	font-weight: 400;
	line-height: 40px;
	margin-bottom: 75px;
`

export const WorkLast = styled.a`
	font-weigt: regular;
	color: #fff;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 18px;
`
