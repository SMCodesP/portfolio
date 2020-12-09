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

	const prevProduct = params.products_of_category.find((product_finded) => product_finded.id === product.id-1)
	const nextProduct = params.products_of_category.find((product_finded) => product_finded.id === product.id+1)
	
	return (
		<ContainerNextPrevious>
			{(prevProduct) ? (
				<Link href={`/products${product.category.link}/[product]`} as={`/products${product.category.link}/${prevProduct.id}`}>
					<TextPrevNext href={`/products${product.category.link}/${prevProduct.id}`}>
						<FiChevronLeft color={colors.primary} size={24} />
						<span>Anterior</span>
					</TextPrevNext>
				</Link>
			) : (<span />)}
			<ContainerListPages>
				<ListProductsPages>
					{params.products_of_category.map((product_maping, index) => (product_maping.id !== product.id) ? (
						<Link href={`/products${product.category.link}/[product]`} as={`/products${product.category.link}/${product_maping.id}`} key={`product_page_${index}`}>
							<a href={`/products${product.category.link}/${product_maping.id}`}>
								<ProductPage>{product_maping.id}</ProductPage>
							</a>
						</Link>
					) : (
						<ProductPage key={`product_custom_page_${index}`} style={{
							cursor: 'not-allowed',
							filter: 'brightness(80%)'
						}}>{product_maping.id}</ProductPage>
					))}
				</ListProductsPages>
			</ContainerListPages>
			{(nextProduct) ? (
				<Link href={`/products${product.category.link}/[product]`} as={`/products${product.category.link}/${nextProduct.id}`}>
					<TextPrevNext href={`/products${product.category.link}/${nextProduct.id}`}>
						<span>Próximo</span>
						<FiChevronRight color={colors.primary} size={24} />
					</TextPrevNext>
				</Link>
			) : (<span />)}
		</ContainerNextPrevious>
	)
}

export default ListingPages
