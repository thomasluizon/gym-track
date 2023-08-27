import { useFonts } from 'expo-font'
import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

export default function FontText(props: {
	style?: StyleProp<TextStyle>
	children?: React.ReactNode
}) {
	const [fontsLoaded] = useFonts({
		montserrat: require('~/assets/fonts/montserrat.ttf'),
	})

	if (!fontsLoaded) {
		return <Text>Carregando...</Text>
	}

	let style: StyleProp<TextStyle> = {
		fontFamily: 'montserrat',
		fontSize: 22,
	}

	if (props.style) {
		style = Object.assign({}, style, props.style)
	}

	return <Text style={style}>{props.children}</Text>
}
