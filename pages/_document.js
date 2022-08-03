import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const sheet = new ServerStyleSheet();

		function handleCollectStyles(App) {
			return (props) => {
				return sheet.collectStyles(<App {...props} />);
			};
		}

		const page = ctx.renderPage((App) => handleCollectStyles(App));
		const styleTags = sheet.getStyleElement();

		return {
			...page,
			...initialProps,
			styleTags,
		};
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					{this.props.styleTags}
					<meta charSet="utf-8" />
					<link rel="icon" href="/favicon.jpg" />
					<meta name="googlebot" content="all" />
					<meta name="og:site_name" content="SMCodes" />
					<meta property="og:type" content="website" />
					<meta name="author" content="Samuel Pereira da Silva" />
					<meta property="og:image" content="/favicon.jpeg" />
					<meta
						name="keywords"
						content="HTML,CSS,JavaScript,Java,Plugin minecraft,Minecraft,Minecraft servidor,ReactNative,ReactJS,Discord.js,Node.js,Kotlin,SMCodes,Portfolio"
					/>
					<meta
						name="copyright"
						content="© 2020 Samuel Pereira da Silva"
					/>
					{/** <link href="/fonts/fonts.css" rel="stylesheet" /> **/}
				</Head>
				<body>
					<Main />

					<NextScript />
				</body>
			</Html>
		);
	}
}
