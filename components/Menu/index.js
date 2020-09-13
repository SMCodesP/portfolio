import { useState, useEffect, useRef, memo, useContext } from 'react'
import Link from 'next/link'
import Modal from 'react-modal';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import ThemesContext from '../../contexts/themes'

import {
	Options,
	Title,
	ListingPage,
	PageCustom,
	Page,
	User,
	HeadMenuFixed,
	IconMenu,
	UserMenu,
	UserIcon,
	Username,
	Line,
	ListOptions,
	Option,
	OptionTitle,
	OptionSelect,
} from './styles'

import ModalSetting from '../ModalSetting'

function Menu({ page: isPage, background, color }) {
	const [activedMobile, setActivedMobile] = useState(false)
	const [isClose, setIsClose] = useState(false)
	const [showModal, setShowModal] = useState(false);

	const {colors, ...theme} = useContext(ThemeContext)
	const {toggleTheme} = useContext(ThemesContext)

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

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '98%',
			background: shade(0.4, colors.background),
			border: 0,
			padding: '3px',
			borderRadius: '5px',
			zIndex: 999
		},
		overlay: {
			backgroundColor: `${colors.secundaryBackground}aa`,
			zIndex: 9999
		}
	};

	return (
		<>
			<Options id='title' background={background} actived={activedMobile}>
				<HeadMenuFixed>
					<IconMenu
						onClick={closeOrOpenInMobile}
						closed={isClose}
					>
						<span></span>
					</IconMenu>
					<Title color={color}>SMCodes</Title>
					<Page
						color={colors.text}
						onClick={() => setShowModal(true)}
					>
						<User
							color={colors.text}
							size={40}
						/>
					</Page>
				</HeadMenuFixed>
				<ListingPage>
					{list.map((page) => (
						<Link key={page.name} href={page.name}>
							<a>
								<Page
									locate={(isPage == page.name)}
									color={color}
								>
									{page.displayed}
								</Page>
							</a>
						</Link>
					))}
					<Link href="/signin">
						<a>
							<PageCustom>Acessar conta</PageCustom>
						</a>
					</Link>
				</ListingPage>
			</Options>
			<ModalSetting showModal={showModal} setShowModal={setShowModal} />
		</>
	)
}

export default memo(Menu)
