import Head from 'next/head'

import Menu from '../../components/Menu/'
import AboutComponent from '../../components/About/'
import OwnerInfos from '../../components/OwnerInfos/'
import Histories from '../../components/Histories/'
import Footer from '../../components/Footer/'

import GlobalStyle from '../GlobalStyle'

const About = () => {
  return (
    <div className="container">
      <Head>
				<title>SMCodes - Sobre</title>
				<meta property="og:title" content="SMCodes - Sobre" key="title" />
				<meta name="twitter:title" content="SMCodes - Sobre" />
      </Head>

			<div style={{ width: "100%" }}>
				<Menu page="about" background="#EDEDED" color="#333333" />
			</div>
			<AboutComponent />
			<OwnerInfos />
			<Histories />
			<Footer />

			<GlobalStyle />

    </div>
  )
}

export default About;
