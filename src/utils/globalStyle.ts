import { colors } from '@/utils/colors'
import { StyleSheet } from 'react-native'

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
		fontSize: 30,
		marginBottom: 10,
		paddingTop: 30,
	},
	content: {
		flex: 1,
		alignItems: 'center',
	},
})

export default styles
