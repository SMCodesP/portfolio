import Link from 'next/link'
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

import {
	ContainerNextPrevious,
	TextPrevNext,
	ContainerListPages,
	ListProductsPages,
	ProductPage,
} from './style.js'

function ListingPages({product, ...params}) {
	const {colors} = useContext(ThemeContext)

	const listPagesQuantity = Array.from(Array(params.quantity).keys())
	const listPages = listPagesQuantity.filter((value) => value < params.id+6 && value > params.id-6)
	
	return (
		<ContainerNextPrevious>
			{(Number(params.id)-1 >= 0) ? (
				<Link href={`/${product.category}/[id]`} as={`/${product.category}/${params.id-1}`}>
					<TextPrevNext href={`/${product.category}/${params.id-1}`}>
						<FiChevronLeft color={colors.primary} size={24} />
						<span>Anterior</span>
					</TextPrevNext>
				</Link>
			) : (<span />)}
			<ContainerListPages>
				<ListProductsPages>
					{listPages.map((productId, index) => (productId != params.id) ? (
						<Link href={`/${product.category}/[id]`} as={`/${product.category}/${productId}`} key={index.toString()}>
							<a href={`/${product.category}/${productId}`}>
								<ProductPage>{productId}</ProductPage>
							</a>
						</Link>
					) : (
						<ProductPage key={index.toString()} style={{
							cursor: 'not-allowed',
							filter: 'brightness(80%)'
						}}>{productId}</ProductPage>
					))}
				</ListProductsPages>
			</ContainerListPages>
			{(params.quantity > Number(params.id)+1) ? (
				<Link href={`/${product.category}/[id]`} as={`/${product.category}/${Number(params.id)+1}`}>
					<TextPrevNext href={`/${product.category}/${Number(params.id)+1}`}>
						<span>Próximo</span>
						<FiChevronRight color={colors.primary} size={24} />
					</TextPrevNext>
				</Link>
			) : (<span />)}
		</ContainerNextPrevious>
	)
}

export default ListingPages
