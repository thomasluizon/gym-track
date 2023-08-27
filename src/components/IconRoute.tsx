import { Link } from 'expo-router'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import { colors } from 'utils/colors'

type Props = {
	url: string
	imgSrc: ImageSourcePropType
}

export default function IconRoute({ url, imgSrc }: Props) {
	return (
		<Link href={url}>
			<View style={styles.imgWrapper}>
				<Image source={imgSrc} style={styles.img} resizeMode="contain" />
			</View>
		</Link>
	)
}

const styles = StyleSheet.create({
	imgWrapper: {
		backgroundColor: colors.color4,
		borderRadius: 50,
		padding: 10,
	},
	img: {
		height: 40,
		width: 40,
	},
})
