import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import db from './_db.js';

import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    jokes: () => db.jokes,
    authors: () => db.users,
    author: (_: any, args: { id: string }) =>
      db.users.find((author) => author.id === args.id),

    reviews: () => db.ratings,

    joke: (_: any, args: { id: string }) =>
      db.jokes.find((joke) => joke.id === args.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`server ready at: ${url}`);
