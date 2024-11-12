import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://admin-dev.getplantd.com/graphql',  
  cache: new InMemoryCache()
});

export default client;