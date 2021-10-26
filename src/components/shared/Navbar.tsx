import { AppBar } from '@mui/material';
import React from 'react';
import { useNavbarStyles } from 'src/styles/navbar';
import Logo from './Logo';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const classes = useNavbarStyles();
	return (
		<AppBar className={classes.appBar}>
			<section className={classes.section}>
				<Logo size={30} />
			</section>
		</AppBar>
	);
};

export default Navbar;
