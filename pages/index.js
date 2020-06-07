import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import Navigation from '../components/Navigation/'
import About from '../components/About/'
import OwnerInfos from '../components/OwnerInfos'

export const GlobalStyle = createGlobalStyle`

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

`
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SMCodes - Início</title>
        <link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

			<Navigation />
			<About />
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			
			<GlobalStyle />

    </div>
  )
}
