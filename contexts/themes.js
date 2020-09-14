import {createContext, useContext, useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

const ThemesContext = createContext({})

function ThemesProvider({ children }) {
	const [theme, setTheme] = useState('theme', light)

	const toggleTheme = () => {
	    setTheme((theme.title.toLowerCase() === 'light') ? dark : light)
  	}

  	useEffect(() => {
  		const themeStored = localStorage.getItem('theme')
  		if (!themeStored || themeStored !== JSON.stringify(theme)) {
		    localStorage.setItem('theme', JSON.stringify(theme))
		}
  	}, [theme])

  	useEffect(() => {
  		if (localStorage.getItem('theme')) {
  			setTheme(JSON.parse(localStorage.getItem('theme')))
  		}
  	}, [])

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
