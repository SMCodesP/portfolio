import Head from 'next/head'

import Navigation from '../components/Navigation/'
import About from '../components/About/'

import { GlobalStyle } from './style'

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
			
			<GlobalStyle />

    </div>
  )
}
