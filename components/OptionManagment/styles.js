import styled from 'styled-components'
import { shade, parseToRgb, rgba } from 'polished'

export const ContainerOptionsManagment = styled.div`
	margin: 0 10px;
	display: flex wrap;
	align-items: flex-end;

	@media (max-width: 550px) {
		margin: 0 5px;
	}

	@media (max-width: 500px) {
		flex-direction: column;
	}

	@media (max-width: 400px) {
		margin: 0;
	}
`

export const OptionManagment = styled.div`
	height: fit-content;
	flex: 1;
	display: flex;
	padding: 10px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	justify-content: center;
	align-items: center;
	background: ${({theme}) => shade(0.25, theme.colors.inverseText)};
	cursor: pointer;
	border-top: ${({selected}) => selected ? '3px' : '0'} solid ${({theme}) => theme.colors.fifthText};
	transition: .2s all;

	& h1 {
		margin: 0 !important;
		font-size: ${({selected}) => selected ? '18px' : '16px'};
		font-weight: ${({selected}) => selected ? 'bold' : 'normal'};
		transition: .2s all;
	}

	&:hover {
		filter: brightness(75%);
	}

	@media (max-width: 500px) {
		width: 100%;
		border-radius: 0;
		margin-right: 0 !important;
		margin-left: 0 !important;
		border-left: ${({selected}) => selected ? '2px' : '2px'} solid ${({theme}) => theme.colors.fifthText};
		border-right: ${({selected}) => selected ? '2px' : '2px'} solid ${({theme}) => theme.colors.fifthText};
		border-top: ${({selected}) => selected ? '2px' : '2px'} solid ${({theme}) => theme.colors.fifthText};

		&:first-child {
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
		}
	}
`

export const ContainerManagment = styled.div`
	margin: 0 10px;
	padding: 15px;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	margin-bottom: 50px !important;
	display: flex;
	flex-direction: column;

	@media (max-width: 600px) {
		padding: 5px;
	}

  @media (max-width: 550px) {
  	margin: 0 5px;
  }

	@media (max-width: 400px) {
		margin: 0;
	}
`

export const ContainerButtons = styled.div`
  align-self: flex-end;
  margin-top: 10px;

  @media (max-width: 590px) {
  	flex-direction: column;
  }
`

export const ButtonSubmit = styled.button`
	min-width: 128px;
	margin: 0 5px;
	height: 36px;
	opacity: .75;
	justify-content: center;
	align-self: flex-end;
	align-items: center;
	padding: 5px 15px;
	border-radius: 5px;
	cursor: pointer;
	color: ${({theme}) => theme.colors.inverseText};
	font-weight: bold;
	font-size: 17px;
	border: 1px solid ${({theme}) => rgba({
		...parseToRgb(theme.colors.inverseText),
		alpha: 0.25
	})};
	background: ${({theme}) => theme.colors.fourthText};
	transition: opacity .2s, filter .2s, border .2s;

	&:hover {
		opacity: 1;
		border: 1px solid ${({theme}) => rgba({
			...parseToRgb(theme.colors.inverseText),
			alpha: 0.5
		})};
	}

	&:active {
		filter: brightness(75%);
	}

  @media (max-width: 590px) {
  	margin: 5px;
  }
`
