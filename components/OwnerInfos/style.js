import styled from 'styled-components'

export const ContainerOwner = styled.div`
	width: 100%;
	margin-top: 115px;
	padding: 30px 0 30px 165px;
	background: #CECECE;
	display: flex;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	color: #333333;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0 0 !important;
  }
`

export const ContainerOwnerInfos = styled.div`
`

export const TitleContainer = styled.h1`
	font-weight: bold;
	font-size: 24px;
`

export const ImageContainer = styled.img`
	width: 230px;
	border-radius: 20px;
	cursor: pointer;
	transition: filter 1s;
  margin-top: 15px;

	&:hover {
		filter: brightness(65%);
	}

  @media (max-width: 1100px) {
    margin-bottom: 40px;
  }
`

export const ContainerInfos = styled.nav`
	display: flex;
	flex-direction: column;
  margin-left: 10%;
`

export const InfosItem = styled.div`
	display: grid;
	grid-template: 50px 1fr / 1fr 4fr;
`

export const InfosKey = styled.h2`
	font-size: 20px;
	font-weight: bold;
`

export const InfosValue = styled.p`
	font-size: 18px;
`
