import { Post, PostComment } from 'src/generated/graphql';
import create from 'zustand';

type PostStore = {
	feed: Post[];
	post: Post | null;
	setFeed: (posts: Post[]) => void;
	addPosts: (posts: Post[]) => void;
	addComment: (postId: string, comment: PostComment) => void;
	addCommentOnPostDetailPage: (comment: PostComment) => void;
	setPost: (post: Post) => void;
};

export const usePostStore = create<PostStore>((set, get) => ({
	feed: [],
	post: null,
	setFeed: (posts) => set((state) => ({ ...state, feed: posts })),
	addPosts:
		(posts) =>
			set((state) => ({
				...state,
				feed:
					[
						...posts,
						...state.feed
					]
			})),
	addComment:
		(postId, comment) => {
			const { content, handle, id } = comment;
			const posts = [
				...get().feed
			];
			const postIndex = posts.findIndex((p) => p.id === postId);
			const post = posts[postIndex];
			const newComment: any = {
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
			get().setFeed(posts);
		},
	setPost: (post) => set((state) => ({ ...state, post })),
	addCommentOnPostDetailPage:
		(comment) => {
			const { content, handle, id, user, created_at } = comment;
			const post = {
				...get().post!
			};
			const newComment: any = {
				content,
				handle,
				id,
				user,
				created_at: new Date().toISOString()
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
			get().setPost(updatedPost);
		}
}));
