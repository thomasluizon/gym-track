import BottomBar from '@/components/BottomBar'
import { ThemeContext, ThemeProvider } from '@/context/ThemeContext'
import { GluestackUIProvider, config } from '@gluestack-ui/themed'
import { Slot } from 'expo-router'
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
	return (
		<ThemeProvider>
			<LayoutContent />
		</ThemeProvider>
	)
}

function LayoutContent() {
	const { theme } = useContext(ThemeContext)

	return (
		<GluestackUIProvider config={config.theme} colorMode={theme}>
			<SafeAreaView>
				<Slot />
				<BottomBar />
			</SafeAreaView>
		</GluestackUIProvider>
	)
}
