import React from 'react';
import LogoIcon from 'src/icons/LogoIcon';
import { useLoadingScreenStyles } from 'src/styles/loading-screen';

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
	const classes = useLoadingScreenStyles();

	return (
		<section className={classes.section}>
			<span>
				<LogoIcon color="#B8B8B8" />
			</span>
		</section>
	);
};

export default LoadingScreen;
