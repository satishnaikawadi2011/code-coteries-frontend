import React from 'react';
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

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={FeedPage} />
				<Route exact path="/explore" component={ExplorePage} />
				<Route exact path="/accounts/edit" component={EditProfilePage} />
				<Route exact path="/accounts/login" component={LoginPage} />
				<Route exact path="/accounts/signup" component={SignupPage} />
				<Route exact path="/p/create" component={CreatePostPage} />
				<Route exact path="/p/:postId" component={PostPage} />
				<Route exact path="/:username" component={ProfilePage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</Router>
	);
}
export default App;
