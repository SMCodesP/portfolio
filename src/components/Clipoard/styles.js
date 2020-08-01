import styled, { keyframes } from 'styled-components'
import {darken} from 'polished'

const spanWidth = keyframes`
	from {
		width: 100%;
	}
	to {
		width: 0;
	}
`

const opacityContainer = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

export const ContainerSuccess = styled.div`
	background-color: ${({theme}) => darken(0.07, theme.colors.background)};
	width: 65%;
	color: ${({theme}) => theme.colors.text};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	font-size: 14pt;
	line-height: 65px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	& span {
		background-color: ${({theme}) => darken(0.1, theme.colors.background)};
		width: 0;
		height: 5px;
  	animation: ${spanWidth} 5000ms linear;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	padding: 20px;
	width: 100%;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: opacity .5s;

	opacity: ${({actived}) => actived ? 1 : 0};
	animation: ${opacityContainer} 500ms linear;
`

