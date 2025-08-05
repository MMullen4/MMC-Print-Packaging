import express from "express";
import { readFileSync } from "fs";
import { join } from "path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { resolvers } from "./resolvers/contactResolver";

dotenv.config();

const typeDefs = readFileSync(
  join(process.cwd(), "src/typeDefs/schema.graphql"),
  "utf8"
);

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use(cors(), json(), expressMiddleware(server));

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(
      `🚀 Apollo Server v4 running at http://localhost:${PORT}/graphql`
    );
  });
}

startServer();
