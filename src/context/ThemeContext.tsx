import { createContext, useState } from 'react'

type Theme = 'dark' | 'light'

type IThemeContext = {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({
	theme: 'dark',
	toggleTheme: () => '',
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('dark')

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
