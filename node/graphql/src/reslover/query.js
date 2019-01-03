const _ = require('lodash')
const tasks = require('../data/tasks')
const projects = require('../data/projects')

module.exports = {
  Query: {
    projectByName: (root, { name }) => _.find(projects, { name: name }),
    fetchTasks: () => tasks,
    getTask: (root, { id }) => _.find(tasks, { id: id }),
  }
}