import Link from 'next/link'
import {useContext} from 'react'

import ProgressiveImage from 'react-progressive-graceful-image'
import {shade} from 'polished'
import {ThemeContext} from 'styled-components'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

import RenderMarkdown from '../RenderMarkdown/'

import products from '../../utils/products'

import {
	Container,
	ImageLogo,
	Title,
} from './styles'

function ResumeProduct({product, productIndex, loading}) {
	const {colors} = useContext(ThemeContext)

	return (
		<Container>
			{loading ? (
				<SkeletonTheme
					color={shade(0.1, colors.secundaryBackground)}
					highlightColor={shade(0.1, colors.background)}
				>
					<Skeleton width={142} height={132} duration={2} style={{
						padding: '10px',
						borderRadius: '5px',
					}} />
					<br />
					<Skeleton width={142} height={12} duration={2} style={{
						marginTop: '5px',
						padding: '10px',
						borderRadius: '5px',
					}} />
				</SkeletonTheme>
			) : (
				<>
					<Link href={`/products/${product.category}/[id]`} as={`/products/${product.category}/${productIndex}`}>
						<a href={`/products/${product.category}/${productIndex}`}>
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
					<RenderMarkdown text={'`'+product.title+'`'} />
				</>
			)}
		</Container>
	)
}

export default ResumeProduct
