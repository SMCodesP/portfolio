import Head from 'next/head'

import Navigation from '../components/Navigation/'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>SMCodes - Início</title>
				<meta property="og:title" content="SMCodes - Início" key="title" />
				<meta name="twitter:title" content="SMCodes - Início" />
				<link rel="icon" href="/favicon.jpeg" />
				<meta name="description" content="Portfólio de SMCodes, sou um programador fullstack, aqui em meu portfólio você pode encontrar diversos projetos publicos e privados, aqui você também pode comprar meus plugins de minecraft, no entanto todos tem sua versão gratuita." />
				<meta name="author" content="Samuel Pereira da Silva" />
				<meta property="og:image" content="/favicon.jpeg" />
      </Head>

			<Navigation page="/" />
			<Products items={3} />
			<Footer />

    </div>
  )
}

export default Home;
