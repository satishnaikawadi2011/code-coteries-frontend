import React from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import { useHistory } from 'react-router-dom';
import LoadingScreen from 'src/components/shared/LoadingScreen';
import { Drawer, Hidden, IconButton, List, ListItem, ListItemText, Menu, useMediaQuery } from '@mui/material';
import Layout from 'src/components/shared/Layout';
import EditUserInfo from 'src/components/edit-profile/EditUserInfo';

const EditProfilePage = () => {
	const history = useHistory();

	// 	const { currentUserId } = React.useContext(UserContext);
	//   const variables = { id: currentUserId };
	//   const { data, loading } = useQuery(GET_EDIT_USER_PROFILE, { variables });

	const classes = useEditProfilePageStyles();
	const path = history.location.pathname;
	const [
		showDrawer,
		setDrawer
	] = React.useState(false);

	//   if (loading) {
	//     return <LoadingScreen />;
	//   }

	function handleToggleDrawer() {
		setDrawer((prev) => !prev);
	}

	function handleSelected(index: number) {
		switch (index) {
			case 0:
				return path.includes('edit');
			default:
				break;
		}
	}

	function handleListClick(index: number) {
		switch (index) {
			case 0:
				history.push('/accounts/edit');
				break;
			default:
				break;
		}
	}

	const options = [
		'Edit Profile',
		'Change Password',
		'Apps and Websites',
		'Email and SMS',
		'Push Notifications',
		'Manage Contacts',
		'Privacy and Security',
		'Login Activity',
		'Emails from Instagram'
	];

	const drawer = (
		<List>
			{options.map((option, index) => (
				<ListItem
					key={option}
					button
					selected={handleSelected(index)}
					onClick={() => handleListClick(index)}
					classes={{
						selected: classes.listItemSelected,
						button: classes.listItemButton
					}}
				>
					<ListItemText primary={option} />
				</ListItem>
			))}
		</List>
	);

	return (
		<Layout title="Edit Profile">
			<section className={classes.section}>
				<IconButton edge="start" onClick={handleToggleDrawer} className={classes.menuButton}>
					{/* <Menu /> */}
				</IconButton>
				<nav>
					<Hidden smUp implementation="css">
						<Drawer
							variant="temporary"
							anchor="left"
							open={showDrawer}
							onClose={handleToggleDrawer}
							classes={{ paperAnchorLeft: classes.temporaryDrawer }}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden
						xsDown
						implementation="css"
						// className={classes.permanentDrawerRoot}
					>
						<Drawer
							variant="permanent"
							open
							classes={{
								paper: classes.permanentDrawerPaper,
								root: classes.permanentDrawerRoot
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main>{path.includes('edit') && <EditUserInfo profile={null} />}</main>
			</section>
		</Layout>
	);
};

export default EditProfilePage;
