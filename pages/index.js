import Head from 'next/head'
import dynamic from 'next/dynamic'

const Navigation = dynamic(
	() => import('../components/Navigation/'),
	{ ssr: false }
)
const Footer = dynamic(
	() => import('../components/Footer/'),
	{ ssr: false }
)
import Products from '../components/Products'

import products from '../utils/products'

const Home = () => {
	return (
			<div className="container">
				<Head>
					<title>SMCodes - Início</title>
					<meta property="og:title" content="SMCodes - Início" key="title" />
					<meta name="twitter:title" content="SMCodes - Início" />
					<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta property="og:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="Description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					<meta name="twitter:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
					{/* <meta name="theme-color" content={colors.background} /> */}
					{/* <meta name="apple-mobile-web-app-status-bar-style" content={colors.background} /> */}
					{/* <meta name="msapplication-navbutton-color" content={colors.background} /> */}
				</Head>

				<Navigation page="/" />
				{products.map((category, index) => (
					<Products
						key={index}
						items={3}
						category={category}
						id="products"
						limit={true}
					/>
				))}
				<Footer />

			</div>
	)
}

export default Home;

