import { Box, Heading } from '@gluestack-ui/themed'

type Props = {
	children?: React.ReactNode
	title?: string
}

export default function Wrapper({ title, children }: Props) {
	return (
		<Box height="$full" alignItems="center">
			{title ? (
				<Heading marginVertical="$10" size="2xl" fontWeight="$light">
					{title}
				</Heading>
			) : null}

			<Box>{children}</Box>
		</Box>
	)
}
