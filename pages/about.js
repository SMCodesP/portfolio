import Head from 'next/head'

import Menu from '../components/Menu/'
import About from '../components/About/'
import OwnerInfos from '../components/OwnerInfos/'
import Histories from '../components/Histories/'

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
			<About />
			<OwnerInfos />
			<Histories />
    </div>
  )
}

export default About;
