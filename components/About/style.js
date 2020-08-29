import styled from 'styled-components'

export const ContainerAbout = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 50px;
`

export const Infos = styled.div`
	width: 77%;
	flex-direction: column;
	color: ${({theme}) => theme.colors.text};

  	@media (max-width: 600px) {
    	width: 85%;
  	}

  	@media (max-width: 400px) {
    	width: 95%;
  	}
`

export const InfoTitle = styled.h1`
	margin-bottom: 50px;
	font-weight: bold;
	font-size: 24;
	color: ${({theme}) => theme.colors.secundaryText};

  	@media (max-width: 600px) {
    	margin-bottom: 15px;
  	}
`

export const InfoText = styled.p`
	text-indent: 15pt;
	margin: 15px 25px;
	font-size: 13pt;

  	@media (max-width: 600px) {
    	margin: 3%;
  	}
`

