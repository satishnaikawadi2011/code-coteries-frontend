import { Button } from '@mui/material';
import React from 'react'
import { useFollowUserMutation, useUnfollowUserMutation } from 'src/generated/graphql';
import { useFollowButtonStyles } from 'src/styles/shared';
import { addFollowing, getMyFollowings, removeFollowing } from 'src/utils/apollo-cache/followings.query';

interface FollowButtonProps {
    side?: boolean;
    id: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({id,side}) => {
    const classes = useFollowButtonStyles({ side });
  const isAlreadyFollowing = getMyFollowings()?.getMyFollowings.some(
    (following) => following.id === id
  );
    const [isFollowing, setFollowing] = React.useState(isAlreadyFollowing);
    const [followUser] = useFollowUserMutation()
    const [unfollowUser] = useUnfollowUserMutation();

  function handleFollowUser() {
    setFollowing(true);
    followUser({variables:{id},update:addFollowing});
  }

  function handleUnfollowUser() {
    setFollowing(false);
    unfollowUser({variables:{id},update:removeFollowing});
  }

  const followButton = (
    <Button
      variant={side ? 'text' : 'contained'}
      color="primary"
      className={classes.button}
      onClick={handleFollowUser}
      fullWidth
    >
      Follow
    </Button>
  );

  const followingButton = (
    <Button
      variant={side ? 'text' : 'outlined'}
      className={classes.button}
      onClick={handleUnfollowUser}
      fullWidth
    >
      Following
    </Button>
  );

  return isFollowing ? followingButton : followButton;
}

export default FollowButton