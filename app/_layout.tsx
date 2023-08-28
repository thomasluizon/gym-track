import BottomBar from '@/components/BottomBar'
import { GluestackUIProvider, config } from '@gluestack-ui/themed'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
	return (
		<GluestackUIProvider config={config.theme}>
			<SafeAreaView>
				<Slot />
				<BottomBar />
			</SafeAreaView>
		</GluestackUIProvider>
	)
}
