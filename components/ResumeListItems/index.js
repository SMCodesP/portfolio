import { useState } from 'react'

import ResumeProduct  from '../ResumeProduct'

import {
	Container,
	ContainerList,
} from './styles'

function ResumeListItems({ products }) {

	return (
		<Container>
			<ContainerList>
				{products.map((product, index) => {
					return (
						<ResumeProduct
							key={product.id}
							loading={loading}
							product={product}
							productIndex={index}
						/>
					)
				})}
			</ContainerList>
		</Container>
	)
}

export default ResumeListItems
