import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image';

import {
	ContainerOwner,
	ContainerOwnerInfos,
	TitleContainer,
	ImageContainer,
	ContainerInfos,
	InfosValue
} from './style'

export default function OwnerInfos() {
	const theme = useContext(ThemeContext)

	return (
		<ContainerOwner>
			<ContainerOwnerInfos>
				<TitleContainer>Perfil</TitleContainer>
				<InfosValue>Desenvolvedor front-end web e back-end</InfosValue>
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
				<img align="center" src={`https://github-readme-stats.vercel.app/api?username=SMCodesP&show_icons=true&theme=${(theme.title.toLowerCase() === "dark") ? 'dracula' : 'buefy'}&count_private=true&hide_border=true&custom_title=Meus%20status%20no%20github`} />
				<br />
				<img align="center" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=SMCodesP&theme=${(theme.title.toLowerCase() === "dark") ? 'dracula' : 'buefy'}&layout=compact&langs_count=10&hide_border=true&custom_title=Linguagens%20que%20eu%20mais%20uso`} />
				{/* <Graph /> */}
			</ContainerInfos>
		</ContainerOwner>
	)
}
