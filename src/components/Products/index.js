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

export default function Products({ items, category, limit }) {
	const [loading, setLoading] = useState(true);
	const {colors} = useContext(ThemeContext);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 15000)
	}, [])

	return (
		<Container>
			<ContainerItems>
				<CategoryTitle>{category.title}</CategoryTitle>
				<ContainerProducts items={items}>
					{loading ? (
							<Product productIndex={0} product={{}} loading={true} />
						) : category.items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((item, index) => {
						if (limit && index > 2) {
						} else {
							return (
								<Product key={index} productIndex={index} product={item} loading={loading} />
							)
						}
					})}
				</ContainerProducts>
				{limit && (
					<Link href={category.link}>
						<ContainerMoreItems>
							<MoreItem>Ver mais</MoreItem>
							<FiArrowRight color={colors.secundary} size={28} />
						</ContainerMoreItems>
					</Link>
				)}
			</ContainerItems>
		</Container>
	)
}
