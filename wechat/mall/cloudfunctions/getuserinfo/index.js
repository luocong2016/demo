const cloud = require('wx-server-sdk')

exports.main = async(event, context) => {
  return {
    sum: event.a + event.b
  }
}
