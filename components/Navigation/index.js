import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Menu from '../Menu';
import {
	Container,
	ContainerWelcome,
	Welcome,
	SubWelcome,
	WorkLast,
	Down
} from './styles'

const Navigation = ({ page, scrollingToRef, refExternal }) => {
	const {colors} = useContext(ThemeContext)

	return (
		<Container>
			<Menu page={page} />
			<ContainerWelcome>
				<Welcome ><strong>Oi</strong>, seja muito bem-vindo!</Welcome>
				<SubWelcome>Me chamo Samuel e é um prazer encontra-lo em meu portfólio.</SubWelcome>
				<WorkLast href="/last">Trabalho mais recente</WorkLast>
			</ContainerWelcome>
			<Down
				size={64}
				color={colors.secundary}
				onClick={() => {
					console.log(refExternal)
				}}
			/>
		</Container>
	)
}

export default Navigation
