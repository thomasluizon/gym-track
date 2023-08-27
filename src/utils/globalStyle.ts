import { StyleSheet } from 'react-native'
import { colors } from './colors'

const styles = StyleSheet.create({
	background: {
		backgroundColor: colors.color4,
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: colors.color1,
		fontSize: 40,
	},
})

export default styles
