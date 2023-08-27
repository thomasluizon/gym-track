import FontText from '@/components/FontText'
import globalStyles from '@/utils/globalStyle'
import React from 'react'
import { View } from 'react-native'

export default function Page() {
	return (
		<View style={globalStyles.background}>
			<FontText style={globalStyles.title}>Minha Conta</FontText>
		</View>
	)
}
