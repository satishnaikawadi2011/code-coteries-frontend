import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { BACKEND_BASE_URL } from 'src/constants';
import { setContext } from '@apollo/client/link/context';
import authStorage from './storage/auth';

const httpLink = createHttpLink({
	uri: `${BACKEND_BASE_URL}/graphql`
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = authStorage.get()?.token;
	// return the headers to the context so httpLink can read them
	return {
		headers:
			{
				...headers,
				authorization:

						token ? `Bearer ${token}` :
						''
			}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

const AppApolloProvider: React.FC = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppApolloProvider;
