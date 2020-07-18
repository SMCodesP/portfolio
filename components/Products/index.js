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
	return (
		<Container>
			<ContainerItems>
				<CategoryTitle>Minecraft plugins</CategoryTitle>
				<ContainerProducts items={items}>
					<Product />
					<Product />
					<Product />
				</ContainerProducts>
				<ContainerMoreItems>
					<MoreItem>Ver mais</MoreItem>
					<FiArrowRight color="#e02041" size={24} />
				</ContainerMoreItems>
			</ContainerItems>
			<ContainerItems>
				<CategoryTitle>Web</CategoryTitle>
				<ContainerProducts items={items}>
					<Product />
					<Product />
					<Product />
				</ContainerProducts>
				<ContainerMoreItems>
					<MoreItem>Ver mais</MoreItem>
					<FiArrowRight color="#e02041" size={24} />
				</ContainerMoreItems>
			</ContainerItems>
			<ContainerItems>
				<CategoryTitle>Back-end</CategoryTitle>
				<ContainerProducts items={items}>
					<Product />
					<Product />
					<Product />
				</ContainerProducts>
				<ContainerMoreItems>
					<MoreItem>Ver mais</MoreItem>
					<FiArrowRight color="#e02041" size={24} />
				</ContainerMoreItems>
			</ContainerItems>
		</Container>
	)
}
