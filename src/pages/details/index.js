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

import {
	Container,
	ProductPurchase,
	ProductInformations,
	ImageLogo,
	DescriptionList,
	ContainerButton,
	PurchaseButton,
} from '../../styles/pages/details'

const Details = ({readmeHTML}) => {
	const {colors} = useContext(ThemeContext);
	
	console.log(readmeHTML)
	
	const descriptionList = [
		'**Minecraft version »** 1.8.x',
		'**API »** Bukkit Spigot',
		'**Funcionalidade »** Esquentar minérios',
		'**Inovação »** Construir fornalhas com dificuldade',
		'**Criador »** SMCodes',
		'**A pedido de »** Ninguém'
	];

	return (
		<div>
			<Head>
				<title>SMCodes - Details</title>
				<meta property="og:title" content="SMCodes - Plugins" key="title" />
				<meta name="twitter:title" content="SMCodes - Plugins" />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/details" />
			</div>

			<Container>
				<ProductPurchase>
					<ProgressiveImage
						src="/furnace.png"
						placeholder="/furnace_min.png"
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
						{descriptionList.map((description, index) => (
							<Markdown key={index}>{description}</Markdown>
						))}
					</DescriptionList>
					<ContainerButton>
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

Details.getInitialProps = async () => {
	const res = await fetch('https://raw.githubusercontent.com/SMCodesP/portfolio/2d6459cfaf4214cbb32f78183088612e369068d5/README.md')
	const readme = await res.text()
	const readmeGit = await fetch('https://api.github.com/markdown/raw', {
		method: 'POST',
		body: readme
	});
	const readmeHTML = await readmeGit.text()	

  return { readmeHTML }
}

export default Details;