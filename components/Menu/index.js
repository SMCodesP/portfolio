import { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import $ from 'jquery'

import {
	Options,
	Title,
	ListingPage,
	Page,
	OptionsFixed
} from './styles'

function Menu({ page: isPage, background, color }) {
	const [options, setOptions] = useState(false)
	const list = [
		{
			name: "/",
			displayed: "Início",
		},
		{
			name: "about",
			displayed: "Sobre",
		},
		{
			name: "sites",
			displayed: "Sites",
		},
		{
			name: "plugins",
			displayed: "Plugins",
		},
		{
			name: "apis",
			displayed: "APIs",
		},
		{
			name: "outros",
			displayed: "Outros",
		},
	]

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

		$(window).on('scroll',  verificationIsDeviceOnPushingAnimation)
		verificationIsDeviceOnPushingAnimation()
	}, [])

	return (
		<>
			<OptionsFixed fixed={options}>
				<Title>SMCodes</Title>
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
			</OptionsFixed>
			<Options id='title' background={background}>
				<Title color={color}>SMCodes</Title>
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
