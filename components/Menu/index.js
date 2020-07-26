import { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import $ from 'jquery'
import { FiAlignRight } from 'react-icons/fi';

import {
	Options,
	Title,
	ListingPage,
	Page,
	OptionsFixed,
	HeadMenuFixed,
	IconMenu
} from './styles'

function Menu({ page: isPage, background, color }) {
	const [options, setOptions] = useState(false)
	const [activedMobile, setActivedMobile] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [isClose, setIsClose] = useState(false)

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

	return (
		<>
			<OptionsFixed fixed={options} actived={activedMobile}>
				<Title>SMCodes</Title>
				{(isMobile && options) ? (
					<IconMenu
						onClick={() => {
							closeOrOpenInMobile()
						}}
						closed={isClose}
					>
						<span></span>
					</IconMenu>
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
				</ListingPage>
			</Options>
		</>
	)
}

export default memo(Menu)
