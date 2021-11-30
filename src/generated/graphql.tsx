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
  avatar_url: Scalars['String'];
  comments?: Maybe<Array<EventComment>>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  event_date: Scalars['String'];
  event_url: Scalars['String'];
  handle: Scalars['String'];
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
  created_at: Scalars['String'];
  event: Event;
  handle: Scalars['String'];
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
  updated_at: Scalars['String'];
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

export type GetFeedInput = {
  feedIds?: Maybe<Array<Scalars['String']>>;
  lastTimestamp?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: CommentResponse;
  addEducation: Education;
  addExperience: Experience;
  addPostToBookmark: Scalars['String'];
  createEvent: Event;
  createPost: Post;
  createTag: Tag;
  deletePost: Scalars['String'];
  editEducation: Education;
  editExperience: Experience;
  editProfile: Profile;
  editSocial: Social;
  editUserAvatar: Profile;
  followUser: User;
  likeComment: CommentResponse;
  likeEvent: Event;
  likePost: Post;
  registerUser: AuthResponse;
  removeEducation: Scalars['String'];
  removeExperience: Scalars['String'];
  removePostFromBookmark: Scalars['String'];
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


export type MutationAddPostToBookmarkArgs = {
  postId: Scalars['String'];
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


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
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


export type MutationEditUserAvatarArgs = {
  url: Scalars['String'];
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


export type MutationRemovePostFromBookmarkArgs = {
  postId: Scalars['String'];
};


export type MutationSigninUserArgs = {
  signinUserInput: SigninUserInput;
};


export type MutationUnfollowUserArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  avatar_url: Scalars['String'];
  caption: Scalars['String'];
  commentCount: Scalars['Float'];
  comments?: Maybe<Array<PostComment>>;
  created_at: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  image_url: Scalars['String'];
  likeCount: Scalars['Float'];
  likes: Array<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  updated_at: Scalars['String'];
  user: User;
};


export type PostCommentsArgs = {
  lastTimestamp?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
};

export type PostComment = {
  __typename?: 'PostComment';
  content: Scalars['String'];
  created_at: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
  post: Post;
  updated_at: Scalars['String'];
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
  getFeed: Array<Post>;
  getMorePostsFromUser: Array<Post>;
  getMyFollowers: Array<User>;
  getMyFollowings: Array<User>;
  getMyProfile: Profile;
  getMySocial: Social;
  getPost: Post;
  getPostsByTag: Array<Post>;
  me: User;
  searchUsers: Array<User>;
  suggestUsers: Array<User>;
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


export type QueryGetFeedArgs = {
  getFeedInput: GetFeedInput;
};


export type QueryGetMorePostsFromUserArgs = {
  limit?: Maybe<Scalars['Float']>;
  postId: Scalars['String'];
  userId: Scalars['String'];
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
};


export type QueryGetPostsByTagArgs = {
  tagId: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  limit?: Maybe<Scalars['Float']>;
  query: Scalars['String'];
};


export type QuerySuggestUsersArgs = {
  suggestUsersInput: SuggestUsersInput;
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

export type SuggestUsersInput = {
  created_at: Scalars['String'];
  followerIds?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
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
  saved_posts: Array<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type CompleteUserFragment = { __typename?: 'User', id: string, username: string, email: string, fullName: string, profile?: { __typename?: 'Profile', id: string, bio?: string | null | undefined, website?: string | null | undefined, company?: string | null | undefined, location?: string | null | undefined, github?: string | null | undefined, image_url: string, experience?: Array<{ __typename?: 'Experience', id: string, title: string, company: string, from: any, to?: any | null | undefined, location: string, current: boolean, description: string }> | null | undefined, social?: { __typename?: 'Social', id: string, youtube?: string | null | undefined, facebook?: string | null | undefined, instagram?: string | null | undefined, twitter?: string | null | undefined, linkedin?: string | null | undefined } | null | undefined, education?: Array<{ __typename?: 'Education', id: string, school: string, degree: string, from: any, to?: any | null | undefined, current: boolean, description: string, field: string }> | null | undefined } | null | undefined };

export type RegularUserFragment = { __typename?: 'User', id: string, username: string, fullName: string, email: string, saved_posts: Array<string>, created_at: any, profile?: { __typename?: 'Profile', image_url: string } | null | undefined };

export type AddCommentMutationVariables = Exact<{
  addCommentInput: AddCommentInput;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'CommentResponse', eventComment?: { __typename?: 'EventComment', id: string, content: string, handle: string, created_at: string, user: { __typename?: 'User', username: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } } | null | undefined, postComment?: { __typename?: 'PostComment', id: string, content: string, handle: string, created_at: string, user: { __typename?: 'User', username: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } } | null | undefined } };

export type AddEducationMutationVariables = Exact<{
  addEducationInput: AddEducationInput;
}>;


export type AddEducationMutation = { __typename?: 'Mutation', addEducation: { __typename?: 'Education', id: string, school: string, degree: string, from: any, to?: any | null | undefined, current: boolean, description: string, field: string } };

export type AddExperienceMutationVariables = Exact<{
  addExperienceInput: AddExperienceInput;
}>;


export type AddExperienceMutation = { __typename?: 'Mutation', addExperience: { __typename?: 'Experience', id: string, title: string, company: string, location: string, from: any, to?: any | null | undefined, current: boolean, description: string } };

export type AddPostToBookmarkMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type AddPostToBookmarkMutation = { __typename?: 'Mutation', addPostToBookmark: string };

export type CreateEventMutationVariables = Exact<{
  addEventInput: AddEventInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, likeCount: number, title: string, description: string, image_url: string, event_url: string, event_date: string, created_at: any, updated_at: any } };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, created_at: string, caption: string, image_url: string, updated_at: string, likes: Array<string>, likeCount: number } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: string };

export type EditProfileMutationVariables = Exact<{
  editProfileInput: EditProfileInput;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile: { __typename?: 'Profile', id: string, website?: string | null | undefined, company?: string | null | undefined, location?: string | null | undefined, github?: string | null | undefined, image_url: string, bio?: string | null | undefined } };

export type EditSocialMutationVariables = Exact<{
  editSocialInput: EditSocialInput;
}>;


export type EditSocialMutation = { __typename?: 'Mutation', editSocial: { __typename?: 'Social', id: string, youtube?: string | null | undefined, instagram?: string | null | undefined, facebook?: string | null | undefined, twitter?: string | null | undefined, linkedin?: string | null | undefined } };

export type EditUserAvatarMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type EditUserAvatarMutation = { __typename?: 'Mutation', editUserAvatar: { __typename?: 'Profile', id: string, website?: string | null | undefined, company?: string | null | undefined, location?: string | null | undefined, github?: string | null | undefined, image_url: string, bio?: string | null | undefined } };

export type FollowUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser: { __typename?: 'User', id: string, username: string, email: string, fullName: string, created_at: any, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } };

