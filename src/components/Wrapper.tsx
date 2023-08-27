import FontText from '@/components/FontText'
import globalStyles from '@/utils/globalStyle'
import { View } from 'react-native'

export default function Wrapper() {
	return (
		<View style={globalStyles.background}>
			<FontText style={globalStyles.title}>Gym Track</FontText>
			<View style={globalStyles.content}>
				<FontText>Teste</FontText>
			</View>
		</View>
	)
}
