import { Box } from '@gluestack-ui/themed'
import React from 'react'
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
		<Box
			padding="$3"
			position="absolute"
			bottom={0}
			left={0}
			right={0}
			justifyContent="space-evenly"
			flexDirection="row"
		>
			{buttons.map(({ url, imgSrc }) => (
				<IconRoute key={url} url={url} imgSrc={imgSrc} />
			))}
		</Box>
	)
}
