import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../data/work-in-progress.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings:
		{
			preserveAspectRatio: 'xMidYMid slice'
		}
};

interface Props {
	height?: number;
	width?: number;
}

const WorkInProgressAnimation: React.FC<Props> = ({ height = 300, width = 300 }) => {
	return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default WorkInProgressAnimation;
