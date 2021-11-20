import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../data/comming-soon.json';

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

const ComingSoonAnimation: React.FC<Props> = ({ height = 300, width = 300 }) => {
	return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default ComingSoonAnimation;
