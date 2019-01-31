const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const dist = path.resolve(__dirname, 'dist')

function resolve(fileName) {
  return path.resolve(__dirname, `./src/js/${fileName}.ts`)
}

function controls(fileName) {
  return path.resolve(__dirname, `./src/controls/${fileName}.js`)
}

const route = [
  {
    template: 'src/html/index.html',
    filename: 'index.html',
    title: 'My First threejs app',
    chunks: ['vendor', 'OrbitControls', 'first']
  }
]

const config = {
  //项目入口
  entry: {
    vendor: ['three'],
    OrbitControls: controls('OrbitControls'),
    first: resolve('first')
  },
  //输出设置
  output: {
    filename: '[name].js',
    path: dist
  },
  //模块加载器设置
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  //调试服务
  devServer: {
    contentBase: dist,
    compress: true,
    port: 7777
  },
  //插件
  plugins: route.map(item => new HtmlWebPackPlugin(item))
}

module.exports = (env, argv) => {
  config.mode = argv.mode || 'none'

  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  return config
}
