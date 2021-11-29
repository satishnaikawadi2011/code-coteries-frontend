import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useSuggestUsersQuery } from 'src/generated/graphql';
import LoadingIcon from 'src/icons/LoadingIcon';
import { useAuthStore } from 'src/store/auth';
import { useUserStore } from 'src/store/user';
import { useFeedSideSuggestionsStyles } from 'src/styles/feed';
import FollowButton from '../shared/FollowButton';
import UserCard from '../shared/UserCard';

interface FeedSideSuggestionsProps {}

const FeedSideSuggestions: React.FC<FeedSideSuggestionsProps> = ({}) => {
	const classes = useFeedSideSuggestionsStyles();
	const { followerIds } = useUserStore();
	const { user } = useAuthStore();
	const { data, loading } = useSuggestUsersQuery({
		variables: { suggestUsersInput: { created_at: user!.created_at, followerIds, limit: 5 } }
	});

	return (
		<article className={classes.article}>
			<Paper className={classes.paper}>
				<Typography
					color="textSecondary"
					variant="subtitle2"
					component="h2"
					align="left"
					gutterBottom
					className={classes.typography}
				>
					Suggestion For You
				</Typography>
				{
					loading ? <LoadingIcon /> :
					data!.suggestUsers.map((u) => (
						<div key={u.id} className={classes.card}>
							<UserCard name={u.fullName} username={u.username} />
							<FollowButton id={u.id} side />
						</div>
					))}
			</Paper>
		</article>
	);
};

export default FeedSideSuggestions;
