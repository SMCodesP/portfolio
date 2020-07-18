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
				<link rel="icon" href="/favicon.jpeg" />
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