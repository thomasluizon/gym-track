import { Text, View } from 'react-native'
import globalStyles from 'utils/globalStyle'

export default function Page() {
	return (
		<View style={globalStyles.background}>
			<Text style={globalStyles.title}>Training</Text>
		</View>
	)
}
