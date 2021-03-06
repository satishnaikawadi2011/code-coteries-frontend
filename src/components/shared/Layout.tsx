import React from 'react';
import { useLayoutStyles } from 'src/styles/layout';
import Navbar from './Navbar';
import SEO from './Seo';

interface LayoutProps {
	title: string;
	marginTop?: string | number;
	minimalNavbar?: boolean;
}

const Layout: React.FC<LayoutProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
	title,
	children,
	marginTop = 60,
	className,
	style,
	minimalNavbar = false,
	...props
}) => {
	const classes = useLayoutStyles();
	return (
		<section className={`${classes.section}`}>
			<SEO title={title} />
			<Navbar minimal={minimalNavbar} />
			<main className={`${classes.main} ${className}`} style={{ marginTop, ...style }} {...props}>
				<section className={classes.childrenWrapper}>
					<div className={classes.children}>{children}</div>
				</section>
			</main>
		</section>
	);
};

export default Layout;
