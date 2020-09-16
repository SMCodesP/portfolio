import ProgressiveImage from 'react-progressive-graceful-image'
import {ImageLogo} from './styles'

export default ({image_min, image_max, alt = 'Imagem de logo'}) => (
	<ProgressiveImage
		src={image_max}
		placeholder={image_min}
	>
		{(src, loading) => (
			<ImageLogo
				style={{
					width: loading ? 128 : 'auto',
					height: loading ? 128 : 'auto',
					filter: loading ? 'blur(10px)' : ''
				}}
				src={src}
				alt={alt}
			/>
		)}
	</ProgressiveImage>
)