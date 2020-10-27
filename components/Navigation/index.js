import Link from 'next/link'

import { FiArrowDown } from 'react-icons/fi'
import { lighten } from 'polished'

import Menu from '../Menu';

import styles from './Navigation.module.css'

const Navigation = ({ page, scrollingToRef }) => {
	return (
		<header className={styles.container} style={{
			background: lighten(0.2, getComputedStyle(document.body).getPropertyValue('--background'))
		}}>
			<Menu page={page} />
			<div className={styles.container_welcome}>
				<h1 className={styles.welcome}><strong>Oi</strong>, seja muito bem-vindo!</h1>
				<h2 className={styles.sub_welcome}>Me chamo Samuel e é um prazer encontra-lo em meu portfólio.</h2>
				<Link href={`/web/[id]`} as={`/web/0`}><a href={`/web/0`} className={styles.work_last}>Trabalho mais recente</a></Link>
			</div>
			<a href="/#products" className={styles.down_link}>
				<FiArrowDown
					size={64}
					className={styles.down}
				/>
			</a>
		</header>
	)
}

export default Navigation
