import ProgressiveImage from 'react-progressive-graceful-image'
import {ImageLogo} from './styles'

export default ({image, alt = 'Imagem de logo'}) => (
	<ProgressiveImage
		src={image.large}
		placeholder={image.small}
	>
		{(src, loading) => (
			<ImageLogo
				style={{
					width: (image.size) ? image.size.width || 128 : 128,
					height: (image.size) ? image.size.height || 128 : 128,
					filter: loading ? 'blur(5px)' : ''
				}}
				src={src}
				alt={alt}
			/>
		)}
	</ProgressiveImage>
)
