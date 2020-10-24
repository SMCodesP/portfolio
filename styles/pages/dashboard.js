import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	& * {
		z-index: 5;
		display: flex;
	}
`

export const ContainerShape = styled.div`
	display: contents;
	width: 100%;
	vertical-align: middle;
	z-index: 2 !important;

	& * {
		z-index: 2 !important;
	}

	& svg {
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
	}
`

export const ContainerInformations = styled.div`
	width: calc(100% - 95px);

	position: relative;
	margin-left: 95px;
	top: 40px;

	display: flex;
	flex-direction: column;

	& h1 {
		font-size: 28pt;
		margin: 0  0 10px 0;
	}

  @media (max-width: 415px) {
    width: calc(100% - 75px);
    margin-left: 75px;

    & h1, & h2 {
      width: fit-content;
      align-self: center;
    }
  }

  @media (max-width: 400px) {
    width: calc(100% - 50px);
    margin-left: 45px;
  }

  @media (max-width: 356px) {
    width: calc(100% - 42px);
    margin-left: 42px;
  }
`

export const ContainerInfos = styled.div`
  width: 100%;
	margin: 10px 0;

	display: grid;
	grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1150px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContainerInfo = styled.div`
	background: ${({theme}) => theme.colors.background};
	border-radius: 5px;
	box-shadow: 0 0 5px 1px ${({theme}) => theme.colors.text}33;
	padding-bottom: 15px;

	display: flex;
	flex-direction: column;

	& h1 {
		font-size: 24pt;
		margin: 10px 15px 0 15px;
	}
`

export const ImageLogo = styled.img`
	width: 64px;
	height: 64px;

	border-radius: 32px;
	align-self: flex-end;
	margin: 15px;
	cursor: pointer;
	position: absolute;

	transition: filter .4s, opacity .4s;

	&:hover {
		filter: brightness(75%);
	}

  @media (max-width: 580px) {
    opacity: 0;
  }
`

export const ContainerInformationList = styled.div`
	width: 100%;

	margin: 7.5px 20px;

  @media (max-width: 1150px) {
    margin: 7.5px 0;
    padding: 0 7.5px;
  }
`

export const InformationList = styled.ul`
	display: flex;
	flex-direction: column;
`

export const InformationItem = styled.li`
	font-size: 15pt;
	margin: 5px 0 5px 5px;

  @media (max-width: 475px) {
    font-size: 12pt;
  }
`

export const ItemKey = styled.strong`
	color: ${({theme}) => theme.colors.secundaryText};
`

export const ItemValue =  styled.span`
	color: ${({theme}) => theme.colors.fourthText};

	margin: 0 5px;
`
