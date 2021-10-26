import React from 'react';
import { makeStyles } from '@mui/styles';

export const useLoadingStyles = makeStyles({
	container:
		{
			height: 18,
			width: 18,
			margin: '0 auto'
		},
	loadingSvg:
		{
			animation: '$IGCoreSpinnerSpin8 .8s steps(8) infinite'
		},
	'@keyframes IGCoreSpinnerSpin8':
		{
			'0%':
				{
					transform: 'rotate(180deg)'
				},
			to:
				{
					transform: 'rotate(540deg)'
				}
		}
});

const LoadingIcon = () => {
	const classes = useLoadingStyles();

	return (
		<div>
			<div className={classes.container}>
				<svg aria-label="Loading..." className={classes.loadingSvg} viewBox="0 0 100 100">
					<rect
						fill="#555555"
						height={10}
						opacity={0}
						rx={5}
						ry={5}
						transform="rotate(-90 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.125"
						rx={5}
						ry={5}
						transform="rotate(-45 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.25"
						rx={5}
						ry={5}
						transform="rotate(0 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.375"
						rx={5}
						ry={5}
						transform="rotate(45 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.5"
						rx={5}
						ry={5}
						transform="rotate(90 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.625"
						rx={5}
						ry={5}
						transform="rotate(135 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.75"
						rx={5}
						ry={5}
						transform="rotate(180 50 50)"
						width={28}
						x={67}
						y={45}
					/>
					<rect
						fill="#555555"
						height={10}
						opacity="0.875"
						rx={5}
						ry={5}
						transform="rotate(225 50 50)"
						width={28}
						x={67}
						y={45}
					/>
				</svg>
			</div>
		</div>
	);
};

export default LoadingIcon;
