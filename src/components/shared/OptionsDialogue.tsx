import { Button, Dialog, Divider, Zoom } from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDeletePostMutation, useUnfollowUserMutation } from 'src/generated/graphql';
import { useAuthStore } from 'src/store/auth';
import { useOptionsDialogStyles } from 'src/styles/shared';
import { getMyFollowings, removeFollowing } from 'src/utils/apollo-cache/followings.query';

interface OptionsDialogueProps {
	onClose?: any;
	ownerId: string;
	postId: string;
}

const OptionsDialogue: React.FC<OptionsDialogueProps> = ({ onClose, ownerId, postId }) => {
	const { user } = useAuthStore();

	const classes = useOptionsDialogStyles();
	const followingIds = getMyFollowings()!.getMyFollowings.map((u) => u.id);
	const isOwner = ownerId === user!.id;
	const buttonText =
		isOwner ? 'Delete' :
		'Unfollow';
	const onClick =
		isOwner ? handleDeletePost :
		handleUnfollowUser;
	const isFollowing = followingIds.some((id) => id === ownerId);
	const isUnrelatedUser = !isOwner && !isFollowing;
	const [
		unfollowUser
	] = useUnfollowUserMutation();
	const [
		deletePost
	] = useDeletePostMutation();
	const history = useHistory();

	async function handleDeletePost() {
		await deletePost({ variables: { postId } });
		onClose();
		history.push('/');
		window.location.reload();
	}

	function handleUnfollowUser() {
		unfollowUser({ variables: { id: ownerId }, update: removeFollowing });
		onClose();
	}

	return (
		<Dialog
			open
			classes={{
				scrollPaper: classes.dialogScrollPaper
			}}
			onClose={onClose}
			TransitionComponent={Zoom}
		>
			{!isUnrelatedUser && (
				<Button className={classes.redButton} onClick={onClick}>
					{buttonText}
				</Button>
			)}
			<Divider />
			<Button>
				<Link to={`/p/${postId}`}>Go to post</Link>
			</Button>
			<Divider />
			<Button>Share</Button>
			<Divider />
			<Button>Copy Link</Button>
			<Divider />
			<Button onClick={onClose}>Cancel</Button>
		</Dialog>
	);
};

export default OptionsDialogue;
