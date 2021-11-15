import React, { useState } from 'react';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import { Link } from 'react-router-dom';

import { Typography, Divider, Hidden, Button, TextField } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Post } from 'src/generated/graphql';
import { useFeedPostStyles } from 'src/styles/feed';

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

	return <h1>Feed Post</h1>;
};

export default FeedPost;
