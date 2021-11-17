import { ApolloCache, DefaultContext, MutationUpdaterFunction } from '@apollo/client';
import {
	AddEducationInput,
	AddEducationMutation,
	Exact,
	MeDocument,
	MeQuery,
	RemoveEducationMutation
} from 'src/generated/graphql';

type AddEducationItemType =
	| MutationUpdaterFunction<
			AddEducationMutation,
			Exact<{
				addEducationInput: AddEducationInput;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

type RemoveEducationItemType =
	| MutationUpdaterFunction<
			RemoveEducationMutation,
			Exact<{
				id: string;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

export const addEducationItem: AddEducationItemType = (store, { data }) => {
	// Get existing userdata
	const userData = store.readQuery<MeQuery>({
		query: MeDocument
	})!;

	const educationItems = userData!.me.profile!.education!;

	store.writeQuery<MeQuery>({
		query: MeDocument,
		data:
			{
				...userData,
				me:
					{
						...userData.me,
						profile:
							{
								...userData.me!.profile as any,
								education:
									[
										data!.addEducation,
										...educationItems
									]
							}
					}
			}
	});
};

export const removeEducationItem: RemoveEducationItemType = (store, { data }) => {
	// Get existing userdata
	const userData = store.readQuery<MeQuery>({
		query: MeDocument
	})!;

	const educationItems = userData!.me.profile!.education!;

	const updatedEducationItems = educationItems.filter((e) => e.id !== data!.removeEducation);

	store.writeQuery<MeQuery>({
		query: MeDocument,
		data:
			{
				...userData,
				me:
					{
						...userData.me,
						profile:
							{
								...userData.me!.profile as any,
								education: updatedEducationItems
							}
					}
			}
	});
};
