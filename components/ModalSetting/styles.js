import styled from 'styled-components'
import { shade } from "polished";
import Switch from "react-switch";

export const UserMenu = styled.div`
	border-radius: 5px;
	background: ${({theme}) => theme.colors.background};
	width: 100%;
	height: 95vh;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`

export const UserIcon = styled.img`
	width: 64px;
	height: 64px;
	cursor: pointer;
	transition: filter .3s;

	&:hover {
		filter: brightness(80%);
	}
`

export const ListOptions = styled.ul`
	margin: 25px;
	width: 100%;
	padding: 0 15px;
`

export const Option = styled.li`
	padding: 10px;
	border-radius: 5px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${({theme}) => theme.colors.secundaryBackground};
`

export const OptionTitle = styled.p`
	color: ${({theme}) => theme.colors.secundaryText};
	font-size: 14pt;
	line-height: 15pt;

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`

export const OptionSelect = styled(Switch)``

export const Line = styled.hr`
	display: block;
	height: 1px;
	border: 0;
	border-top: 2px solid ${({theme}) => shade(0.4, theme.colors.background)};
	filter: blur(1px);
    margin: 1em 0;
    padding: 0;
	width: 100%;
`

export const Username = styled.p`
	color: ${({theme}) => theme.colors.text};
	font-size: 14pt;
	font-weight: medium;
	margin: 5px 0;
`

export const IconMenu = styled.button`
	position: relative;
	float: left;
	overflow: hidden;
	margin: 0;
	padding: 0;
	top: -5px;
	width: 96px;
	height: 56px;
	font-size: 0;
	text-indent: -9999px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	box-shadow: none;
	border-radius: none;
	border: none;
	cursor: pointer;
	-webkit-transition: background 0.3s;
	transition: background 0.3s;

	& span {
		display: block;
		position: absolute;
		left: 18px;
		right: 18px;
		height: 8px;
		background: #e02041;
		border-radius: 0.57143rem;
	}

	& span::before,
	& span::after {
		position: absolute;
		display: block;
		left: 0;
		width: 100%;
		height: 8px;
		background-color: #e02041;
		border-radius: 0.57143rem;
		content:"";
	}

	& span::before {
		top: -15px;
	}
	& span::after {
		bottom: -15px;
	}

	& {
		background: none;
	}
	& span {
		-webkit-transition: background 0s 0.3s;
		transition: background 0s 0.3s;
	}
	& span::before, & span::after {
		-webkit-transition-duration: 0.3s, 0.3s;
		transition-duration: 0.3s, 0.3s;
	}
	& span::before {
		-webkit-transition-property: top, -webkit-transform;
		transition-property: top, transform;
	}
	& span::after {
		-webkit-transition-property: bottom, -webkit-transform;
		transition-property: bottom, transform;
	}

	${props => props.closed ? `
		& {
			background: none;
		}
		& span {
			visibility: hidden;
		}
		& span::before {
			top: 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
			visibility: visible;
		}
		& span::after {
			bottom: 0;
			-webkit-transform: rotate(-45deg);
			-ms-transform: rotate(-45deg);
			transform: rotate(-45deg);
			visibility: visible;
		}
	` : ``}

	@media (min-width:890px) {
		display: none;
	}
`