export type LikePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: { __typename?: 'Post', id: string } };

export type SigninUserMutationVariables = Exact<{
  signinUserInput: SigninUserInput;
}>;


export type SigninUserMutation = { __typename?: 'Mutation', signinUser: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, username: string, fullName: string, email: string, saved_posts: Array<string>, created_at: any, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } } };

export type RegisterUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, username: string, fullName: string, email: string, saved_posts: Array<string>, created_at: any, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } } };

export type RemoveEducationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveEducationMutation = { __typename?: 'Mutation', removeEducation: string };

export type RemoveExperienceMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveExperienceMutation = { __typename?: 'Mutation', removeExperience: string };

export type RemovePostFromBookmarkMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type RemovePostFromBookmarkMutation = { __typename?: 'Mutation', removePostFromBookmark: string };

export type UnfollowUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnfollowUserMutation = { __typename?: 'Mutation', unfollowUser: string };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', getAllPosts: Array<{ __typename?: 'Post', id: string, caption: string, image_url: string, created_at: string, likes: Array<string>, likeCount: number, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null | undefined, user: { __typename?: 'User', username: string, fullName: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } }> };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', getAllTags: Array<{ __typename?: 'Tag', id: string, name: string, description: string, likes: Array<string>, likesCount: number }> };

export type GetFeedQueryVariables = Exact<{
  getFeedInput: GetFeedInput;
}>;


