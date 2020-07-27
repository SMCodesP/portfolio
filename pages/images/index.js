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
} from './styles'

const About = () => {

  const images = [
    {
      name: 'This image about page example join',
      source: '/pages/about.webp',
      source_min: '/pages/about_min.webp'
    },
    {
      name: 'This image homepage example join',
      source: '/pages/home.webp',
      source_min: '/pages/home_min.webp',
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
                        srcSetData={image.resolution}
                      >
                        {(src, loading, srcSetData) => (
                          <Image
                            style={{
                              filter: loading ? 'blur(4px)' : ''
                            }}
                            sizes={srcSetData}
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
