import styled from 'styled-components'

export const Button = styled.a`
    padding: 15px 25px;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.text};
    text-decoration: none;
    cursor: pointer;
    margin: 25px 0;
    transition: .2s transform, .2s background, .2s box-shadow, .2s text-decoration, .2s color;

    &:hover {
		transform: ${(props) => props.locate
			? 'scale(1)'
			: 'scale(1.05)'};
		background: ${({theme}) => theme.colors.text};
		box-shadow: 0 0 5px 0 ${({theme}) => theme.colors.primary};
		text-decoration: underline;
		color: ${({theme}) => theme.colors.inverseText};
    }
`