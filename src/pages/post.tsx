import React from 'react';
import Post from 'src/components/post/Post';
import Layout from 'src/components/shared/Layout';
import { useParams } from 'react-router-dom';
import MorePostsFromUser from 'src/components/post/MorePostsFromUser';

const PostPage = () => {
	const { postId }: any = useParams();

	return (
		<Layout title="">
			<Post postId={postId} />
			<MorePostsFromUser postId={postId} />
		</Layout>
	);
};

export default PostPage;
