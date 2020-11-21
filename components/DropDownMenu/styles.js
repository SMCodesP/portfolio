import styled from 'styled-components'

export const ContainerDropDownMenu = styled.div`

`

export const Page = styled.li`
	opacity: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin: 0 8px;

	user-select: none;
	list-style: none;
	cursor: pointer;
	color: ${({ color, theme }) => color || theme.colors.text};
	font-size: 18px;
	font-weight: ${(props) => props.locate
		? '900'
		: ''};
	transition: transform .2s, filter .2s;

	@media(min-width: 890px) {
		&:hover {
			filter: brightness(75%);
		}
	}
`

export const ListDropPage = styled.ul`
	display: flex;
	flex-direction: column;
	position: absolute;
	list-style: none;

	& a {
		margin: 0 !important;
	}

	& a:first-child li {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	& a:last-child li {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`

export const DropPage = styled.li`
	width: 100%;
	background: ${({theme}) => theme.colors.secundaryBackground};
	padding: 7.5px 15px;
	cursor: pointer;
	transition: .2s filter;

	&:hover {
		filter: brightness(75%);
		text-decoration: underline;
	}
`
