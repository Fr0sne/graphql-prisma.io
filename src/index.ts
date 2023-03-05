import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'graphql'
import {importSchema} from 'graphql-import'
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import path from 'path';
import express from 'express';
import { resolvers } from './resolvers';
console.log(path.join(__dirname, './schemas/schema.gql'));

const app = express();
(async () => {
  const server = new ApolloServer<any>({
    typeDefs: buildSchema(importSchema(path.join(__dirname, './schemas/schema.gql'))),
    resolvers
  });
  await server.start();

  app.use('/graphql',  json(), expressMiddleware(server));
  app.listen(3000)
})()

