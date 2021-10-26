import React from 'react';
import { useLayoutStyles } from 'src/styles/layout';
import Navbar from './Navbar';
import SEO from './Seo';

interface LayoutProps {
	title: string;
	marginTop?: string | number;
}

const Layout: React.FC<LayoutProps> = ({ title, children, marginTop = 60 }) => {
	const classes = useLayoutStyles();
	return (
		<section className={classes.section}>
			<SEO title={title} />
			<Navbar />
			<main className={classes.main} style={{ marginTop }}>
				<section className={classes.childrenWrapper}>
					<div className={classes.children}>{children}</div>
				</section>
			</main>
		</section>
	);
};

export default Layout;
