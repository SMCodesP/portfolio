import Head from 'next/head'

import Menu from '../components/Menu/'
import AboutComponent from '../components/About/'
import OwnerInfos from '../components/OwnerInfos/'
import Histories from '../components/Histories/'
import Footer from '../components/Footer/'

const About = () => {
  return (
    <div className="container">
      <Head>
				<title>SMCodes - Sobre</title>
				<meta property="og:title" content="SMCodes - Sobre" key="title" />
				<meta name="twitter:title" content="SMCodes - Sobre" />
				<link rel="icon" href="/favicon.jpeg" />
				<meta name="description" content="Página about de SMCodes, venha me conhecer um pouco." />
				<meta name="author" content="Samuel Pereira da Silva" />
				<meta property="og:image" content="/favicon.jpeg" />
				<meta name="keywords" content="HTML,CSS,JavaScript,Java,Plugin minecraft,Minecraft,Minecraft servidor,ReactNative,ReactJS,Discord.js,Node.js,Kotlin,SMCodes,Portfolio" />
				<meta name="copyright" content="© 2020 SMCodes" />
      </Head>

			<div style={{ width: "100%" }}>
				<Menu page="about" background="#EDEDED" color="#333333" />
			</div>
			<AboutComponent />
			<OwnerInfos />
			<Histories />
			<Footer />

    </div>
  )
}

export default About;
