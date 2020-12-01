import styled from 'styled-components'

export const Container = styled.li`
	background: ${({theme}) => theme.colors.secundaryBackground};
	margin: 10px;
	border-radius: 5px;
	padding: 15px;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;

	& code {
		font-size: 18px;
		margin-top: 15px;
		padding: 5px 10px;
	}

	& p {
		margin-top: 15px;
	}
`

export const ImageLogo = styled.img`
	cursor: pointer;
	padding: 10px;
	border-radius: 5px;
	transition: filter .4s, border-radius .4s, background .4s;

	&:hover {
		filter: brightness(75%);
		border-radius: 10px;
		background: ${({theme}) => theme.colors.background};
	}
`
