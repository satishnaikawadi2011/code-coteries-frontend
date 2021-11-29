import React, { useState } from 'react';
import { useEditUserAvatarMutation } from 'src/generated/graphql';
import useCloudinaryUpload from 'src/hooks/useCloudinaryUpload';
import { useAuthStore } from 'src/store/auth';
import { useProfilePictureStyles } from 'src/styles/profile-pic';

import Person from '@mui/icons-material/Person';

interface ProfilePictureProps {
	size: number;
	image: string;
	isOwner?: boolean;
	disabled?: boolean;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ image, isOwner = true, size, disabled }) => {
	const { updateUser } = useAuthStore();
	const classes = useProfilePictureStyles({ size, isOwner });
	const inputRef: any = React.useRef();
	const [
		img,
		setImg
	] = useState(image);
	const [
		editUserAvatar
	] = useEditUserAvatarMutation();

	const { upload } = useCloudinaryUpload();

	async function handleUpdateProfilePic(event: any) {
		const cloudinaryData = await upload(event.target.files[0], 'file');
		await editUserAvatar({ variables: { url: cloudinaryData.url } });
		updateUser({ profile: { image_url: cloudinaryData.url } });
	}

	function openFileInput() {
		inputRef.current.click();
	}

	return (
		<section className={classes.section}>
			<input
				style={{ display: 'none' }}
				ref={inputRef}
				type="file"
				onChange={

						disabled ? () => {} :
						handleUpdateProfilePic
				}
			/>
			{
				image ? <div
					className={classes.wrapper}
					onClick={

							isOwner ? openFileInput :
							() => null
					}
				>
					<img src={img} alt="user profile" className={classes.image} />
				</div> :
				<div className={classes.wrapper}>
					<Person className={classes.person} />
				</div>}
		</section>
	);
};

export default ProfilePicture;
