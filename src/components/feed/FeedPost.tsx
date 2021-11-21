import React, { useState } from 'react';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import { Link } from 'react-router-dom';
import Img from 'react-graceful-image';

import { Typography, Divider, Hidden, Button, TextField } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import {
	GetFeedDocument,
	GetFeedQuery,
	Post,
	useAddCommentMutation,
	useAddPostToBookmarkMutation,
	useLikePostMutation,
	useRemovePostFromBookmarkMutation
} from 'src/generated/graphql';
import { useFeedPostStyles } from 'src/styles/feed';
import { useAuthStore } from 'src/store/auth';
import { AddCommentType, addLike, removeLike } from 'src/utils/apollo-cache/get-feed.query';
import UserCard from '../shared/UserCard';
import { formatDateToNow } from 'src/utils/formateDate';
import FollowSuggestions from '../shared/FollowSuggestions';
import OptionsDialogue from '../shared/OptionsDialogue';
import CommentIcon from 'src/icons/CommentIcon';
import ShareIcon from 'src/icons/ShareIcon';

interface FeedPostProps {
	index?: number;
	post: Post;
}

const FeedPost: React.FC<FeedPostProps> = ({ post, index }) => {
	const classes = useFeedPostStyles();
	const [
		showCaption,
		setCaption
	] = useState(false);
	const [
		showOptionsDialog,
		setOptionsDialog
	] = useState(false);

	const {
		caption,
		created_at,
		handle,
		id,
		image_url,
		likeCount,
		likes,
		user,
		tags,
		comments,
		commentCount
	} = post;
	const showFollowSuggestions = index === 1;

	return <React.Fragment>
      <article
        className={classes.article}
        style={{ marginBottom: showFollowSuggestions ? 30 :0 }}
      >
        <div className={classes.postHeader}>
				<UserCard username={handle} name={user.fullName} image_url={user.profile?.image_url} />
          <MoreVertIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        <div>
          <Img src={image_url} alt="Post media" className={classes.image} />
        </div>
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton likes={likes} postId={id} ownerId={user.id} />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton postId={id} />
          </div>
          <Typography className={classes.likes} variant="subtitle2">
            <span>{likeCount === 1 ? '1 like' : `${likeCount} likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                variant="subtitle2"
                component="span"
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant="body2"
                component="span"
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  className={classes.caption}
                  maxLine="0"
                  ellipsis="..."
                  basedOn="letters"
                />
                <Button
                  className={classes.moreButton}
                  onClick={() => setCaption(true)}
                >
                  more
                </Button>
              </div>
            )}
          </div>
          <Link to={`/p/${id}`}>
            <Typography
              className={classes.commentsLink}
              variant="body2"
              component="div"
            >
              View all {commentCount} comments
            </Typography>
          </Link>
          {comments?.map((comment) => (
            <div key={comment.id}>
              <Link to={`/${comment.handle}`}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.commentUsername}
                >
                  {comment.handle}
                </Typography>{' '}
                <Typography variant="body2" component="span">
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography color="textSecondary" className={classes.datePosted}>
            {formatDateToNow(created_at)}
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment postId={id} />
        </Hidden>
      </article>
      {showFollowSuggestions && <FollowSuggestions />}
      {showOptionsDialog && (
        <OptionsDialogue
          ownerId={user.id}
          postId={id}
          onClose={() => setOptionsDialog(false)}
        />
      )}
    </React.Fragment>
};

interface LikeButtonProps {
	likes: string[];
	postId: string;
	ownerId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ likes, postId, ownerId }) => {
	const classes = useFeedPostStyles();

	const { user } = useAuthStore();
	// const feedIds = [...getMyFollowings()!.getMyFollowings.map(u => u.id), user!.id];

	const isAlreadyLiked = likes.some((user_id) => user_id === user!.id);
	const [
		liked,
		setLiked
	] = React.useState(isAlreadyLiked);
	const Icon =
		liked ? FavoriteIcon :
		FavoriteBorderIcon;
	const className =
		liked ? classes.liked :
		classes.like;
	const onClick =
		liked ? handleUnlike :
		handleLike;
	const [
		likePost
	] = useLikePostMutation();

	function handleLike() {
		setLiked(true);
		likePost({ variables: { postId }, update: addLike });
	}

	function handleUnlike() {
		setLiked(false);
		likePost({ variables: { postId }, update: removeLike });
	}

	return <Icon className={className} onClick={onClick} />;
};

interface CommentProps {
	postId: string;
}

const Comment: React.FC<CommentProps> = ({ postId }) => {
	const classes = useFeedPostStyles();
	const [
		content,
		setContent
	] = React.useState('');
	const [
		createComment
	] = useAddCommentMutation();

	const addComment: AddCommentType = (store, { data }) => {
		const { content, handle, id } = data!.addComment.postComment!;

		// Get existing feed data
		const feedData = store.readQuery<GetFeedQuery>({
			query: GetFeedDocument
		})!;

		const posts = [
			...feedData!.getFeed
		];
		const postIndex = posts.findIndex((p) => p.id === postId);
		const post = posts[postIndex];
		const newComment = {
			content,
			handle,
			id
		};
		const updatedComments = [
			newComment,
			...post.comments!
		];
		const updatedPost = {
			...post,
			comments: updatedComments,
			commentCount: post.commentCount + 1
		};
		posts[postIndex] = updatedPost;

		store.writeQuery<GetFeedQuery>({
			query: GetFeedDocument,
			data:
				{
					...feedData,
					getFeed: posts
				}
		});
	};

	function handleAddComment() {
		createComment({
			variables: { addCommentInput: { commentType: 'PostComment', content, entityId: postId } },
			update: addComment
		});
	}

	return (
		<div className={classes.commentContainer}>
			<TextField
				fullWidth
				value={content}
				placeholder="Add a comment..."
				multiline
				maxRows={2}
				rows={1}
				onChange={(event) => setContent(event.target.value)}
				className={classes.textField}
				InputProps={{
					classes:
						{
							root: classes.root,
							underline: classes.underline
						}
				}}
			/>
			<Button
				onClick={handleAddComment}
				color="primary"
				className={classes.commentButton}
				disabled={!content.trim()}
			>
				Post
			</Button>
		</div>
	);
};

interface SaveButtonProps {
	postId: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ postId }) => {
	const classes = useFeedPostStyles();
	const { user } = useAuthStore();
	const isAlreadySaved = user!.saved_posts.some((pid) => pid === postId);
	const [
		saved,
		setSaved
	] = React.useState(isAlreadySaved);
	const Icon =
		saved ? BookmarkIcon :
		BookmarkBorderIcon;
	const onClick =
		saved ? handleRemove :
		handleSave;
	const [
		savePost
	] = useAddPostToBookmarkMutation();
	const [
		removePost
	] = useRemovePostFromBookmarkMutation();

	function handleSave() {
		setSaved(true);
		savePost({ variables: { postId } });
	}

	function handleRemove() {
		setSaved(false);
		removePost({ variables: { postId } });
	}

	return <Icon className={classes.saveIcon} onClick={onClick} />;
};

export default FeedPost;
