const _ = require('lodash')
const projects = require('../data/projects')

module.exports = {
  Task: {
    project: task => _.find(projects, { id: task.projectID })
  }
}
