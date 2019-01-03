const test = require('./test');

const user = require('./user');
const syllabus = require('./syllabus');

module.exports = app => {
  app.use('/user', user);
  app.use('/syllabus', syllabus);
  app.use('/test', test);
}
