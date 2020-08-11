import Head from 'next/head'
import Link from 'next/link'
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import Footer from '../../components/Footer/'
import Menu from '../../components/Menu/'
import RenderMarkdown from '../../components/RenderMarkdown/'

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
	ContainerNextPrevious,
	TextPrevNext,
	ContainerListPages,
	ListProductsPages,
	ProductPage,
} from '../../styles/pages/details'

function DetailsProduct({readme, product, ...params}) {
	const {colors} = useContext(ThemeContext)
	
	return (
		<div>
			<Head>
				<title>SMCodes - {product.title}</title>
				<meta property="og:title" content={`SMCodes - ${product.title}`} key="title" />
				<meta name="twitter:title" content={`SMCodes - ${product.title}`} />
				<meta name="description" content={`Venha comprar um plugin de minecraft, ${product.title} com funcionalidades únicas e com uma alta velocidade.`} />
				<meta property="og:description" content={`Venha comprar um plugin de minecraft, ${product.title} com funcionalidades únicas e com uma alta velocidade.`} />
				<meta name="description" content={`Venha comprar um plugin de minecraft, ${product.title} com funcionalidades únicas e com uma alta velocidade.`} />
				<meta name="Description" content={`Venha comprar um plugin de minecraft, ${product.title} com funcionalidades únicas e com uma alta velocidade.`} />
				<meta name="twitter:description" content={`Venha comprar um plugin de minecraft, ${product.title} com funcionalidades únicas e com uma alta velocidade.`} />
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

			<ContainerNextPrevious>
				{(Number(params.id)-1 >= 0) ? (
					<Link href={`/${product.category}/[id]`} as={`/${product.category}/${params.id-1}`}>
						<TextPrevNext href={`/${product.category}/${params.id-1}`}>
							<FiChevronLeft color={colors.text} size={24} />
							Anterior
						</TextPrevNext>
					</Link>
				) : (<span />)}
				<ContainerListPages>
					<ListProductsPages>
						<ProductPage>1</ProductPage>
						<ProductPage>2</ProductPage>
						<p style={{
							fontSize: '14pt',
							padding: '5px 2px',
						}}>-</p>
						<ProductPage>4</ProductPage>
						<ProductPage>5</ProductPage>
						<ProductPage>6</ProductPage>
					</ListProductsPages>
				</ContainerListPages>
				{(params.quantity > Number(params.id)+1) ? (
					<Link href={`/${product.category}/[id]`} as={`/${product.category}/${Number(params.id)+1}`}>
						<TextPrevNext href={`/${product.category}/${Number(params.id)+1}`}>
							Próximo
							<FiChevronRight color={colors.text} size={24} />
						</TextPrevNext>
					</Link>
				) : (<span />)}
			</ContainerNextPrevious>
			
			<Footer />

			<GlobalStyle />

		</div>
	)
}

export async function getStaticProps({params}) {
	const product = products[0].items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[Number(params.id)]
	
	const res = await fetch(product.text)
	const readme = await res.text()

	return {
		props: {
			readme,
			product: product,
			quantity: products[0].items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).length,
			id: Number(params.id)
		}
	}
}

export async function getStaticPaths() {
	const paths = products[0].items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((product, index) => {
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