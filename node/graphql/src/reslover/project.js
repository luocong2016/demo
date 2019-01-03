const _ = require('lodash')
const tasks = require('../data/tasks')

module.exports = {
  Project: {
    tasks: project => _.filter(tasks, { projectID: project.id })
  }
}
