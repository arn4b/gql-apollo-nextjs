import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com", //URL of GraphQL server
    cache: new InMemoryCache(), // used to cache query results
});

export default client;