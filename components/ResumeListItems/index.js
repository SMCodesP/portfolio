import { useState, useEffect } from 'react'

import products from '../../utils/products'

import ResumeProduct  from '../ResumeProduct'

import {
	Container,
	ContainerList,
} from './styles'

export default () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2500)
	}, [])

	return (
		<Container>
			<ContainerList>
				{[].concat(...products.map(category => category.items)).map((product, index) => {
					return ( 
						<ResumeProduct key={product.id} loading={loading} product={product} productIndex={index} />
					)
				})}
			</ContainerList>
		</Container>
	)
}