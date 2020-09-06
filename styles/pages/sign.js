import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	${({theme}) => `background-image: url('http://api.thumbr.it/whitenoise-361x370.png?background=${theme.colors.background.substring(1, toString(theme.colors.background).length)}ff&noise=${theme.colors.text.substring(1, toString(theme.colors.text).length)}&density=1&opacity=40');`}
`
