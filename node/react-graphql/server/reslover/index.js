const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const resolvers = {};
const dirs = fs.readdirSync(__dirname);

dirs.forEach((dir) => {
  const filePath = path.join(__dirname, dir);
  if (
    fs.statSync(filePath).isFile &&
    filePath.endsWith('.js') &&
    !filePath.endsWith('index.js')
    ) {
      const resolver = require(filePath);
      _.merge(resolvers, resolver);
  }
});

module.exports = resolvers;
