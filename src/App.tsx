import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeedPage from './pages/feed';
import NotFoundPage from './pages/not-found';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/edit-profile';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CreatePostPage from './pages/create-post';
import authStorage from './utils/storage/auth';
import { useAuthStore } from './store/auth';
import ProtectedRoute from './utils/ProtectedRoute';
import AddEventPage from './pages/add-event';
import { useGetMyFollowersLazyQuery, useGetMyFollowingsLazyQuery } from './generated/graphql';
import LoadingScreen from './components/shared/LoadingScreen';
import { useUserStore } from './store/user';

function App() {
	const { setToken, setUser, user } = useAuthStore();
	const { setFeedIds, setFollowerIds, setFollowingIds } = useUserStore();

	useEffect(() => {
		const authData = authStorage.get();
		if (authData) {
			setToken(authData.token);
			setUser(authData.user);
			getFollowers();
			getFollowings();
		}
	}, []);

	const [
		getFollowers,
		{ loading: l1, data: followers }
	] = useGetMyFollowersLazyQuery();
	const [
		getFollowings,
		{ loading: l2, data: followings }
	] = useGetMyFollowingsLazyQuery();

	useEffect(
		() => {
			if (followers && followings) {
				const frIds = followers.getMyFollowers.map((u) => u.id);
				const fgIds = followings.getMyFollowings.map((u) => u.id);
				setFollowerIds(frIds);
				setFollowingIds(fgIds);
				setFeedIds([
					...fgIds,
					...frIds,
					user!.id
				]);
			}
		},
		[
			followers,
			followings
		]
	);

	if (l1 || l2) {
		return <LoadingScreen />;
	}

	return (
		<Router>
			<Switch>
				<ProtectedRoute exact path="/" component={FeedPage} />
				<Route exact path="/explore" component={ExplorePage} />
				<Route exact path="/accounts/edit" component={EditProfilePage} />
				<Route exact path="/accounts/login" component={LoginPage} />
				<Route exact path="/accounts/signup" component={SignupPage} />
				<ProtectedRoute exact path="/p/create" component={CreatePostPage} />
				<ProtectedRoute exact path="/e/add" component={AddEventPage} />
				<Route exact path="/p/:postId" component={PostPage} />
				<Route exact path="/:username" component={ProfilePage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</Router>
	);
}
export default App;
