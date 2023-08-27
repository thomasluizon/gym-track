import FontText from 'components/FontText'
import { View } from 'react-native'
import globalStyles from 'utils/globalStyle'

export default function Page() {
	return (
		<View style={globalStyles.background}>
			<FontText style={globalStyles.title}>Meus Treinos</FontText>
		</View>
	)
}
