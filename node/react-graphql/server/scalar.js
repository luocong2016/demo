const { GraphQLScalarType } = require('graphql')

const resolver = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: '日期类型',
    parseValue(value) {
      return new Date(value)
    },
    parseLiteral(ast) {
      return new Date(ast.value)
    },
    serialize(value) {
      return value.toISOString()
    }
  })
}

module.exports = resolver
