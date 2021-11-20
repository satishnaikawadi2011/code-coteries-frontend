import { MutationUpdaterFunction, ApolloCache, DefaultContext } from '@apollo/client';
import {
	GetMyFollowersQuery,
	GetMyFollowersDocument,
	GetMyFollowingsQuery,
	GetMyFollowingsDocument,
	FollowUserMutation,
	Exact,
	UnfollowUserMutation
} from './../../generated/graphql';
import { client } from '../ApolloProvider';

type AddFollowingType =
	| MutationUpdaterFunction<
			FollowUserMutation,
			Exact<{
				id: string;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

type RemoveFollowingType =
	| MutationUpdaterFunction<
			UnfollowUserMutation,
			Exact<{
				id: string;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

export const getMyFollowers = () => {
	const followers = client.readQuery<GetMyFollowersQuery>({
		query: GetMyFollowersDocument
	});
	return followers;
};

export const getMyFollowings = () => {
	const followings = client.readQuery<GetMyFollowingsQuery>({
		query: GetMyFollowingsDocument
	});

	return followings;
};

export const addFollowing: AddFollowingType = (store, { data }) => {
	// Get existing followings
	const followingsData = store.readQuery<GetMyFollowingsQuery>({
		query: GetMyFollowingsDocument
	})!;

	const updatedFollowings = [
		...followingsData!.getMyFollowings,
		data!.followUser
	];

	store.writeQuery<GetMyFollowingsQuery>({
		query: GetMyFollowersDocument,
		data:
			{
				...followingsData,
				getMyFollowings: updatedFollowings
			}
	});
};

export const removeFollowing: RemoveFollowingType = (store, { data }) => {
	// Get existing followings
	const followingsData = store.readQuery<GetMyFollowingsQuery>({
		query: GetMyFollowingsDocument
	})!;

	const updatedFollowings = followingsData!.getMyFollowings.filter((u) => u.id !== data!.unfollowUser);

	store.writeQuery<GetMyFollowingsQuery>({
		query: GetMyFollowersDocument,
		data:
			{
				...followingsData,
				getMyFollowings: updatedFollowings
			}
	});
};
