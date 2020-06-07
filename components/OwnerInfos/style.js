import styled from 'styled-components'

export const ContainerOwner = styled.div`
	width: 100%;
	margin-top: 115px;
	padding: 30px 0 30px 165px;
	background: #CECECE;
	display: grid;
	grid-template: 1fr / 2fr 3fr;
`

// Container to reserved is information the container
export const ContainerOwnerInfos = styled.div`
	display: grid;
`

export const TitleContainer = styled.h1`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	color: #333333;
	font-weight: bold;
	font-size: 24px;
`

export const ImageContainer = styled.img`
	width: 290px;
	height: 305;
	border-radius: 20px;
`

// Container infos owner
export const ContainerInfos = styled.nav`
	margin-top: 75px;
	display: flex;
	flex-direction: column;
`

export const InfosItem = styled.div`
	display: grid;
	grid-template: 50px 1fr / 1fr 4fr;
`

export const InfosKey = styled.h2`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: bold;
	color: #333333;
`

export const InfosValue = styled.p`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 18px;
	font-weight: regular;
	color: #333333;
`
