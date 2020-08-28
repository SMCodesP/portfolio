import Link from 'next/link'
import ProgressiveImage from 'react-progressive-graceful-image'

import products from '../../utils/products'

import {
	Container,
	ImageLogo,
	Title,
} from './styles'

export default ({product, productIndex}) => {
	return (
		<Container>
			<Link href={`/${product.category}/[id]`} as={`/${product.category}/${productIndex}`}>
				<a href={`/${product.category}/${productIndex}`}>
					<ProgressiveImage
						src={product.image.large}
						placeholder={product.image.small}
					>
						{(src, loading) => product.image.size ? (
							<ImageLogo
								style={{
									width: product.image.size.width || 128,
									height: product.image.size.height || 128,
									filter: loading ? 'blur(5px)' : ''
								}}
								not_auto={true}
								src={src}
								alt={`${product.title} logo image`}
							/>
						) : (
							<ImageLogo
								style={{
									width: loading ? 128 : '100%',
									height: loading ? 128 : 'auto',
									filter: loading ? 'blur(10px)' : ''
								}}
								not_auto={false}
								src={src}
								alt={`${product.title} logo image`}
							/>
						)}
					</ProgressiveImage>
				</a>
			</Link>
			<Title text={'`'+product.title+'`'} />
		</Container>
	)
}