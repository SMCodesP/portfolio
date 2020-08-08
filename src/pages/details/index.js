import {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'
import ReactMarkdown from 'react-markdown'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu/'

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
} from '../../styles/pages/details'

export default function Product({readme, product}) {
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
							<ReactMarkdown key={index} source={description} />
						))}
					</DescriptionList>
					<ContainerButton>
						<Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Price>
						<PurchaseButton>Comprar</PurchaseButton>
					</ContainerButton>
				</ProductPurchase>
				<ProductInformations>
					<ReactMarkdown source={readme} />
				</ProductInformations>
			</Container>
			
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
			product: product
		}
	}
}
