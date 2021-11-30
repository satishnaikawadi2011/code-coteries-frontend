import React, { useEffect } from 'react'

import { Avatar, Button, Divider, Hidden, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Link,useParams } from 'react-router-dom';
import { GetFeedDocument, GetFeedQuery, PostComment, RegularUserFragment, useAddCommentMutation, useAddPostToBookmarkMutation, useGetPostQuery, useLikePostMutation, useRemovePostFromBookmarkMutation } from 'src/generated/graphql';
import { useAuthStore } from 'src/store/auth';
import { usePostStyles } from 'src/styles/post';
import { formatDateToNowShort, formatPostDate } from 'src/utils/formateDate';
import { AddCommentType, addLike, removeLike } from 'src/utils/apollo-cache/get-feed.query';
import PostSkeleton from './PostSkeleton';
import UserCard from '../shared/UserCard';
import CommentIcon from 'src/icons/CommentIcon';
import ShareIcon from 'src/icons/ShareIcon';
import OptionsDialogue from '../shared/OptionsDialogue';
import { usePostStore } from 'src/store/post';
import { DEFAULT_USER_AVATAR } from 'src/constants';

interface PostProps {
  postId: string;
}

const Post: React.FC<PostProps> = ({postId}) => {
  const classes = usePostStyles();
    
  const [showOptionsDialog, setOptionsDialog] = React.useState(false);

  const {post,setPost} = usePostStore();
  
  const { data, loading } = useGetPostQuery({ variables: { postId } });
  
  useEffect(() => {
    if (data) {
      setPost(data.getPost! as any);
    }
  },[data,setPost])

  if (loading || !post) return <PostSkeleton />;
    
  return (
    <div className={classes.postContainer}>
      <article className={classes.article}>
        <div className={classes.postHeader}>
          <UserCard name={post!.user!.fullName} username={post!.handle} image_url={post!.avatar_url} />
          <MoreVertIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        <div className={classes.postImage}>
          <img src={post!.image_url} alt="Post media" className={classes.image} />
        </div>
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton likes={post!.likes} postId={post!.id} ownerId={post!.user!.id} />
            <Link to={`/p/${post!.id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton postId={post!.id} />
          </div>
          <Typography className={classes.likes} variant="subtitle2">
            <span>{post!.likeCount === 1 ? '1 like' : `${post!.likeCount} likes`}</span>
          </Typography>
          <div
            style={{
              overflowY: 'scroll',
              padding: '16px 12px',
              height: '100%',
            }}
          >
            <AuthorCaption
              avatar={post!.avatar_url}
              username={post!.handle}
              createdAt={post!.created_at}
              caption={post!.caption}
            />
            {post!.comments?.map((comment) => (
              <UserComment key={comment.id} comment={comment as any} />
            ))}
          </div>

          <Typography color="textSecondary" className={classes.datePosted}>
            {formatPostDate(parseInt(post!.created_at))}
          </Typography>

          <Hidden xsDown>
            <div className={classes.comment}>
              <Divider />
              <Comment postId={post!.id} />
            </div>
          </Hidden>
        </div>
      </article>
      {showOptionsDialog && (
        <OptionsDialogue
          postId={post!.id}
          ownerId={post!.user!.id}
          onClose={() => setOptionsDialog(false)}
        />
      )}
    </div>
  );
}

interface AProps{
    caption: string;
    username: string;
    avatar: string;
    createdAt: string;
}

const AuthorCaption:React.FC<AProps> = ({ caption, createdAt,avatar,username }) => {
  const classes = usePostStyles();
  return (
    <div style={{ display: 'flex' }}>
      <Avatar
        src={avatar}
        alt="User avatar"
        style={{ marginRight: 14, width: 32, height: 32 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={username}>
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.username}
          >
            {username}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.postCaption}
            style={{ paddingLeft: 0 }}
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        </Link>
        <Typography
          style={{ marginTop: 16, marginBottom: 4, display: 'inline-block' }}
          color="textSecondary"
          variant="caption"
        >
          {formatDateToNowShort(parseInt(createdAt))}
        </Typography>
      </div>
    </div>
  );
}

interface CProps{
  comment: PostComment;
}

const UserComment:React.FC<CProps> = ({ comment }) => {
  const classes = usePostStyles();

  return (
    <div style={{ display: 'flex' }}>
      <Avatar
        src={comment.user?.profile?.image_url || DEFAULT_USER_AVATAR}
        alt="User avatar"
        style={{ marginRight: 14, width: 32, height: 32 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={comment.user.username}>
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.username}
          >
            {comment.user.username}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.postCaption}
            style={{ paddingLeft: 0 }}
          >
            {comment.content}
          </Typography>
        </Link>
        <Typography
          style={{ marginTop: 16, marginBottom: 4, display: 'inline-block' }}
          color="textSecondary"
          variant="caption"
        >
          {formatDateToNowShort(comment.created_at)}
        </Typography>
      </div>
    </div>
  );
}


interface LikeButtonProps {
	likes: string[];
	postId: string;
	ownerId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ likes, postId, ownerId }) => {
	const classes = usePostStyles();

	const { user } = useAuthStore();

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

	return <Icon className={className} style={{width:30,height:30,cursor:'pointer'}} onClick={onClick} />;
};



interface CommentProps {
	postId: string;
}

const Comment: React.FC<CommentProps> = ({ postId }) => {
  const classes = usePostStyles();
  const {addCommentOnPostDetailPage} = usePostStore()
	const [
		content,
		setContent
	] = React.useState('');
	const [
		createComment
	] = useAddCommentMutation();

	async function handleAddComment() {
		const newComment =  await createComment({
			variables: { addCommentInput: { commentType: 'PostComment', content, entityId: postId } }
    });
    addCommentOnPostDetailPage(newComment!.data!.addComment!.postComment as any)
    setContent('');
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
				onChange={(event:any) => setContent(event.target.value)}
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
	const classes = usePostStyles();
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

	return <Icon className={classes.saveIcon} style={{width:30,height:30,cursor:'pointer'}} onClick={onClick} />;
};


export default Post