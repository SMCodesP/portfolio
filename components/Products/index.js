import { useState, useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";

import Product from '../Product'
import {
	Container,
	ContainerProducts,
	CategoryTitle,
	ContainerItems,
	ContainerMoreItems,
	MoreItem,
} from './styles'

export default function Products({ items }) {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 220000)
	}, [])

	useEffect(() => {
		if (products.length < 3) {
			setTimeout(() => {
				setProducts([...products, products.length]);
			}, 500)
		}
	}, [products]);

	return (
		<Container>
			<ContainerItems>
				<CategoryTitle>Minecraft plugins</CategoryTitle>
				<ContainerProducts items={items}>
					{products.map((item, index) => (
						<Product key={index} loading={loading} />
					))}
				</ContainerProducts>
				<ContainerMoreItems>
					<MoreItem>Ver mais</MoreItem>
					<FiArrowRight color="#e02041" size={24} />
				</ContainerMoreItems>
			</ContainerItems>
			<ContainerItems>
				<CategoryTitle>Web</CategoryTitle>
				<ContainerProducts items={items}>
					{products.map((item, index) => (
						<Product key={index} loading={loading} />
					))}
				</ContainerProducts>
				<ContainerMoreItems>
					<MoreItem>Ver mais</MoreItem>
					<FiArrowRight color="#e02041" size={24} />
				</ContainerMoreItems>
			</ContainerItems>
		</Container>
	)
}
