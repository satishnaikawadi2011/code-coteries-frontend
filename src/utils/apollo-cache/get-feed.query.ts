import { useAuthStore } from './../../store/auth';
import {
	LikePostMutation,
	Exact,
	GetFeedQuery,
	GetFeedDocument,
	AddCommentMutation,
	AddCommentInput
} from './../../generated/graphql';
import { MutationUpdaterFunction, ApolloCache, DefaultContext } from '@apollo/client';

type LikeOrUnlikePostType =
	| MutationUpdaterFunction<
			LikePostMutation,
			Exact<{
				postId: string;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

export type AddCommentType =
	| MutationUpdaterFunction<
			AddCommentMutation,
			Exact<{
				addCommentInput: AddCommentInput;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

export const addLike: LikeOrUnlikePostType = (store, { data }) => {
	const user = useAuthStore.getState().user!;

	// Get existing feed data
	const feedData = store.readQuery<GetFeedQuery>({
		query: GetFeedDocument
	})!;

	const posts = [
		...feedData!.getFeed
	];
	const postIndex = posts.findIndex((p) => p.id === data!.likePost.id);
	const post = posts[postIndex];
	const updatedLikes = [
		...post.likes,
		user.id
	];
	const updatedLikeCount = post.likeCount + 1;
	const updatedPost = {
		...post,
		likes: updatedLikes,
		likeCount: updatedLikeCount
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

export const removeLike: LikeOrUnlikePostType = (store, { data }) => {
	const user = useAuthStore.getState().user!;
	// Get existing feed data
	const feedData = store.readQuery<GetFeedQuery>({
		query: GetFeedDocument
	})!;

	const posts = [
		...feedData!.getFeed
	];
	const postIndex = posts.findIndex((p) => p.id === data!.likePost.id);
	const post = posts[postIndex];
	const updatedLikes = post.likes.filter((uid) => uid !== user.id);
	const updatedLikeCount = post.likeCount - 1;
	const updatedPost = {
		...post,
		likes: updatedLikes,
		likeCount: updatedLikeCount
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

// TODO: Not working due to unavailability of postId
const addComment: AddCommentType = (store, { data }) => {
	const postId = '';
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
