import Link from 'next/link'
import {useContext} from 'react'

import ProgressiveImage from 'react-progressive-graceful-image'
import {shade} from 'polished'
import {ThemeContext} from 'styled-components'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

import RenderMarkdown from '../RenderMarkdown/'

import {
	Container,
	ImageLogo,
	Title,
} from './styles'

function ResumeProduct({product, loading}) {
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
					<Link href={`/products${product.category.link}/[id]`} as={`/products${product.category.link}/${product.id}`}>
						<a href={`/products${product.category.link}/${product.id}`}>
							<ProgressiveImage
								src={product.image_large}
								placeholder={product.image_small}
							>
								{(src, loading) => product.image_size ? (
									<ImageLogo
										style={{
											width: 142,
											filter: loading ? 'blur(5px)' : ''
										}}
										not_auto={true}
										src={src}
										alt={`${product.title} logo image`}
									/>
								) : (
									<ImageLogo
										style={{
											width: 142,
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
