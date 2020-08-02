import Head from 'next/head'
import {useContext, useEffect, useState} from 'react'
import ReactHtmlParser from 'react-html-parser'; 
import ProgressiveImage from 'react-progressive-graceful-image'
import Markdown from 'react-mark';

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

function Product({readmeHTML, product}) {
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
				<Menu page="/details" />
			</div>

			<Container>
				<ProductPurchase>
					<ProgressiveImage
						src={product.image.large}
						placeholder={product.image.small}
					>
						{(src, loading) => (
							<ImageLogo
								loading={loading}
								src={src}
								alt="Product logo image"
							/>
						)}
					</ProgressiveImage>
					<DescriptionList>
						{product.descriptionList.map((description, index) => (
							<Markdown key={index}>{description}</Markdown>
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
					{ReactHtmlParser(readmeHTML)}
				</ProductInformations>
			</Container>
			
			<Footer />

			<GlobalStyle />

		</div>
	)
}

export async function getStaticProps({params}) {
	const product = products[0].items[Number(params.id)]
	
	const res = await fetch(product.text)
	const readme = await res.text()
	const readmeGit = await fetch('https://api.github.com/markdown/raw', {
		method: 'POST',
		body: readme
	});
	const readmeHTML = await readmeGit.text()	

  return {
		props: {
			readmeHTML,
			product: product
		}
	}
}

export async function getStaticPaths() {
	const paths = products[0].items.map((product, index) => {
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

export default Product