import ProgressiveImage from 'react-progressive-graceful-image';

import {
  ContainerHistories,
  MainHistories,
  HistoriesTitle,
  HistoriesSubTitle,
  HistoriesText,
  ContainerImages,
  ImageExample
} from './style'

export default function Histories() {
  return (
    <ContainerHistories>
      <MainHistories>
        <HistoriesTitle>História</HistoriesTitle>
        <HistoriesSubTitle>Estudos</HistoriesSubTitle>

        <HistoriesText>Não tenho uma história tão elaborada, tanto que ainda sou muito jovem, porém vou relatar minhas vivẽncia na programação. Depois de um tempo desenvolvendo em Java eu conheci o desenvolvimento web, apartir dai eu parei de programar em Java e não tive mas a mesma sensação quanto no começo, então fui para o PHP, quando começei no PHP eu "fiz" um curso, na verdade não terminei ele, porém alguns anos após eu desenvolver em PHP passei a programar em JavaScript, onde até hoje estou nessa área, uma coisa que eu acho engraçado que quando eu desenvolvia com PHP eu achava JavaScript muito difícil principalmente usar JQuery, após isso começei a desenvolver em JavaScript aplicado com Node.js, React.js e ReactNative, hoje em dia estou aprendendo a usar o Next.js (2020-06).</HistoriesText>
      </MainHistories>

      <ContainerImages>
        <ProgressiveImage
          src="/managment.webp"
          placeholder="/managment_min.webp"
        >
          {(src, loading) => (
            <ImageExample
              style={{
                filter: loading ? 'blur(4px)' : ''
              }}
              src={src}
            />
          )}
        </ProgressiveImage>
        <ProgressiveImage
          src="/dlhosting.webp"
          placeholder="/dlhosting_min.webp"
        >
          {(src, loading) => (
            <ImageExample
              style={{
                filter: loading ? 'blur(4px)' : ''
              }}
              src={src}
            />
          )}
        </ProgressiveImage>
      </ContainerImages>
    </ContainerHistories>
  )
}
