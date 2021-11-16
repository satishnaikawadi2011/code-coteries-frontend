import { Button } from '@mui/material';
import React from 'react';
import { useAuthStore } from 'src/store/auth';
// import { LoadingLargeIcon } from 'src/icons/LargeLoadingIcon';

const FeedPage = () => {
	const { logout } = useAuthStore();

	return (
		<React.Fragment>
			<h1>Feed Page</h1>
			<Button onClick={() => logout()}>Logout</Button>
		</React.Fragment>
	);

	// return <LoadingLargeIcon />;
};

export default FeedPage;
