const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()

const serverUrl = 'http://localhost:8089/web'

const setting = {
  serverUrl,
  agent: '/iacb-manage-web',
  resources: 'dist',
  port: process.env.PORT || 8089
}

const options = {
  target: setting.serverUrl, // 目标主机
  changeOrigin: true, // 需要虚拟主机站点
  ws: true, // 是否代理 websocket
  pathRewrite: {
    '^/threeServer': ''
  }
  // router: {
  //   // when request.headers.host == 'dev.localhost:3000',
  //   // override target 'http://www.example.org' to 'http://localhost:8000'
  //   // 'dev.localhost:3000': 'http://localhost:8000'
  // },
  // onError: function (err, req, res) { // 函数，订阅http-proxy的error事件以进行自定义错误处理。
  //   res.writeHead(500, {
  //     'Content-Type': 'text/plain'
  //   });
  //   res.end('Something went wrong. And we are reporting a custom error message.');
  // },
  // onProxyRes: function (proxyRes, req, res) { // 函数，订阅http-proxy的proxyRes事件
  //   proxyRes.headers['x-added'] = 'foobar';  // add new header to response
  //   delete proxyRes.headers['x-removed']; // remove header from response
  // },
  // onProxyReq: function (proxyReq, req, res) { // 函数，订阅 http-proxy的proxyReq事件
  //   // add custom header to request
  //   proxyReq.setHeader('x-added', 'foobar');
  //   // or log the req
  // },
  // onProxyReqWs: function (proxyReq, req, socket, options, head) { // 函数，订阅 http-proxy的proxyReqWs事件。
  //   // add custom header
  //   proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
  // },
  // onOpen: function (proxySocket) { // 函数，订阅 http-proxy的 open事件
  //   // listen for messages coming FROM the target here
  //   proxySocket.on('data', hybiParseAndLogMessage);
  // },
  // onClose: function (res, socket, head) { // 函数，订阅 http-proxy 的close事件
  //   // view disconnected websocket connections
  //   console.log('Client disconnected');
  // }
}

app.use(express.static(path.join(__dirname, setting.resources)))
app.use(setting.agent, proxy(options))
app.listen(setting.port, function() {
  console.log(
    `app listening at port ${setting.port}.`,
    new Date().toLocaleString()
  )
})
