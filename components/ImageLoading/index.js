import ProgressiveImage from 'react-progressive-graceful-image'

export default ({image, defaultSize, alt = 'Imagem de logo'}) => (
	<ProgressiveImage
		src={image.large}
		placeholder={image.small}
	>
		{(src, loading) => (
			<img
				style={{
					height: defaultSize,
					filter: loading ? 'blur(5px)' : ''
				}}
				src={src}
				alt={alt}
			/>
		)}
	</ProgressiveImage>
)
