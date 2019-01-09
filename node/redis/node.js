const redis = require('redis')

const redisConf = {
  port: 6379,
  host: '119.27.186.126',
  password: 'lutz',
  option: {}
}

const client = redis.createClient(
  redisConf.port,
  redisConf.host,
  redisConf.option
)

client.auth(redisConf.password, function() {
  console.log('通过认证')
})
client.on('connect', function() {
  client.set('author', 'Wilson', redis.print)
  client.get('author', redis.print)
  console.log('connect')
})
client.on('ready', function(err) {
  console.log('ready')
})
