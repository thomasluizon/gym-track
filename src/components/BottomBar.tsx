import React from 'react'
import { StyleSheet, View } from 'react-native'
import IconRoute from './IconRoute'

const buttons = [
	{
		url: '/workouts',
		imgSrc: require('~/assets/images/dumbell.png'),
	},
	{
		url: '/training',
		imgSrc: require('~/assets/images/workout.png'),
	},
	{
		url: '/',
		imgSrc: require('~/assets/images/home.png'),
	},
	{
		url: '/evolution',
		imgSrc: require('~/assets/images/evolution.png'),
	},
	{
		url: '/account',
		imgSrc: require('~/assets/images/user.png'),
	},
]

export default function BottomBar() {
	return (
		<View style={styles.container}>
			{buttons.map(({ url, imgSrc }) => (
				<IconRoute key={url} url={url} imgSrc={imgSrc} />
			))}
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
})