export type GetFeedQuery = { __typename?: 'Query', getFeed: Array<{ __typename?: 'Post', id: string, caption: string, image_url: string, created_at: string, likes: Array<string>, likeCount: number, handle: string, commentCount: number, comments?: Array<{ __typename?: 'PostComment', handle: string, id: string, content: string }> | null | undefined, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null | undefined, user: { __typename?: 'User', fullName: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } }> };

export type GetMorePostsFromUserQueryVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
}>;


export type GetMorePostsFromUserQuery = { __typename?: 'Query', getMorePostsFromUser: Array<{ __typename?: 'Post', id: string, image_url: string, likeCount: number, commentCount: number }> };

export type GetMyFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyFollowersQuery = { __typename?: 'Query', getMyFollowers: Array<{ __typename?: 'User', id: string, username: string, fullName: string, created_at: any, email: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined }> };

export type GetMyFollowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyFollowingsQuery = { __typename?: 'Query', getMyFollowings: Array<{ __typename?: 'User', id: string, username: string, fullName: string, created_at: any, email: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined }> };

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = { __typename?: 'Query', getMyProfile: { __typename?: 'Profile', website?: string | null | undefined, company?: string | null | undefined, location?: string | null | undefined, bio?: string | null | undefined, github?: string | null | undefined, image_url: string, id: string } };

export type GetMySocialQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMySocialQuery = { __typename?: 'Query', getMySocial: { __typename?: 'Social', youtube?: string | null | undefined, facebook?: string | null | undefined, instagram?: string | null | undefined, twitter?: string | null | undefined, linkedin?: string | null | undefined, id: string } };

export type GetPostQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'Post', id: string, caption: string, image_url: string, created_at: string, updated_at: string, likes: Array<string>, handle: string, avatar_url: string, likeCount: number, commentCount: number, comments?: Array<{ __typename?: 'PostComment', id: string, content: string, handle: string, created_at: string, likes: Array<string>, user: { __typename?: 'User', username: string, profile?: { __typename?: 'Profile', image_url: string } | null | undefined } }> | null | undefined, user: { __typename?: 'User', id: string, fullName: string }, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email: string, fullName: string, profile?: { __typename?: 'Profile', id: string, bio?: string | null | undefined, website?: string | null | undefined, company?: string | null | undefined, location?: string | null | undefined, github?: string | null | undefined, image_url: string, experience?: Array<{ __typename?: 'Experience', id: string, title: string, company: string, from: any, to?: any | null | undefined, location: string, current: boolean, description: string }> | null | undefined, social?: { __typename?: 'Social', id: string, youtube?: string | null | undefined, facebook?: string | null | undefined, instagram?: string | null | undefined, twitter?: string | null | undefined, linkedin?: string | null | undefined } | null | undefined, education?: Array<{ __typename?: 'Education', id: string, school: string, degree: string, from: any, to?: any | null | undefined, current: boolean, description: string, field: string }> | null | undefined } | null | undefined } };

export type SuggestUsersQueryVariables = Exact<{
  suggestUsersInput: SuggestUsersInput;
}>;


export type SuggestUsersQuery = { __typename?: 'Query', suggestUsers: Array<{ __typename?: 'User', id: string, username: string, email: string, fullName: string, created_at: any, profile?: { __typename?: 'Profile', image_url: string } | null | undefined }> };

