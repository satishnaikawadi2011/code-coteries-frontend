import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import { useUserCardStyles } from 'src/styles/user-card';
import { DEFAULT_USER_AVATAR } from 'src/constants';

interface Props {
	name: string;
	username: string;
	image_url?: string;
	avatarSize?: number;
	location?: string;
}

const UserCard: React.FC<Props> = ({ name, username, image_url = DEFAULT_USER_AVATAR, avatarSize = 44, location }) => {
	const classes = useUserCardStyles({ avatarSize });

	return (
		<div className={classes.wrapper}>
			<Link to={`/${username}`}>
				<Avatar src={image_url} alt="User avatar" className={classes.avatar} />
			</Link>
			<div className={classes.nameWrapper}>
				<Link style={{ color: '#000' }} to={`/${username}`}>
					<Typography variant="subtitle2" className={classes.typography}>
						{username}
					</Typography>
				</Link>
				<Typography color="textSecondary" variant="body2" className={classes.typography}>
					{location || name}
				</Typography>
			</div>
		</div>
	);
};

export default UserCard;
