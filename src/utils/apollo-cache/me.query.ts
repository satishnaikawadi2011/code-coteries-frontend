import { ApolloCache, DefaultContext, MutationUpdaterFunction } from '@apollo/client';
import { AddEducationInput, AddEducationMutation, Exact, MeDocument, MeQuery } from 'src/generated/graphql';

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
