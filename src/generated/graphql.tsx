import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddCommentInput = {
  commentType: Scalars['String'];
  content: Scalars['String'];
  entityId: Scalars['String'];
};

export type AddEducationInput = {
  current?: Maybe<Scalars['Boolean']>;
  degree: Scalars['String'];
  description: Scalars['String'];
  field: Scalars['String'];
  from: Scalars['String'];
  school: Scalars['String'];
  to?: Maybe<Scalars['String']>;
};

export type AddEventInput = {
  description: Scalars['String'];
  event_date: Scalars['String'];
  event_url: Scalars['String'];
  image_url: Scalars['String'];
  tagIds?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type AddExperienceInput = {
  company: Scalars['String'];
  current?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  from: Scalars['String'];
  location: Scalars['String'];
  title: Scalars['String'];
  to?: Maybe<Scalars['String']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  eventComment?: Maybe<EventComment>;
  postComment?: Maybe<PostComment>;
};

export type CreatePostInput = {
  caption: Scalars['String'];
  image_url: Scalars['String'];
  tagIds?: Maybe<Array<Scalars['String']>>;
};

export type CreateTagInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type EditEducationInput = {
  current?: Maybe<Scalars['Boolean']>;
  degree?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type EditExperienceInput = {
  company?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type EditProfileInput = {
  bio?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type EditSocialInput = {
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type Education = {
  __typename?: 'Education';
  current: Scalars['Boolean'];
  degree: Scalars['String'];
  description: Scalars['String'];
  field: Scalars['String'];
  from: Scalars['DateTime'];
  id: Scalars['String'];
  profile: Profile;
  school: Scalars['String'];
  to?: Maybe<Scalars['DateTime']>;
};

export type Event = {
  __typename?: 'Event';
  comments?: Maybe<Array<EventComment>>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  event_date: Scalars['String'];
  event_url: Scalars['String'];
  id: Scalars['String'];
  image_url: Scalars['String'];
  likeCount: Scalars['Float'];
  likes: Array<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
};

export type EventComment = {
  __typename?: 'EventComment';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  event: Event;
  handle: Scalars['String'];
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String'];
  current: Scalars['Boolean'];
  description: Scalars['String'];
  from: Scalars['DateTime'];
  id: Scalars['String'];
  location: Scalars['String'];
  profile: Profile;
  title: Scalars['String'];
  to?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: CommentResponse;
  addEducation: Education;
  addExperience: Experience;
  createEvent: Event;
  createPost: Post;
  createTag: Tag;
  editEducation: Education;
  editExperience: Experience;
  editProfile: Profile;
  editSocial: Social;
  followUser: User;
  likeComment: CommentResponse;
  likeEvent: Event;
  likePost: Post;
  registerUser: AuthResponse;
  removeEducation: Scalars['String'];
  removeExperience: Scalars['String'];
  signinUser: AuthResponse;
  unfollowUser: Scalars['String'];
};


export type MutationAddCommentArgs = {
  addCommentInput: AddCommentInput;
};


export type MutationAddEducationArgs = {
  addEducationInput: AddEducationInput;
};


export type MutationAddExperienceArgs = {
  addExperienceInput: AddExperienceInput;
};


export type MutationCreateEventArgs = {
  addEventInput: AddEventInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};


export type MutationEditEducationArgs = {
  editEducationInput: EditEducationInput;
  id: Scalars['String'];
};


export type MutationEditExperienceArgs = {
  editExperienceInput: EditExperienceInput;
  id: Scalars['String'];
};


export type MutationEditProfileArgs = {
  editProfileInput: EditProfileInput;
};


export type MutationEditSocialArgs = {
  editSocialInput: EditSocialInput;
};


export type MutationFollowUserArgs = {
  id: Scalars['String'];
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['String'];
  type: Scalars['String'];
};


export type MutationLikeEventArgs = {
  eventId: Scalars['String'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveEducationArgs = {
  id: Scalars['String'];
};


export type MutationRemoveExperienceArgs = {
  id: Scalars['String'];
};


export type MutationSigninUserArgs = {
  signinUserInput: SigninUserInput;
};


export type MutationUnfollowUserArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  caption: Scalars['String'];
  comments?: Maybe<Array<PostComment>>;
  created_at: Scalars['DateTime'];
  handle: Scalars['String'];
  id: Scalars['String'];
  image_url: Scalars['String'];
  likeCount: Scalars['Float'];
  likes: Array<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type PostComment = {
  __typename?: 'PostComment';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  handle: Scalars['String'];
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
  post: Post;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  education?: Maybe<Array<Education>>;
  experience?: Maybe<Array<Experience>>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image_url: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  social?: Maybe<Social>;
  website?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllPosts: Array<Post>;
  getAllTags: Array<Tag>;
  getEvent: Event;
  getEventsByTag: Array<Event>;
  getMyFollowers: Array<User>;
  getMyFollowings: Array<User>;
  getPost: Post;
  getPostsByTag: Array<Post>;
  me: User;
};


export type QueryGetAllPostsArgs = {
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};


export type QueryGetEventArgs = {
  eventId: Scalars['String'];
};


export type QueryGetEventsByTagArgs = {
  tagId: Scalars['String'];
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
};


export type QueryGetPostsByTagArgs = {
  tagId: Scalars['String'];
};

export type SigninUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Social = {
  __typename?: 'Social';
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  events?: Maybe<Array<Event>>;
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
  likesCount: Scalars['Float'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  updated_at: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  connections?: Maybe<Array<User>>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  event_comments?: Maybe<Array<EventComment>>;
  events?: Maybe<Array<Event>>;
  followerCount: Scalars['Float'];
  followingCount: Scalars['Float'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  is_active: Scalars['Boolean'];
  is_admin: Scalars['Boolean'];
  post_comments?: Maybe<Array<PostComment>>;
  posts?: Maybe<Array<Post>>;
  profile?: Maybe<Profile>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type RegularUserFragment = { __typename?: 'User', id: string, username: string, fullName: string, email: string };

export type CreateEventMutationVariables = Exact<{
  addEventInput: AddEventInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, likeCount: number, title: string, description: string, image_url: string, event_url: string, event_date: string, created_at: any, updated_at: any } };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, created_at: any, caption: string, image_url: string, updated_at: any, likes: Array<string>, likeCount: number } };

export type SigninUserMutationVariables = Exact<{
  signinUserInput: SigninUserInput;
}>;


export type SigninUserMutation = { __typename?: 'Mutation', signinUser: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, username: string, fullName: string, email: string } } };

export type RegisterUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, username: string, fullName: string, email: string } } };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', getAllPosts: Array<{ __typename?: 'Post', id: string, caption: string, image_url: string, created_at: any, likes: Array<string>, likeCount: number, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null | undefined, user: { __typename?: 'User', username: string, fullName: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } }> };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', getAllTags: Array<{ __typename?: 'Tag', id: string, name: string, description: string, likes: Array<string>, likesCount: number }> };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  fullName
  email
}
    `;
export const CreateEventDocument = gql`
    mutation createEvent($addEventInput: AddEventInput!) {
  createEvent(addEventInput: $addEventInput) {
    id
    likeCount
    title
    description
    image_url
    event_url
    event_date
    created_at
    updated_at
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      addEventInput: // value for 'addEventInput'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    created_at
    caption
    image_url
    updated_at
    likes
    likeCount
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      createPostInput: // value for 'createPostInput'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const SigninUserDocument = gql`
    mutation signinUser($signinUserInput: SigninUserInput!) {
  signinUser(signinUserInput: $signinUserInput) {
    user {
      ...RegularUser
    }
    token
  }
}
    ${RegularUserFragmentDoc}`;
export type SigninUserMutationFn = Apollo.MutationFunction<SigninUserMutation, SigninUserMutationVariables>;

/**
 * __useSigninUserMutation__
 *
 * To run a mutation, you first call `useSigninUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinUserMutation, { data, loading, error }] = useSigninUserMutation({
 *   variables: {
 *      signinUserInput: // value for 'signinUserInput'
 *   },
 * });
 */
export function useSigninUserMutation(baseOptions?: Apollo.MutationHookOptions<SigninUserMutation, SigninUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninUserMutation, SigninUserMutationVariables>(SigninUserDocument, options);
      }
export type SigninUserMutationHookResult = ReturnType<typeof useSigninUserMutation>;
export type SigninUserMutationResult = Apollo.MutationResult<SigninUserMutation>;
export type SigninUserMutationOptions = Apollo.BaseMutationOptions<SigninUserMutation, SigninUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($createUserInput: CreateUserInput!) {
  registerUser(createUserInput: $createUserInput) {
    user {
      ...RegularUser
    }
    token
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetAllPostsDocument = gql`
    query getAllPosts {
  getAllPosts {
    id
    tags {
      name
      id
    }
    caption
    image_url
    created_at
    user {
      username
      fullName
      profile {
        image_url
      }
    }
    likes
    likeCount
  }
}
    `;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetAllTagsDocument = gql`
    query getAllTags {
  getAllTags {
    id
    name
    description
    likes
    likesCount
  }
}
    `;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
      }
export function useGetAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<typeof useGetAllTagsLazyQuery>;
export type GetAllTagsQueryResult = Apollo.QueryResult<GetAllTagsQuery, GetAllTagsQueryVariables>;