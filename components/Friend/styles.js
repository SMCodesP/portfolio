import styled from 'styled-components'
import { FiTrash2 } from 'react-icons/fi'

export const Friend = styled.li`
	height: 225px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	display: flex;
	flex-direction: column;

	border-radius: 5px;

	transition: transform .4s, filter .4s;

	&:hover {
		transform: scale(1.035);
		filter: brightness(95%);
	}
`

export const UserHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin: 10px;
`

export const UserAvatar = styled.img`
	width: 42px;
	height: 42px;
	border-radius: 21px;
	cursor: pointer;
`

export const Username = styled.h2`
	margin: 0 5px;
	margin-inline-end: auto;
`

export const ListPermissions = styled.ul`
	margin: 5px 25px;
	display: flex;
	flex-direction: column;
`

export const Permission = styled.li`
	display: flex;
	align-items: center;
	margin: 2.5px 0;

	& p {
		font-size: 15pt;
	}
`

export const Trash = styled(FiTrash2)`
	cursor: pointer;
	transition: filter .5s;

	&:hover {
		filter: brightness(75%);
	}
`
