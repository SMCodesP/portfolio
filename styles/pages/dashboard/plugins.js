import styled from 'styled-components'
import { shade } from 'polished'

export const ListPlugins = styled.ul`
	width: 97.5%;
	margin: 0 1.25%;
	padding-bottom: 45px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5px;

	& a {
		text-decoration: none;
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const ContainerInput = styled.label`
	margin: 0 5% 15px 5%;
	position: relative;

	&:before {
		content: "";
		position: absolute;
		left: 10px;
		top: 0;
		bottom: 0;
		width: 25px;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='currentcolor' color='${({theme}) => (theme.title.toLowerCase() === 'dark') ? 'white' : 'black'}'%3E%3Cpath color='${({theme}) => (theme.title.toLowerCase() === 'dark') ? 'white' : 'black'}' d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center no-repeat;
		z-index: 999999999999;
	}
`

export const SearchBar = styled.input`
	width: 100%;
	padding: 10px 45px;
	background: ${({theme}) => theme.colors.secundaryBackground};
	border-radius: 5px;
	border: 1px solid ${({theme}) => shade(0.3, theme.colors.secundaryBackground)};
	font-size: 16px;
`
