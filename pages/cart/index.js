import Head from 'next/head'
import Link from 'next/link'

import {useContext, useState, useEffect} from 'react'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'
import {FaTrashAlt} from 'react-icons/fa'

import Menu from '../../components/Menu/'
import Footer from '../../components/Footer/'
import RenderMarkdown from '../../components/RenderMarkdown/'

import getCategories from '../../utils/getCategories'

import {useAuth} from '../../contexts/auth'
import {useCart} from '../../contexts/cart'

import {
	ContainerPage,
	ProductsShopping,
	ConclusionPurchase,
	Product,
	ImageLogo,
	Description,
	Title,
	Money,
	FinishPayment
} from '../../styles/pages/cart'

const Cart = ({categories}) => {
	const [loadingCart, setLoadingCart] = useState(true)
	const [mp, setMP] = useState(null)

	const {colors} = useContext(ThemeContext);
	const {products, removeCart, payCart} = useCart()
	const {token} = useAuth()

	useEffect(() => {
		if (token.length !== 0 && products.length !== 0) {
			(async () => {
				setLoadingCart(true)
				try {
					const mpResponse = await payCart()
					setMP(mpResponse)
					setLoadingCart(false)
				} catch (error) {
					setLoadingCart(true)
				}
			})()
		}
	}, [products, token])

	const ImageIconProduct = ({product}) => {
		console.log(product)
		return (
			<ProgressiveImage
				src={product.image_large}
				placeholder={product.image_small}
			>
				{(src, loadingImage) => (
					<ImageLogo
						style={{
							height: '135px',
							filter: loadingImage ? 'blur(5px)' : 'blur(0px)'
						}}
						not_auto="false"
						src={src}
						alt={`${product.title} logo image`}
					/>
				)}
			</ProgressiveImage>
		)
	}

	return (
		<div className="container">
			<Head>
				<title>SMCodes - Carrinho</title>
				<meta property="og:title" content="SMCodes - Carrinho" key="title" />
				<meta name="twitter:title" content="SMCodes - Carrinho" />
				<meta name="description" content="Configure e conclua suas compras aqui." />
				<meta property="og:description" content="Configure e conclua suas compras aqui." />
				<meta name="description" content="Configure e conclua suas compras aqui." />
				<meta name="Description" content="Configure e conclua suas compras aqui." />
				<meta name="twitter:description" content="Configure e conclua suas compras aqui." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/cart" categories={categories} background={colors.background} />
			</div>

			<ContainerPage>
			{(products.length > 0) ? (
				<>
					<ProductsShopping>
						<h1 style={{
							marginTop: 10,
							marginLeft: 15
						}}>Produtos selecionados</h1>
						{products.map((product) => (
							<Product>
								<ImageIconProduct
									product={product}
								/>
								<div style={{
									display: 'flex',
									flexDirection: 'column'
								}}>
									<Title>{product.title}</Title>
									<Description>
										<RenderMarkdown text={product.description} />
									</Description>
								</div>
								<div style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									marginLeft: 'auto',
								}}>
									<FaTrashAlt
										size={24}
										color="#e02041"
										style={{
											marginLeft: 'auto',
											cursor: 'pointer'
										}}
										onClick={() => removeCart(product)}
									/>
									<Money>{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									})
									.format(product.money)}</Money>
								</div>
							</Product>
						))}
					</ProductsShopping>
					<ConclusionPurchase>
						<h3>Resumo da compra</h3>
						<hr />
						{products.map((product) => (
							<div style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: '15px 10px'
							}}>
								<p style={{
									fontSize: 14
								}}>{product.title}</p>
								<span style={{
									fontSize: 14,
									fontWeight: 'bold'
								}}>{new Intl.NumberFormat('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								})
								.format(product.money)}</span>
							</div>
						))}
						<hr />
						<div style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '15px 5px'
						}}>
							<p>Total</p>
							<span style={{
								fontWeight: 'bold'
							}}>{new Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL'
							})
							.format(products.reduce((acumulador, valorAtual) => {
								return Number(acumulador) + Number(valorAtual.money);
							}, 0))}</span>
						</div>
						
						{!loadingCart ? (
							<>
								<center>
									<a href={mp.init_point} name="MP-Checkout">
										<FinishPayment>Finalizar compra</FinishPayment>
									</a>
								</center>
								<script
									src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
									data-preference-id={mp.id}
								>
								</script>
							</>
						) : (token.length === 0) ? (
							<center>
								<Link href={{
									pathname: "/signin",
									query: {
										backurl: "/cart"
									}
								}}>
									<a>
										<FinishPayment>Entrar</FinishPayment>
									</a>
								</Link>
							</center>
						) : <FinishPayment>Carregando...</FinishPayment>}
					</ConclusionPurchase>
				</>
			) : (
				<div style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}>
					<h1 style={{
						alignSelf: 'center',
						marginTop: '15vh'
					}}>Você não tem nenhum produto no carrinho até o momento.</h1>

					<Link href="/">
						<a style={{
							alignSelf: 'center',
							margin: '7.5vh 0 35vh 0',
						}}>
							<FinishPayment>Iniciar compras</FinishPayment>
						</a>
					</Link>
				</div>
			)}
			</ContainerPage>

			<Footer />

		</div>
	)
}

export async function getStaticProps() {
	const {categories} = await getCategories()

	return {
		props: {
			categories,
		},
		revalidate: 120,
	}
}

export default Cart;
