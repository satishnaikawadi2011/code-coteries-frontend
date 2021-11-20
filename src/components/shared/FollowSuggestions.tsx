import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_USER_AVATAR } from 'src/constants';
import { User, useSuggestUsersQuery } from 'src/generated/graphql';
import LoadingLargeIcon from 'src/icons/LargeLoadingIcon';
import { useAuthStore } from 'src/store/auth';
import { useFollowSuggestionsStyles } from 'src/styles/shared';
import { getMyFollowers } from 'src/utils/apollo-cache/followings.query';
import FollowButton from './FollowButton';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface FollowSuggestionsProps {
	hideHeader?: boolean;
}

const FollowSuggestions: React.FC<FollowSuggestionsProps> = ({ hideHeader }) => {
	const { user } = useAuthStore();
	const classes = useFollowSuggestionsStyles();
	const followerIds = getMyFollowers()!.getMyFollowers.map((u) => u.id);
	const { data, loading } = useSuggestUsersQuery({
		variables: { suggestUsersInput: { created_at: user!.created_at, followerIds, limit: 20 } }
	});

	return (
		<div className={classes.container}>
			{!hideHeader && (
				<Typography color="textSecondary" variant="subtitle2" className={classes.typography}>
					Suggestions For You
				</Typography>
			)}
			{
				loading ? <LoadingLargeIcon /> :
				<Slider
					className={classes.slide}
					dots={false}
					infinite
					speed={1000}
					touchThreshold={1000}
					variableWidth
					swipeToSlide
					arrows
					slidesToScroll={3}
					easing="ease-in-out"
				>
					{data!.suggestUsers.map((user) => <FollowSuggestionsItem key={user.id} user={user as any} />)}
				</Slider>}
		</div>
	);
};

const FollowSuggestionsItem: React.FC<{ user: User }> = ({ user }) => {
	const classes = useFollowSuggestionsStyles();
	const { profile, username, fullName, id } = user;

	const src =

			profile && profile.image_url ? profile.image_url :
			DEFAULT_USER_AVATAR;

	return (
		<div>
			<div className={classes.card}>
				<Link to={`/${username}`}>
					<Avatar
						src={src}
						alt={`${username}'s profile`}
						classes={{ root: classes.avatar, img: classes.avatarImg }}
					/>
				</Link>
				<Link to={`/${username}`}>
					<Typography className={classes.text} variant="subtitle2" align="center">
						{username}
					</Typography>
				</Link>
				<Typography className={classes.text} color="textSecondary" variant="body2" align="center">
					{fullName}
				</Typography>
				<FollowButton id={id} side={false} />
			</div>
		</div>
	);
};

export default FollowSuggestions;
