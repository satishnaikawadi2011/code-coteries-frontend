import { Button, Hidden } from '@mui/material';
import React from 'react';
import FeedPostSkeleton from 'src/components/feed/FeedPostSkeleton';
import FeedSideSuggestions from 'src/components/feed/FeedSideSuggestions';
import Layout from 'src/components/shared/Layout';
import LoadingScreen from 'src/components/shared/LoadingScreen';
import UserCard from 'src/components/shared/UserCard';
import { useGetFeedQuery } from 'src/generated/graphql';
import useDisplayError from 'src/hooks/useDisplayError';
import { usePageBottom } from 'src/hooks/usePageBottom';
import LoadingLargeIcon from 'src/icons/LargeLoadingIcon';
import { useAuthStore } from 'src/store/auth';
import { useUserStore } from 'src/store/user';
import { useFeedPageStyles } from 'src/styles/feed-page';

const FeedPost = React.lazy(() => import('../components/feed/FeedPost'));

const FeedPage = () => {
  const classes = useFeedPageStyles();	
	const [isEndOfFeed, setEndOfFeed] = React.useState(false);
	const { feedIds } = useUserStore();
	const {user,logout} = useAuthStore()
	const { data, loading, fetchMore,error } = useGetFeedQuery({ variables: { getFeedInput: { feedIds, limit: 2 } } });
  const isPageBottom = usePageBottom();

  useDisplayError([error]);

  const handleUpdateQuery = React.useCallback((prev, { fetchMoreResult }) => {
    if (fetchMoreResult.getFeed.length === 0) {
      setEndOfFeed(true);
      return prev;
    }

    return { getFeed: [...prev.getFeed, ...fetchMoreResult.getFeed] };
  }, []);

  React.useEffect(() => {
    if (!isPageBottom || !data) return;
    console.log('Here')
    const lastTimestamp = data.getFeed[data.getFeed.length - 1].created_at;
    console.log(lastTimestamp);
    const variables = { limit: 2, feedIds, lastTimestamp };
    fetchMore({
      variables,
      updateQuery: handleUpdateQuery,
    });
  }, [isPageBottom, data, fetchMore, handleUpdateQuery, feedIds]);

  if (loading) return <LoadingScreen />;

  return (
    <Layout title="">
      <Button onClick={() => logout()}>Logout</Button>
      <div className={classes.container}>
        <div>
          {data?.getFeed.map((post, index) => (
            <React.Suspense key={post.id} fallback={<FeedPostSkeleton />}>
              <FeedPost post={post as any} index={index} />
            </React.Suspense>
          ))}
        </div>
        <Hidden smDown>
          <div className={classes.sidebarContainer}>
            <div className={classes.sidebarWrapper}>
              <UserCard name={user!.fullName} username={user!.username} image_url={user!.profile?.image_url} />
              <FeedSideSuggestions />
            </div>
          </div>
        </Hidden>
        {!isEndOfFeed && <LoadingLargeIcon />}
      </div>
    </Layout>
  );
};

export default FeedPage;
