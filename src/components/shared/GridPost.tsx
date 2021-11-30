import { Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Post } from 'src/generated/graphql';
import { useGridPostStyles } from 'src/styles/shared';

interface GridPostProps {
	post: Post;
}

const GridPost: React.FC<GridPostProps> = ({ post }) => {
	const history = useHistory();
	const classes = useGridPostStyles();

	function handleOpenPostModal() {
		history.push({
			pathname: `/p/${post.id}`,
			state: { modal: true }
		});
	}

	return (
		<div className={classes.gridPostContainer} onClick={handleOpenPostModal}>
			<div className={classes.gridPostOverlay}>
				<div className={classes.gridPostInfo}>
					<span className={classes.likes} />
					<Typography>{post.likeCount}</Typography>
				</div>
				<div className={classes.gridPostInfo}>
					<span className={classes.comments} />
					<Typography>{post.commentCount}</Typography>
				</div>
			</div>
			<img src={post.image_url} alt="Post cover" className={classes.image} />
		</div>
	);
};

export default GridPost;
