import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { buildSchema } from "type-graphql";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [FirstResolver, SecondResolver],
  });
  const apolloServer = new ApolloServer();
};

main();
