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

export default function Products({ items }) {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([1]);
	const {colors} = useContext(ThemeContext);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 10000)
	}, [])

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
					<FiArrowRight color={colors.secundary} size={24} />
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
					<FiArrowRight color={colors.secundary} size={24} />
				</ContainerMoreItems>
			</ContainerItems>
		</Container>
	)
}
