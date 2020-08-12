import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Particles from 'react-particles-js';

export default function ContainerParticles({children}) {
	const {colors} = useContext(ThemeContext)

	const config = {
		particles: {
			color: colors.text,
			number: {
				value: 75,
				density: {
					enable: true,
					value_area: 1200,
				},
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#e02041",
				},
				polygon: {
					nb_sides: 1,
				},
				image: {
					src: "/pages/not_found/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 1,
				random: false,
				anim: {
					enable: false,
					speed: 2,
					opacity_min: 0.5,
					sync: false,
				},
			},
			size: {
				value: 2,
				random: true,
				anim: {
					enable: false,
					speed: 2,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 250,
				color: colors.text,
				opacity: 0.4,
				width: 1.5,
			},
			move: {
				enable: true,
				speed: 2,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "repulse",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 500,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 500,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 2,
				},
				repulse: {
					distance: 250,
					duration: 0.4,
				},
				push: {
					particles_nb: 3,
				},
				remove: {
					particles_nb: 3,
				},
			},
		},
	};

	return (
		<Particles
			params={config}
			width="100%"
			height="100vh"
			style={{
				background: colors.background
			}}
		>
			{children}
		</Particles>
	)
}