import { Box, Image } from '@gluestack-ui/themed'
import { Link } from 'expo-router'
import { ImageSourcePropType } from 'react-native'

type Props = {
	url: string
	imgSrc: ImageSourcePropType
}

export default function IconRoute({ url, imgSrc }: Props) {
	return (
		<Link href={url}>
			<Box>
				<Image source={imgSrc} size="xs" />
			</Box>
		</Link>
	)
}
