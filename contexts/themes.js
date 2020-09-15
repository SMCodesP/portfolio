import {createContext, useContext} from 'react'
import {ThemeProvider} from 'styled-components'

import usePersistedState from '../utils/usePersistedState'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

const ThemesContext = createContext({})

function ThemesProvider({ children }) {
	const [theme, setTheme] = usePersistedState('theme', light)

	const toggleTheme = () => {
	    setTheme((theme.title.toLowerCase() === 'light') ? dark : light)
	    localStorage.setItem('theme', JSON.stringify((theme.title.toLowerCase() === "light") ? dark : light))
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
