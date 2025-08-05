import express from "express";
import { ApolloServer } from "apollo-server-express";
import { readFileSync } from "fs";
import { join } from "path";
import { contactResolver } from "./resolvers/contactResolver";
import dotenv from "dotenv";

dotenv.config();

const typeDefs = readFileSync(
  join(__dirname, "./typeDefs/schema.graphql"),
  "utf8"
);
const resolvers = contactResolver;

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
}

startServer();
