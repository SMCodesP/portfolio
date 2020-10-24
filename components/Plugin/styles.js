import styled from 'styled-components'

export const ContainerPlugin = styled.li`
	background: ${({theme}) => theme.colors.secundaryBackground};
	border-radius: 5px;
	padding: 10px;
	width: 100%;
	margin: 2.5px;

	@media (max-width: 575px) {
		flex-direction: column;
		align-items: center;
	}
`

export const ImageLogo = styled.img`
	height: 100%;
	margin: 0 20px 0 0;
	cursor: pointer;
	background: ${({theme}) => theme.colors.secundaryBackground};
	padding: 10px;
	transition: filter .4s, border-radius .4s;

	&:hover {
		border-radius: 15px;
		filter: brightness(75%);
	}

	@media (max-width: 575px) {
		margin: 0;
	}
`

export const PluginBody = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 575px) {
		& * {
			align-items: center;
			text-align: center;
			justify-content: center;
		}
	}
`

export const Name = styled.p`
	font-size: 17pt;
	font-weight: 700;
	color: ${({theme}) => theme.colors.fifthText};
	margin-bottom: 6px;
`

export const Info = styled.p`
	width: 100%;
	color: ${({theme}) => theme.colors.secundaryText};
	margin: 2px 7px;

	& span {
		color: ${({theme}) => theme.colors.fourthText};
		margin: 0 5px;
	}
`
