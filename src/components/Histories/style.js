import styled from 'styled-components'
import { shade } from 'polished'

export const ContainerHistories = styled.div`
	width: 100%;
	display: flex;
	margin-top: 10px;
	padding: 75px;

  	@media (max-width: 1100px) {
	    flex-direction: column;
	    align-items: center;
  	}

  	@media (max-width: 600px) {
    	padding: 15px;
  	}
`

export const MainHistories = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
`

export const HistoriesTitle = styled.h1`
	color: ${({theme}) => theme.colors.secundaryText};
`

export const HistoriesSubTitle = styled.h2`
	color: ${({theme}) => shade(0.2, theme.colors.secundaryText)};
	font-size: 20px;
	margin-bottom: 40px;
	font-weight: 500;

  	@media (max-width: 600px) {
		margin-bottom: 10px;
  	}
`

export const HistoriesText = styled.p`
	width: 100%;
	font-size: 13pt;
	margin: 10px 0;
  	padding: 20px;
	text-indent: 1.30em;
	line-height: 20px;
	color: ${({theme}) => theme.colors.text};

	@media (max-width: 600px) {
	    margin: 0;
	}
`

export const ContainerImages = styled.div`
	margin-top: 120px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 9px;

  	@media (max-width: 1100px) {
    	margin-top: 40px;
  	}

  	@media (max-width: 625px) {
    	grid-template-columns: 1fr;
  	}
`

export const ImageExample = styled.img`
	border-radius: 15px;
	width: 260px;
	cursor: not-allowed;
	transition: transform .3s, border-radius .3s;
	user-select: none;

	&:hover {
		border-radius: 5px;
		transform: scale(1.065);
		filter: brightness(50%);
	}
`

