import Head from 'next/head'
import Error from 'next/error'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import {shade} from 'polished'

const ContainerParticles = dynamic(
	() => import('../components/ContainerParticles/'),
	{ ssr: false }
)

import styles from '../styles/pages/404.module.css'

export default function Error404() {
	return (
		<>
			<Head>
				<title>404: Página não encontrada!</title>
				<link href="/fonts/fonts.css" rel="stylesheet" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.jpg" />
				<meta name="googlebot" content="all" />
				<meta name="og:site_name" content="SMCodes" />
				<meta property="og:type" content="website" />
				<meta name="author" content="Samuel Pereira da Silva" />
				<meta property="og:image" content="/favicon.jpeg" />
				<meta name="keywords" content="HTML,CSS,JavaScript,Java,Plugin minecraft,Minecraft,Minecraft servidor,ReactNative,ReactJS,Discord.js,Node.js,Kotlin,SMCodes,Portfolio" />
				<meta name="copyright" content="© 2020 Samuel Pereira da Silva" />
				{/* <meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} /> */}
			</Head>
			
			<div className={styles.container}>
				<div className={styles.textError} data-text="Error 404">Error 404</div>
				<h1>Página não encontrada</h1>
				<Link href="/">
					<a style={{
						margin: '25px 0',
					}}>
						<button className={styles.backToHome}>Go to home</button>
					</a>
				</Link>
			</div>
			<ContainerParticles />
		</>
	)
}
