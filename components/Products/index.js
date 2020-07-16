import Product from '../Product'
import {
	Container,
	ContainerProducts,
	CategoryTitle,
} from './styles'

export default function Products({ items }) {
	return (
		<Container>
			<CategoryTitle>Minecraft plugins</CategoryTitle>
			<ContainerProducts items={items}>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</ContainerProducts>
		</Container>
	)
}
