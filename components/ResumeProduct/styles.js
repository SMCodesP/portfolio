import styled from 'styled-components'

import RenderMarkdown from '../RenderMarkdown/'

export const Container = styled.li`
	background: ${({theme}) => theme.colors.secundaryBackground};
	margin: 10px;
	border-radius: 5px;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;

	& code {
		font-size: 18px;
		padding: 5px 10px;
	}
`

export const ImageLogo = styled.img`
	${({not_auto}) => not_auto ? '' : `
		max-width: 132px;
	`}
	cursor: pointer;
	padding: 10px;
	margin: 15px;
	border-radius: 5px;
	transition: filter .4s, border-radius .4s, background .4s;

	&:hover {
		filter: brightness(75%);
		border-radius: 10px;
		background: ${({theme}) => theme.colors.background};
	}
`

export const Title = styled(RenderMarkdown)`
`