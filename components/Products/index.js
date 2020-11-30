import Link from 'next/link'
import { useState, useContext } from 'react';
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
	const [loading, setLoading] = useState(false);
	const {colors} = useContext(ThemeContext);

	return (
		<Container>
			<ContainerItems>
				<CategoryTitle>{category.title} ({category.products.length})</CategoryTitle>
				<ContainerProducts items={items}>
				{loading ? (
					<Product
						productIndex={0}
						product={{}}
						loading={true}
					/>
				) : category.products.map((item, index) => {
					if (limit && index > 2) {
					} else {
						return (
							<Product
								key={index}
								productIndex={index}
								product={item}
								category={category}
								loading={loading}
							/>
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
