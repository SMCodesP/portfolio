import {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'
import Markdown from 'react-mark';
import ReactHtmlParser from 'react-html-parser'; 

import {ThemesProvider} from '../../contexts/themes'

import Products from '../../components/Products'
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

export default function Product({readmeHTML, product}) {
	const {colors} = useContext(ThemeContext);

	return (
		<div>
			<Head>
				<title>SMCodes - {product.title}</title>
				<meta property="og:title" content="SMCodes - Plugins" key="title" />
				<meta name="twitter:title" content="SMCodes - Plugins" />
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
						<Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Price>
						<PurchaseButton>Comprar</PurchaseButton>
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
	const product = products[0].items[0]
	
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
