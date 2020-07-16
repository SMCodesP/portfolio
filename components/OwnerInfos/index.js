import Graph from './graph/'

import {
	ContainerOwner,
	ContainerOwnerInfos,
	TitleContainer,
	ImageContainer,
	ContainerInfos,
	InfosItem,
	InfosKey,
	InfosValue
} from './style'

export default function OwnerInfos() {
	return (
		<ContainerOwner>
			<ContainerOwnerInfos>
				<TitleContainer>Projetos</TitleContainer>
				<ImageContainer src='/user.webp' />
			</ContainerOwnerInfos>
			<ContainerInfos>
				<InfosItem>
					<InfosKey>Perfil</InfosKey>
					<InfosValue>Desenvolvedor Front-end, Back-end & APIs</InfosValue>
				</InfosItem>
				<br/>
				<Graph />
			</ContainerInfos>
		</ContainerOwner>
	)
}
