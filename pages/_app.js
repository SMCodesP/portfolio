import App from 'next/app'
import 'react-medium-image-zoom/dist/styles.css'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
			</>
		);
	}
}