export const CompleteUserFragmentDoc = gql`
    fragment CompleteUser on User {
  id
  username
  email
  fullName
  profile {
    id
    bio
    website
    company
    location
    github
    image_url
    experience {
      id
      title
      company
      from
      to
      location
      current
      description
    }
    social {
      id
      youtube
      facebook
      instagram
      twitter
      linkedin
    }
    education {
      id
      school
      degree
      from
      to
      current
      description
      field
    }
  }
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  fullName
  email
  saved_posts
  created_at
  profile {
    image_url
  }
}
    `;
export const AddCommentDocument = gql`
    mutation addComment($addCommentInput: AddCommentInput!) {
  addComment(addCommentInput: $addCommentInput) {
    eventComment {
      id
      content
      handle
      created_at
      user {
        username
        profile {
          image_url
        }
      }
    }
    postComment {
      id
      content
      handle
      created_at
      user {
        username
        profile {
          image_url
        }
      }
    }
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      addCommentInput: // value for 'addCommentInput'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const AddEducationDocument = gql`
    mutation addEducation($addEducationInput: AddEducationInput!) {
  addEducation(addEducationInput: $addEducationInput) {
    id
    school
    degree
    from
    to
    current
    description
    field
  }
}
    `;
export type AddEducationMutationFn = Apollo.MutationFunction<AddEducationMutation, AddEducationMutationVariables>;

/**
 * __useAddEducationMutation__
 *
 * To run a mutation, you first call `useAddEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEducationMutation, { data, loading, error }] = useAddEducationMutation({
 *   variables: {
 *      addEducationInput: // value for 'addEducationInput'
 *   },
 * });
 */
export function useAddEducationMutation(baseOptions?: Apollo.MutationHookOptions<AddEducationMutation, AddEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEducationMutation, AddEducationMutationVariables>(AddEducationDocument, options);
      }
export type AddEducationMutationHookResult = ReturnType<typeof useAddEducationMutation>;
export type AddEducationMutationResult = Apollo.MutationResult<AddEducationMutation>;
export type AddEducationMutationOptions = Apollo.BaseMutationOptions<AddEducationMutation, AddEducationMutationVariables>;
export const AddExperienceDocument = gql`
    mutation addExperience($addExperienceInput: AddExperienceInput!) {
  addExperience(addExperienceInput: $addExperienceInput) {
    id
    title
    company
    location
    from
    to
    current
    description
  }
}
    `;
export type AddExperienceMutationFn = Apollo.MutationFunction<AddExperienceMutation, AddExperienceMutationVariables>;

/**
 * __useAddExperienceMutation__
 *
 * To run a mutation, you first call `useAddExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addExperienceMutation, { data, loading, error }] = useAddExperienceMutation({
 *   variables: {
 *      addExperienceInput: // value for 'addExperienceInput'
 *   },
 * });
 */
export function useAddExperienceMutation(baseOptions?: Apollo.MutationHookOptions<AddExperienceMutation, AddExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddExperienceMutation, AddExperienceMutationVariables>(AddExperienceDocument, options);
      }
export type AddExperienceMutationHookResult = ReturnType<typeof useAddExperienceMutation>;
export type AddExperienceMutationResult = Apollo.MutationResult<AddExperienceMutation>;
export type AddExperienceMutationOptions = Apollo.BaseMutationOptions<AddExperienceMutation, AddExperienceMutationVariables>;
export const AddPostToBookmarkDocument = gql`
    mutation addPostToBookmark($postId: String!) {
  addPostToBookmark(postId: $postId)
}
    `;
export type AddPostToBookmarkMutationFn = Apollo.MutationFunction<AddPostToBookmarkMutation, AddPostToBookmarkMutationVariables>;

