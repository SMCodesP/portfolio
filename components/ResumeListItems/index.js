import products from '../../utils/products'

import ResumeProduct  from '../ResumeProduct'

import {
	Container,
	ContainerList,
} from './styles'

export default () => {
	return (
		<Container>
			<ContainerList>
				{[].concat(...products.map(category => category.items)).map((product, index) => {
					return ( 
						<ResumeProduct key={product.id} product={product} productIndex={index} />
					)
				})}
			</ContainerList>
		</Container>
	)
}