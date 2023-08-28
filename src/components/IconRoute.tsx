import { colors } from '@/utils/colors'
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
			<Box bgColor={colors.color4} borderRadius="$full" padding="$3">
				<Image source={imgSrc} size="xs" />
			</Box>
		</Link>
	)
}
