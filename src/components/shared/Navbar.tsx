import { AppBar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavbarStyles } from 'src/styles/navbar';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const classes = useNavbarStyles();
	return (
		<AppBar className={classes.appBar}>
			<section className={classes.section}>
				<Logo />
			</section>
		</AppBar>
	);
};

function Logo() {
	const classes = useNavbarStyles();

	return (
		<div className={classes.logoContainer}>
			<Link to="/" className={classes.logoLink}>
				<div className={classes.logoWrapper}>
					<h2 className={classes.logo}>Code Coteries</h2>
				</div>
			</Link>
		</div>
	);
}

export default Navbar;
