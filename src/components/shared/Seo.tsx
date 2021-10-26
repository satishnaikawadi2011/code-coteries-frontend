import React from 'react';
import Helmet from 'react-helmet';

interface SeoProps {
	title: string;
}

const SEO: React.FC<SeoProps> = ({ title }) => {
	const titleText =
		title ? `${title} • Code Coteries` :
		`Code Coteries`;
	return (
		<Helmet>
			<title>{titleText}</title>
		</Helmet>
	);
};

export default SEO;
