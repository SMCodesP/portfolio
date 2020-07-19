import Head from 'next/head'

import Navigation from '../components/Navigation/'
import Products from '../components/Products'
import Footer from '../components/Footer'

import GlobalStyle from './GlobalStyle'

import { ContainerLicense, Title, Description } from './styles'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>SMCodes - Início</title>
				<meta property="og:title" content="SMCodes - Início" key="title" />
				<meta name="twitter:title" content="SMCodes - Início" />
      </Head>

			<Navigation page="/" />
			<Products items={4} />
			<ContainerLicense>
				<Title>Sistema de licença</Title>
				<Description>
					Nosso sistema de licença apresenta com uma api focada em performance, todos os plugins de minecraft contém uma versão gratuita, porém caso compre a versão paga você adquiri 3 versões do mesmo plugin dedicado de acordo com sua hospedagem, você também recebe um licença dedicada para otimização do seu plugin, essa licença só pode ser usada em 1 servidor por vez.
				</Description>
			</ContainerLicense>
			<Footer />

			<GlobalStyle />
    </div>
  )
}

export default Home;
