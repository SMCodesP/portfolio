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
					<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap" rel="stylesheet" />
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
			</html>
		);
	}
}
