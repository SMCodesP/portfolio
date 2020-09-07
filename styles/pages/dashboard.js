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
