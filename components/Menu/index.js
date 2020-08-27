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
	Page,
	User,
	OptionsFixed,
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

function Menu({ page: isPage, background, color }) {
	const [activedMobile, setActivedMobile] = useState(false)
	const [isClose, setIsClose] = useState(false)
	const [showModal, setShowModal] = useState(false);

	const {colors, ...theme} = useContext(ThemeContext)
	const {toggleTheme} = useContext(ThemesContext)

	const menuUser = useRef(null);

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
			name: '/apis',
			displayed: 'APIs',
		},
		{
			name: '/outros',
			displayed: 'Outros',
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
			width: '70%',
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
				</HeadMenuFixed>
				<ListingPage>
					{list.map((page) => (
						<Link key={page.name} href={page.name}>
							<Page
								locate={(isPage == page.name)}
								color={color}
							>
								{page.displayed}
							</Page>
						</Link>
					))}
					<Page
						color={colors.text}
						onClick={() => setShowModal(true)}
					>
						<User
							color={colors.text}
							size={40}
						/>
					</Page>
				</ListingPage>
			</Options>
			<Modal
				closeTimeoutMS={50}
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
				contentLabel="Minimal Modal Example"
				style={customStyles}
			>
				<UserMenu>
					<IconMenu
						onClick={() => setShowModal(false)}
						closed={true}
						style={{
							alignSelf: 'flex-end',
							display: 'block'
						}}
					>
						<span></span>
					</IconMenu>
					<UserIcon
						src="/unknown.webp"
					/>
					<Username>Unknown</Username>
					<Line />
					<ListOptions>
						<Option>
							<OptionTitle>Dracula theme</OptionTitle>
							<OptionSelect
								onChange={toggleTheme}
								checked={(theme.title.toLowerCase() == 'dark')}
							/>
						</Option>
					</ListOptions>
				</UserMenu>
			</Modal>
		</>
	)
}

export default memo(Menu)