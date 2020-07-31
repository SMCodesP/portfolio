import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
	width: 100%;
	height: 400px;
	background: ${({theme}) => darken(0.02, theme.colors.background)};
`

export const ImageLogo = styled.img``
