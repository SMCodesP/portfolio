import ImageLoading from './ImageLoading'

import {
	ContainerPlugin,
	Name,
	Info,
	PluginBody
} from './styles'

const PluginComponent = ({plugin}) => {
	const {title, image} = plugin;

	return (
		<ContainerPlugin>
			<ImageLoading image={image} />
			<PluginBody>
				<Name>{title}</Name>
				<Info>Servidores ativos » <span> 2</span></Info>
				<Info>Máximo de uso por key » <span> ∞</span></Info>
				<Info>Amigos permitidos » <span> 6</span></Info>
				<Info>Tipo de key » <span> Premium</span></Info>
			</PluginBody>
		</ContainerPlugin>
	)
}

export default PluginComponent
