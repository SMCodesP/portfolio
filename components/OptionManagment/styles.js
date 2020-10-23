import styled from 'styled-components'
import { shade, parseToRgb, rgba } from 'polished'

export const ContainerOptionsManagment = styled.div`
	margin: 0 10px;
	display: flex wrap;
	align-items: flex-end;
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
`

export const ContainerManagment = styled.div`
	margin: 0 10px;
	padding: 15px;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
`

export const ButtonSubmit = styled.button`
	width: 106px;
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
`
