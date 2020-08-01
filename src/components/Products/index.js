import Link from 'next/link'
import { useState, useEffect, useContext } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { ThemeContext } from 'styled-components';

import Product from '../Product'
import {
	Container,
	ContainerProducts,
	CategoryTitle,
	ContainerItems,
	ContainerMoreItems,
	MoreItem,
} from './styles'

export default function Products({ items, product, limit }) {
	const [loading, setLoading] = useState(true);
	const {colors} = useContext(ThemeContext);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 500)
	}, [])

	return (
		<Container>
			<ContainerItems>
				<CategoryTitle>{product.title}</CategoryTitle>
				<ContainerProducts items={items}>
					{product.items.map((item, index) => {
						if (limit && index > 2) {
						} else {
							return (
								<Product key={index} product={item} loading={loading} />
							)
						}
					})}
				</ContainerProducts>
				{limit && (
					<Link href={product.link}>
						<ContainerMoreItems>
							<MoreItem>Ver mais</MoreItem>
							<FiArrowRight color={colors.secundary} size={24} />
						</ContainerMoreItems>
					</Link>
				)}
			</ContainerItems>
		</Container>
	)
}
