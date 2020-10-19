import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

	static getInitialProps ({ renderPage }) {

		return renderPage();
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head>
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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
