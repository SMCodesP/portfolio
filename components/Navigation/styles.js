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

	@media (max-width: 500px) {
		margin-top: 10px;
	}
`

export const Welcome = styled.h1`
	font-weight: 400;
	color: #fff;
	font-size: 40pt;

	& > strong {
		font-weight: 600 !important;
	}
`

export const SubWelcome = styled.h2`
	color: #fff;
	font-size: 17pt;
	font-weight: 400;
	line-height: 40px;
`

export const WorkLast = styled.a`
	color: #fff;
	font-size: 15pt;
	display: block;
	margin-top: 75px;

	@media (max-width: 925px) {
		margin-top: 35px;
	}
`
