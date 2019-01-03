const _ = require('lodash')

module.exports = {
  Mutation: {
    markAsCompleted: (root, { taskID }) => {
      if (!task || task.completed == true) {
        return []
      }
      return task
    }
  }
}
