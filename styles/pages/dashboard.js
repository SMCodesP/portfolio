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
	margin-bottom: 15px;
	top: 40px;

	display: flex;
	flex-direction: column;

	& h1 {
		font-size: 28pt;
		margin: 0  0 10px 0;
	}

  @media (max-width: 415px) {
    width: calc(100% - 65px);
    margin-left: 65px;

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

export const ContainerAlert =  styled.div`
	background: #7289DA;
	border: 1px solid #99AAB5;
	border-radius: 5px;
	padding: 15px;
	margin-bottom: 10px;
	flex-direction: column;

	& form {
		margin: 5px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& button {
		width: 142px;
		height: 42px;
		background: #23272A;
		color: #FFFFFF;
		border: 0;
		border-radius: 64px;
		cursor: pointer;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		transition: filter .2s, transform .5s, box-shadow .2s;
	}

	& button:hover {
		filter: brightness(150%);
		box-shadow: 0 0 5px 1px #2C2F33;
		transform: scale(1.050);
	}

	& input {
		margin: 0 20px;
		height: 32px;
		width: 275px;
		padding: 5px 10px;
		border-radius: 5px;
		background: #2C2F33;
		color: #99AAB5;
		border: 1px solid #23272A;
	}
`

export const AlertTitle = styled.p`
	margin: 0 0 5px 0;
	font-size: 24px;
	font-weight: bold;
`

export const AlertDescription = styled.p`
	font-size: 16px;
	padding: 5px 10px;
`

export const ContainerError =  styled.div`
	background: #e02041;
	border: 1px solid red;
	border-radius: 5px;
	padding: 15px;
	margin-bottom: 10px;
	flex-direction: column;
	color: #fff;
`

export const ErrorTitle = styled.p`
	margin: 0 0 5px 0;
	font-size: 24px;
	font-weight: bold;
	color: #fff;
`

export const ErrorDescription = styled.p`
	font-size: 16px;
	padding: 5px 10px;
	color: #fff;
`
