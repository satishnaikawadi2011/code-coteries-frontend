import { Slide, Snackbar, Typography } from '@mui/material';
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
import * as Yup from 'yup'
import useDisplayError from 'src/hooks/useDisplayError';

interface EditUserInfoProps {
	profile?: Profile | null;
}


const validationSchema = Yup.object({	bio:Yup.string(),
		company:Yup.string(),
		github:Yup.string(),
		location:Yup.string(),
		website:Yup.string(),
		name: Yup.string(),
		email:Yup.string(),
		username: Yup.string()})

const EditUserInfo: React.FC<EditUserInfoProps> = ({ profile }) => {
	const classes = useEditProfilePageStyles();
	const { user } = useAuthStore();
	const initialValues = {
		bio:

				profile && profile.bio  ? profile.bio :
				'',
		company:

				profile && profile.company? profile.company :
				'',
		github:

				profile && profile.github ? profile.github :
				'',
		location:

				profile && profile.location ? profile.location :
				'',
		website:

				profile && profile.website ? profile.website :
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
		editProfile,{loading:editProfileLoading,data:editProfileData,error:editProfileError}
	] = useEditProfileMutation();
	const [
		editUserAvatar,{error:editUserAvatarError,loading:editUserAvatarLoading}
	] = useEditUserAvatarMutation();
	const [
		open,
		setOpen
	] = useState(false);

	useDisplayError([editProfileError, editUserAvatarError]);

	  async function handleSubmit(values:any) {
		  const { location, github, company, website, bio, } = values;
		  await editProfile({ variables: { editProfileInput: { bio:bio===''?null:bio, company:company===''?null:company, github:github===''?null:github, location:location===''?null:location, website:website===''?null:website } } });
		  setOpen(true);
	  }

	const { upload } = useCloudinaryUpload();

	async function handleUpdateProfilePic(event: any) {
		const cloudinaryData = await upload(event.target.files[0], 'file');
		console.log('Here',cloudinaryData)
		await editUserAvatar({ variables: { url: cloudinaryData.url } });
		setProfileImage(cloudinaryData.url);
	}

	const loading = editProfileLoading || editUserAvatarLoading;

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
			<AppForm onSubmit={handleSubmit} className={classes.form} initialValues={initialValues} validationSchema={validationSchema}>
				<SectionItem name="name" text="Name" disabled />
				<SectionItem name="username" text="Username" disabled />
				<SectionItem name="website" text="Website" />
				<SectionItem name="company" text="Company" />
				<SectionItem name="location" text="Location" />
				<SectionItem name="github" text="Github" />
				<div className={classes.sectionItem}>
					<aside>
						<Typography
						  className={classes.typography}
						>
							Bio
						</Typography>
					</aside>
					<div style={{width:'100%'}}>
						<AppFormField fieldName="bio" variant="outlined" multiline fullWidth rows={3}/>
					</div>
				</div>
				<div className={classes.sectionItem}>
					<div />
					<Typography className={classes.justifySelfStart} color="textSecondary">
						Personal informantion
					</Typography>
				</div>
				<SectionItem name="email" text="Email" type="email" disabled />

				<div className={classes.sectionItem}>
					<div />

					<AppFormSubmitButton
						type="submit"
						variant="contained"
						color="primary"
						className={classes.justifySelfStart}
						title="Submit"
						disabled={loading}
					/>
				</div>
			</AppForm>
			<Snackbar
	        open={open}
	        autoHideDuration={6000}
	        TransitionComponent={Slide}
	        message={<span>Profile updated</span>}
	        onClose={() => setOpen(false)}
	      />
		</section>
	);
};

export default EditUserInfo;
