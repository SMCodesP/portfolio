import Head from 'next/head'

import Zoom from 'react-medium-image-zoom'
import ProgressiveImage from 'react-progressive-graceful-image';


import {
  Container,
  ContainerImages,
  ListImages,
  ContainerImage,
  TitleImage,
  Image,
  GlobalStyle,
} from '../../components/ImagePageStyle/styles'

const About = () => {

  const images = [
    {
      name: 'This image access per website in computer homepage example join with theme dark',
      source: '/pages/documentation/large/computer/dark/home.webp',
      source_min: '/pages/documentation/small/computer/dark/home.webp',
    },
    {
      name: 'This image access per website in computer homepage example join with theme light',
      source: '/pages/documentation/large/computer/light/home.webp',
      source_min: '/pages/documentation/small/computer/light/home.webp',
		},

    {
      name: 'This image access per website in computer about me example join with theme dark',
      source: '/pages/documentation/large/computer/dark/about.webp',
      source_min: '/pages/documentation/small/computer/dark/about.webp',
    },
    {
      name: 'This image access per website in computer about me example join with theme light',
      source: '/pages/documentation/large/computer/light/about.webp',
      source_min: '/pages/documentation/small/computer/light/about.webp',
		},


    {
      name: 'This image access per mobile phone homepage example join with theme dark',
      source: '/pages/documentation/large/mobile/dark/home.webp',
      source_min: '/pages/documentation/small/mobile/dark/home.webp',
    },
    {
      name: 'This image access per mobile phone homepage example join with theme light',
      source: '/pages/documentation/large/mobile/light/home.webp',
      source_min: '/pages/documentation/small/mobile/light/home.webp',
    },
    {
      name: 'This image access per mobile phone about me example join with theme dark',
      source: '/pages/documentation/large/mobile/dark/about.webp',
      source_min: '/pages/documentation/small/mobile/dark/about.webp',
    },
    {
      name: 'This image access per mobile phone about me example join with theme light',
      source: '/pages/documentation/large/mobile/light/about.webp',
      source_min: '/pages/documentation/small/mobile/light/about.webp',
    },
  ];

  return (
    <>
      <div className="container">
        <Head>
          <title>SMCodes - Images</title>
          <meta property="og:title" content="SMCodes - Images" key="title" />
          <meta name="twitter:title" content="SMCodes - Images" />
        </Head>

        <Container>
          <ContainerImages>
            <ListImages>
              {images.map((image, index) => (
                <div
                  style={{ padding: 50 }}
                  key={index}
                >
                  <ContainerImage>
                    <Zoom
                      overlayBgColorEnd="#44475a"
                      overlayBgColorStart="#282a3677"
                      zoomMargin={25}
                    >
                      <ProgressiveImage
                        src={image.source}
                        placeholder={image.source_min}
                      >
                        {(src, loading, srcSetData) => (
                          <Image
                            style={{
															filter: loading ? 'blur(5px)' : '',
															width: loading ? '250px' : '',
                            }}
                            src={src}
                            alt="SMCodes picture example"
                          />
                        )}
                      </ProgressiveImage>
                    </Zoom>
                    <TitleImage>{image.name}</TitleImage>
                  </ContainerImage>
                </div>
              ))}
            </ListImages>
          </ContainerImages>
        </Container>
      </div>
      <GlobalStyle />
    </>
  )
}

export default About;
