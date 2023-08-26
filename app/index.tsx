import { StyleSheet, Text, View } from 'react-native'
import { colors } from 'utils/colors'

export default function Page() {
	return (
		<View style={styles.background}>
			<Text style={styles.title}>Gym Track</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: colors.color1,
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: colors.color4,
		fontSize: 40,
	},
})
