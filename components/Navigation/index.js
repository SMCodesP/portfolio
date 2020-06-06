import {
	Container,
	ContainerNavigate,
	Options,
	Title,
	ListingPage,
	Page,
	ContainerWelcome,
	Welcome,
	SubWelcome,
	WorkLast
} from './style'

export default function Navigation() {
	return (
		<Container>
			<ContainerNavigate>
			</ContainerNavigate>
			<Options>
				<Title>SMCodes</Title>
				<ListingPage>
					<Page locate={true}>Início</Page>
					<Page>Sobre</Page>
					<Page>Skills</Page>
					<Page>Sites</Page>
					<Page>Plugins</Page>
					<Page>APIs</Page>
					<Page>Outros</Page>
				</ListingPage>
			</Options>
			<ContainerWelcome>
				<Welcome><strong>Oi</strong>, seja muito bem-vindo!</Welcome>
				<SubWelcome>Me chamo Samuel e é um prazer encontra-lo em meu portfólio.</SubWelcome>
				<WorkLast href="/last">Trabalho mais recente</WorkLast>
			</ContainerWelcome>
		</Container>
	)
}
