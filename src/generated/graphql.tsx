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
};

export type CreateUserInput = {
  email: Scalars['String'];
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
  getEvent: Event;
  getMyFollowers: Array<User>;
  getMyFollowings: Array<User>;
  getPost: Post;
  me: User;
};


export type QueryGetAllPostsArgs = {
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};


export type QueryGetEventArgs = {
  eventId: Scalars['String'];
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
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
  id: Scalars['String'];
  is_active: Scalars['Boolean'];
  is_admin: Scalars['Boolean'];
  post_comments?: Maybe<Array<PostComment>>;
  posts?: Maybe<Array<Post>>;
  profile?: Maybe<Profile>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', getAllPosts: Array<{ __typename?: 'Post', id: string, caption: string, likeCount: number, comments?: Array<{ __typename?: 'PostComment', handle: string, content: string }> | null | undefined }> };


export const GetAllPostsDocument = gql`
    query getAllPosts {
  getAllPosts {
    id
    caption
    likeCount
    comments {
      handle
      content
    }
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