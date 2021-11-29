import React,{useState} from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import LoadingScreen from 'src/components/shared/LoadingScreen';
import { Drawer, Hidden, IconButton, List, ListItem, ListItemText, } from '@mui/material';
import Layout from 'src/components/shared/Layout';
import EditUserInfo from 'src/components/edit-profile/EditUserInfo';
import { useGetMyProfileQuery, useMeQuery,Education, Experience } from 'src/generated/graphql';
import { Menu } from '@mui/icons-material';
import EditSocialLinks from 'src/components/edit-profile/EditSocialLinks';
import EditEducation from 'src/components/edit-profile/EditEducation';
import EditExperience from 'src/components/edit-profile/EditExperience';
import WorkInProgressAnimation from 'src/animations/components/WorkInProgress';

export type KeyType = 'profile' | 'education' | 'experience' | 'social' | 'apps-and-websites' | 'email-sms' | 'push-notifications' | 'privacy-security' | 'emails-from-code-coteries';
export interface DrawerOptionType {
	label: string;
	key: KeyType;
}

	const options: DrawerOptionType[] = [
		{label:'Edit Profile',key:'profile'},
		{label:'Education Info',key:'education'},
		{label:'Work Experience',key:'experience'},
		{label:'Social Accounts',key:'social'},
		{label:'Apps and Websites',key:'apps-and-websites'},
		{label:'Email and SMS',key:'email-sms'},
		{label:'Push Notifications',key:'push-notifications'},
		{label:'Privacy and Security',key:'privacy-security'},
		{label:'Emails from Code Coteries',key:'emails-from-code-coteries'}
	] 

const EditProfilePage = () => {
	const { data: profileData, loading: profileLoading } = useGetMyProfileQuery();
	const {data:userData,loading:userLoading} = useMeQuery()
	const [currentOption, setCurrentOption] = useState<KeyType>('profile');
	const classes = useEditProfilePageStyles();
	const [
		showDrawer,
		setDrawer
	] = React.useState(false);

	if (profileLoading || userLoading) {
		return <LoadingScreen />;
	}

	function handleToggleDrawer() {
		setDrawer((prev) => !prev);
	}

	function handleSelected(option:DrawerOptionType) {
		return currentOption === option.key;
	}

	function handleListClick(option: DrawerOptionType) {
		setCurrentOption(option.key);
	}



	const drawer = (
		<List>
			{options.map((option, index) => (
				<ListItem
					key={option.key}
					button
					selected={handleSelected(option)}
					onClick={() => handleListClick(option)}
					classes={{
						selected: classes.listItemSelected,
						button: classes.listItemButton
					}}
				>
					<ListItemText primary={option.label} />
				</ListItem>
			))}
		</List>
	);

	return (
		<Layout title="Edit Profile">
			<section className={classes.section}>
				<IconButton edge="start" onClick={handleToggleDrawer} className={classes.menuButton}>
					<Menu />
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
				<main>
					{currentOption === 'profile' && <EditUserInfo profile={profileData?.getMyProfile} />}
					{currentOption === 'social' && <EditSocialLinks social={userData?.me.profile?.social} />}
					{currentOption === 'education' && <EditEducation educationItems={userData?.me.profile?.education as Education[]} />}
					{currentOption === 'experience' && <EditExperience experienceItems={userData?.me.profile?.experience as Experience[]} />}
					{currentOption !== 'profile' && currentOption !== 'social' && currentOption !== 'education' && currentOption !== 'experience' &&
						<section className={classes.container} style={{width:'100%'}}>
						<WorkInProgressAnimation />
					</section>
					}
				</main>
			</section>
		</Layout>
	);
};

export default EditProfilePage;
