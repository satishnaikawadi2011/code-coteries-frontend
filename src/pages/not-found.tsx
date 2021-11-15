import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'src/components/shared/Layout';

const NotFoundPage = () => {
	return (
		<Layout title="Not Found Page" minimalNavbar>
			<Typography variant="h5" align="center" paragraph>
				Sorry, this page isn't available.
			</Typography>
			<Typography align="center">
				The link you followed may be broken, or the page may have been removed.
				<Link to="/">
					{' '}
					<Typography color="primary" component="span">
						Go back to Code Coteries.
					</Typography>
				</Link>
			</Typography>
		</Layout>
	);
};

export default NotFoundPage;
