import ProgressiveImage from 'react-progressive-graceful-image';

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
				<TitleContainer>Perfil</TitleContainer>
				<InfosValue>Desenvolvedor Front-end, Back-end & APIs</InfosValue>
				<ProgressiveImage
					src="/user.webp"
					placeholder="/user_min.webp"
				>
					{(src, loading) => (
						<ImageContainer
							style={{
								filter: loading ? 'blur(4px)' : ''
							}}
							src={src}
							alt="SMCodes picture example"
						/>
					)}
				</ProgressiveImage>
			</ContainerOwnerInfos>
			<ContainerInfos>
				<InfosItem>
					<InfosKey>Projetos</InfosKey>
				</InfosItem>
				<br/>
				<Graph />
			</ContainerInfos>
		</ContainerOwner>
	)
}
