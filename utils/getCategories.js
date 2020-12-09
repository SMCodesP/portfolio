import api from './api'

async function getCategories() {
	const moment = (await import('moment')).default

	const { data } = await api.get(`${process.env.API_HOST}/categories?all=true`)

	const newCategoryOfSetIsNewProduct = data.map((category) => {
		return {
			...category,
			products: category.products.map((product) => {
				return {
					...product,
					isNew: moment.unix(moment().unix()).diff(moment.unix(product.timestamp), 'days') <= 7
				}
			})
		}
	})

	return {
		categories: newCategoryOfSetIsNewProduct
	}
}

export default getCategories
