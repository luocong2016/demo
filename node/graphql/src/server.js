const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer, gql } = require('apollo-server');

const app = express()
const port = 8000
const typeDefs = require('./schema')
const resolvers = require('./reslover')
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});