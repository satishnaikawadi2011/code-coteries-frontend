import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import { useUserCardStyles } from 'src/styles/user-card';

interface Props {
	name: string;
	username: string;
	image_url?: string;
	avatarSize?: number;
	location?: string;
}

const UserCard: React.FC<Props> = ({
	name,
	username,
	image_url = 'https://res.cloudinary.com/dg2zkumuc/image/upload/v1597862391/slcwy3gm2gv6i3tn6n7d.png',
	avatarSize = 44,
	location
}) => {
	const classes = useUserCardStyles({ avatarSize });

	return (
		<div className={classes.wrapper}>
			<Link to={`/${username}`}>
				<Avatar src={image_url} alt="User avatar" className={classes.avatar} />
			</Link>
			<div className={classes.nameWrapper}>
				<Link to={`/${username}`}>
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
