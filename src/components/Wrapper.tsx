import FontText from '@/components/FontText'
import globalStyles from '@/utils/globalStyle'
import { View } from 'react-native'

type Props = {
	children?: React.ReactNode
	title?: string
}

export default function Wrapper({ title, children }: Props) {
	return (
		<View style={globalStyles.background}>
			{title ? (
				<FontText style={globalStyles.title}>{title}</FontText>
			) : null}

			<View style={globalStyles.content}>{children}</View>
		</View>
	)
}
