import api from './api'

async function getCategorie(link) {
	const moment = (await import('moment')).default

	const { data } = await api.get(`nk=${link}`)

	return {
		...data,
		products: data.products.map((product) => {
			return {
				...product,
				isNew: moment.unix(moment().unix()).diff(moment.unix(product.timestamp), 'days') <= 7
			}
		})
	}
}

export default getCategorie
