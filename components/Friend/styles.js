import styled from 'styled-components'
import { FiTrash2 } from 'react-icons/fi'

export const Friend = styled.li`
	background: ${({theme}) => theme.colors.secundaryBackground};
	display: flex;
	flex-direction: column;
	padding-bottom: 8px;

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

export const ConfirmConfigure = styled.div`
	align-self: flex-end;
	margin-right: 10px;

	& svg {
		margin: 5px;
		cursor: pointer;

		transition: filter .2s;
	}

	& svg:hover {
		filter: brightness(75%) blur(0);
	}
`
