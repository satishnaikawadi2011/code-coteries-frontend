import React from 'react';
import './App.css';
import { useGetAllPostsQuery } from './generated/graphql';

function App() {
	const { loading, data } = useGetAllPostsQuery();
	console.log(data);
	if (loading) {
		return <h1>Loading ....</h1>;
	}
	return <h1>My App</h1>;
}

export default App;
