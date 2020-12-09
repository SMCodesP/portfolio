import Head from 'next/head'
import Link from 'next/link'

import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'

import Footer from '../../../components/Footer/'
import Menu from '../../../components/Menu/'
import RenderMarkdown from '../../../components/RenderMarkdown/'
import ListingPages from '../../../components/ListingPages/'

import {useCart} from '../../../contexts/cart'

import getCategories from '../../../utils/getCategories'
import api from '../../../utils/api'

import GlobalStyle from '../../styles/GlobalStyle'

import {
	Container,
	ProductPurchase,
	ProductInformations,
	ImageLogo,
	DescriptionList,
	ContainerButton,
	PurchaseButton,
	Price,
	ProductTitle,
} from '../../../styles/pages/details'

function DetailsProduct({readme, categories, product, ...params}) {
	const {colors} = useContext(ThemeContext)
	const {addCart, products} = useCart()

	return (
		<div>
			<Head>
				<title>SMCodes - {product.title}</title>
				<meta property="og:title" content={`SMCodes - ${product.title}`} key="title" />
				<meta name="twitter:title" content={`SMCodes - ${product.title}`} />
				<meta name="description" content={`Venha baixar bots do discord em português, ${product.title} com uma alta performance e uma grande qualidade de configuração.`} />
				<meta property="og:description" content={`Venha baixar bots do discord em português, ${product.title} com uma alta performance e uma grande qualidade de configuração.`} />
				<meta name="description" content={`Venha baixar bots do discord em português, ${product.title} com uma alta performance e uma grande qualidade de configuração.`} />
				<meta name="Description" content={`Venha baixar bots do discord em português, ${product.title} com uma alta performance e uma grande qualidade de configuração.`} />
				<meta name="twitter:description" content={`Venha baixar bots do discord em português, ${product.title} com uma alta performance e uma grande qualidade de configuração.`} />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/details" categories={categories} background={colors.background} />
			</div>

			<Container>
				<ProductPurchase>
					<ProductTitle>{product.title}</ProductTitle>
					<ProgressiveImage
						src={product.image_large}
						placeholder={product.image_small}
					>
						{(src, loading) => (
							<ImageLogo
								loading={loading.toString()}
								src={src}
								alt="Product logo image"
							/>
						)}
					</ProgressiveImage>
					<DescriptionList>
						<RenderMarkdown
							text={product.description}
						/>
					</DescriptionList>
					<ContainerButton>
						{(product.money <= 0 ) ? (
							<a href="" tartget="_blank" style={{ width: '100%' }} download>
								<PurchaseButton>Baixar</PurchaseButton>
							</a>
						) : (
							<>
								<Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.money)}</Price>
								{products.find((productPred) => productPred.id === product.id) ? (
									<Link href="/cart">
										<a style={{
											width: '100%'
										}}>
											<PurchaseButton>No carrinho</PurchaseButton>
										</a>
									</Link>
								) : (
									<PurchaseButton onClick={() => addCart(product)}>Comprar</PurchaseButton>
								)}
							</>
						)}
					</ContainerButton>
				</ProductPurchase>
				<ProductInformations>
					<RenderMarkdown
						text={readme}
    			/>
				</ProductInformations>
			</Container>

			<ListingPages product={product} {...params} />

			<Footer />

			<GlobalStyle />
		</div>
	)
}

export async function getStaticProps({params}) {
	const {data: product} = await api.get(`/products?all=true&id=${params.product}`)

	const res = await fetch(product.documentation_link)
	const readme = await res.text()
	const { categories } = await getCategories()

	return {
		props: {
			categories,
			readme,
			product,
			id: product.id,
			products_of_category: categories.find((category) => (category.id === product.category.id)).products,
			quantity: categories.find((category) => (category.id === product.category.id)).products.length
		}
	}
}

export async function getStaticPaths() {
	const {data: products} = await api.get(`/products?all=true`)

	const paths = products.map((product) => {
		return {
			params: {
				category: product.category.link.substring(1),
				product: String(product.id)
			},
		}
	})

	return {
		paths: paths,
		fallback: false,
	}
}

export default DetailsProduct
