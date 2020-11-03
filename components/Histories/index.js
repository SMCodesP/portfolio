import ProgressiveImage from 'react-progressive-graceful-image';
import dynamic from 'next/dynamic'

import { shade } from 'polished'

import styles from './style'

const getColor = dynamic(() => import('../../utils/getColor'))

export default function Histories() {
  return (
    <div className={styles.container_histories}>
      <div className={styles.main_histories}>
        <h1 className={styles.histories_title}>História</h1>
        <h2
          className={styles.histories_sub_title}
          style={{
            color: shade(0.2, getColor('secundaryText'))
          }}
        >Estudos</h2>

        <p className={styles.histories_text}>Não tenho uma história tão elaborada, tanto que ainda sou muito jovem, porém vou relatar minhas vivẽncia na programação. Depois de um tempo desenvolvendo em Java eu conheci o desenvolvimento web, apartir dai eu parei de programar em Java e não tive mas a mesma sensação quanto no começo, então fui para o PHP, quando começei no PHP eu "fiz" um curso, na verdade não terminei ele, porém alguns anos após eu desenvolver em PHP passei a programar em JavaScript, onde até hoje estou nessa área, uma coisa que eu acho engraçado que quando eu desenvolvia com PHP eu achava JavaScript muito difícil principalmente usar JQuery, após isso começei a desenvolver em JavaScript aplicado com Node.js, React.js e ReactNative, hoje em dia estou aprendendo a usar o Next.js (2020-06).</p>
      </div>

      <div className={styles.container_images}>
        <ProgressiveImage
          src="/managment.webp"
          placeholder="/managment_min.webp"
        >
          {(src, loading) => (
            <img
              className={styles.image_example}
              style={{
                filter: loading ? 'blur(4px)' : ''
              }}
              alt="Print de um programa de gerenciação de bot, feito por SMCodes."
              src={src}
            />
          )}
        </ProgressiveImage>
        <ProgressiveImage
          src="/dlhosting.webp"
          placeholder="/dlhosting_min.webp"
        >
          {(src, loading) => (
            <img
              className={styles.image_example}
              style={{
                filter: loading ? 'blur(4px)' : ''
              }}
              alt="Print de um app mobile de uma revendedora de hospedagem, feito por SMCodes."
              src={src}
            />
          )}
        </ProgressiveImage>
      </div>
    </div>
  )
}
