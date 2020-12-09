import {createContext, useContext, useState} from 'react'
import {ThemeProvider} from 'styled-components'

import usePersistedState from '../utils/usePersistedState'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

const ThemesContext = createContext({})

function ThemesProvider({ initialTheme, children }) {
	const [theme, setTheme] = useState(initialTheme)

	const toggleTheme = () => {
		document.cookie = `theme=${(theme.title.toLowerCase() === "light") ? dark.title : light.title}; path=/`;
		setTheme((theme.title.toLowerCase() === 'light') ? dark : light)
	}

	return (
		<ThemesContext.Provider
			value={{
				toggleTheme
			}}
		>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ThemesContext.Provider>
	)
}


function useThemes() {
	const context = useContext(ThemesContext)

	return context
}

export {
	useThemes,
	ThemesProvider
}

export default ThemesContext
