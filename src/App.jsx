import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { Images } from './components/Images';
import './App.scss';

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => alert(`Graphql error ${message}`));
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://uwatch.live/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const App = () => (
  <ApolloProvider client={client}>
    <main className="main">
      <Images />
    </main>
  </ApolloProvider>
);
