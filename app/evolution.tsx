import FontText from '@/components/FontText'
import globalStyles from '@/utils/globalStyle'
import { View } from 'react-native'

export default function Page() {
	return (
		<View style={globalStyles.background}>
			<FontText style={globalStyles.title}>Minha Evolução</FontText>
		</View>
	)
}