/**
 * __useAddPostToBookmarkMutation__
 *
 * To run a mutation, you first call `useAddPostToBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostToBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostToBookmarkMutation, { data, loading, error }] = useAddPostToBookmarkMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddPostToBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<AddPostToBookmarkMutation, AddPostToBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostToBookmarkMutation, AddPostToBookmarkMutationVariables>(AddPostToBookmarkDocument, options);
      }
export type AddPostToBookmarkMutationHookResult = ReturnType<typeof useAddPostToBookmarkMutation>;
export type AddPostToBookmarkMutationResult = Apollo.MutationResult<AddPostToBookmarkMutation>;
export type AddPostToBookmarkMutationOptions = Apollo.BaseMutationOptions<AddPostToBookmarkMutation, AddPostToBookmarkMutationVariables>;
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
export const DeletePostDocument = gql`
    mutation deletePost($postId: String!) {
  deletePost(postId: $postId)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const EditProfileDocument = gql`
    mutation editProfile($editProfileInput: EditProfileInput!) {
  editProfile(editProfileInput: $editProfileInput) {
    id
    website
    company
    location
    github
    image_url
    bio
  }
}
    `;
export type EditProfileMutationFn = Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      editProfileInput: // value for 'editProfileInput'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const EditSocialDocument = gql`
    mutation editSocial($editSocialInput: EditSocialInput!) {
  editSocial(editSocialInput: $editSocialInput) {
    id
    youtube
    instagram
    facebook
    twitter
    linkedin
  }
}
    `;
export type EditSocialMutationFn = Apollo.MutationFunction<EditSocialMutation, EditSocialMutationVariables>;

/**
 * __useEditSocialMutation__
 *
 * To run a mutation, you first call `useEditSocialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSocialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSocialMutation, { data, loading, error }] = useEditSocialMutation({
 *   variables: {
 *      editSocialInput: // value for 'editSocialInput'
 *   },
 * });
 */
export function useEditSocialMutation(baseOptions?: Apollo.MutationHookOptions<EditSocialMutation, EditSocialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSocialMutation, EditSocialMutationVariables>(EditSocialDocument, options);
      }
export type EditSocialMutationHookResult = ReturnType<typeof useEditSocialMutation>;
export type EditSocialMutationResult = Apollo.MutationResult<EditSocialMutation>;
export type EditSocialMutationOptions = Apollo.BaseMutationOptions<EditSocialMutation, EditSocialMutationVariables>;
export const EditUserAvatarDocument = gql`
    mutation editUserAvatar($url: String!) {
  editUserAvatar(url: $url) {
    id
    website
    company
    location
    github
    image_url
    bio
  }
}
    `;
export type EditUserAvatarMutationFn = Apollo.MutationFunction<EditUserAvatarMutation, EditUserAvatarMutationVariables>;

