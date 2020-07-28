import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

	static getInitialProps({ renderPage }) {
	    const sheet = new ServerStyleSheet();

	    function handleCollectStyles(App) {
	      return props => {
	        return sheet.collectStyles(<App {...props} />);
	      };
	    }

	    const page = renderPage(App => handleCollectStyles(App));
	    const styleTags = sheet.getStyleElement();
	    return { ...page, styleTags };
	}

	render() {
		return (
			<html lang="pt-BR">
				<Head>
					{this.props.styleTags}
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta charSet="utf-8" />
					<link rel="icon" href="/favicon.jpg" />
					<meta name="description" content="Página about de SMCodes, venha me conhecer um pouco." />
					<meta property="og:description" content="Venha construir sua presença digital!" />
					<meta name="description" content="Venha construir sua presença digital!" />
					<meta name="Description" content="Venha construir sua presença digital!" />
					<meta name="twitter:description" content="Venha construir sua presença digital!" />
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
			</html>
		);
	}
}
