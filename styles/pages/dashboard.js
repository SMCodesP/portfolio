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
	height: 300px;

	position: relative;
	margin-left: 95px;
	top: 75px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5px;
`

export const ContainerInfo = styled.div`
	background: ${({theme}) => theme.colors.background};
	border-radius: 5px;
	box-shadow: 0 0 5px 1px ${({theme}) => theme.colors.text}33;
`
