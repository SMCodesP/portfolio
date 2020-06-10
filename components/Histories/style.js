import styled from 'styled-components'

export const ContainerHistories = styled.div`
	width: 100%;
	display: flex;
	margin-top: 10px;
	padding: 75px;
`

export const MainHistories = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
`

export const HistoriesTitle = styled.h1`
	color: #222222;
`

export const HistoriesSubTitle = styled.h2`
	color: #aaaaaa;
	font-size: 20px;
	margin-bottom: 40px;
	font-weight: 500;
`

export const HistoriesText = styled.p`
	width: 80%;
	font-size: 17px;
	margin: 15px 25px;
	text-indent: 1.30em;
	line-height: 20px;
`

export const ContainerImages = styled.div`
	margin-top: 120px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 9px;
`

export const ImageExample = styled.img`
	border-radius: 15px;
	width: 260px;
	cursor: not-allowed;
	backround: #000000;
	transition: transform .3s, border-radius .3s;
	user-select: none;

	&:hover {
		border-radius: 5px;
		transform: scale(1.065);
		filter: brightness(50%);
	}
`

