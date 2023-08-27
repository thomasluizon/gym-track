import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from 'utils/colors'

const buttons = [
	{
		url: '/workouts',
		imgSrc: require('../../assets/images/dumbell.png'),
	},
	{
		url: '/training',
		imgSrc: require('../../assets/images/workout.png'),
	},
	{
		url: '/',
		imgSrc: require('../../assets/images/home.png'),
	},
	{
		url: '/evolution',
		imgSrc: require('../../assets/images/evolution.png'),
	},
	{
		url: '/account',
		imgSrc: require('../../assets/images/user.png'),
	},
]

export default function BottomBar() {
	return (
		<View style={styles.container}>
			{buttons.map(button => {
				return (
					<Link href={button.url} key={button.url}>
						<View style={styles.imgWrapper}>
							<Image
								source={button.imgSrc}
								style={styles.img}
								resizeMode="contain"
							/>
						</View>
					</Link>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
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
