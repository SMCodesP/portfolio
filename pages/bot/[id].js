import Head from 'next/head'
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'

import Footer from '../../components/Footer/'
import Menu from '../../components/Menu/'
import RenderMarkdown from '../../components/RenderMarkdown/'
import ListingPages from '../../components/ListingPages/'

import GlobalStyle from '../../styles/GlobalStyle'
import products from '../../utils/products'

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
} from '../../styles/pages/details'

function DetailsProduct({readme, product, ...params}) {
	const {colors} = useContext(ThemeContext)

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
				<Menu page="/details" background={colors.background} />
			</div>

			<Container>
				<ProductPurchase>
					<ProductTitle>{product.title}</ProductTitle>
					<ProgressiveImage
						src={product.image.large}
						placeholder={product.image.small}
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
						{product.descriptionList.map((description, index) => (
							<RenderMarkdown
								key={index}
								text={description}
							/>
						))}
					</DescriptionList>
					<ContainerButton>
						{(product.price <= 0 ) ? (
							<PurchaseButton>Baixar</PurchaseButton>
						) : (
							<>
								<Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Price>
								<PurchaseButton>Comprar</PurchaseButton>
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
	const product = products.find((category) => category.name === "bot").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[Number(params.id)]

	const res = await fetch(product.text)
	const readme = await res.text()

	return {
		props: {
			readme,
			product,
			quantity: products.find((category) => category.name === "bot").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).length,
			id: Number(params.id)
		}
	}
}

export async function getStaticPaths() {
	const paths = products.find((category) => category.name === "bot").items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((product, index) => {
		return {
			params: {
				id: index.toString()
			},
		}
	})

	return {
		paths: paths,
		fallback: false,
	}
}

export default DetailsProduct
