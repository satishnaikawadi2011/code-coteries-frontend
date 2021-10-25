import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BACKEND_BASE_URL } from 'src/constants';

const client = new ApolloClient({
	uri: `${BACKEND_BASE_URL}/graphql`,
	cache: new InMemoryCache()
});

const AppApolloProvider: React.FC = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppApolloProvider;
