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
} from '../../styles/pages/details'

function DetailsProduct({readme, product, ...params}) {
	const {colors} = useContext(ThemeContext);
	
	return (
		<div>
			<Head>
				<title>SMCodes - {product.title}</title>
				<meta property="og:title" content="SMCodes - Plugins" key="title" />
				<meta name="twitter:title" content="SMCodes - Plugins" />
				<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta property="og:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="Description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="twitter:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
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
							<RenderMarkdown key={index} text={description} />
						))}
					</DescriptionList>
					<ContainerButton>
						<Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Price>
						<PurchaseButton>Comprar</PurchaseButton>
					</ContainerButton>
				</ProductPurchase>
				<ProductInformations>
					<RenderMarkdown text={readme} />
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
	const product = products[0].items[0]
	
	const res = await fetch(product.text)
	const readme = await res.text()

  return {
		props: {
			readme,
			product: product,
			quantity: products[0].items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).length,
			id: 0
		}
	}
}


export default DetailsProduct;