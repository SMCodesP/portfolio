import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
	width: 100%;
	height: 400px;
	background: ${({theme}) => darken(0.9, theme.colors.background)};
	color: ${({theme}) => theme.colors.light};
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ImageLogo = styled.img`
	width: 100%;
	height: 400px;
	filter: opacity(10%) ${({loading}) => loading ? 'blur(10px)' : 'blur(4px)'};
	position: absolute;
`

export const Title = styled.h1`
	font-size: 32pt;
  z-index: 7 !important;
	color: ${({theme}) => theme.colors.light};
`

export const SubTitle = styled.h2`
	font-size: 18pt;
	font-weight: 400;
  z-index: 6 !important;
  text-align: center;
  padding: 15px 25px;
	color: ${({theme}) => theme.colors.light};
`
