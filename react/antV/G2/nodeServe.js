const path = require('path')
const express = require('express')
const httpProxy = require('http-proxy-middleware')
const app = express();
const serverUrl = "http://193.112.77.182:82/iacb-manage-web";
const setting = {
  serverUrl,
  agent: '/iacb-manage-web',
  resources: 'dist',
  port: 8082
}
const options = {
  target: setting.serverUrl, // 目标主机
  changeOrigin: true, // 需要虚拟主机站点
  ws: true, // 是否代理 websocket
  pathRewrite: {
    [setting.agent]: ''
  }
}

app.use(express.static(path.join(__dirname, setting.resources)))
app.use(setting.agent, httpProxy(options))
app.listen(setting.port, function() {
  console.log(
    `app listening at port ${setting.port}.`,
    new Date().toLocaleString()
  )
})
