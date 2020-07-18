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
      </Head>

			<Navigation page="/" />
			<Products items={3} />
			<Footer />

    </div>
  )
}

export default Home;
