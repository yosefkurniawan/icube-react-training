import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';

export const client = new ApolloClient({
    uri: 'https://swiftpwa-be.testingnow.me/graphql',
    cache: new InMemoryCache(),
});

export const query = (schema) => {
    return client.query({
        query: schema,
    });
};

export const mutate = (schema, data) => {
    return client.mutate({
        variables: data,
        mutation: schema,
    });
};
