import Link from 'next/link'
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

import {shade} from 'polished'

import getColor from '../../utils/getColor'
import styles from './ListingPages.module.css'

export default ({product, ...params}) => {
	const {colors} = useContext(ThemeContext)

	const listPagesQuantity = Array.from(Array(params.quantity).keys())
	const listPages = listPagesQuantity.filter((value) => value < params.id+6 && value > params.id-6)
	
	return (
		<div className={styles.container_next_previous}>
			{(Number(params.id)-1 >= 0) ? (
				<Link href={`/${product.category}/[id]`} as={`/${product.category}/${params.id-1}`}>
					<a className={styles.text_prev_next} href={`/${product.category}/${params.id-1}`}>
						<FiChevronLeft color={colors.primary} size={24} />
						<span>Anterior</span>
					</a>
				</Link>
			) : (<span />)}
			<div className={styles.container_list_pages}>
				<ul className={styles.list_products_pages}>
					{listPages.map((productId) => (productId != params.id) ? (
						<Link href={`/${product.category}/[id]`} as={`/${product.category}/${productId}`} key={productId}>
							<a href={`/${product.category}/${productId}`}>
								<li
									className={styles.product_page}
									style={{
										boxShadow: `0 0 2px 1px ${shade(0.1, getColor('secundaryBackground'))}`,
										background: shade(0.1, getColor('background'))
									}}
								>
									{productId}
								</li>
							</a>
						</Link>
					) : (
						<li
							className={styles.product_page}
							key={productId}
							style={{
								boxShadow: `0 0 2px 1px ${shade(0.1, getColor('secundaryBackground'))}`,
								background: shade(0.1, getColor('background')),
								cursor: 'not-allowed',
								filter: 'brightness(80%)'
							}}
						>{productId}</li>
					))}
				</ul>
			</div>
			{(params.quantity > Number(params.id)+1) ? (
				<Link href={`/${product.category}/[id]`} as={`/${product.category}/${Number(params.id)+1}`}>
					<a className={styles.text_prev_next} href={`/${product.category}/${Number(params.id)+1}`}>
						<span>Próximo</span>
						<FiChevronRight color={colors.primary} size={24} />
					</a>
				</Link>
			) : (<span />)}
		</div>
	)
}