import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Menu from '../Menu';
import {
	Container,
	ContainerWelcome,
	Welcome,
	SubWelcome,
	WorkLast,
	DownLink,
	Down,
} from './styles'

const Navigation = ({ page, scrollingToRef, categories }) => {
	const {colors} = useContext(ThemeContext)

	return (
		<Container>
			<Menu page={page} categories={categories} />
			<ContainerWelcome>
				<Welcome ><strong>Oi</strong>, seja muito bem-vindo!</Welcome>
				<SubWelcome>Me chamo Samuel e é um prazer encontra-lo em meu portfólio.</SubWelcome>
				<Link href={`/web/[id]`} as={`/web/0`}><WorkLast href={`/web/0`}>Trabalho mais recente</WorkLast></Link>
			</ContainerWelcome>
			<DownLink href="/#products"><Down
				size={64}
				color={colors.secundary}
			/></DownLink>
		</Container>
	)
}

export default Navigation
