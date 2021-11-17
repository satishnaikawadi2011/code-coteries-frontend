import { ApolloCache, DefaultContext, MutationUpdaterFunction } from '@apollo/client';
import {
	AddEducationInput,
	AddEducationMutation,
	AddExperienceInput,
	AddExperienceMutation,
	Exact,
	MeDocument,
	MeQuery,
	RemoveEducationMutation,
	RemoveExperienceMutation
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

type AddExperienceItemType =
	| MutationUpdaterFunction<
			AddExperienceMutation,
			Exact<{
				addExperienceInput: AddExperienceInput;
			}>,
			DefaultContext,
			ApolloCache<any>
		>
	| undefined;

type RemoveExperienceItemType =
	| MutationUpdaterFunction<
			RemoveExperienceMutation,
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

export const addExperienceItem: AddExperienceItemType = (store, { data }) => {
	// Get existing userdata
	const userData = store.readQuery<MeQuery>({
		query: MeDocument
	})!;

	const experienceItems = userData!.me.profile!.experience!;

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
										data!.addExperience,
										...experienceItems
									]
							}
					}
			}
	});
};

export const removeExperienceItem: RemoveExperienceItemType = (store, { data }) => {
	// Get existing userdata
	const userData = store.readQuery<MeQuery>({
		query: MeDocument
	})!;

	const experienceItems = userData!.me.profile!.experience!;

	const updatedExperienceItems = experienceItems.filter((e) => e.id !== data!.removeExperience);

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
								experience: updatedExperienceItems
							}
					}
			}
	});
};
