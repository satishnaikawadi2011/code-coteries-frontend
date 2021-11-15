import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { DEFAULT_USER_AVATAR } from 'src/constants';
import { Profile, useEditProfileMutation, useEditUserAvatarMutation } from 'src/generated/graphql';
import useCloudinaryUpload from 'src/hooks/useCloudinaryUpload';
import { useAuthStore } from 'src/store/auth';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import AppForm from '../shared/form/AppForm';
import AppFormField from '../shared/form/AppFormField';
import AppFormSubmitButton from '../shared/form/AppFormSubmitButton';
import ProfilePicture from '../shared/ProfilePicture';
import SectionItem from './SectionItem';

interface EditUserInfoProps {
	profile: Profile | null;
}

const EditUserInfo: React.FC<EditUserInfoProps> = ({ profile }) => {
	const classes = useEditProfilePageStyles();
	//   const { register, handleSubmit } = useForm({ mode: 'onBlur' });
	//   const { updateEmail } = React.useContext(AuthContext);

	const { user } = useAuthStore();

	const initialValues = {
		bio:

				profile ? profile.bio :
				'',
		company:

				profile ? profile.company :
				'',
		github:

				profile ? profile.github :
				'',
		location:

				profile ? profile.location :
				'',
		website:

				profile ? profile.website :
				'',
		name: user?.fullName,
		email: user?.email,
		username: user?.username
	};

	const [
		profileImage,
		setProfileImage
	] = useState(

			profile ? profile.image_url :
			DEFAULT_USER_AVATAR
	);
	const [
		editProfile
	] = useEditProfileMutation();
	const [
		editUserAvatar
	] = useEditUserAvatarMutation();
	//   const [error, setError] = useState(DEFAULT_ERROR);
	const [
		open,
		setOpen
	] = useState(false);

	//   async function onSubmit(data) {
	//     try {
	//       setError(DEFAULT_ERROR);
	//       const variables = { ...data, id: user.id };

	//       await updateEmail(data.email);

	//       await editUser({ variables });
	//       setOpen(true);
	//     } catch (error) {
	//       console.error('Erorr updating profile', error);
	//       handleError(error);
	//     }
	//   }

	//   function handleError(error) {
	//     if (error.message.includes('users_username_key')) {
	//       setError({ type: 'username', message: 'This username is already taken' });
	//     } else if (error.code.includes('auth')) {
	//       setError({ type: 'email', message: error.message });
	//     }
	// }

	const { upload } = useCloudinaryUpload();

	async function handleUpdateProfilePic(event: any) {
		const cloudinaryData = await upload(event.target.files[0], 'file');
		console.log('Here',cloudinaryData)
		await editUserAvatar({ variables: { url: cloudinaryData.url } });
		setProfileImage(cloudinaryData.url);
	}

	return (
		<section className={classes.container}>
			<div className={classes.pictureSectionItem}>
				<ProfilePicture size={38} image={profileImage} />
				<div className={classes.justifySelfStart}>
					<Typography className={classes.typography}>{user?.username}</Typography>
					<input
						accept="image/*"
						id="image"
						type="file"
						style={{ display: 'none' }}
						onChange={handleUpdateProfilePic}
					/>
					<label htmlFor="image">
						<Typography className={classes.typographyChangePic} color="primary" variant="body2">
							Change Profile Photo
						</Typography>
					</label>
				</div>
			</div>
			<AppForm onSubmit={() => {}} className={classes.form} initialValues={initialValues} validationSchema={{}}>
				<SectionItem name="name" text="Name" />
				<SectionItem name="username" text="Username" />
				<SectionItem name="website" text="Website" />
				<SectionItem name="company" text="Company" />
				<SectionItem name="location" text="Location" />
				<SectionItem name="github" text="Github" />
				<div className={classes.sectionItem}>
					<aside>
						<Typography
						//   className={classes.bio}
						>
							Bio
						</Typography>
					</aside>
					<AppFormField fieldName="bio" variant="outlined" multiline fullWidth rows={3} />
				</div>
				<div className={classes.sectionItem}>
					<div />
					<Typography className={classes.justifySelfStart} color="textSecondary">
						Personal informantion
					</Typography>
				</div>
				<SectionItem name="email" text="Email" type="email" />

				<div className={classes.sectionItem}>
					<div />

					<AppFormSubmitButton
						type="submit"
						variant="contained"
						color="primary"
						className={classes.justifySelfStart}
						title="Submit"
					/>
				</div>
			</AppForm>
			{/* <Snackbar
	        open={open}
	        autoHideDuration={6000}
	        TransitionComponent={Slide}
	        message={<span>Profile updated</span>}
	        onClose={() => setOpen(false)}
	      /> */}
		</section>
	);
	// return null;
};

export default EditUserInfo;
