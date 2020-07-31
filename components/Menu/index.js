import { useState, useEffect, useRef, memo, useContext } from 'react'
import Link from 'next/link'
import $ from 'jquery'
import { FiAlignRight, FiUser } from 'react-icons/fi';
import Modal from 'react-modal';
import { ThemeContext } from 'styled-components'
import { shade, lighten } from 'polished'

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
	const [options, setOptions] = useState(false)
	const [activedMobile, setActivedMobile] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [isClose, setIsClose] = useState(false)
	const [userOpen, setUserOpen] = useState(false);
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

	useEffect(() => {
		function verificationIsDeviceOnPushingAnimation() {
			let $title = $('#title'),
				titleHeight = $title[0].offsetTop+$title[0].scrollHeight,
				windowTop = $(window).scrollTop()

			if (windowTop > titleHeight + 30) {
				setOptions(true)
			} else {
				setOptions(false)
			}
		}

		function verificationIsDeviceInMobile() {
			if ($(window).width() <= 750) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		$(window).on('scroll', verificationIsDeviceOnPushingAnimation)
		$(window).on('resize', verificationIsDeviceInMobile)

		verificationIsDeviceInMobile()
		verificationIsDeviceOnPushingAnimation()
	}, [])

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
      		padding: '10px',
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
			<OptionsFixed fixed={options} actived={activedMobile}>
				<Title>SMCodes</Title>
				{(isMobile && options) ? (
					<div>
						<IconMenu
							onClick={() => {
								closeOrOpenInMobile()
							}}
							closed={isClose}
						>
							<span></span>
						</IconMenu>
					</div>
				) : (
					<ListingPage>
						{list.map((page) => (
							<Link key={page.name} href={page.name}>
								<Page
									locate={(isPage == page.name)}
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
				)}
			</OptionsFixed>
			<Options id='title' background={background} actived={activedMobile}>
				<HeadMenuFixed>
					{isMobile && (
						<IconMenu
							onClick={() => {
								closeOrOpenInMobile()
							}}
							closed={isClose}
						>
							<span></span>
						</IconMenu>
					)}
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
				closeTimeoutMS={500}
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
							alignSelf: 'flex-end'
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
