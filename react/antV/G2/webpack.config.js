const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = (env, argv) => {
  console.log(argv)
  const mode = argv.mode === 'production' ? 'production' : 'development'
  return {
    mode,
    entry: {
      lineBasic: './src/line/basic.js',
    },
    output: {
      filename: '[name].js',
      publicPath: ASSET_PATH
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jgeg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new cleanWebpackPlugin(['dist']),
      new htmlWebpackPlugin({
        title: 'lineBasic',
        filename: 'lineBasic.html',
        template: 'index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      })
    ]
  }
}
