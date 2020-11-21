import api from './api'

async function getCategories() {
	const moment = (await import('moment')).default

	const { data } = await api.get('https://portfolio-backend-sm.herokuapp.com/categories?all=true')

	console.log("")
	console.log("")
	console.log("data")
	console.log(data)
	console.log("")
	console.log("")

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

	console.log("")
	console.log("")
	console.log("newCategoryOfSetIsNewProduct")
	console.log(newCategoryOfSetIsNewProduct)
	console.log("")
	console.log("")

	return {
		categories: newCategoryOfSetIsNewProduct
	}
}

export default getCategories
