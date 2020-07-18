import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />),
		);
		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags };
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					{this.props.styleTags}
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta charSet="utf-8" />
					<link rel="icon" href="/favicon.jpeg" />
					<meta name="description" content="Página about de SMCodes, venha me conhecer um pouco." />
					<meta property="og:description" content="Seu futuro digital começa aqui!" />
					<meta name="description" content="Seu futuro digital começa aqui!" />
					<meta name="Description" content="Seu futuro digital começa aqui!" />
					<meta name="twitter:description" content="Seu futuro digital começa aqui!" />
					<meta name="googlebot" content="all" />
					<meta name="og:site_name" content="SMCodes" />
					<meta property="og:type" content="website" />
					<meta name="author" content="Samuel Pereira da Silva" />
					<meta property="og:image" content="/favicon.jpeg" />
					<meta name="keywords" content="HTML,CSS,JavaScript,Java,Plugin minecraft,Minecraft,Minecraft servidor,ReactNative,ReactJS,Discord.js,Node.js,Kotlin,SMCodes,Portfolio" />
					<meta name="copyright" content="© 2020 SMCodes" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
