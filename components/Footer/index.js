import Clipoard from '../Clipoard'

import {
	BorderCustom,
	Container,
	FooterContainer,
	Title,
	SubTitle,
	SocialNetworking,
	Github,
	LinkedIn,
	ContainerColumn,
	Discord,
	Link,
	GoTo,
	ProjectThis,
	Forked,
	Documentation,
} from './styles'

const Footer = () => (
	<>
		<BorderCustom />
		<Container>
			<ProjectThis>
				<Link href="https://github.com/SMCodesP/portfolio" target="_blank">
					<Forked
						title="Link para esse projeto no meu github"
					/>
				</Link>
				<Link href="https://smcodesp.github.io/portfolio/" target="_blank">
					<Documentation
						title="Link para a documentação desse projeto no github pages"
					/>
				</Link>
			</ProjectThis>
			<FooterContainer>
				<Title>Feito com ❤️ por SMCodes</Title>
				<SubTitle>Este site não possuí quaisquer vínculos com a Mojang AB.</SubTitle>
			</FooterContainer>
			<SocialNetworking>
				<Link href="https://github.com/SMCodesP" target="_blank">
					<Github
						title="Link para o meu perfil do github"
					/>
				</Link>
				<Link href="https://br.linkedin.com/in/samuel-pereira-da-silva-947bb31a5" target="_blank">
					<LinkedIn
						title="Link para o meu perfil do linkedin"
					/>
				</Link>
				<ContainerColumn>
					<Clipoard
						text="SMCodes#4207"
						success="Usuário do discord copiado com sucesso!"
					>
						<Discord
							title="Clique para copiar username e minha tag no discord"
						/>
					</Clipoard>
					<Link
						href="https://discord.com/users/360247173356584960"
						target="_blank"
						title="Link para o meu perfil no discord"
					>
						<GoTo>
							Go to
						</GoTo>
					</Link>
				</ContainerColumn>
			</SocialNetworking>
		</Container>
	</>
)

export default Footer
