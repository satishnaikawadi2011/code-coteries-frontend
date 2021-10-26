import React from 'react';
import './App.css';
import { useGetAllPostsQuery } from './generated/graphql';
import LogoIcon from './icons/LogoIcon';

function App() {
	const { loading, data } = useGetAllPostsQuery();
	console.log(data);
	if (loading) {
		return <h1>Loading ....</h1>;
	}
	return <h1 className="title">Code Coteries</h1>;
	// return <LogoIcon width={50} height={50} />;
}
export default App;
