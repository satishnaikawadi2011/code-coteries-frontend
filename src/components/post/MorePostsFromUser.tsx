import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useGetMorePostsFromUserLazyQuery, useGetPostQuery } from 'src/generated/graphql';
import LoadingLargeIcon from 'src/icons/LargeLoadingIcon';
import { useMorePostsFromUserStyles } from 'src/styles/post';
import GridPost from '../shared/GridPost';

interface MorePostsFromUserProps {
    postId: string;
}

const MorePostsFromUser: React.FC<MorePostsFromUserProps> = ({postId}) => {
  const classes = useMorePostsFromUserStyles();

  const { data, loading } = useGetPostQuery({variables:{postId}});

  const [
    getMorePostsFromUser,
    { data: morePosts, loading: loading2 },
  ] = useGetMorePostsFromUserLazyQuery();

  React.useEffect(() => {
    if (loading) return;
    const userId = data!.getPost.user!.id;
    getMorePostsFromUser({ variables:{postId,userId} });
  }, [data, loading, getMorePostsFromUser]);

  return (
    <div className={classes.container}>
      {loading || loading2 ? (
        <LoadingLargeIcon />
      ) : (
        <>
          <Typography
            color="textSecondary"
            variant="subtitle2"
            component="h2"
            gutterBottom
            className={classes.typography}
          >
            More Posts from{' '}
            <Link
              to={`/${data!.getPost.handle}`}
              className={classes.link}
            >
              @{data!.getPost.handle}
            </Link>
          </Typography>

          <article className={classes.article}>
            <div className={classes.postContainer}>
              {morePosts?.getMorePostsFromUser.map((post:any) => (
                <GridPost key={post.id} post={post} />
              ))}
            </div>
          </article>
        </>
      )}
    </div>
  );
}

export default MorePostsFromUser