import styled from 'styled-components'

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
	background: ${({theme}) => theme.colors.inverseText};
	cursor: pointer;
	border-top: ${({selected}) => selected ? '3px' : '0'} solid ${({theme}) => theme.colors.fifthText};
	transition: .2s all;

	& h1 {
		margin: 0 !important;
		font-size: ${({selected}) => selected ? '18px' : '16px'};
		font-weight: ${({selected}) => selected ? 'bold' : 'normal'};
		transition: .2s all;
	}
`

export const ContainerManagment = styled.div`
	margin: 0 10px;
	padding: 5px;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	height: 85vh;
	background: ${({theme}) => theme.colors.secundaryBackground};
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
