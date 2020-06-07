import { useEffect, useState } from 'react'
import $ from 'jquery'

import {
	Container,
	Options,
	Title,
	ListingPage,
	Page,
	ContainerWelcome,
	Welcome,
	SubWelcome,
	WorkLast,
	OptionsFixed
} from './style'

export default function Navigation() {
	const [options, setOptions] = useState(false);

	useEffect(() => {
		function verificationIsDeviceOnPushingAnimation() {
			let $title = $('#title'),
				titleHeight = $title[0].offsetTop+$title[0].scrollHeight,
				windowTop = $(window).scrollTop()

			if (windowTop > titleHeight) {
				setOptions(true)
			} else {
				setOptions(false)
			}
		}

		$(window).on('scroll',  verificationIsDeviceOnPushingAnimation)
		verificationIsDeviceOnPushingAnimation()
	}, [])

	return (
		<Container>
			<OptionsFixed fixed={options}>
				<Title>SMCodes</Title>
				<ListingPage>
					<Page locate={true}>Início</Page>
					<Page>Sobre</Page>
					<Page>Skills</Page>
					<Page>Sites</Page>
					<Page>Plugins</Page>
					<Page>APIs</Page>
					<Page>Outros</Page>
				</ListingPage>
			</OptionsFixed>
			<Options id='title'>
				<Title>SMCodes</Title>
				<ListingPage>
					<Page locate={true}>Início</Page>
					<Page>Sobre</Page>
					<Page>Skills</Page>
					<Page>Sites</Page>
					<Page>Plugins</Page>
					<Page>APIs</Page>
					<Page>Outros</Page>
				</ListingPage>
			</Options>
			<ContainerWelcome>
				<Welcome ><strong>Oi</strong>, seja muito bem-vindo!</Welcome>
				<SubWelcome>Me chamo Samuel e é um prazer encontra-lo em meu portfólio.</SubWelcome>
				<WorkLast href="/last">Trabalho mais recente</WorkLast>
			</ContainerWelcome>
		</Container>
	)
}
