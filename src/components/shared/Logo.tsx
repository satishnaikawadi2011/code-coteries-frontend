import React from 'react';
import { Link } from 'react-router-dom';
import { useLogoStyles } from 'src/styles/logo';

interface LogoProps {
	size?: string | number;
}

const Logo: React.FC<LogoProps> = ({ size = 20 }) => {
	const classes = useLogoStyles();
	return (
		<div className={classes.logoContainer}>
			<Link to="/" className={classes.logoLink}>
				<div className={classes.logoWrapper}>
					<h2 style={{ fontSize: size }} className={classes.logo}>
						Code Coteries
					</h2>
				</div>
			</Link>
		</div>
	);
};

export default Logo;
