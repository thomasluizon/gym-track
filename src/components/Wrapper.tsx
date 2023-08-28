import { colorsBlack, colorsLight } from '@/utils/colors'
import { Box, Heading } from '@gluestack-ui/themed'

type Props = {
	children?: React.ReactNode
	title?: string
}

export default function Wrapper({ title, children }: Props) {
	return (
		<Box
			height="$full"
			alignItems="center"
			sx={{
				_dark: {
					bg: colorsBlack.background,
				},
				_light: {
					bg: colorsLight.background,
				},
			}}
		>
			{title ? (
				<Heading marginVertical="$10" size="2xl" fontWeight="$light">
					{title}
				</Heading>
			) : null}

			<Box gap="$3">{children}</Box>
		</Box>
	)
}
