import Menu from '../Menu';
import {
	Container,
	ContainerWelcome,
	Welcome,
	SubWelcome,
	WorkLast,
} from './styles'

const Navigation = ({ page }) => {
	return (
		<Container>
			<Menu page={page} />
			<ContainerWelcome>
				<Welcome ><strong>Oi</strong>, seja muito bem-vindo!</Welcome>
				<SubWelcome>Me chamo Samuel e é um prazer encontra-lo em meu portfólio.</SubWelcome>
				<WorkLast href="/last">Trabalho mais recente</WorkLast>
			</ContainerWelcome>
		</Container>
	)
}

export default Navigation
