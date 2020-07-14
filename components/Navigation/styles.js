import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 100vh;
	background: url('/hello.webp');
	background-repeat: no-repeat;
	background-size: 100% 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Libre Franklin', sans-serif;
`



export const ContainerWelcome = styled.div`
	width: 80%;
	margin-top: 100px;
`

export const Welcome = styled.h1`
	font-weight: 400;
	color: #fff;
	font-size: 64px;

	& > strong {
		font-weight: 600 !important;
	}
`

export const SubWelcome = styled.h2`
	color: #fff;
	font-size: 24px;
	font-weight: 400;
	line-height: 40px;
	margin-bottom: 75px;
`

export const WorkLast = styled.a`
	color: #fff;
	font-size: 18px;
`