/**
 * __useEditUserAvatarMutation__
 *
 * To run a mutation, you first call `useEditUserAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserAvatarMutation, { data, loading, error }] = useEditUserAvatarMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useEditUserAvatarMutation(baseOptions?: Apollo.MutationHookOptions<EditUserAvatarMutation, EditUserAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserAvatarMutation, EditUserAvatarMutationVariables>(EditUserAvatarDocument, options);
      }
export type EditUserAvatarMutationHookResult = ReturnType<typeof useEditUserAvatarMutation>;
export type EditUserAvatarMutationResult = Apollo.MutationResult<EditUserAvatarMutation>;
export type EditUserAvatarMutationOptions = Apollo.BaseMutationOptions<EditUserAvatarMutation, EditUserAvatarMutationVariables>;
export const FollowUserDocument = gql`
    mutation followUser($id: String!) {
  followUser(id: $id) {
    id
    username
    email
    fullName
    created_at
    profile {
      image_url
    }
  }
}
    `;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, options);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const LikePostDocument = gql`
    mutation likePost($postId: String!) {
  likePost(postId: $postId) {
    id
  }
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, options);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
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
export const RemoveEducationDocument = gql`
    mutation removeEducation($id: String!) {
  removeEducation(id: $id)
}
    `;
export type RemoveEducationMutationFn = Apollo.MutationFunction<RemoveEducationMutation, RemoveEducationMutationVariables>;

/**
 * __useRemoveEducationMutation__
 *
 * To run a mutation, you first call `useRemoveEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEducationMutation, { data, loading, error }] = useRemoveEducationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEducationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveEducationMutation, RemoveEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveEducationMutation, RemoveEducationMutationVariables>(RemoveEducationDocument, options);
      }
export type RemoveEducationMutationHookResult = ReturnType<typeof useRemoveEducationMutation>;
export type RemoveEducationMutationResult = Apollo.MutationResult<RemoveEducationMutation>;
export type RemoveEducationMutationOptions = Apollo.BaseMutationOptions<RemoveEducationMutation, RemoveEducationMutationVariables>;
export const RemoveExperienceDocument = gql`
    mutation removeExperience($id: String!) {
  removeExperience(id: $id)
}
    `;
export type RemoveExperienceMutationFn = Apollo.MutationFunction<RemoveExperienceMutation, RemoveExperienceMutationVariables>;

/**
 * __useRemoveExperienceMutation__
 *
 * To run a mutation, you first call `useRemoveExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeExperienceMutation, { data, loading, error }] = useRemoveExperienceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveExperienceMutation(baseOptions?: Apollo.MutationHookOptions<RemoveExperienceMutation, RemoveExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveExperienceMutation, RemoveExperienceMutationVariables>(RemoveExperienceDocument, options);
      }
export type RemoveExperienceMutationHookResult = ReturnType<typeof useRemoveExperienceMutation>;
export type RemoveExperienceMutationResult = Apollo.MutationResult<RemoveExperienceMutation>;
export type RemoveExperienceMutationOptions = Apollo.BaseMutationOptions<RemoveExperienceMutation, RemoveExperienceMutationVariables>;
export const RemovePostFromBookmarkDocument = gql`
    mutation removePostFromBookmark($postId: String!) {
  removePostFromBookmark(postId: $postId)
}
    `;
export type RemovePostFromBookmarkMutationFn = Apollo.MutationFunction<RemovePostFromBookmarkMutation, RemovePostFromBookmarkMutationVariables>;

/**
 * __useRemovePostFromBookmarkMutation__
 *
 * To run a mutation, you first call `useRemovePostFromBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostFromBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostFromBookmarkMutation, { data, loading, error }] = useRemovePostFromBookmarkMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useRemovePostFromBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<RemovePostFromBookmarkMutation, RemovePostFromBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePostFromBookmarkMutation, RemovePostFromBookmarkMutationVariables>(RemovePostFromBookmarkDocument, options);
      }
export type RemovePostFromBookmarkMutationHookResult = ReturnType<typeof useRemovePostFromBookmarkMutation>;
export type RemovePostFromBookmarkMutationResult = Apollo.MutationResult<RemovePostFromBookmarkMutation>;
export type RemovePostFromBookmarkMutationOptions = Apollo.BaseMutationOptions<RemovePostFromBookmarkMutation, RemovePostFromBookmarkMutationVariables>;
export const UnfollowUserDocument = gql`
    mutation unfollowUser($id: String!) {
  unfollowUser(id: $id)
}
    `;
export type UnfollowUserMutationFn = Apollo.MutationFunction<UnfollowUserMutation, UnfollowUserMutationVariables>;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnfollowUserMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowUserMutation, UnfollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, options);
      }
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<UnfollowUserMutation, UnfollowUserMutationVariables>;
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
export const GetFeedDocument = gql`
    query getFeed($getFeedInput: GetFeedInput!) {
  getFeed(getFeedInput: $getFeedInput) {
    id
    caption
    image_url
    created_at
    comments(limit: 2) {
      handle
      id
      content
    }
    likes
    likeCount
    handle
    commentCount
    tags {
      id
      name
    }
    user {
      profile {
        image_url
      }
      fullName
    }
  }
}
    `;

/**
 * __useGetFeedQuery__
 *
 * To run a query within a React component, call `useGetFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedQuery({
 *   variables: {
 *      getFeedInput: // value for 'getFeedInput'
 *   },
 * });
 */
