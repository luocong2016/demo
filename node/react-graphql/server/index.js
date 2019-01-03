const Koa = require('koa');
const _ = require('lodash');
const { ApolloServer, gql } = require('apollo-server-koa');

const mocks = require('./mock')

const app = new Koa();
const typeDefs = require('./schema');
const resolvers = require('./reslover');
const scalar = require('./scalar');
_.merge(resolvers, scalar);

const root= {
  user: {
      name: 'lutz',
      sex: '男',
      intro: '博主，专注于Linux,Java,nodeJs,Web前端:Html5,JavaScript,CSS3'
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  root,
  mocks,
  playground: true,
});

server.applyMiddleware({ app });

const port = 8000;

app.listen(
  { port },
  () => console.log(`graphql server start at http://localhost:${port}${server.graphqlPath}`)
);