module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/apis': {
        target: 'http://119.27.186.126:8089',
        // target: 'http://localhost:8089',
        changOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  }
};
