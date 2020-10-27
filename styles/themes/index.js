import {useState} from 'react'
import { shade } from 'polished'

import light from './light'

function Themes() {
	const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') || JSON.stringify(light)))
	console.log(theme)

	return (
		<style global jsx>
			{`
				:root {
					--name: ${theme.title};
					--primary: ${theme.colors.primary};
					--secundary: ${theme.colors.secundary};
					--tertiary: ${theme.colors.tertiary};
					--fourth: ${theme.colors.fourth};

					--background: ${theme.colors.background};
					--secundaryBackground: ${theme.colors.secundaryBackground};

					--text: ${theme.colors.text};
					--secundaryText: ${theme.colors.secundaryText};
					--tertiaryText: ${theme.colors.tertiaryText};
					--fourthText: ${theme.colors.fourthText};
					--fifthText: ${theme.colors.fifthText};
					--inverseText: ${theme.colors.inverseText};

					--light: ${theme.colors.light};
					--dark: ${theme.colors.dark};
					--darkTwo: ${theme.colors.darkTwo};
				}
				::-webkit-scrollbar-thumb:hover {
					background: ${shade(0.3, theme.colors.secundary)};
				}
			`}
		</style>
	)
}

export default Themes