export function useGetFeedQuery(baseOptions: Apollo.QueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
      }
export function useGetFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
        }
export type GetFeedQueryHookResult = ReturnType<typeof useGetFeedQuery>;
export type GetFeedLazyQueryHookResult = ReturnType<typeof useGetFeedLazyQuery>;
export type GetFeedQueryResult = Apollo.QueryResult<GetFeedQuery, GetFeedQueryVariables>;
export const GetMorePostsFromUserDocument = gql`
    query getMorePostsFromUser($userId: String!, $postId: String!, $limit: Float) {
  getMorePostsFromUser(userId: $userId, postId: $postId, limit: $limit) {
    id
    image_url
    likeCount
    commentCount
  }
}
    `;

/**
 * __useGetMorePostsFromUserQuery__
 *
 * To run a query within a React component, call `useGetMorePostsFromUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMorePostsFromUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMorePostsFromUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetMorePostsFromUserQuery(baseOptions: Apollo.QueryHookOptions<GetMorePostsFromUserQuery, GetMorePostsFromUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMorePostsFromUserQuery, GetMorePostsFromUserQueryVariables>(GetMorePostsFromUserDocument, options);
      }
export function useGetMorePostsFromUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMorePostsFromUserQuery, GetMorePostsFromUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMorePostsFromUserQuery, GetMorePostsFromUserQueryVariables>(GetMorePostsFromUserDocument, options);
        }
export type GetMorePostsFromUserQueryHookResult = ReturnType<typeof useGetMorePostsFromUserQuery>;
export type GetMorePostsFromUserLazyQueryHookResult = ReturnType<typeof useGetMorePostsFromUserLazyQuery>;
export type GetMorePostsFromUserQueryResult = Apollo.QueryResult<GetMorePostsFromUserQuery, GetMorePostsFromUserQueryVariables>;
export const GetMyFollowersDocument = gql`
    query getMyFollowers {
  getMyFollowers {
    id
    username
    fullName
    profile {
      image_url
    }
    created_at
    email
  }
}
    `;

/**
 * __useGetMyFollowersQuery__
 *
 * To run a query within a React component, call `useGetMyFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyFollowersQuery(baseOptions?: Apollo.QueryHookOptions<GetMyFollowersQuery, GetMyFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyFollowersQuery, GetMyFollowersQueryVariables>(GetMyFollowersDocument, options);
      }
export function useGetMyFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyFollowersQuery, GetMyFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyFollowersQuery, GetMyFollowersQueryVariables>(GetMyFollowersDocument, options);
        }
export type GetMyFollowersQueryHookResult = ReturnType<typeof useGetMyFollowersQuery>;
export type GetMyFollowersLazyQueryHookResult = ReturnType<typeof useGetMyFollowersLazyQuery>;
export type GetMyFollowersQueryResult = Apollo.QueryResult<GetMyFollowersQuery, GetMyFollowersQueryVariables>;
export const GetMyFollowingsDocument = gql`
    query getMyFollowings {
  getMyFollowings {
    id
    username
    fullName
    profile {
      image_url
    }
    created_at
    email
  }
}
    `;

/**
 * __useGetMyFollowingsQuery__
 *
 * To run a query within a React component, call `useGetMyFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyFollowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyFollowingsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyFollowingsQuery, GetMyFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyFollowingsQuery, GetMyFollowingsQueryVariables>(GetMyFollowingsDocument, options);
      }
export function useGetMyFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyFollowingsQuery, GetMyFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyFollowingsQuery, GetMyFollowingsQueryVariables>(GetMyFollowingsDocument, options);
        }
export type GetMyFollowingsQueryHookResult = ReturnType<typeof useGetMyFollowingsQuery>;
export type GetMyFollowingsLazyQueryHookResult = ReturnType<typeof useGetMyFollowingsLazyQuery>;
export type GetMyFollowingsQueryResult = Apollo.QueryResult<GetMyFollowingsQuery, GetMyFollowingsQueryVariables>;
export const GetMyProfileDocument = gql`
    query getMyProfile {
  getMyProfile {
    website
    company
    location
    bio
    github
    image_url
    id
  }
}
    `;

/**
 * __useGetMyProfileQuery__
 *
 * To run a query within a React component, call `useGetMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
      }
export function useGetMyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
        }
export type GetMyProfileQueryHookResult = ReturnType<typeof useGetMyProfileQuery>;
export type GetMyProfileLazyQueryHookResult = ReturnType<typeof useGetMyProfileLazyQuery>;
export type GetMyProfileQueryResult = Apollo.QueryResult<GetMyProfileQuery, GetMyProfileQueryVariables>;
export const GetMySocialDocument = gql`
    query getMySocial {
  getMySocial {
    youtube
    facebook
    instagram
    twitter
    linkedin
    id
  }
}
    `;

/**
 * __useGetMySocialQuery__
 *
 * To run a query within a React component, call `useGetMySocialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMySocialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMySocialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMySocialQuery(baseOptions?: Apollo.QueryHookOptions<GetMySocialQuery, GetMySocialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMySocialQuery, GetMySocialQueryVariables>(GetMySocialDocument, options);
      }
export function useGetMySocialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMySocialQuery, GetMySocialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMySocialQuery, GetMySocialQueryVariables>(GetMySocialDocument, options);
        }
export type GetMySocialQueryHookResult = ReturnType<typeof useGetMySocialQuery>;
export type GetMySocialLazyQueryHookResult = ReturnType<typeof useGetMySocialLazyQuery>;
export type GetMySocialQueryResult = Apollo.QueryResult<GetMySocialQuery, GetMySocialQueryVariables>;
export const GetPostDocument = gql`
    query getPost($postId: String!) {
  getPost(postId: $postId) {
    id
    caption
    image_url
    created_at
    updated_at
    comments {
      id
      content
      handle
      created_at
      likes
      user {
        username
        profile {
          image_url
        }
      }
    }
    user {
      id
      fullName
    }
    likes
    handle
    avatar_url
    likeCount
    commentCount
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...CompleteUser
  }
}
    ${CompleteUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SuggestUsersDocument = gql`
    query suggestUsers($suggestUsersInput: SuggestUsersInput!) {
  suggestUsers(suggestUsersInput: $suggestUsersInput) {
    id
    username
    email
    fullName
    profile {
      image_url
    }
    created_at
  }
}
    `;

/**
 * __useSuggestUsersQuery__
 *
 * To run a query within a React component, call `useSuggestUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuggestUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuggestUsersQuery({
 *   variables: {
 *      suggestUsersInput: // value for 'suggestUsersInput'
 *   },
 * });
 */
export function useSuggestUsersQuery(baseOptions: Apollo.QueryHookOptions<SuggestUsersQuery, SuggestUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuggestUsersQuery, SuggestUsersQueryVariables>(SuggestUsersDocument, options);
      }
export function useSuggestUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuggestUsersQuery, SuggestUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuggestUsersQuery, SuggestUsersQueryVariables>(SuggestUsersDocument, options);
        }
export type SuggestUsersQueryHookResult = ReturnType<typeof useSuggestUsersQuery>;
export type SuggestUsersLazyQueryHookResult = ReturnType<typeof useSuggestUsersLazyQuery>;
export type SuggestUsersQueryResult = Apollo.QueryResult<SuggestUsersQuery, SuggestUsersQueryVariables>;