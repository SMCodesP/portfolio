import styled from 'styled-components'
import { shade } from 'polished'

export const ContainerLicense = styled.div`
	display: flex;
	flex-direction: column;
	margin: 25px 2% 100px 2%;
	border-radius: 10px;
	background-color: ${({theme}) => theme.colors.secundaryBackground};
	background-image: linear-gradient(-135deg, ${({theme}) => theme.colors.primary}, ${({theme}) => shade(0.2, theme.colors.primary)});
	color: ${({theme}) => theme.colors.text};
	padding: 25px;
`;

export const Title = styled.p`
	font-size: 22px;
	font-weight: 600;
`

export const Description = styled.p`
	padding: 15px;
`
