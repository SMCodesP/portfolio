import { useState, memo } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'
import { IoMdSettings } from 'react-icons/io'
import { shade } from 'polished'

import ModalSetting from '../ModalSetting'
import styles from './Menu.module.css'

function Menu({ page: isPage, background, color }) {
	const [activedMobile, setActivedMobile] = useState(false)
	const [isClose, setIsClose] = useState(false)
	const [showModal, setShowModal] = useState(false);

	const list = [
		{
			name: '/',
			displayed: 'Início',
		},
		{
			name: '/about',
			displayed: 'Sobre',
		},
		{
			name: '/sites',
			displayed: 'Sites',
		},
		{
			name: '/plugins',
			displayed: 'Plugins',
		},
		{
			name: '/all',
			displayed: 'Todos',
		},
	]

	function closeOrOpenInMobile() {
		setActivedMobile(!activedMobile)
		setIsClose(!isClose);
	}

	return (
		<>
			<div
				className={styles.options}
				id='title'
				style={{
					backgroundColor: background,
					backgroundImage: background && `url('http://api.thumbr.it/whitenoise-361x370.png?background=${background.substring(1, toString(background).length)}&noise=${`${getComputedStyle(document.body).getPropertyValue('--text') || '#333'}`.substring(1, toString(getComputedStyle(document.body).getPropertyValue('--text') || '#333').length)}&density=5&opacity=15')`,
					boxShadow: `0 0 2px 1px ${shade(0.5, getComputedStyle(document.body).getPropertyValue('--background') || '#333')}`,
				}}
				actived={activedMobile}
			>
				<div className={styles.headMenuFixed}>
					<button
						onClick={closeOrOpenInMobile}
						closed={isClose}
						className={styles.iconMenu}
					>
						<span></span>
					</button>
					<p className={styles.title} color={color}>SMCodes</p>
					<li
						className={styles.page}
						// color={colors.text}
						onClick={() => setShowModal(true)}
					>
						<IoMdSettings
							className={styles.user}
							// color={colors.text}
							size={24}
						/>
					</li>
				</div>
				<ul className={styles.listingPage}>
					{list.map((page) => (
						<Link key={page.name} href={page.name}>
							<a>
								<li
									className={styles.page}
									color={color}
								>
									{page.displayed}
								</li>
							</a>
						</Link>
					))}
					<Link href="/signin">
						<a>
							<li className={styles.pageCustom}>Acessar conta</li>
						</a>
					</Link>
				</ul>
			</div>
			{/* <ModalSetting showModal={showModal} setShowModal={setShowModal} /> */}
		</>
	)
}

export default memo(Menu)
