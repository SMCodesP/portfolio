import Head from 'next/head'

import Navigation from '../components/Navigation/'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>SMCodes - Início</title>
				<link rel="icon" href="/favicon.jpeg" />
      </Head>

			<Navigation page="/" />
			<Products items={3} />
			<Footer />

    </div>
  )
}

export default Home;
