import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import Navigation from '../../components/Navigation/'
import About from '../../components/About/'
import OwnerInfos from '../../components/OwnerInfos/'
import Histories from '../../components/Histories/'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100vh;
		background: #ffffff;
	}

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background: #f0f0f0;
	}

	::-webkit-scrollbar-thumb {
		background: #333333;
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #222222;
	}
`
const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>SMCodes - Sobre</title>
				<link rel="icon" href="/favicon.png" />
      </Head>

			<Navigation page="about" />
			<About />
			<OwnerInfos />
			<Histories />
			
			<GlobalStyle />
    </div>
  )
}

export default Home;
