import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3001/graphql", // 👈 Change this if deployed
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

export default client;
